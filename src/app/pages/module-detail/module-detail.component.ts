import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { ProductPageMotionDirective } from '../../product-page-motion.directive';

type ModuleId = 'inventory' | 'sales' | 'vendor';

interface ModuleFeature {
  title: string;
  text: string;
  highlights: string[];
  image?: string;
  imageAlt?: string;
}

interface ModulePage {
  id: ModuleId;
  name: string;
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  problemTitle: string;
  problems: string[];
  featureTitle: string;
  features: ModuleFeature[];
  benefitsTitle: string;
  benefits: string[];
  ecosystem: Array<{ name: string; path: string }>;
  ctaTitle: string;
  ctaText: string;
}

@Component({
  selector: 'app-module-detail',
  templateUrl: './module-detail.component.html',
  styleUrls: ['./module-detail.component.css'],
  hostDirectives: [ProductPageMotionDirective],
})
export class ModuleDetailComponent implements OnInit, OnDestroy {
  readonly currentYear = new Date().getFullYear();
  readonly pages: Record<ModuleId, ModulePage> = {
    inventory: {
      id: 'inventory',
      name: 'Inventory Management',
      eyebrow: 'OPTIMAX INVENTORY',
      title: 'Take Complete Control of Your Inventory.',
      seoTitle: 'Inventory Management Software | Optimax ERP',
      description: 'Manage stock, warehouses, stock transfers and inventory reporting with Optimax Inventory Management.',
      intro: 'Track stock movements, manage warehouses, monitor inventory levels and maintain accurate stock records from one connected platform.',
      heroImage: '/assets/images/inventory-dashboard.png',
      heroAlt: 'Optimax inventory command center showing stock summary, alerts and recent movements',
      problemTitle: "Inventory Problems Shouldn't Slow Your Business Down.",
      problems: [
        'Limited visibility into stock availability',
        'Difficulty tracking inventory across locations',
        'Inaccurate records and uncontrolled movements',
        'Delayed detection of items needing replenishment',
        'Slow or inconsistent inventory reporting',
      ],
      featureTitle: 'Six ways to manage inventory with greater clarity.',
      features: [
        {
          title: 'Stock Tracking',
          text: 'Monitor inventory quantities and maintain visibility into stock availability, movements and records.',
          highlights: ['Stock level monitoring', 'Movement visibility', 'Record management', 'Stock accountability'],
          image: '/assets/images/inventory-dashboard.png',
          imageAlt: 'Optimax inventory dashboard with stock summary, alerts and recent movements',
        },
        {
          title: 'Warehouse Management',
          text: 'Organize inventory across warehouse operations and keep location-level information easier to review.',
          highlights: ['Warehouse visibility', 'Stock organization', 'Location management', 'Warehouse monitoring'],
          image: '/assets/images/inventory-products.png',
          imageAlt: 'Optimax product catalog showing stock levels and inventory status across products',
        },
        {
          title: 'Stock Transfers',
          text: 'Record inventory movements between locations or warehouses with a clear operational trail.',
          highlights: ['Transfer recording', 'Movement visibility', 'Stock accountability', 'Location coordination'],
          image: '/assets/images/inventory-stock-movement.png',
          imageAlt: 'Optimax stock movements interface showing transfer sources and destinations',
        },
        {
          title: 'Stock Adjustments',
          text: 'Maintain accurate inventory records through controlled quantity corrections and adjustment records.',
          highlights: ['Quantity corrections', 'Adjustment records', 'Inventory accuracy', 'Operational oversight'],
          image: '/assets/images/inventory-stock-movement.png',
          imageAlt: 'Optimax stock movement records showing completed, cancelled and in-transit inventory activity',
        },
        {
          title: 'Low-Stock Awareness',
          text: 'Use available inventory information to identify items that may need replenishment before shortages disrupt operations.',
          highlights: ['Low-stock visibility', 'Inventory monitoring', 'Replenishment awareness', 'Stock planning'],
          image: '/assets/images/inventory-restock.png',
          imageAlt: 'Optimax restock dashboard showing pending requests, urgency and current stock',
        },
        {
          title: 'Inventory Reports',
          text: 'Review organized inventory information to understand stock levels and inventory activity.',
          highlights: ['Inventory reporting', 'Stock movement visibility', 'Inventory analysis', 'Decision support'],
          image: '/assets/images/inventory-analytics.png',
          imageAlt: 'Optimax product inventory analytics showing performance, stock and revenue metrics',
        },
      ],
      benefitsTitle: 'Move From Inventory Guesswork to Inventory Control.',
      benefits: [
        'Improved stock visibility',
        'Better warehouse coordination',
        'More accurate inventory records',
        'Reduced risk of stock shortages',
        'Better operational accountability',
        'Improved inventory decision-making',
      ],
      ecosystem: [
        { name: 'Sales Management', path: '/sales-management' },
        { name: 'Vendor Management', path: '/vendor-management' },
        { name: 'Accounting', path: '/accounting' },
        { name: 'Expense Management', path: '/expense' },
      ],
      ctaTitle: 'Know What You Have. Know Where It Is. Stay in Control.',
      ctaText: 'See how Optimax Inventory Management can give your business greater control over stock and warehouse operations.',
    },
    sales: {
      id: 'sales',
      name: 'Sales Management',
      eyebrow: 'OPTIMAX SALES',
      title: 'Manage Every Sale. Understand Every Opportunity.',
      seoTitle: 'Sales Management Software | Optimax ERP',
      description: 'Manage sales orders, quotations, invoicing and sales reporting with Optimax Sales Management.',
      intro: 'From quotations and sales orders to invoicing and performance reporting, Optimax helps businesses organize sales operations and maintain visibility across the customer journey.',
      heroImage: '/assets/images/sales-transactions.png',
      heroAlt: 'Optimax sales and transactions dashboard showing quotes, orders, invoices and delivery status',
      problemTitle: 'Disconnected Sales Processes Make Growth Harder.',
      problems: [
        'Disorganized customer and sales order records',
        'Difficulty tracking quotations and estimates',
        'Inconsistent visibility into order progress',
        'Delays in invoicing and sales documentation',
        'Limited ability to review sales performance',
      ],
      featureTitle: 'Bring structure to every stage of the sales process.',
      features: [
        {
          title: 'Sales Orders',
          text: 'Organize customer sales orders and keep sales activity records easier to review.',
          highlights: ['Sales order management', 'Record organization', 'Activity visibility', 'Order status tracking'],
          image: '/assets/images/sales-order-detail.png',
          imageAlt: 'Optimax sales order detail with lifecycle progression, customer details and delivery information',
        },
        {
          title: 'Quotations and Estimates',
          text: 'Prepare and manage customer quotations while retaining a clear record of proposals.',
          highlights: ['Quotation creation', 'Estimate management', 'Quotation records', 'Proposal visibility'],
          image: '/assets/images/sales-quotation-detail.png',
          imageAlt: 'Optimax quotation detail showing quotation information, customer, items and payment summary',
        },
        {
          title: 'Order Tracking',
          text: 'Monitor the progress of customer orders and coordinate sales and operational follow-up.',
          highlights: ['Order status visibility', 'Record tracking', 'Sales coordination', 'Operational oversight'],
          image: '/assets/images/sales-order-detail.png',
          imageAlt: 'Optimax order lifecycle showing quote, LPO, delivery, invoicing and payment stages',
        },
        {
          title: 'Invoicing',
          text: 'Manage invoices associated with sales activity and keep customer billing records organized.',
          highlights: ['Invoice management', 'Customer billing records', 'Invoice visibility', 'Sales documentation'],
          image: '/assets/images/sales-invoice-detail.png',
          imageAlt: 'Optimax invoice detail showing invoice information, billed customer and payment status',
        },
        {
          title: 'Sales Reports',
          text: 'Use organized sales information to review activity and revenue-related reporting available in the application.',
          highlights: ['Sales performance reports', 'Activity visibility', 'Revenue reporting where supported', 'Data-informed decisions'],
          image: '/assets/images/sales-transactions.png',
          imageAlt: 'Optimax sales transaction overview with payment and delivery status filtering',
        },
        {
          title: 'Customer Order History',
          text: 'Maintain visibility into customer purchasing activity and historical order records.',
          highlights: ['Customer order records', 'Purchase visibility', 'Relationship context', 'Sales follow-up'],
          image: '/assets/images/sales-transactions.png',
          imageAlt: 'Optimax transaction list showing customer sales orders, quotes and invoices',
        },
      ],
      benefitsTitle: 'Build a More Organized and Visible Sales Operation.',
      benefits: [
        'Better sales process organization',
        'Improved order management',
        'More consistent customer records',
        'Greater quotation visibility',
        'Improved invoicing oversight',
        'Better understanding of sales performance',
      ],
      ecosystem: [
        { name: 'Inventory Management', path: '/inventory-management' },
        { name: 'CRM', path: '/crm' },
        { name: 'Accounting', path: '/accounting' },
        { name: 'Vendor Management', path: '/vendor-management' },
      ],
      ctaTitle: 'Bring Clarity to Every Stage of Your Sales Process.',
      ctaText: 'Discover how Optimax can help your business manage sales activities with greater visibility and control.',
    },
    vendor: {
      id: 'vendor',
      name: 'Vendor Management',
      eyebrow: 'OPTIMAX VENDORS',
      title: 'Build Better Supplier Relationships. Strengthen Procurement.',
      seoTitle: 'Vendor Management Software | Optimax ERP',
      description: 'Organize vendor records, manage purchase orders and monitor supplier performance with Optimax Vendor Management.',
      intro: 'Centralize vendor information, organize supplier onboarding, manage purchase orders and gain better visibility into vendor activity with Optimax Vendor Management.',
      heroImage: '/assets/images/vendor-dashboard.PNG',
      heroAlt: 'Optimax vendor dashboard showing vendor activity, tier distribution and pending reviews',
      problemTitle: "Supplier Management Shouldn't Be a Disconnected Process.",
      problems: [
        'Scattered vendor information',
        'Disorganized supplier onboarding',
        'Difficulty managing purchase orders',
        'Limited supplier activity visibility',
        'Poor procurement team coordination',
        'Inconsistent vendor records',
      ],
      featureTitle: 'Organize the supplier relationship from record to purchase.',
      features: [
        {
          title: 'Vendor Registration and Onboarding',
          text: 'Organize supplier registration and onboarding records around the information procurement teams need.',
          highlights: ['Vendor registration', 'Supplier information', 'Onboarding records', 'Centralized information'],
          image: '/assets/images/vendor-approvals.PNG',
          imageAlt: 'Optimax vendor approvals queue showing registration status and review workflow',
        },
        {
          title: 'Vendor Profiles',
          text: 'Maintain organized supplier records with contact details and relevant vendor information.',
          highlights: ['Vendor information', 'Contact details', 'Supplier records', 'Vendor history where supported'],
          image: '/assets/images/vendor-profile.png',
          imageAlt: 'Optimax vendor profile showing company information, contacts and bank details',
        },
        {
          title: 'Purchase Orders',
          text: 'Organize purchase orders and procurement transactions that involve approved vendors.',
          highlights: ['Purchase order management', 'Vendor order records', 'Order visibility', 'Procurement coordination'],
          image: '/assets/images/vendor-dashboard.PNG',
          imageAlt: 'Optimax vendor activity dashboard showing supplier overview and vendor records',
        },
        {
          title: 'Vendor Performance Tracking',
          text: 'Review available supplier information and transaction records to support more informed evaluation.',
          highlights: ['Supplier activity visibility', 'Performance records', 'Monitoring', 'Better supplier evaluation'],
          image: '/assets/images/vendor-dashboard.PNG',
          imageAlt: 'Optimax vendor performance view with activity and supplier tier information',
        },
        {
          title: 'Vendor Portal',
          text: 'Support structured coordination between businesses and vendors through portal access where enabled.',
          highlights: ['Vendor-facing access', 'Supplier information visibility', 'Vendor interactions', 'Better coordination'],
          image: '/assets/images/vendor-approvals.PNG',
          imageAlt: 'Optimax vendor approval and registration interface for vendor coordination',
        },
      ],
      benefitsTitle: 'Turn Supplier Management Into a More Organized Process.',
      benefits: [
        'Centralized vendor information',
        'Better supplier record management',
        'Improved purchase order organization',
        'Greater supplier visibility',
        'Better procurement coordination',
        'More informed supplier decisions',
      ],
      ecosystem: [
        { name: 'Inventory Management', path: '/inventory-management' },
        { name: 'Sales Management', path: '/sales-management' },
        { name: 'Accounting', path: '/accounting' },
        { name: 'Expense Management', path: '/expense' },
        { name: 'Procurement', path: '/procurement' },
      ],
      ctaTitle: 'Build Stronger Supplier Relationships With Better Visibility.',
      ctaText: 'See how Optimax can help your business organize vendor information and manage supplier operations more effectively.',
    },
  };

  page: ModulePage = this.pages.inventory;
  private routeSubscription?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe((data) => {
      this.page = this.pages[(data['module'] as ModuleId)] || this.pages.inventory;
      this.updateSeo();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  private updateSeo(): void {
    const canonicalUrl = `https://optimaxsuites.com/${this.page.id === 'inventory' ? 'inventory-management' : this.page.id === 'sales' ? 'sales-management' : 'vendor-management'}`;
    this.titleService.setTitle(this.page.seoTitle);
    this.metaService.updateTag({ name: 'description', content: this.page.description });
    this.metaService.updateTag({ property: 'og:title', content: this.page.seoTitle });
    this.metaService.updateTag({ property: 'og:description', content: this.page.description });
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });

    let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }
}
