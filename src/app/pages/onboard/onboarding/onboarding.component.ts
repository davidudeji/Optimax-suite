import { Component, computed, effect, signal, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnboardingService } from './onboarding.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent implements OnInit, OnDestroy {
  steps = computed(() => {
    const plan = this.incomingPlan();
    return [
      { name: 'Business Registration', label: 'Register your business details' },
      plan === 'self-hosted'
        ? { name: 'Server Details', label: 'Your install target domain' }
        : plan === 'dedicated'
        ? { name: 'Instance Setup', label: 'Choose your instance identifier' }
        : { name: 'Domain Selection', label: 'Choose your domain name' },
      { name: 'Super Admin Setup', label: 'Create your admin account' }
    ];
  });
  step = signal(1);
  submitting = signal(false);
  Math = Math;
  admin = computed(() => this.ob.superAdmin());
  domain = computed<string | null>(() => this.ob.domain() as string | null);

  message: string = '';
  isSucessful = this.ob.success.asReadonly();
  resendInProgress = signal(false);

  // ── Plan detection from query param ──────────────────────
  incomingPlan = signal<'self-hosted' | 'dedicated' | 'saas'>('saas');
  // ─────────────────────────────────────────────────────────

  // ── Self-host deploy section ───────────────────────────────
  tenantId = computed(() => (this.ob.domain() as any)?.domain || '');
  serverUrl = signal('');
  copied = signal(false);
  showSelfHost = signal(false);
  deployToken = signal('');  // filled after self-hosted payment confirmed

  installCommand = computed(() => {
    const tok = this.deployToken().trim();
    const srv = this.serverUrl().trim();
    const domainFlag = srv ? ` \\\n  --domain=${srv}` : '';
    if (tok) {
      return `curl -fsSL https://install.optimaxsuites.com/install.sh \\
  | bash -s -- \\
  --deploy-token=${tok}${domainFlag}`;
    }
    const tid = this.tenantId();
    return `curl -fsSL https://install.optimaxsuites.com/install.sh \\
  | bash -s -- \\
  --tenant-id=${tid || 'YOUR_TENANT_ID'} \\
  --token=YOUR_API_TOKEN${domainFlag}`;
  });

  copyCommand() {
    navigator.clipboard.writeText(this.installCommand()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    });
  }
  // ─────────────────────────────────────────────────────────

  // ── Carousel ──────────────────────────────────────────────
  slides = [
    {
      tag: 'Get Started',
      title: 'Create an account',
      body: 'Register your business today and kickstart operations with enterprise-grade technology built for growing teams.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&fit=crop'
    },
    {
      tag: 'Operations',
      title: 'Streamline your operations',
      body: 'Manage HR, payroll, and inventory from one centralised platform — no spreadsheets, no silos.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&fit=crop'
    },
    {
      tag: 'Analytics',
      title: 'Real-time business insights',
      body: 'Make smarter decisions with live dashboards, analytics, and performance reports at your fingertips.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&fit=crop'
    },
    {
      tag: 'Every Industry',
      title: 'Built for your industry',
      body: 'From retail and healthcare to manufacturing — OptimaX adapts to the way your business works.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&fit=crop'
    }
  ];

  activeSlide = 0;
  private carouselTimer: any;
  // ─────────────────────────────────────────────────────────

  constructor(public ob: OnboardingService, private http: HttpClient, private route: ActivatedRoute) {
    effect(() => {
      console.log('Admin changed:', this.admin());
      console.log('Domain changed:', this.domain());
    });
  }

  ngOnInit() {
    this.startCarousel();
    this.route.queryParams.subscribe(params => {
      const plan = params['plan'];
      if (plan === 'self-hosted' || plan === 'dedicated') {
        this.incomingPlan.set(plan);
      }
      if (plan === 'self-hosted') {
        this.showSelfHost.set(true);
      }
    });
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  private startCarousel() {
    this.carouselTimer = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 4000);
  }

  private stopCarousel() {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }
  }

  goToSlide(index: number) {
    this.activeSlide = index;
    this.stopCarousel();
    this.startCarousel();
  }

  hasUnsavedChanges() {
    return !this.ob.isComplete();
  }

  next() { this.step.update(s => Math.min(3, s + 1)); }
  prev() { this.step.update(s => Math.max(1, s - 1)); }

  goToMail() {
    window.open('https://mail.google.com', '_blank');
  }

  triggerResend() {
    this.resendInProgress.set(true);
    const headers = new HttpHeaders({
      'X-Tenant-ID': this.domain()?.toLowerCase() || ''
    });

    const body = {
      email: this.admin()?.email || '',
      apiKey: 'ApiKey 644667b7c973660f0d1e8dd3dcf20de1'
    };

    this.http
      .post('https://prod.optimaxsuites.com/x/api/v2/auth/resend/verification/link', body, { headers })
      .subscribe({
        next: (response: any) => {
          this.message = `A verification link has been sent to ${this.admin()?.email}`;
        },
        error: (error) => {
          this.message = 'Resending confirmation failed. Please try again later.';
          this.resendInProgress.set(false);
        },
      });
  }
}
