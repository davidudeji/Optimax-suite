import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

type CloudPageId =
  | 'overview'
  | 'platform'
  | 'integrations'
  | 'solutions'
  | 'migration'
  | 'pricing'
  | 'documentation';

interface CloudPage {
  id: CloudPageId;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  primaryLabel: string;
  primaryPath: string;
  secondaryLabel: string;
  secondaryPath: string;
}

interface CloudLink {
  label: string;
  path: string;
}

interface CloudFeature {
  title: string;
  description: string;
  path: string;
  linkLabel: string;
}

interface CloudIntegration {
  name: string;
  role: string;
  useCases: string;
  officialUrl: string;
  guideUrl: string;
}

interface CloudWorkload {
  title: string;
  description: string;
}

interface CloudPlan {
  name: string;
  price: string;
  positioning: string;
  features: string[];
}

interface CloudResource {
  title: string;
  category: string;
  description: string;
  url: string;
}

interface CloudTextSection {
  title: string;
  description: string;
  items: string[];
  note?: string;
}

@Component({
  selector: 'app-optima-xcloud',
  templateUrl: './optima-xcloud.component.html',
  styleUrls: ['./optima-xcloud.component.css'],
})
export class OptimaXCloudComponent implements OnInit, OnDestroy {
  readonly cloudPages: CloudLink[] = [
    { label: 'Overview', path: '/optima-xcloud/' },
    { label: 'Platform', path: '/optima-xcloud/platform/' },
    { label: 'Integrations', path: '/optima-xcloud/integrations/' },
    { label: 'Solutions', path: '/optima-xcloud/solutions/' },
    { label: 'Cloud Migration', path: '/optima-xcloud/migration/' },
    { label: 'Pricing', path: '/optima-xcloud/pricing/' },
    { label: 'Documentation', path: '/optima-xcloud/documentation/' },
  ];

  readonly pages: Record<CloudPageId, CloudPage> = {
    overview: {
      id: 'overview',
      title: 'OptimaXCloud | Cloud Infrastructure and Application Operations',
      description:
        'Explore OptimaXCloud from OptimaX Suites for cloud infrastructure management, application deployment, integrations, migration, and managed cloud services.',
      eyebrow: 'CLOUD INFRASTRUCTURE & APPLICATION OPERATIONS',
      heading: 'Cloud infrastructure. Connected operations.',
      intro:
        'OptimaXCloud brings cloud infrastructure management, application deployment, networking, and operational workflows into a unified experience. From hosting business applications to managing cloud environments, Centrifuge Group helps organizations plan, deploy, and operate the technology their business depends on.',
      primaryLabel: 'Explore the Platform',
      primaryPath: '/optima-xcloud/platform/',
      secondaryLabel: 'Talk to Our Cloud Team',
      secondaryPath: '/contact',
    },
    platform: {
      id: 'platform',
      title: 'OptimaXCloud Platform | Cloud Infrastructure Management',
      description:
        'Explore the documented OptimaXCloud approach to infrastructure, application deployment, networking, tenant management, operations, backup planning, and billing.',
      eyebrow: 'PLATFORM & CAPABILITIES',
      heading: 'Manage the infrastructure behind your applications.',
      intro:
        'Explore the operational capabilities that connect infrastructure provisioning, application delivery, networking, customer environments, and ongoing cloud management. Availability depends on the selected provider and configured service catalog.',
      primaryLabel: 'Talk to Our Cloud Team',
      primaryPath: '/contact',
      secondaryLabel: 'Explore Integrations',
      secondaryPath: '/optima-xcloud/integrations/',
    },
    integrations: {
      id: 'integrations',
      title: 'OptimaXCloud Integrations | CloudStack, Terraform and Proxmox',
      description:
        'Learn how the OptimaXCloud provider-adapter approach can connect cloud operations with CloudStack, Terraform, and Proxmox.',
      eyebrow: 'INTEGRATIONS & ARCHITECTURE',
      heading: 'Connect cloud operations with the infrastructure you use.',
      intro:
        'OptimaXCloud is designed around a provider-adapter approach that separates the customer-facing experience from infrastructure-specific operations. Active connections depend on the deployed implementation and enabled integrations.',
      primaryLabel: 'Talk to Our Technical Team',
      primaryPath: '/contact',
      secondaryLabel: 'Explore the Platform',
      secondaryPath: '/optima-xcloud/platform/',
    },
    solutions: {
      id: 'solutions',
      title: 'Cloud Hosting for Business Applications | OptimaX Suites',
      description:
        'Explore cloud infrastructure and managed service considerations for websites, enterprise applications, healthcare, AI, and collaboration workloads.',
      eyebrow: 'SOLUTIONS & WORKLOADS',
      heading: 'Cloud infrastructure designed around your applications.',
      intro:
        'Different workloads have different requirements. Explore how cloud infrastructure, deployment workflows, and managed services can support the applications and systems your organization depends on.',
      primaryLabel: 'Discuss Your Workload',
      primaryPath: '/contact',
      secondaryLabel: 'Explore the Platform',
      secondaryPath: '/optima-xcloud/platform/',
    },
    migration: {
      id: 'migration',
      title: 'Cloud Migration and Managed Services | OptimaX Suites',
      description:
        'Plan a cloud migration with OptimaX Suites, from environment assessment and destination preparation through testing, cutover, and ongoing support.',
      eyebrow: 'CLOUD MIGRATION & MANAGED SERVICES',
      heading: 'Move your workloads with confidence and a clear migration plan.',
      intro:
        'Our team helps organizations assess existing environments, plan cloud transitions, prepare destination infrastructure, validate critical services, and coordinate cutover procedures.',
      primaryLabel: 'Request a Migration Consultation',
      primaryPath: '/contact',
      secondaryLabel: 'Explore the Platform',
      secondaryPath: '/optima-xcloud/platform/',
    },
    pricing: {
      id: 'pricing',
      title: 'OptimaXCloud Pricing | Cloud Plans and Services',
      description:
        'Review indicative OptimaXCloud service tiers and learn which infrastructure, application, support, and operational requirements affect a final quotation.',
      eyebrow: 'PLANS & PRICING',
      heading: 'Choose a cloud plan that fits your workload.',
      intro:
        'Start with an indicative service tier, then confirm the infrastructure, application, support, and operational requirements that determine your final quotation.',
      primaryLabel: 'Request a Cloud Quote',
      primaryPath: '/contact',
      secondaryLabel: 'Explore Cloud Migration',
      secondaryPath: '/optima-xcloud/migration/',
    },
    documentation: {
      id: 'documentation',
      title: 'OptimaXCloud Documentation and Technical Guides',
      description:
        'Browse OptimaXCloud product documentation, integration guides, migration resources, pricing information, and account access.',
      eyebrow: 'DOCUMENTATION & RESOURCES',
      heading: 'Everything you need to explore OptimaXCloud.',
      intro:
        'Browse the available product documentation, integration guides, and migration resources to understand the platform and plan your implementation.',
      primaryLabel: 'Talk to Our Cloud Team',
      primaryPath: '/contact',
      secondaryLabel: 'Explore Integrations',
      secondaryPath: '/optima-xcloud/integrations/',
    },
  };

  readonly overviewFeatures: CloudFeature[] = [
    {
      title: 'Infrastructure Management',
      description:
        'Organize infrastructure plans, compute resources, storage, networking, and provider-specific configurations through a centralized workspace.',
      path: '/optima-xcloud/platform/',
      linkLabel: 'Explore the Platform',
    },
    {
      title: 'Application Deployment',
      description:
        'Support repeatable application deployment workflows for websites and business applications using defined packages and procedures.',
      path: '/optima-xcloud/solutions/',
      linkLabel: 'Explore Solutions',
    },
    {
      title: 'Networking and DNS',
      description:
        'Coordinate networking, public IP addresses, DNS, and firewall-related configuration as part of the cloud service lifecycle.',
      path: '/optima-xcloud/platform/',
      linkLabel: 'Explore the Platform',
    },
    {
      title: 'Tenant and Service Management',
      description:
        'Structure customer environments, access, quotas, service plans, and operational workflows around managed cloud delivery.',
      path: '/optima-xcloud/platform/',
      linkLabel: 'Explore the Platform',
    },
    {
      title: 'Monitoring and Recovery',
      description:
        'Bring operational visibility, backup planning, recovery procedures, and service oversight into the broader cloud management process.',
      path: '/optima-xcloud/platform/',
      linkLabel: 'Explore Capabilities',
    },
    {
      title: 'Integrations',
      description:
        'Connect cloud management workflows with infrastructure and automation technologies through a provider-adapter approach.',
      path: '/optima-xcloud/integrations/',
      linkLabel: 'Explore Integrations',
    },
  ];

  readonly workflowSteps = [
    {
      number: '01',
      title: 'Define the environment',
      description:
        'Select the workload, infrastructure requirements, service plan, and deployment context.',
    },
    {
      number: '02',
      title: 'Provision the infrastructure',
      description:
        'Use the relevant provider or infrastructure workflow to establish the required environment.',
    },
    {
      number: '03',
      title: 'Deploy the application',
      description:
        'Configure the application, networking, DNS, and relevant operational requirements.',
    },
    {
      number: '04',
      title: 'Operate and support',
      description:
        'Manage the environment through appropriate monitoring, backups, support, and ongoing procedures.',
    },
  ];

  readonly workloads: CloudWorkload[] = [
    {
      title: 'Business applications',
      description:
        'Plan suitable compute, storage, connectivity, and backup requirements for business software.',
    },
    {
      title: 'Websites and e-commerce',
      description:
        'Consider application environments, databases, DNS, SSL, deployment, and migration needs.',
    },
    {
      title: 'ERP and CRM',
      description:
        'Assess application and database environments, user access, capacity, and operational continuity.',
    },
    {
      title: 'Collaboration platforms',
      description:
        'Plan application dependencies, data management, storage, and access for collaboration tools.',
    },
    {
      title: 'Healthcare and institutional systems',
      description:
        'Review access, data protection, auditability, backup, and organizational requirements.',
    },
    {
      title: 'AI and specialized computing',
      description:
        'Assess compute, GPU, storage, network, and cost needs for workload-specific deployments.',
    },
  ];

  readonly integrations: CloudIntegration[] = [
    {
      name: 'Apache CloudStack',
      role: 'Infrastructure management platform',
      useCases:
        'Virtual machines, networks, storage, accounts, projects, and service offerings.',
      officialUrl: 'https://cloudstack.apache.org/',
      guideUrl:
        'https://be.optimaxsuites.com/iaas/xcw/cloudstack-integration.html',
    },
    {
      name: 'Terraform',
      role: 'Infrastructure as code and automation',
      useCases:
        'Reusable infrastructure definitions, repeatable environments, and controlled changes.',
      officialUrl: 'https://developer.hashicorp.com/terraform/docs',
      guideUrl:
        'https://be.optimaxsuites.com/iaas/xcw/terraform-integration.html',
    },
    {
      name: 'Proxmox',
      role: 'Virtualization and private infrastructure',
      useCases:
        'Virtual machines, clusters, resource allocation, and provider-specific lifecycle operations.',
      officialUrl: 'https://www.proxmox.com/',
      guideUrl:
        'https://be.optimaxsuites.com/iaas/xcw/proxmox-integration.html',
    },
  ];

  readonly platformSections: CloudTextSection[] = [
    {
      title: 'Infrastructure catalog',
      description:
        'An infrastructure catalog describes the options available for a service and the provider context they require.',
      items: [
        'Compute plans and storage options',
        'Regions and provider configurations',
        'Public IP allocation and virtual private clouds',
        'DNS zones and firewall profiles',
      ],
      note:
        'Availability depends on the connected infrastructure provider and configured service catalog.',
    },
    {
      title: 'Compute and infrastructure provisioning',
      description:
        'A documented provisioning workflow can translate a service request into provider-specific operations.',
      items: [
        'Select a service plan and validate deployment context',
        'Submit a provisioning job and track its status',
        'Record infrastructure identifiers and return deployment information',
      ],
      note:
        'This describes an operational workflow, not confirmation that every provider action is live.',
    },
    {
      title: 'Application deployment',
      description:
        'Application delivery depends on the selected package, deployment requirements, and implementation.',
      items: [
        'Application packages and deployment parameters',
        'Environment configuration, networking, and DNS',
        'Backup planning, deployment validation, and handover',
      ],
      note:
        'Confirm supported applications and deployment options with the cloud team.',
    },
    {
      title: 'Tenant management and governance',
      description:
        'Managed cloud delivery needs clearly structured customer environments and operating responsibilities.',
      items: [
        'Customer environments, roles, and operator permissions',
        'Service plans, quotas, and usage tracking',
        'Auditability and permission enforcement',
      ],
    },
    {
      title: 'Networking and connectivity',
      description:
        'Networking requirements vary by provider and by the way each workload needs to connect.',
      items: [
        'Public IP addresses and virtual private clouds',
        'DNS management and firewall configuration',
        'Application connectivity and provider-specific network operations',
      ],
    },
    {
      title: 'Monitoring, backups, and recovery',
      description:
        'Operational planning can bring service visibility, backups, and recovery procedures into one process.',
      items: [
        'Infrastructure health, job status, and resource usage',
        'Backup policies, retention, snapshots, and restoration',
        'Recovery procedures, testing, and operational ownership',
      ],
      note:
        'Backup options and recovery objectives must be confirmed for each service; no recovery targets are implied.',
    },
    {
      title: 'Billing and service lifecycle',
      description:
        'Service plans, orders, payments, provisioning, usage, and support are related but distinct parts of a service lifecycle.',
      items: [
        'Service plans, orders, and payment flow',
        'Resource provisioning and usage reconciliation',
        'Customer billing, support, and service status',
      ],
      note:
        'Payment models and checkout availability depend on the applicable product flow and supported currency.',
    },
  ];

  readonly solutionGroups: CloudTextSection[] = [
    {
      title: 'Websites and e-commerce',
      description:
        'Plan application environments around the site, database, and services it depends on.',
      items: ['Website hosting', 'DNS and SSL planning', 'Databases, backups, and migration'],
    },
    {
      title: 'ERP and enterprise applications',
      description:
        'Assess application and database environments with a focus on operational continuity.',
      items: ['Connectivity and access', 'Backup and restoration planning', 'Capacity and maintenance'],
    },
    {
      title: 'CRM and business tools',
      description:
        'Consider the requirements of internal portals and the business tools teams use every day.',
      items: ['CRM and business portals', 'Collaboration and document management', 'Reporting applications'],
    },
    {
      title: 'Healthcare and institutional workloads',
      description:
        'Plan with organizational requirements for sensitive operations and data in view.',
      items: ['Appropriate access controls', 'Data protection and auditability', 'Backup and continuity planning'],
      note:
        'No regulatory compliance, certification, or suitability for sensitive patient data is implied.',
    },
    {
      title: 'AI and specialized computing',
      description:
        'Specialized workloads need a workload-specific assessment of infrastructure and cost.',
      items: ['Compute and GPU requirements', 'Storage and networking', 'Capacity and cost assessment'],
      note: 'GPU availability and pricing depend on the selected infrastructure environment.',
    },
    {
      title: 'Collaboration and open-source applications',
      description:
        'Discuss the application, its dependencies, and the service level needed before selecting a deployment approach.',
      items: ['Application and data requirements', 'General deployment services', 'Verified package availability'],
      note:
        'General deployment support is not the same as a verified one-click marketplace package.',
    },
  ];

  readonly migrationSteps: CloudTextSection[] = [
    {
      title: 'Assess the current environment',
      description:
        'Build an inventory of the systems and dependencies that need to move.',
      items: [
        'Websites, databases, domains, and DNS records',
        'Mailboxes, SSL certificates, and scheduled jobs',
        'Application dependencies, storage, backups, and access requirements',
      ],
    },
    {
      title: 'Prepare the destination',
      description:
        'Prepare the target environment and confirm its dependencies before cutover.',
      items: [
        'Infrastructure and application runtime',
        'Database, firewall, network, and DNS readiness',
        'Backup configuration and security review',
      ],
    },
    {
      title: 'Test services',
      description:
        'Validate critical services before directing production traffic.',
      items: [
        'Website and application functionality',
        'Database integrity, email delivery, DNS, and SSL',
        'Performance and backup restoration checks where appropriate',
      ],
    },
    {
      title: 'Coordinate cutover',
      description:
        'Coordinate the final transition with clear communication and rollback considerations.',
      items: [
        'Final synchronization and DNS changes',
        'Application and mail delivery verification',
        'Stakeholder communication and rollback decision criteria',
      ],
    },
    {
      title: 'Support the new environment',
      description:
        'Review the environment after migration and agree on any ongoing operational support.',
      items: [
        'Environment monitoring and performance review',
        'Backup verification and incident resolution',
        'Documentation and ongoing management options',
      ],
    },
  ];

  readonly planningRequirements = [
    'Application or workload',
    'Estimated user count',
    'CPU and memory needs',
    'Storage and network requirements',
    'Backup requirements and availability expectations',
    'Data location or compliance constraints',
  ];

  readonly plans: CloudPlan[] = [
    {
      name: 'Starter Cloud',
      price: '₦35,000–₦60,000 / month',
      positioning: 'Suitable for evaluating a small, managed cloud environment.',
      features: ['One managed instance', 'DNS and public IP workflow', 'Basic backup policy'],
    },
    {
      name: 'Business Cloud',
      price: '₦95,000–₦180,000 / month',
      positioning:
        'For business workloads requiring a more substantial managed environment.',
      features: [
        'Production compute',
        'Marketplace deployment support',
        'Support and operations workflow',
      ],
    },
    {
      name: 'GPU / AI',
      price: 'Custom pricing',
      positioning:
        'Specialized workloads requiring assessment of infrastructure and capacity.',
      features: [
        'GPU-capable plans',
        'Quota and governance controls',
        'Observability and backup options',
      ],
    },
  ];

  readonly resources: CloudResource[] = [
    {
      title: 'Product overview',
      category: 'Product',
      description: 'General platform information and available product links.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/index.html',
    },
    {
      title: 'User documentation',
      category: 'Documentation',
      description: 'User workflows, service orders, deployments, networking, billing, and support.',
      url: 'https://be.optimaxsuites.com/iaas/docs-user.html',
    },
    {
      title: 'Technical documentation',
      category: 'Documentation',
      description: 'Architecture, integrations, security, operations, and technical implementation.',
      url: 'https://be.optimaxsuites.com/iaas/docs-technical.html',
    },
    {
      title: 'CloudStack integration',
      category: 'Integration guide',
      description: 'CloudStack integration model and provisioning workflows.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/cloudstack-integration.html',
    },
    {
      title: 'Terraform integration',
      category: 'Integration guide',
      description: 'Infrastructure automation and Terraform integration.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/terraform-integration.html',
    },
    {
      title: 'Proxmox integration',
      category: 'Integration guide',
      description: 'Private infrastructure and virtualization integration.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/proxmox-integration.html',
    },
    {
      title: 'IONOS and Plesk migration guide',
      category: 'Migration',
      description: 'Migration planning for IONOS and Plesk environments.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/migration-ionos-plesk.html',
    },
    {
      title: 'Product roadmap',
      category: 'Product',
      description: 'Published product direction and planned capabilities.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/roadmap.html',
    },
    {
      title: 'Published pricing',
      category: 'Pricing',
      description: 'Indicative plans and pricing information.',
      url: 'https://be.optimaxsuites.com/iaas/xcw/pricing.html',
    },
    {
      title: 'Account access',
      category: 'Account',
      description: 'Product sign-in and account registration.',
      url: 'https://be.optimaxsuites.com/iaas/login.html',
    },
  ];

  currentYear = new Date().getFullYear();
  page: CloudPage = this.pages.overview;
  private routeSubscription?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly titleService: Title,
    private readonly metaService: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe((data) => {
      const pageId = data['cloudPage'] as CloudPageId;
      this.page = this.pages[pageId] || this.pages.overview;
      this.updateSeo();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  isActive(path: string): boolean {
    return this.router.url.replace(/\/+$/, '') === path.replace(/\/+$/, '');
  }

  private updateSeo(): void {
    const canonicalUrl = `https://optimaxsuites.com${this.pagePath(this.page.id)}`;
    this.titleService.setTitle(this.page.title);
    this.metaService.updateTag({
      name: 'description',
      content: this.page.description,
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: this.page.title,
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: this.page.description,
    });
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });

    this.setCanonicalUrl(canonicalUrl);
  }

  private setCanonicalUrl(url: string): void {
    let canonical = this.document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }

  private pagePath(pageId: CloudPageId): string {
    const link = this.cloudPages.find((item) => {
      if (pageId === 'overview') {
        return item.path === '/optima-xcloud/';
      }
      return item.path.endsWith(`/${pageId}/`);
    });
    return link?.path || '/optima-xcloud/';
  }
}
