import {
  Component,
  HostListener,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-inventorykey',
  templateUrl: './inventorykey.component.html',
  styleUrl: './inventorykey.component.css',
})
export class InventorykeyComponent implements AfterViewInit {
  @ViewChildren('serviceItem') serviceItems!: QueryList<ElementRef>;

  services = [
    {
      title: 'Real-Time Inventory Tracking',
      description:
        'Inventory Optimax ERP offers real-time visibility of your inventory across multiple locations, warehouses, or retail stores.',
    },
    {
      iconClass: '',
      title: 'Automated Reordering',
      description:
        ' The system intelligently forecasts demand based on historical sales data and usage patterns. Automated reorder points can be set, triggering notifications or purchase orders when stock falls below a predefined level.',
    },
    {
      iconClass: '',
      title: 'Purchase Order Management',
      description:
        'Create, manage, and track purchase orders efficiently. The system automates the purchase order process, from vendor selection and order placement to goods receipt and invoice matching.',
    },
    {
      iconClass: '',
      title: 'Supplier and Vendor Management',

      description:
        ' Keep track of all your suppliers and vendors in one place. The system maintains detailed profiles of each vendor, tracks pricing, payment terms, and performance history, helping you make informed purchasing decisions.',
    },
    {
      iconClass: '',
      title: 'Batch and Serial Number Tracking',

      description:
        ' Monitors inventory in real-time, automates order processing, and manages stock replenishment to ensure timely deliveries.',
    },
    {
      iconClass: '',
      title: 'Inventory Valuation and Costing',

      description:
        'The system supports various inventory valuation methods, including FIFO (First In, First Out), LIFO (Last In, First Out), and Weighted Average. Track and evaluate the cost of your inventory to understand its impact on your profitability.',
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
