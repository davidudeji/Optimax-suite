import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  images: { src: string; alt: string; label: string; caption: string }[] = [];

  activeIndex = 0;
  isDragging = false;
  private dragStartY = 0;
  private dragThreshold = 40;

  private autoplayInterval: ReturnType<typeof setInterval> | null = null;
  private autoplayDelay = 4000; // ms between auto-switches

  ngOnInit() {
    this.images = [
      {
        src: '/assets/images/hero2.png',
        alt: 'Optimax ERP enterprise resource planning overview',
        label: 'Enterprise ERP',
        caption: 'Connect every part of your business',
      },
      {
        src: '/assets/images/inventory-analytics.png',
        alt: 'Optimax inventory analytics dashboard',
        label: 'Inventory',
        caption: 'Track stock, performance and branches',
      },
      {
        src: '/assets/images/hr-screenshot.png',
        alt: 'Optimax payroll and employee management dashboard',
        label: 'HR & Payroll',
        caption: 'Keep payroll and your people in sync',
      },
    ];

    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.stopAutoplay(); // avoid duplicate timers
    this.autoplayInterval = setInterval(() => {
      this.autoNext();
    }, this.autoplayDelay);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  // Loops back to the start instead of stopping at the last image
  autoNext() {
    this.activeIndex =
      this.activeIndex < this.images.length - 1 ? this.activeIndex + 1 : 0;
  }

  prev() {
    this.activeIndex =
      this.activeIndex > 0 ? this.activeIndex - 1 : this.images.length - 1;
    this.startAutoplay();
  }

  next() {
    this.activeIndex =
      this.activeIndex < this.images.length - 1 ? this.activeIndex + 1 : 0;
    this.startAutoplay();
  }

  onDragStart(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.dragStartY =
      e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  onDragMove(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const y = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
    const delta = this.dragStartY - y;
    if (Math.abs(delta) > this.dragThreshold) {
      delta > 0 ? this.next() : this.prev();
      this.isDragging = false;
    }
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onDragEnd() {
    this.isDragging = false;
  }

  onWheel(e: WheelEvent) {
    e.preventDefault();
    if (e.deltaY > 0) this.next();
    else this.prev();
    // next()/prev() already reset autoplay
  }

  goTo(i: number) {
    this.activeIndex = i;
    this.startAutoplay();
  }

  getCardState(i: number): 'active' | 'above' | 'below' {
    if (i === this.activeIndex) return 'active';
    if (i < this.activeIndex) return 'above';
    return 'below';
  }
}
