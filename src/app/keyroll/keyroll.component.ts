import {
  Component,
  HostListener,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-keyroll',
  templateUrl: './keyroll.component.html',
  styleUrls: ['./keyroll.component.css'],
})
export class KeyrollComponent implements AfterViewInit {
  @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef>;

  services = [
    {
      title: 'Sales Management',
      description:
        'Tracks leads, opportunities, and automates quoting and invoicing, streamlining the entire sales process for greater efficiency.',
    },
    {
      iconClass: '',
      title: 'Analytics and Reporting',
      description:
        ' Provides real-time dashboards and customizable reports, offering insights into sales performance, revenue, and profitability.',
    },
    {
      iconClass: '',
      title: 'Workflow Automation',
      description:
        'Automates routine sales tasks, including follow-ups, approvals, and task assignments, increasing team productivity.',
    },
    {
      iconClass: '',
      title: 'Collaboration Tools',

      description:
        ' Provides internal communication and collaboration tools to align sales with other teams, ensuring consistent customer experience.',
    },
    {
      iconClass: '',
      title: 'Order and Inventory Management',

      description:
        ' Monitors inventory in real-time, automates order processing, and manages stock replenishment to ensure timely deliveries.',
    },
    {
      iconClass: '',
      title: 'Security and Compliance',

      description:
        'Ensures data protection with advanced security measures and helps maintain compliance with industry regulations.',
    },
  ];

  animationTriggered = false;

  ngAfterViewInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const triggerPoint = window.innerHeight / 1.1;

    if (this.animationTriggered) {
      return;
    }

    this.serviceItems.forEach((item, index) => {
      const pos = item.nativeElement.getBoundingClientRect().top;
      if (pos < triggerPoint) {
        item.nativeElement.classList.add(
          index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
        );
      }
    });

    const featureSectionPos =
      this.serviceItems.first.nativeElement.getBoundingClientRect().top;
    if (featureSectionPos < triggerPoint) {
      this.animationTriggered = true;
    }
  }
}
