import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, filter, take } from 'rxjs';
import { BlogPost, BlogService } from '../services/blog.service';

interface BusinessFeature {
  title: string;
  details: string[];
  icon: string;
}

interface IndustryCard {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  area: string;
}

declare const YT: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  featuredPosts: BlogPost[] = [];
  readonly heroSlides = [
    {
      src: '/assets/images/sales-transactions.png',
      alt: 'OptimaX sales and transactions dashboard',
      label: 'Sales and transactions',
      description: 'Track orders, payments and delivery performance',
      width: 1386,
      height: 768,
    },
    {
      src: '/assets/images/inventory-analytics.png',
      alt: 'OptimaX inventory analytics dashboard',
      label: 'Inventory analytics',
      description: 'Track stock, performance and branches',
      width: 1394,
      height: 743,
    },
    {
      src: '/assets/images/hr-screenshot.png',
      alt: 'OptimaX payroll and employee management dashboard',
      label: 'HR and payroll',
      description: 'Keep payroll and your people in sync',
      width: 1304,
      height: 770,
    },
    {
      src: '/assets/images/sales-command-center.png',
      alt: 'OptimaX sales command center dashboard',
      label: 'Sales command center',
      description: 'Monitor revenue, quotes and sales performance',
      width: 1605,
      height: 768,
    },
  ];
  activeHeroIndex = 0;
  private heroAutoplayInterval: number | null = null;
  private readonly heroAutoplayDelay = 3000;
  readonly businessBenefitSlides: BusinessFeature[][] = [
    [
      {
        title: 'Financial Management',
        details: [
          'Track revenue, expenses, and cash flow in real time.',
          'Automate accounting processes and generate accurate financial reports instantly.',
        ],
        icon: 'wallet',
      },
      {
        title: 'Inventory Management',
        details: [
          'Monitor stock levels across warehouses and locations.',
          'Prevent stockouts and overstock with real-time inventory tracking.',
        ],
        icon: 'cube',
      },
    ],
    [
      {
        title: 'Reporting & Analytics',
        details: [
          'Turn raw business data into actionable insights.',
          'Make smarter decisions with powerful dashboards and reports.',
        ],
        icon: 'chart-column',
      },
      {
        title: 'Human Resource',
        details: [
          'Manage employees, attendance, and payroll effortlessly.',
          'Gain visibility into team performance and workforce productivity.',
        ],
        icon: 'users',
      },
    ],
    [
      {
        title: 'E-Commerce Integration',
        details: [
          'Connect your physical business with your online store.',
          'Sync orders, inventory, and customer data automatically.',
        ],
        icon: 'cart-shopping',
      },
      {
        title: 'Role-Based Access & Security',
        details: [
          'Control who can see and manage different parts of your system.',
          'Protect sensitive business data with enterprise-grade security.',
        ],
        icon: 'shield-halved',
      },
    ],
    [
      {
        title: 'Multi-Location Management',
        details: [
          'Operate multiple stores or branches from one system.',
          'Track inventory, sales, and performance across all locations.',
        ],
        icon: 'location-dot',
      },
      {
        title: 'Business Performance Monitoring',
        details: [
          'Measure growth across departments in real time.',
          'Track KPIs and identify opportunities to scale your business.',
        ],
        icon: 'arrow-trend-up',
      },
    ],
  ];
  readonly industryCards: IndustryCard[] = [
    {
      title: 'Pharmacies',
      href: '/industries/healthcare',
      image:
        'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=960&q=80',
      imageAlt: 'Pharmacist working among shelves of healthcare products',
      area: 'pharmacy',
    },
    {
      title: 'Hospitals & Clinics',
      href: '/industries/healthcare',
      image:
        'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=960&q=80',
      imageAlt: 'Patient room in a modern hospital',
      area: 'hospital',
    },
    {
      title: 'Restaurants & Cafes',
      href: '/industries/hospitality',
      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=960&q=80',
      imageAlt: 'Dining room prepared for restaurant guests',
      area: 'restaurant',
    },
    {
      title: 'Hotels & Hospitality',
      href: '/industries/hospitality',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=960&q=80',
      imageAlt: 'Hotel exterior and pool area',
      area: 'hotel',
    },
    {
      title: 'Manufacturing',
      href: '/industries/manufacturing',
      image:
        'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=960&q=80',
      imageAlt: 'Industrial manufacturing floor with production equipment',
      area: 'manufacturing',
    },
    {
      title: 'Warehousing',
      href: '/industries/logistics',
      image: '/assets/images/modules/commerce-module.jpg',
      imageAlt: 'Warehouse interior with organized shelving and inventory',
      area: 'warehouse',
    },
    {
      title: 'Construction',
      href: '/industries/construction',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=960&q=80',
      imageAlt: 'Construction workers at an active building site',
      area: 'construction',
    },
  ];
  currentBenefitIndex = 0;
  readonly youtubeVideoId = 'VTntzBr227k';
  readonly youtubeChannelUrl = 'https://www.youtube.com/@OptimaXSuites';
  readonly previewLengthSeconds = 20;

  isPreviewStarted = false;
  isPreviewEnded = false;

  private player: any = null;
  private previewIntervalId: number | null = null;

  constructor(private blogService: BlogService) {}

  get currentBenefitDescription(): string {
    return this.businessBenefitSlides[this.currentBenefitIndex]
      .map((feature) => feature.title)
      .join(' and ');
  }

  startHeroAutoplay(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    this.stopHeroAutoplay();
    this.heroAutoplayInterval = window.setInterval(() => {
      this.activeHeroIndex =
        (this.activeHeroIndex + 1) % this.heroSlides.length;
    }, this.heroAutoplayDelay);
  }

  stopHeroAutoplay(): void {
    if (this.heroAutoplayInterval !== null) {
      window.clearInterval(this.heroAutoplayInterval);
      this.heroAutoplayInterval = null;
    }
  }

  selectHeroSlide(index: number): void {
    if (index >= 0 && index < this.heroSlides.length) {
      this.activeHeroIndex = index;
      this.startHeroAutoplay();
    }
  }

  ngOnInit(): void {
    this.startHeroAutoplay();
    combineLatest([this.blogService.posts$, this.blogService.ready$])
      .pipe(
        filter(([, ready]) => ready),
        take(1),
      )
      .subscribe(([posts]) => {
        this.featuredPosts = posts
          .filter((post) => !this.blogService.isInitialPost(post.id))
          .slice(0, 3);
      });
  }

  ngOnDestroy(): void {
    this.stopHeroAutoplay();
    this.clearPreviewInterval();
    if (this.player && typeof this.player.destroy === 'function') {
      this.player.destroy();
    }
  }

  get youtubePosterUrl(): string {
    return `https://i.ytimg.com/vi/${this.youtubeVideoId}/hqdefault.jpg`;
  }

  selectBenefit(index: number, viewport: HTMLElement): void {
    this.currentBenefitIndex = index;
    viewport.scrollTo({
      left: index * viewport.clientWidth,
      behavior: 'auto',
    });
  }

  moveBenefit(direction: number, viewport: HTMLElement): void {
    const count = this.businessBenefitSlides.length;
    const nextIndex = (this.currentBenefitIndex + direction + count) % count;
    this.selectBenefit(nextIndex, viewport);
  }

  onBenefitScroll(viewport: HTMLElement): void {
    if (!viewport.clientWidth) {
      return;
    }

    const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
    if (index >= 0 && index < this.businessBenefitSlides.length) {
      this.currentBenefitIndex = index;
    }
  }

  onPlayPreview(): void {
    if (this.isPreviewEnded) {
      return;
    }

    this.isPreviewStarted = true;

    if ((window as any).YT && (window as any).YT.Player) {
      this.initializePlayer();
      return;
    }

    const scriptId = 'youtube-iframe-api';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      document.head.appendChild(script);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      this.initializePlayer();
    };

    window.setTimeout(() => {
      if (!(window as any).YT || !(window as any).YT.Player) {
        this.isPreviewStarted = false;
        this.isPreviewEnded = true;
      }
    }, 2000);
  }

  private initializePlayer(): void {
    if (this.player || !document.getElementById('optimax-showcase-player')) {
      return;
    }

    this.player = new YT.Player('optimax-showcase-player', {
      width: '100%',
      height: '100%',
      videoId: this.youtubeVideoId,
      playerVars: {
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        end: this.previewLengthSeconds,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: (event: any) => {
          event.target.playVideo();
          this.ensurePreviewLimit();
        },
        onStateChange: (event: any) => {
          if (event.data === (window as any).YT.PlayerState.PLAYING) {
            this.ensurePreviewLimit();
          }

          if (event.data === (window as any).YT.PlayerState.ENDED) {
            this.showFullVideoPrompt();
          }
        },
      },
    });
  }

  private ensurePreviewLimit(): void {
    this.clearPreviewInterval();
    this.previewIntervalId = window.setInterval(() => {
      if (!this.player || typeof this.player.getCurrentTime !== 'function') {
        return;
      }

      const currentTime = this.player.getCurrentTime();
      if (currentTime >= this.previewLengthSeconds) {
        this.player.seekTo(this.previewLengthSeconds, true);
        this.player.pauseVideo();
        this.showFullVideoPrompt();
      }
    }, 250);
  }

  private showFullVideoPrompt(): void {
    this.clearPreviewInterval();
    this.isPreviewEnded = true;

    if (this.player && typeof this.player.stopVideo === 'function') {
      this.player.stopVideo();
    }
  }

  private clearPreviewInterval(): void {
    if (this.previewIntervalId !== null) {
      window.clearInterval(this.previewIntervalId);
      this.previewIntervalId = null;
    }
  }
}
