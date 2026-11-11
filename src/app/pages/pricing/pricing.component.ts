import { Component } from '@angular/core';

type BillingCycle = 'monthly' | 'annual';

type ModuleName =
  | 'POS'
  | 'Sales Hub'
  | 'Procurement & RFQ'
  | 'Vendor Management'
  | 'Vendor Self-Service Portal'
  | 'Inventory Management'
  | 'Logistics Management'
  | 'Finance & Accounting'
  | 'HR Core'
  | 'Payroll Management'
  | 'Recruitment & Onboarding'
  | 'Performance Management'
  | 'Work Schedules & Shifts'
  | 'CRM Suite'
  | 'Expense Management'
  | 'Office Productivity Suite'
  | 'OptimaxAI'
  | 'Loan & Cooperative Management'
  | 'Hospitality Suite'
  | 'Tender Management'
  | 'Mobile Suite — iOS & Android'
  | 'OptiMerce Online Storefront';

interface Plan {
  id: 'starter' | 'growth' | 'enterprise';
  label: string;
  badge?: string;
  description: string;
  monthly: number;
  annual: number;
  annualTotal: number;
  userLimit: string;
  cta: string;
  features: string[];
  excluded: string[];
  recommended?: boolean;
  accent: string;
  buttonClass: string;
  tagColor: string;
}

interface ModuleGroup {
  title: string;
  modules: { name: ModuleName; price: number }[];
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  billingCycle: BillingCycle = 'monthly';
  faqOpenIndex: number | null = 0;
  customUsers = 5;
  selectedModules: ModuleName[] = [];

  plans: Plan[] = [
    {
      id: 'starter',
      label: 'STARTER',
      description:
        'Essential business management tools for small businesses looking to organise their daily operations.',
      monthly: 204000,
      annual: 170000,
      annualTotal: 2040000,
      userLimit: 'Up to 20 users',
      cta: 'Get Started',
      features: [
        'Business dashboard and workspace',
        'Sales Hub',
        'Quotes and invoicing',
        'Delivery notes',
        'Single-location inventory management',
        'Full Point of Sale (POS)',
        'HR Core',
        'Employee profiles',
        'Attendance management',
        'Leave management',
        'Expense submission and approval',
        'User and role management',
        'Shared cloud hosting',
        'Email support with 48-hour response target',
      ],
      excluded: [
        'Payroll and full financial accounting',
        'Procurement and vendor management',
        'CRM',
        'Mobile application (available as an add-on)',
      ],
      accent: '#1c3047',
      buttonClass: 'btn-ghost',
      tagColor: '#1c3047',
    },
    {
      id: 'growth',
      label: 'GROWTH',
      badge: 'MOST POPULAR',
      description:
        'A complete business management platform for growing organisations managing multiple departments, locations, and business operations.',
      monthly: 516000,
      annual: 430000,
      annualTotal: 5160000,
      userLimit: 'Up to 100 users',
      cta: 'Choose Growth',
      features: [
        'Full Commerce Suite',
        'Procurement management',
        'RFQ management',
        'LPO management',
        'Goods Received Notes (GRN)',
        'Vendor management',
        'Vendor Self-Service Portal',
        'Multi-branch inventory',
        'Logistics management',
        'Finance and Accounting',
        'General Ledger',
        'Accounts Receivable',
        'Accounts Payable',
        'Reconciliation',
        'Full HR management',
        'Payroll management',
        'Recruitment',
        'Performance management',
        'Work schedules and shifts',
        'CRM Suite',
        'Office Productivity Suite',
        'Configurable multi-level approval workflows',
        'iOS and Android mobile applications',
        'Phone and email support with 24-hour response target',
      ],
      excluded: ['Loan & Cooperative', 'Hospitality', 'Tender Management modules'],
      recommended: true,
      accent: '#0d9aa2',
      buttonClass: 'btn-primary',
      tagColor: '#0d9aa2',
    },
    {
      id: 'enterprise',
      label: 'ENTERPRISE',
      description:
        'A configurable enterprise platform designed for complex operations, multi-company environments, and organisations requiring advanced control and custom deployment.',
      monthly: 1200000,
      annual: 1200000,
      annualTotal: 0,
      userLimit: '100+ users / unlimited users',
      cta: 'Talk to Sales',
      features: [
        'All available Optimax ERP modules',
        'Multi-tenancy',
        'Subsidiary and branch management',
        'Franchise management',
        'Dedicated cloud or on-premise deployment',
        'OptimaxAI',
        'Loan & Cooperative Management',
        'Hospitality Suite',
        'Tender and Bid Management',
        'Custom integrations',
        'Banking integrations',
        'FIRS integrations',
        'Biometric integrations',
        'Custom API integrations',
        'White-label capabilities',
        'Dedicated account manager',
        'Four-hour support SLA',
        'Mobile applications included',
      ],
      excluded: [],
      accent: '#132238',
      buttonClass: 'btn-dark',
      tagColor: '#132238',
    },
  ];

  comparisonGroups = [
    {
      title: 'Core Platform',
      open: true,
      features: [
        { name: 'Business dashboard', starter: true, growth: true, enterprise: true },
        { name: 'User management', starter: true, growth: true, enterprise: true },
        { name: 'Role management', starter: true, growth: true, enterprise: true },
        { name: 'Shared cloud hosting', starter: true, growth: true, enterprise: true },
        { name: 'Multi-location support', starter: false, growth: true, enterprise: true },
        { name: 'Multi-tenancy', starter: false, growth: false, enterprise: true },
      ],
    },
    {
      title: 'Commerce',
      open: true,
      features: [
        { name: 'Sales Hub', starter: true, growth: true, enterprise: true },
        { name: 'POS', starter: true, growth: true, enterprise: true },
        { name: 'Inventory', starter: true, growth: true, enterprise: true },
        { name: 'Procurement', starter: false, growth: true, enterprise: true },
        { name: 'Vendor management', starter: false, growth: true, enterprise: true },
        { name: 'Vendor portal', starter: false, growth: true, enterprise: true },
        { name: 'Logistics', starter: false, growth: true, enterprise: true },
      ],
    },
    {
      title: 'Finance',
      open: true,
      features: [
        { name: 'General Ledger', starter: false, growth: true, enterprise: true },
        { name: 'Accounts Receivable', starter: false, growth: true, enterprise: true },
        { name: 'Accounts Payable', starter: false, growth: true, enterprise: true },
        { name: 'Reconciliation', starter: false, growth: true, enterprise: true },
        { name: 'Financial reporting', starter: false, growth: true, enterprise: true },
      ],
    },
    {
      title: 'Human Resources',
      open: true,
      features: [
        { name: 'Employee management', starter: true, growth: true, enterprise: true },
        { name: 'Attendance', starter: true, growth: true, enterprise: true },
        { name: 'Leave management', starter: true, growth: true, enterprise: true },
        { name: 'Payroll', starter: false, growth: true, enterprise: true },
        { name: 'Recruitment', starter: false, growth: true, enterprise: true },
        { name: 'Performance management', starter: false, growth: true, enterprise: true },
        { name: 'Shift management', starter: false, growth: true, enterprise: true },
      ],
    },
    {
      title: 'Business Management',
      open: true,
      features: [
        { name: 'CRM', starter: false, growth: true, enterprise: true },
        { name: 'Expense management', starter: true, growth: true, enterprise: true },
        { name: 'Office Productivity', starter: false, growth: true, enterprise: true },
        { name: 'OptimaxAI', starter: false, growth: false, enterprise: true },
        { name: 'Loan & Cooperative', starter: false, growth: false, enterprise: true },
        { name: 'Hospitality', starter: false, growth: false, enterprise: true },
        { name: 'Tender Management', starter: false, growth: false, enterprise: true },
      ],
    },
    {
      title: 'Mobile and Support',
      open: true,
      features: [
        { name: 'Mobile applications', starter: false, growth: true, enterprise: true },
        { name: 'Email support', starter: true, growth: true, enterprise: true },
        { name: 'Phone support', starter: false, growth: true, enterprise: true },
        { name: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
        { name: 'Support response SLA', starter: '48h', growth: '24h', enterprise: '4h' },
      ],
    },
  ];

  moduleGroups: ModuleGroup[] = [
    {
      title: 'Commerce',
      modules: [
        { name: 'POS', price: 35000 },
        { name: 'Sales Hub', price: 40000 },
        { name: 'Procurement & RFQ', price: 45000 },
        { name: 'Vendor Management', price: 30000 },
        { name: 'Vendor Self-Service Portal', price: 25000 },
        { name: 'Inventory Management', price: 35000 },
        { name: 'Logistics Management', price: 25000 },
      ],
    },
    {
      title: 'Finance',
      modules: [{ name: 'Finance & Accounting', price: 80000 }],
    },
    {
      title: 'Human Resources',
      modules: [
        { name: 'HR Core', price: 45000 },
        { name: 'Payroll Management', price: 65000 },
        { name: 'Recruitment & Onboarding', price: 30000 },
        { name: 'Performance Management', price: 25000 },
        { name: 'Work Schedules & Shifts', price: 20000 },
      ],
    },
    {
      title: 'Business Management',
      modules: [
        { name: 'CRM Suite', price: 55000 },
        { name: 'Expense Management', price: 20000 },
        { name: 'Office Productivity Suite', price: 35000 },
        { name: 'OptimaxAI', price: 80000 },
      ],
    },
    {
      title: 'Specialised Modules',
      modules: [
        { name: 'Loan & Cooperative Management', price: 65000 },
        { name: 'Hospitality Suite', price: 120000 },
        { name: 'Tender Management', price: 60000 },
      ],
    },
    {
      title: 'Additional Products',
      modules: [
        { name: 'Mobile Suite — iOS & Android', price: 40000 },
        { name: 'OptiMerce Online Storefront', price: 75000 },
      ],
    },
  ];

  addOnServices = [
    {
      title: 'Mobile Applications',
      price: '₦40,000/month',
      description: 'iOS and Android mobile experiences for sales teams, field staff, and managers.',
      note: 'Included in Growth and Enterprise. Starter mobile pricing is subject to confirmation.',
    },
    {
      title: 'OptiMerce Online Storefront',
      price: '₦75,000/month',
      description: 'Launch a digital storefront connected to your inventory and order flow.',
      note: 'Built for retail and commerce teams.',
    },
    {
      title: 'Dedicated Cloud Server',
      price: 'From ₦150,000/month',
      description: 'Isolated infrastructure, custom domain, and enhanced reliability for larger operations.',
      note: 'Includes 500GB+ scalable storage and four-hour infrastructure SLA.',
    },
    {
      title: 'Additional Users',
      price: 'Starter: ₦5,000/user/month',
      description: 'Additional seats for growing teams and expanding branches.',
      note: 'Growth users are ₦6,500/user/month; Enterprise is unlimited by agreement.',
    },
  ];

  hostingOptions = [
    {
      title: 'Shared Cloud Hosting',
      price: 'Included',
      description: 'Hosted for your subscription with secure updates and managed support.',
      features: [
        'Subdomain',
        'Daily backups',
        '30-day retention',
        'SSL security',
        'Security patches',
        'Automatic updates',
        '99.9% uptime target',
        'Starter storage: up to 50GB',
        'Growth storage: up to 200GB',
      ],
    },
    {
      title: 'Dedicated Cloud',
      price: 'From ₦150,000/month',
      description: 'Private environment for organisations with more control and larger workloads.',
      features: [
        'Isolated server environment',
        'Custom domain',
        '500GB+ storage',
        'Configurable backups',
        'Four-hour infrastructure response SLA',
      ],
    },
    {
      title: 'On-Premise Deployment',
      price: 'Perpetual licence',
      description: 'Customer-managed infrastructure with greater control over network and data.',
      features: [
        'Customer-provided infrastructure',
        'Customer-managed server',
        'Greater control over network and data',
        'Offline or air-gapped capability',
      ],
    },
  ];

  implementationPackages = [
    {
      title: 'Starter Onboarding',
      price: '₦75,000 one-time',
      description: 'A simple deployment for smaller businesses getting started quickly.',
      features: [
        'Remote setup',
        'Account and tenant setup',
        'Basic data loading',
        'One two-hour virtual training session',
        'Go-live checklist',
      ],
    },
    {
      title: 'Standard Implementation',
      price: '₦250,000–₦400,000 one-time',
      description: 'Balanced implementation for mid-sized teams with more workflows and users.',
      features: [
        'Full module configuration',
        'Up to two years of data migration',
        'Approval workflow configuration',
        'User roles and permissions',
        'Four virtual training sessions',
        '30-day post-go-live support',
      ],
    },
    {
      title: 'Enterprise Implementation',
      price: 'From ₦800,000',
      description: 'A comprehensive rollout for complex operations and multi-site environments.',
      features: [
        'Project management',
        'On-site discovery and workshops',
        'Full migration and cleansing',
        'Custom reports and workflows',
        'Third-party integrations',
        'Multi-location configuration',
        'Department-specific training',
        '90-day hypercare',
      ],
    },
  ];

  supportPackages = [
    { name: 'Basic', included: 'Starter', response: '48h', features: ['Email support', 'Knowledge base', 'In-app bug reporting'] },
    { name: 'Standard', included: 'Growth', response: '24h', features: ['Email, phone and WhatsApp', 'Monthly check-in', 'Training videos and guides'] },
    { name: 'Priority', price: '₦50,000/month', response: '8h', features: ['Email, phone and WhatsApp support', '24-hour response target', 'Monthly check-in', 'Training videos and guides', 'Eight-hour SLA', 'Named support contact', 'Biweekly reviews', 'Screen-sharing assistance'] },
    { name: 'Dedicated', price: '₦150,000/month', response: '4h', features: ['Four-hour SLA', '24/7 support coverage', 'Dedicated account manager', 'Quarterly on-site visits', 'Custom feature prioritisation', 'Annual business review'] },
  ];

  whiteLabelPackages = [
    {
      title: 'White-label Starter',
      setup: '₦150,000 one-time',
      subscription: '₦50,000/month',
      features: ['Basic logo and colour rebranding', 'Custom subdomain per client', 'Reseller administration dashboard', 'Optimax attribution footer', 'Minimum three client deployments'],
    },
    {
      title: 'White-label Growth',
      setup: '₦300,000 one-time',
      subscription: '₦100,000/month',
      features: ['Full brand and name replacement', 'Custom domain', 'Branded mobile application', 'Co-branded or fully unbranded options', 'Partner training', 'Partner success manager', 'Minimum ten client deployments'],
    },
    {
      title: 'Enterprise OEM',
      setup: 'Custom engagement',
      subscription: 'Revenue sharing or flat fee',
      features: ['Zero Optimax branding', 'Dedicated mobile app under partner store', 'Custom feature prioritisation', 'Source code escrow', 'Joint go-to-market opportunities'],
    },
  ];

  licensingOptions = [
    {
      title: 'Two-Year Cloud Prepayment',
      summary: '24 months of subscription + 20% discount.',
      value: 'Growth example: ₦8,256,000',
      detail: 'Savings: ₦2,064,000',
    },
    {
      title: 'Three-Year Cloud Prepayment',
      summary: '36 months of subscription + 30% discount.',
      value: 'Growth example: ₦10,836,000',
      detail: 'Savings: ₦4,644,000',
    },
    {
      title: 'On-Premise Perpetual Licence',
      summary: 'Growth example: ₦15,480,000 one-time.',
      value: '12 months of updates and support included',
      detail: 'Annual maintenance: 20% of licence fee • ₦3,096,000/year',
    },
    {
      title: 'Enterprise Perpetual Licence',
      summary: 'Typically from ₦15,000,000 depending on scope.',
      value: 'Includes source code escrow and dedicated implementation',
      detail: 'Annual maintenance starts from ₦3,000,000/year',
    },
  ];

  faqs = [
    { question: 'What is included in each Optimax ERP plan?', answer: 'Starter covers essential operations, Growth includes a complete ERP suite for scaling businesses, and Enterprise adds advanced configuration, custom deployment, and full enterprise capabilities.' },
    { question: 'Can I change my subscription plan later?', answer: 'Yes. Customers can move between plans as their operations grow, subject to a commercial review and any migration requirements.' },
    { question: 'Can I pay monthly?', answer: 'Yes. Monthly billing is available without a minimum contract, and customers can cancel anytime. Annual billing locks your rate for 12 months.' },
    { question: 'Is hosting included?', answer: 'Shared hosting is included in subscription plans. Dedicated cloud and on-premise deployments are separate commercial arrangements.' },
    { question: 'Is there a free trial?', answer: 'Yes. The free trial lasts 14 days and requires no credit card.' },
    { question: 'Can I migrate data from Excel or another ERP?', answer: 'Yes. Standard implementation supports up to two years of historical data migration; Enterprise migration is scoped to project requirements.' },
    { question: 'Does Optimax support multiple branches?', answer: 'Yes. Growth and Enterprise support multi-branch and multi-location operations, while Starter is focused on single-location deployment.' },
    { question: 'Can I deploy Optimax on my own server?', answer: 'Yes. On-premise deployment is available through perpetual licensing arrangements.' },
    { question: 'Are mobile applications included?', answer: 'Mobile applications are included in Growth and Enterprise plans. Starter mobile access is not published as a standard included feature in the commercial guide.' },
    { question: 'Can I purchase individual modules?', answer: 'Yes. The custom ERP builder lets businesses select à la carte modules and estimate their monthly cost.' },
    { question: 'Does Optimax support Nigerian payroll requirements?', answer: 'Growth and Enterprise include payroll management. Contact our team to confirm how your specific Nigerian payroll requirements are supported.' },
    { question: 'Is the platform suitable for multiple subsidiaries?', answer: 'Yes. Enterprise is designed for multi-company and multi-subsidiary environments with advanced configuration options.' },
    { question: 'Can I resell Optimax under my own brand?', answer: 'Yes. White-label and OEM arrangements are available for partners and resellers.' },
    { question: 'What happens if I exceed my user limit?', answer: 'Users can be added through the relevant additional-user rate or through an enterprise deployment arrangement.' },
    { question: 'Does the price include VAT?', answer: 'No. All listed prices exclude 7.5% VAT.' },
  ];

  togglePlanBilling(): void {
    this.billingCycle = this.billingCycle === 'monthly' ? 'annual' : 'monthly';
  }

  isSelected(moduleName: ModuleName): boolean {
    return this.selectedModules.includes(moduleName);
  }

  toggleModule(moduleName: ModuleName): void {
    const index = this.selectedModules.indexOf(moduleName);
    if (index >= 0) {
      this.selectedModules.splice(index, 1);
      return;
    }

    this.selectedModules.push(moduleName);
  }

  toggleComparisonGroup(group: { title: string; open: boolean }): void {
    group.open = !group.open;
  }

  getModulePrice(moduleName: ModuleName): number {
    const module = this.moduleGroups
      .flatMap((group) => group.modules)
      .find((item) => item.name === moduleName);
    return module?.price ?? 0;
  }

  getSelectedModuleTotal(): number {
    return this.selectedModules.reduce((total, moduleName) => total + this.getModulePrice(moduleName), 0);
  }

  updateCustomUsers(value: number | string | null): void {
    const parsedUsers = Number(value);
    this.customUsers = Number.isFinite(parsedUsers) ? Math.max(1, Math.floor(parsedUsers)) : 1;
  }

  getAdditionalUserCharge(): number {
    return Math.max(this.customUsers - 5, 0) * 5000;
  }

  getCustomMonthlyTotal(): number {
    const basePlatform = 50000;
    const moduleSubtotal = this.getSelectedModuleTotal();
    const userCharge = this.getAdditionalUserCharge();
    return basePlatform + moduleSubtotal + userCharge;
  }

  getCustomAnnualTotal(): number {
    return this.getCustomMonthlyTotal() * 12;
  }

  getPlanPrice(plan: Plan): string {
    const currentValue = this.billingCycle === 'annual' ? plan.annual : plan.monthly;
    return currentValue.toLocaleString('en-NG');
  }

  get customQuoteQueryParams(): { request: string; users: number; modules: string; monthlyEstimate: number } {
    return {
      request: 'custom-erp-quote',
      users: this.customUsers,
      modules: this.selectedModules.join(', '),
      monthlyEstimate: this.getCustomMonthlyTotal(),
    };
  }

  resetCustomBuilder(): void {
    this.selectedModules = [];
    this.customUsers = 5;
  }

  formatNaira(value: number): string {
    return `₦${value.toLocaleString('en-NG')}`;
  }
}