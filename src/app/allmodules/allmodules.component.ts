import {
  Component,
  HostListener,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-allmodules',
  templateUrl: './allmodules.component.html',
  styleUrls: ['./allmodules.component.css'],
})
export class AllmodulesComponent implements AfterViewInit {
  @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef>;

  services = [
    {
      iconClass: 'fas fa-user',
      url: '/human resources',
      title: 'Human Resources',
      description:
        'The Human Resources (HR) in Optimax ERP is designed to streamline and automate the management of all HR-related activities, from employee onboarding and payroll processing to performance management and compliance. ',
    },

    {
      iconClass: 'fa fa-truck',
      url: '/inventory',
      title: 'Inventory',
      description:
        ' In Optimax ERP, the Inventory Management is designed to provide businesses with full control over their stock levels, supply chain, and warehouse operations. It ensures that inventory is accurately tracked, optimized, and aligned with sales and procurement processes.',
    },
    {
      iconClass: 'fa fa-university',
      url: '/pos',
      title: 'POS',
      description:
        'In Optimax ERP, the Point of Sale (POS) is designed to manage and streamline retail and customer-facing sales processes. The POS system integrates seamlessly with other ERP system, such as inventory, sales and providing real-time data visibility and enhancing operational efficiency.',
    },
    {
      iconClass: 'fa fa-shopping-cart',
      url: '/procurement',
      title: 'Procurement',
      description:
        'The Procurement Optimax ERP is designed to manage the purchasing and supply chain processes of an organization efficiently. It helps businesses automate and streamline their procurement activities, from vendor selection and purchase order creation to goods receipt and supplier payment.',
    },
    {
      iconClass: 'fas fa-calculator',
      url: '/account',
      title: 'Accounting',
      description:
        'The Accounting in Optimax ERP is designed to manage and streamline all financial activities within a business. It serves as the backbone of financial management, integrating with sales, procurement, and inventory to provide a complete view of the companies financial health.',
    },

    {
      iconClass: 'fa fa-credit-card',
      url: '/finance',
      title: ' Sales ',
      description:
        'Optimax ERP (Enterprise Resource Planning) is a software solution designed to help businesses manage various aspects of their operations, including sales, inventory, finances, and customer relationships, in a streamlined and efficient manner.',
    },

    {
      iconClass: 'fas fa-commenting',
      url: '/crm',
      title: 'CRM',
      description:
        'The Customer Relationship Management (CRM) in Optimax ERP helps businesses manage their interactions with current and potential customers. It streamlines the entire customer lifecycle, from lead generation and sales pipeline management to customer service and after-sales support.',
    },
    {
      iconClass: 'fas fa-chart-pie',
      url: '/expense',
      title: 'Expense',
      description:
        'The Expense Management in Optimax ERP streamlines the process of tracking, managing, and controlling company expenses. It helps businesses manage employee expenses, supplier payments, and internal cost tracking, providing visibility and control over financial outflows. ',
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
