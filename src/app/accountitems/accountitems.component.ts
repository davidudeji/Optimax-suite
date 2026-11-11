import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-accountitems',
  templateUrl: './accountitems.component.html',
  styleUrl: './accountitems.component.css',
})
export class AccountitemsComponent implements AfterViewInit {
  @ViewChild('featureSection')
  featureSection!: ElementRef;

  animationTriggered = false;

  features = [
    {
      img: '/assets/images/accounting.jpg',
      title: ' Complete Financial Management',
      description:
        'OptimaX ERP provides a robust suite of financial management tools that allow businesses to efficiently manage their accounts.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/time.jpg',
      title: 'Real-Time Accounting',
      description:
        'With OptimaX ERP, all accounting data is updated in real-time, providing instant insights into your financial health.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/account2.jpg',
      title: 'Automated Invoicing and Billing',
      description:
        'Simplify invoicing and billing with automated processes that reduce manual errors. OptimaX ERP allows for quick generation of invoices. ',
      top: 0,
      left: 0,
    },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    if (this.animationTriggered) {
      return;
    }

    const triggerPoint = window.innerHeight / 1.1;
    const featureSectionPos =
      this.featureSection.nativeElement.getBoundingClientRect().top;

    if (featureSectionPos < triggerPoint) {
      this.animationTriggered = true;
      this.randomizePositions();
    }
  }

  private randomizePositions() {
    const featureList =
      this.featureSection.nativeElement.querySelector('.feature-list');
    const featureItems = featureList.querySelectorAll('.feature-item');

    featureItems.forEach((item: HTMLElement) => {
      const randomTop = Math.floor(
        Math.random() * (featureList.offsetHeight - item.offsetHeight)
      );
      const randomLeft = Math.floor(
        Math.random() * (featureList.offsetWidth - item.offsetWidth)
      );

      item.style.top = `${randomTop}px`;
      item.style.left = `${randomLeft}px`;
    });

    setTimeout(() => {
      featureItems.forEach((item: HTMLElement) => {
        item.style.transition = 'ease-out, left 1.5s ease-out';
        item.style.top = '0';
        item.style.left = '0';
      });
    }, 100);
  }
}
