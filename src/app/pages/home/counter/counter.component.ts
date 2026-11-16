import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

interface ImpactMetric {
  label: string;
  target: number;
  suffix: '+' | '';
  current: number;
  accessibleValue: string;
}

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements AfterViewInit, OnDestroy {
  readonly metrics: ImpactMetric[] = [
    { label: 'Clients', target: 100, suffix: '+', current: 0, accessibleValue: '100+ clients' },
    { label: 'Active users', target: 512, suffix: '+', current: 0, accessibleValue: '512+ active users' },
    { label: 'Modules', target: 12, suffix: '', current: 0, accessibleValue: '12 modules' },
    { label: 'Countries', target: 4, suffix: '+', current: 0, accessibleValue: '4+ countries' },
  ];

  private observer: IntersectionObserver | null = null;
  private readonly animationFrameIds = new Set<number>();
  private animationStarted = false;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      this.showFinalValues();
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        typeof IntersectionObserver === 'undefined') {
      this.showFinalValues();
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        this.startCountUp();
      }
    }, { threshold: 0.25 });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (typeof window !== 'undefined') {
      this.animationFrameIds.forEach((frameId) => window.cancelAnimationFrame(frameId));
    }
    this.animationFrameIds.clear();
  }

  private startCountUp(): void {
    if (this.animationStarted) {
      return;
    }

    this.animationStarted = true;
    this.observer?.disconnect();
    this.metrics.forEach((metric, index) => {
      metric.current = 0;
      this.animateMetric(metric, index * 220);
    });
  }

  private animateMetric(metric: ImpactMetric, delay: number): void {
    const duration = 1250;
    let startTime: number | null = null;

    const tick = (timestamp: number): void => {
      if (startTime === null) {
        startTime = timestamp + delay;
      }

      if (timestamp < startTime) {
        this.requestFrame(tick);
        return;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      metric.current = Math.floor(metric.target * easedProgress);

      if (progress < 1) {
        this.requestFrame(tick);
      } else {
        metric.current = metric.target;
      }
    };

    this.requestFrame(tick);
  }

  private requestFrame(callback: FrameRequestCallback): void {
    const frameId = window.requestAnimationFrame((timestamp) => {
      this.animationFrameIds.delete(frameId);
      callback(timestamp);
    });
    this.animationFrameIds.add(frameId);
  }

  private showFinalValues(): void {
    this.metrics.forEach((metric) => {
      metric.current = metric.target;
    });
  }
}
