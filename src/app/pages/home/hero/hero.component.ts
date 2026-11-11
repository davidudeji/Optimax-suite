import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, OnDestroy {
  images: { src: string; alt: string; label: string; caption: string }[] = [];

  activeIndex = 1; // start with middle card focused
  isDragging = false;
  private dragStartY = 0;
  private dragThreshold = 40;

  private autoplayInterval: ReturnType<typeof setInterval> | null = null;
  private autoplayDelay = 4000; // ms between auto-switches

  ngOnInit() {
    this.images = [
      {
        src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&q=80',
        alt: 'Point of Sale',
        label: 'OptimaX POS',
        caption: 'Sell faster at every counter',
      },
      {
        src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1280&q=80',
        alt: 'Accounting & Finance',
        label: 'Accounting',
        caption: 'Full financial clarity, always',
      },
      {
        src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1280&q=80',
        alt: 'HR & Payroll',
        label: 'HR & Payroll',
        caption: 'Manage your people with ease',
      },
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80',
        alt: 'Analytics & Reporting',
        label: 'Analytics',
        caption: 'Decisions backed by real data',
      },
      {
        src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&q=80',
        alt: 'Inventory & Procurement',
        label: 'Procurement',
        caption: 'Zero supply chain surprises',
      },
      {
        src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&q=80',
        alt: 'CRM & Sales',
        label: 'CRM',
        caption: 'Build lasting customer relationships',
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
