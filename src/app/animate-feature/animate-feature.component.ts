import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-animate-feature',
  templateUrl: './animate-feature.component.html',
  styleUrls: ['./animate-feature.component.css'],
})
export class AnimateFeatureComponent implements AfterViewInit {
  @ViewChild('featureSection')
  featureSection!: ElementRef;

  animationTriggered = false;

  features = [
    {
      img: '/assets/images/why1.jpg',
      title: ' All-in-One Solution',
      description:
        'Optimax ERP provides a complete toolkit to manage all facets of your business, from inventory control to customer relationships and supply chain operations—everything you need in one place.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/why3.jpg',
      title: 'Real-Time Data and Analytics',
      description:
        'Get instant insights into your business performance with real-time data analytics. Track KPIs, generate reports, and make data-driven decisions to stay ahead of the competition.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/why4.jpg',
      title: 'Tailored for Your Industry',
      description:
        'Whether you operate in manufacturing, retail, or healthcare, Optimax ERP is customizable to fit your industry-specific requirements, making it flexible for your business needs.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/why2.jpg',
      title: 'Scalable and Future-Proof',
      description:
        'Built to grow with your business, Optimax ERP can handle everything from small operations to enterprise-level expansions. Effortlessly scale up, add new features, and integrate more tools as your needs evolve.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/why5.jpg',
      title: 'World-Class Security',
      description:
        'With enterprise-grade security, your business data is always protected. Optimax ERP complies with GDPR, provides encryption, and offers advanced user authentication for peace of mind.',
      top: 0,
      left: 0,
    },

    {
      img: '/assets/images/why6.jpg',
      title: 'Easy to Use',
      description:
        'Get round-the-clock support from our expert team. Whether it’s setup, troubleshooting, or expanding features, Optimax ERP offers 24/7 assistance to keep your business running smoothly.',
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
