import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-industrypage',
  standalone: false,
  templateUrl: './industrypage.component.html',
})
export class IndustrypageComponent implements OnInit {
  slug = '';
  industry: any = null;

  industries: Record<string, any> = {
    'retail': {
      name: 'Retail & E-commerce',
      tagline: 'Unified commerce for modern retailers',
      description: 'Manage inventory, POS, online sales and customer data from one platform.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&q=80',
      features: ['Real-time inventory sync', 'Multi-store POS', 'E-commerce integration', 'Customer loyalty program', 'Sales analytics', 'Automated reordering'],
      stat1: '35%', stat1label: 'reduction in stockouts',
      stat2: '2x', stat2label: 'faster checkout',
      stat3: '99.9%', stat3label: 'uptime guaranteed',
    },
    'manufacturing': {
      name: 'Manufacturing',
      tagline: 'Streamline production from raw material to finished goods',
      description: 'Manage BOMs, production orders, quality control, and supply chain in one system.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b2d70b?w=1280&q=80',
      features: ['Bill of Materials (BOM)', 'Production Planning', 'Quality Control', 'Supplier Management', 'Cost Tracking', 'Inventory Control'],
      stat1: '28%', stat1label: 'lower production costs',
      stat2: '40%', stat2label: 'faster order fulfillment',
      stat3: '100%', stat3label: 'traceability',
    },
    'healthcare': {
      name: 'Healthcare',
      tagline: 'Compliance-first operations for healthcare providers',
      description: 'Manage staff, billing, pharmacy inventory, and compliance from a secure platform.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1280&q=80',
      features: ['Patient Billing', 'Pharmacy Inventory', 'Staff Management', 'Compliance Reporting', 'Payroll Automation', 'Budget Tracking'],
      stat1: '60%', stat1label: 'billing accuracy improvement',
      stat2: '45%', stat2label: 'admin time saved',
      stat3: '100%', stat3label: 'compliance audit ready',
    },
    'logistics': {
      name: 'Logistics & Supply Chain',
      tagline: 'End-to-end visibility across your logistics network',
      description: 'Track shipments, warehouses, and fulfillment in real time.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&q=80',
      features: ['Shipment Tracking', 'Warehouse Management', 'Route Optimization', 'Supplier Portal', 'Fleet Management', 'Real-time Reporting'],
      stat1: '30%', stat1label: 'delivery time reduction',
      stat2: '50%', stat2label: 'fewer manual errors',
      stat3: '360°', stat3label: 'supply chain visibility',
    },
    'hospitality': {
      name: 'Hospitality & Restaurants',
      tagline: 'Run your entire restaurant or hotel from one screen',
      description: 'Orders, tables, inventory, reservations, and staff — all in one platform.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1280&q=80',
      features: ['Table Management', 'Kitchen Order Display', 'Menu & Inventory', 'Staff Scheduling', 'Reservation System', 'Revenue Analytics'],
      stat1: '22%', stat1label: 'increase in table turns',
      stat2: '40%', stat2label: 'waste reduction',
      stat3: '15min', stat3label: 'average time saved per shift',
    },
    'professional-services': {
      name: 'Professional Services',
      tagline: 'Automate billing, projects and client reporting',
      description: 'Manage retainers, timesheets, project budgets, and client invoicing in one place.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&q=80',
      features: ['Project Management', 'Time & Billing', 'Client Portal', 'Retainer Management', 'Expense Tracking', 'Profitability Reports'],
      stat1: '35%', stat1label: 'faster invoice collection',
      stat2: '60%', stat2label: 'less admin overhead',
      stat3: '99%', stat3label: 'billing accuracy',
    },
    'education': {
      name: 'Education',
      tagline: 'Modern school management for forward-thinking institutions',
      description: 'Manage admissions, fees, staff payroll and academics from one intelligent system.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1280&q=80',
      features: ['Admissions Management', 'Fee Collection', 'Staff Payroll', 'Academic Records', 'Budget Tracking', 'Parent Portal'],
      stat1: '80%', stat1label: 'fees collected on time',
      stat2: '50%', stat2label: 'admin workload reduction',
      stat3: '100%', stat3label: 'audit trail coverage',
    },
    'construction': {
      name: 'Construction',
      tagline: 'Keep projects on time and on budget',
      description: 'Track projects, budgets, procurement, and site teams from one cloud platform.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1280&q=80',
      features: ['Project Budgeting', 'Procurement Tracking', 'Site Team Management', 'Equipment Inventory', 'Subcontractor Billing', 'Progress Reporting'],
      stat1: '25%', stat1label: 'reduction in cost overruns',
      stat2: '40%', stat2label: 'faster procurement cycles',
      stat3: '100%', stat3label: 'project visibility',
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug') || '';
      this.industry = this.industries[this.slug] || this.industries['retail'];
    });
  }
}
