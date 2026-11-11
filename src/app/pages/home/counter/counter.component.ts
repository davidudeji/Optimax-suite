import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  clients = 0;
  users = 0;
  modules = 0;
  countries = 0;
  private animated = false;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.animated) {
        this.animated = true;
        this.animateCount('clients', 100, 2000);
        this.animateCount('users', 512, 1800);
        this.animateCount('modules', 12, 1500);
        this.animateCount('countries', 4, 1200);
      }
    }, { threshold: 0.3 });
    this.observer.observe(this.el.nativeElement);
  }

  animateCount(prop: 'clients' | 'users' | 'modules' | 'countries', target: number, duration: number) {
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      (this as any)[prop] = Math.floor(target * ease);
      if (progress < 1) requestAnimationFrame(tick);
      else (this as any)[prop] = target;
    };
    requestAnimationFrame(tick);
  }
}
