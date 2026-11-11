import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  isScrolled = false;
  activeDropdown: 'products' | 'industries' | null = null;
  mobileMenuOpen = false;
  mobileAccordion: 'products' | 'industries' | null = null;

  products = [
    {
      name: 'OptimaX POS',
      description: 'Smart point-of-sale system for modern retail businesses',
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      active: true,
      path: 'pos',
    },
    {
      name: 'Accounting',
      description: 'Automated financial management and reporting',
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      active: true,
      path: 'accounting',
    },
    {
      name: 'HR & Payroll',
      description: 'Employee management, payroll and performance tracking',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      active: true,
      path: 'hr',
    },
    {
      name: 'Procurement',
      description: 'Purchasing and supplier workflow automation',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      active: true,
      path: 'procurement',
    },
    {
      name: 'Expense',
      description: 'Company expense tracking and approvals',
      icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      active: true,
      path: 'expense',
    },
    {
      name: 'CRM',
      description: 'Customer relationship and sales pipeline management',
      icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
      active: true,
      path: 'crm',
    },
  ];

  industries = [
    {
      name: 'Retail & E-commerce',
      description: 'Manage inventory, POS and sales across physical and online stores.',
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      slug: 'retail',
    },
    {
      name: 'Manufacturing',
      description: 'Streamline production, materials and supply chain operations.',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      slug: 'manufacturing',
    },
    {
      name: 'Healthcare',
      description: 'Manage staff, compliance, billing and patient workflows.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      slug: 'healthcare',
    },
    {
      name: 'Logistics & Supply Chain',
      description: 'Track shipments, warehouses and fulfillment in real time.',
      icon: 'M8 17l4 4 4-4m-4-5v9 M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29',
      slug: 'logistics',
    },
    {
      name: 'Hospitality & Restaurants',
      description: 'Run orders, tables, inventory and staff from one platform.',
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
      slug: 'hospitality',
    },
    {
      name: 'Professional Services',
      description: 'Automate billing, projects and client reporting.',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      slug: 'professional-services',
    },
    {
      name: 'Education',
      description: 'Manage admissions, fees, staff payroll and academics.',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      slug: 'education',
    },
    {
      name: 'Construction',
      description: 'Track projects, budgets, procurement and site teams.',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      slug: 'construction',
    },
  ];

  ngOnInit() {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar-dropdown-wrapper')) {
      this.activeDropdown = null;
    }
    if (!target.closest('.mobile-menu-wrapper')) {
      this.mobileMenuOpen = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.activeDropdown = null;
    this.mobileMenuOpen = false;
    this.mobileAccordion = null;
  }

  toggleDropdown(name: 'products' | 'industries') {
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleMobileAccordion(name: 'products' | 'industries') {
    this.mobileAccordion = this.mobileAccordion === name ? null : name;
  }
}
