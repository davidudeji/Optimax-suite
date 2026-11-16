# PROJECT SPECIFICATION

## Integrating OptimaXCloud into the Centrifuge Group Website

### 1. PROJECT OBJECTIVE

Act as a senior frontend engineer, enterprise SaaS designer, information architect, technical copywriter, and SEO specialist.

Integrate OptimaXCloud into the existing Centrifuge Group corporate website as a fully developed cloud services and infrastructure product section.

Primary product website:
https://be.optimaxsuites.com/iaas/xcw/index.html

Existing corporate website:
https://www.optimaxsuites.com/

Existing corporate cloud services page:
https://www.optimaxsuites.com//cloud-services/

The objective is to make OptimaXCloud discoverable through the main navigation and footer while giving it a professional, technically credible, and commercially compelling presentation.

Do not build an isolated microsite with unrelated branding.

The new pages must feel like a natural extension of the existing Centrifuge Group website.

### 2. NON-NEGOTIABLE REQUIREMENTS

1. Inspect the existing website and codebase before making changes.
2. Preserve all existing pages, routes, navigation items, functionality, and integrations.
3. Reuse the existing design system, brand assets, typography, spacing conventions, header, and footer.
4. Do not replace the corporate website's identity with a generic cloud-provider template.
5. Build a connected, multi-page OptimaXCloud section rather than forcing all information onto one page.
6. Add the OptimaXCloud entry to the primary navigation and footer.
7. Ensure every internal navigation link works.
8. Use Framer Motion if it is already available in the project. If the project uses a different established animation system, reuse it instead of introducing unnecessary dependencies.
9. Use responsive, accessible components.
10. Do not invent product capabilities, customer endorsements, security certifications, uptime guarantees, provider partnerships, or production integrations.
11. Clearly distinguish confirmed capabilities from planned integrations.
12. Preserve the existing website's business purpose and corporate messaging.
13. Do not introduce fake dashboards, fake testimonials, fabricated performance metrics, or misleading infrastructure diagrams.
14. Use the existing logo files wherever possible.
15. Do not publish the changes until the routes, links, responsive layouts, and primary interactions have been tested.

If the source code is available, modify the existing project directly. Do not recreate the entire website from scratch.

---

# 3. INFORMATION ARCHITECTURE

Create the following page structure.

Main product landing page:

/optima-xcloud/

Supporting pages:

/optima-xcloud/platform/
/optima-xcloud/integrations/
/optima-xcloud/solutions/
/optima-xcloud/migration/
/optima-xcloud/pricing/
/optima-xcloud/documentation/

If the existing website uses a different URL convention, follow the established routing pattern while preserving the same logical structure.

Each page must have a distinct purpose.

## Page 1: OptimaXCloud Landing Page

Purpose:
Introduce OptimaXCloud, explain its business value, summarize its capabilities, and direct visitors to relevant supporting pages.

## Page 2: Platform and Capabilities

Purpose:
Explain the infrastructure management workspace, application deployment, networking, tenant management, billing, monitoring, and recovery capabilities.

## Page 3: Integrations and Architecture

Purpose:
Explain the provider integration strategy, infrastructure adapters, CloudStack, Terraform, Proxmox, and the conceptual architecture.

## Page 4: Solutions and Workloads

Purpose:
Explain how cloud infrastructure can support enterprise applications, websites, ERP, CRM, collaboration platforms, healthcare workloads, and AI-related workloads.

## Page 5: Cloud Migration and Managed Services

Purpose:
Present cloud migration, hosting migration, application deployment, operational support, backup planning, and recovery services.

## Page 6: Pricing

Purpose:
Present the published indicative pricing ranges and explain which factors affect the final quotation.

## Page 7: Documentation and Resources

Purpose:
Provide a centralized directory of relevant product documentation, integration guides, migration instructions, and access points.

All seven pages must link naturally to one another.

---

# 4. BRANDING AND DESIGN DIRECTION

## 4.1 Design principle

The visual direction is:

Enterprise technology with a clear corporate identity.

The experience should feel:

- Professional.
- Reliable.
- Modern.
- Technical without being intimidating.
- Structured and easy to scan.
- Consistent with the existing Centrifuge Group website.

Use the current corporate website as the source of truth for branding.

Do not invent a replacement Centrifuge logo or change the established corporate identity.

## 4.2 Color system

Inspect the existing logo, CSS variables, design tokens, and page backgrounds before selecting colors.

Reuse the existing brand palette.

Create an OptimaXCloud accent system only if needed to distinguish the product within the corporate website.

Possible supporting colors include:

- Deep navy for technical emphasis.
- White or the existing light background for content sections.
- Neutral gray for secondary information.
- One restrained accent color derived from the existing brand.

These are design directions, not authorization to override the existing brand palette.

Use the same colors consistently across all OptimaXCloud pages.

## 4.3 Typography

Use the existing corporate typography.

Establish a consistent hierarchy for:

- Hero headlines.
- Page titles.
- Section headings.
- Body copy.
- Supporting labels.
- Buttons.
- Breadcrumbs.
- Technical metadata.

Avoid oversized headings that consume too much vertical space.

Use readable line lengths and generous but consistent spacing.

## 4.4 Layout and spacing

Use a consistent content container and responsive grid.

The site should feature:

- Strong alignment.
- Clear section separation.
- Balanced whitespace.
- Consistent card spacing.
- Carefully controlled text widths.
- Consistent button sizing.
- Responsive image and illustration ratios.

Avoid excessive rounded cards, gradients, decorative glass effects, and floating elements that conflict with the existing brand.

## 4.5 Motion and interaction

Use restrained, purposeful motion.

If Framer Motion is available, use it for:

- Hero content entrance.
- Subtle section reveals.
- Small transitions between navigation states.
- Integration diagram reveals.
- Accordion expansion.
- Mobile menu transitions.

Animations should remain smooth and subtle.

Respect prefers-reduced-motion.

Do not animate every element independently.

Avoid scroll hijacking, long introductory animations, and interactions that interfere with accessibility.

---

# 5. PRIMARY NAVIGATION

Add OptimaXCloud to the existing primary navigation.

Do not remove existing navigation items.

Recommended hierarchy:

Home
About
Services
Solutions
OptimaXCloud
Projects
Insights
Contact

Adapt these labels to the actual existing navigation structure instead of forcing a new arrangement.

## OptimaXCloud dropdown

Use a clean enterprise dropdown or mega-menu that matches the existing navigation design.

The dropdown should contain:

OPTIMAXCLOUD

Cloud infrastructure and application operations.

Overview
Platform
Integrations
Solutions
Migration
Pricing
Documentation

Primary action:
Explore OptimaXCloud

Secondary action:
Request a Consultation

Do not add a product logo to the dropdown unless the brand system already supports one.

If the existing navigation uses a wide dropdown, preserve its interaction pattern.

Requirements:

- Open on hover for pointer devices where appropriate.
- Support click and keyboard interaction.
- Close on Escape.
- Close when clicking outside.
- Support touch devices.
- Use correct ARIA attributes.
- Maintain visible focus indicators.
- Avoid layout shifts.
- Ensure the menu does not obscure critical navigation controls.
- Provide a clear active state for the current OptimaXCloud page.

The menu must not become inaccessible on mobile.

---

# 6. FOOTER INTEGRATION

Extend the existing footer without redesigning it unnecessarily.

Add a product column titled:

OPTIMAXCLOUD

Include these links:

- Overview
- Platform
- Integrations
- Solutions
- Cloud Migration
- Pricing
- Documentation

Add a concise product description:

"Explore cloud infrastructure, application deployment, and managed cloud services from Centrifuge Group."

Include the existing corporate contact information and established legal links.

Do not invent new support email addresses or telephone numbers.

Use the corporate website's existing contact details.

The footer must:

- Remain responsive.
- Preserve the existing social links.
- Preserve legal and company links.
- Use accessible link contrast.
- Avoid duplicate or broken navigation entries.

---

# 7. PAGE ONE — OPTIMAXCLOUD LANDING PAGE

Route:
/optima-xcloud/

This is the main marketing page.

## 7.1 Hero section

Eyebrow:
CLOUD INFRASTRUCTURE & APPLICATION OPERATIONS

Headline:
"Cloud infrastructure. Connected operations."

Supporting copy:

"OptimaXCloud brings cloud infrastructure management, application deployment, networking, and operational workflows into a unified experience. From hosting business applications to managing cloud environments, Centrifuge Group helps organizations plan, deploy, and operate the technology their business depends on."

Primary CTA:
Explore the Platform

Secondary CTA:
Talk to Our Cloud Team

Optional tertiary text link:
Explore Integrations

Do not claim that every capability is automated or available in every deployment.

## 7.2 Hero visual

Create a visual that communicates a connected cloud operations platform.

Preferred approach:
A refined conceptual architecture illustration or a real, approved OptimaXCloud screenshot.

The visual may show:

- Compute.
- Applications.
- Networking.
- Operations.
- Customer environments.

Use restrained colors and clear labels.

If using a conceptual interface, do not present it as a screenshot of the live production platform.

Do not invent operational statistics or fake live metrics.

## 7.3 Introduction

Section heading:
"One connected approach to cloud operations."

Copy:

"Cloud environments involve more than servers. Infrastructure, applications, networking, access, billing, backups, and support all need to work together. OptimaXCloud brings these operational concerns into one product experience, helping teams manage cloud services through a more consistent and structured workflow."

## 7.4 Capability overview

Present six capability cards.

CARD 1 — Infrastructure Management

"Organize infrastructure plans, compute resources, storage, networking, and provider-specific configurations through a centralized workspace."

CTA:
Explore the Platform

CARD 2 — Application Deployment

"Support repeatable application deployment workflows for websites and business applications using defined packages and deployment procedures."

CTA:
Explore Solutions

CARD 3 — Networking and DNS

"Coordinate networking, public IP addresses, DNS, and firewall-related configuration as part of the cloud service lifecycle."

CTA:
Explore the Platform

CARD 4 — Tenant and Service Management

"Structure customer environments, access, quotas, service plans, and operational workflows around managed cloud delivery."

CTA:
Explore the Platform

CARD 5 — Monitoring and Recovery

"Bring operational visibility, backup planning, recovery procedures, and service oversight into the broader cloud management process."

CTA:
Explore Capabilities

CARD 6 — Integrations

"Connect cloud management workflows with infrastructure and automation technologies through a provider-adapter approach."

CTA:
Explore Integrations

Ensure the copy does not suggest every card represents a fully operational production feature without verification.

## 7.5 How it works

Section heading:
"From infrastructure selection to managed delivery."

Present four steps.

01 — Define the environment

Select the workload, infrastructure requirements, service plan, and deployment context.

02 — Provision the infrastructure

Use the relevant provider or infrastructure workflow to establish the required environment.

03 — Deploy the application

Configure the application, networking, DNS, and relevant operational requirements.

04 — Operate and support

Manage the environment through appropriate monitoring, backups, support, and ongoing operational procedures.

Supporting note:

"The exact workflow depends on the selected infrastructure provider, service package, and implementation."

## 7.6 Workload overview

Section heading:
"Built around the workloads organizations depend on."

Display:

- Business applications.
- Websites and e-commerce.
- ERP and CRM.
- Collaboration platforms.
- Healthcare and institutional systems.
- AI and specialized computing workloads.

Each item should link to the relevant Solutions page.

Do not promise support for a particular application until its deployment requirements and actual availability have been verified.

## 7.7 Integrations preview

Section heading:
"An integration strategy built for different infrastructure environments."

Introduce:

- Apache CloudStack.
- Terraform.
- Proxmox.

Explain that the architecture aims to separate the customer-facing workspace from provider-specific infrastructure operations.

CTA:
Explore Integrations

Display a status label for each integration where its actual status is known.

Use:

- Available.
- In pilot.
- Planned.

Never assign a status based solely on the existence of a documentation page.

If the status cannot be verified, use:
"Integration approach documented — availability subject to confirmation."

## 7.8 Migration and managed services preview

Section heading:
"Move your workloads with a plan."

Copy:

"Moving to the cloud involves more than transferring files. Infrastructure, databases, DNS, email, security configuration, and application dependencies all need to be considered. Centrifuge Group helps organizations plan cloud transitions, prepare destination environments, validate services, and coordinate cutover and recovery procedures."

CTA:
Explore Cloud Migration

## 7.9 Pricing preview

Section heading:
"Cloud services aligned with your requirements."

Copy:

"Choose a starting point based on your workload, then work with our team to confirm infrastructure requirements, support needs, application dependencies, and the full cost of operation."

CTA:
Explore Pricing

Do not display pricing figures here unless they match the approved pricing page.

## 7.10 Closing CTA

Headline:
"Let's plan your next cloud deployment."

Supporting copy:

"Tell us about your applications, infrastructure requirements, and operational goals. Our team can help identify the right cloud approach for your organization."

Primary CTA:
Talk to Our Cloud Team

Secondary CTA:
Explore the Platform

Both buttons must lead to working destinations.

---

# 8. PAGE TWO — PLATFORM AND CAPABILITIES

Route:
/optima-xcloud/platform/

Page title:
"OptimaXCloud Platform | Infrastructure and Cloud Operations"

## Hero

Headline:
"Manage the infrastructure behind your applications."

Copy:

"Explore the operational capabilities that connect infrastructure provisioning, application delivery, networking, customer environments, and ongoing cloud management."

## Section 1 — Infrastructure catalog

Explain the purpose of an infrastructure catalog.

Relevant concepts:

- Compute plans.
- Storage options.
- Regions and provider configurations.
- Public IP allocation.
- Virtual private clouds.
- DNS zones.
- Firewall profiles.

Explain that availability depends on the connected infrastructure provider and configured service catalog.

## Section 2 — Compute and infrastructure provisioning

Explain how infrastructure requests can be translated into provider-specific operations.

Describe:

- Selecting a service plan.
- Validating the deployment context.
- Submitting a provisioning job.
- Tracking job status.
- Recording infrastructure identifiers.
- Returning deployment information.

Distinguish architectural workflow descriptions from verified live functionality.

## Section 3 — Application deployment

Explain the intended application deployment workflow.

Cover:

- Application packages.
- Deployment parameters.
- Environment configuration.
- Networking and DNS requirements.
- Backup planning.
- Deployment validation.
- Handover and support.

Use real examples from the approved application catalog only.

## Section 4 — Tenant management and governance

Explain the importance of:

- Customer environments.
- Role-based access.
- Service plans.
- Resource quotas.
- Usage tracking.
- Operator permissions.
- Auditability.

Do not claim that a specific access-control implementation is secure without appropriate validation.

## Section 5 — Networking and connectivity

Explain:

- Public IP addresses.
- Virtual private clouds.
- DNS management.
- Firewall configuration.
- Application connectivity.
- Provider-specific networking differences.

Clearly distinguish available network actions from planned capabilities.

## Section 6 — Monitoring and operations

Explain the operational concepts:

- Infrastructure health.
- Provisioning job status.
- Resource usage.
- Service events.
- Operational alerts.
- Backup status.
- Recovery procedures.

If the implementation uses Prometheus, Grafana, or Micrometer, mention those technologies only where confirmed by the technical implementation or approved documentation.

## Section 7 — Backups and restoration

Explain:

- Backup policies.
- Retention.
- Snapshot management.
- Restoration procedures.
- Recovery testing.
- Operational ownership.

Do not invent recovery-time objectives or recovery-point objectives.

## Section 8 — Billing and service lifecycle

Explain the relationship between:

- Service plans.
- Orders.
- Payments.
- Resource provisioning.
- Usage reconciliation.
- Customer billing.
- Support and service status.

Clearly distinguish one-time payment, recurring billing, and usage-based billing.

Do not claim support for a payment model until it has been tested.

## Section 9 — Operational workflow

Include a simple diagram:

Customer Request
→ Plan Validation
→ Order and Payment
→ Provisioning Job
→ Infrastructure Provider
→ Application Configuration
→ Validation
→ Service Handover

Mark the diagram as a conceptual workflow if the live implementation differs.

## Final CTA

"Need a cloud environment for a specific workload?"

Buttons:

- Talk to Our Cloud Team
- Explore Integrations

---

# 9. PAGE THREE — INTEGRATIONS AND ARCHITECTURE

Route:
/optima-xcloud/integrations/

Page title:
"OptimaXCloud Integrations | Cloud Infrastructure and Automation"

## Hero

Headline:
"Connect cloud operations with the infrastructure you use."

Copy:

"OptimaXCloud is designed around a provider-adapter approach that separates the customer-facing experience from infrastructure-specific operations. This approach can support a more consistent management experience across different environments, subject to the integrations implemented and enabled."

## Section 1 — Conceptual architecture

Show this architecture:

CUSTOMER AND OPERATOR EXPERIENCE

- Product workspace.
- Service catalog.
- Orders.
- Tenant management.
- Billing and service status.

↓

APPLICATION AND ORCHESTRATION LAYER

- Request validation.
- Provider adapters.
- Provisioning jobs.
- Lifecycle orchestration.
- Status reconciliation.

↓

INFRASTRUCTURE AND AUTOMATION

- Apache CloudStack.
- Terraform.
- Proxmox.

↓

WORKLOADS

- Virtual machines.
- Networks.
- Websites.
- Business applications.
- Managed workloads.

Include an explanatory caption:

"This diagram illustrates the intended integration model. The exact architecture and active provider connections depend on the deployed implementation."

## Section 2 — Apache CloudStack

Describe CloudStack as an infrastructure management platform that can manage virtual machines, networks, storage, accounts, projects, and service offerings.

Explain the proposed mapping:

- OptimaXCloud tenant to provider account or project.
- OptimaXCloud plan to an infrastructure service offering.
- Provisioning request to a provider deployment operation.
- Provider resource identifiers to the platform's service records.
- Provider results to job and service status.

Do not imply a live production connection unless verified.

Official project:
https://cloudstack.apache.org/

Official downloads and project resources:
https://cloudstack.apache.org/downloads/

OptimaXCloud integration guide:
https://be.optimaxsuites.com/iaas/xcw/cloudstack-integration.html

## Section 3 — Terraform

Explain infrastructure as code, repeatable infrastructure definitions, deployment automation, and controlled infrastructure changes.

Explain how Terraform could complement the platform:

- Standardized infrastructure definitions.
- Reusable deployment configurations.
- Automated environment creation.
- Infrastructure change tracking.
- Reproducible environments.

Clarify that Terraform is an automation technology, not itself a cloud provider.

Official website:
https://www.terraform.io/

Official documentation:
https://developer.hashicorp.com/terraform/docs

OptimaXCloud integration guide:
https://be.optimaxsuites.com/iaas/xcw/terraform-integration.html

## Section 4 — Proxmox

Explain Proxmox as a virtualization and infrastructure-management option for suitable private-cloud or on-premises environments.

Discuss:

- Virtual machines.
- Private infrastructure.
- Cluster management.
- Resource allocation.
- Provider-specific lifecycle operations.

Do not promise that every Proxmox feature is exposed through OptimaXCloud.

Official website:
https://www.proxmox.com/

OptimaXCloud integration guide:
https://be.optimaxsuites.com/iaas/xcw/proxmox-integration.html

## Section 5 — Integration status

Create a reusable integration card.

Each card must display:

- Technology name.
- Role in the architecture.
- Relevant use cases.
- Verified status.
- Link to official technology documentation.
- Link to the relevant OptimaXCloud guide.

Status values must come from an approved configuration or content source.

Do not hard-code "Available" for an integration simply because its page exists.

If status is unknown, show:
"Contact us to confirm availability."

## Section 6 — Architecture and reliability

Explain the importance of:

- Asynchronous provisioning.
- Job tracking.
- Retry handling.
- Provider error reporting.
- Resource reconciliation.
- Tenant isolation.
- Permission enforcement.
- Secrets management.
- Audit logs.

Describe these as architectural principles or implemented capabilities only when the evidence supports the claim.

## Final CTA

"Planning a cloud infrastructure integration?"

Buttons:

- Talk to Our Technical Team
- Explore the Platform

---

# 10. PAGE FOUR — SOLUTIONS AND WORKLOADS

Route:
/optima-xcloud/solutions/

Page title:
"OptimaXCloud Solutions | Cloud Hosting for Business Applications"

## Hero

Headline:
"Cloud infrastructure designed around your applications."

Copy:

"Different workloads have different requirements. Explore how cloud infrastructure, deployment workflows, and managed services can support the applications and systems your organization depends on."

## Solution category 1 — Websites and e-commerce

Discuss:

- Website hosting.
- Application environments.
- DNS and SSL planning.
- Database dependencies.
- Backups.
- Deployment and migration.

Avoid promising unlimited bandwidth or guaranteed performance.

## Solution category 2 — ERP and enterprise applications

Discuss:

- Business application hosting.
- Application and database environments.
- Connectivity.
- Backup and restoration planning.
- Role-based access.
- Capacity planning.
- Application maintenance.

Position the solution around operational continuity and suitable infrastructure.

Do not claim that all ERP products are available as one-click deployments.

## Solution category 3 — CRM and business tools

Discuss:

- Customer relationship management applications.
- Internal business portals.
- Collaboration tools.
- Document management.
- Reporting applications.

Include deployment requirements and data-management considerations.

## Solution category 4 — Healthcare and institutional workloads

Discuss the importance of:

- Appropriate access controls.
- Data protection.
- Auditability.
- Backup planning.
- Operational continuity.
- Regulatory and organizational requirements.

Do not claim regulatory compliance, healthcare certification, or suitability for sensitive patient data without verified evidence.

## Solution category 5 — AI and specialized computing

Discuss:

- Compute-intensive workloads.
- GPU requirements.
- Capacity planning.
- Storage and networking requirements.
- Workload-specific cost assessment.

Clearly state that GPU availability and pricing depend on the selected infrastructure environment.

## Solution category 6 — Collaboration and open-source applications

Potential examples include:

- Nextcloud.
- WordPress.
- Other approved open-source packages.

Use only software that is approved for the published catalog.

Clearly distinguish general deployment services from verified one-click marketplace packages.

## Workload requirements panel

Include a reusable panel with:

- Application or workload.
- Estimated user count.
- CPU and memory needs.
- Storage requirements.
- Network requirements.
- Backup requirements.
- Availability expectations.
- Data location or compliance constraints.

These fields should be presented as planning considerations, not as a self-service capacity calculator unless one is actually implemented.

## Final CTA

"Not sure which environment your application needs?"

Button:
Discuss Your Workload

---

# 11. PAGE FIVE — CLOUD MIGRATION AND MANAGED SERVICES

Route:
/optima-xcloud/migration/

Page title:
"Cloud Migration and Managed Services | Centrifuge Group"

## Hero

Headline:
"Move your workloads with confidence and a clear migration plan."

Copy:

"Centrifuge Group helps organizations assess existing environments, plan cloud transitions, prepare destination infrastructure, validate critical services, and coordinate cutover procedures."

Do not promise zero downtime unless a specific, validated migration plan supports that claim.

## Section 1 — Migration assessment

Describe the initial assessment.

Inventory:

- Websites.
- Databases.
- Domains.
- DNS records.
- Mailboxes.
- SSL certificates.
- Scheduled jobs.
- Application dependencies.
- Storage.
- Existing backups.
- Access requirements.

## Section 2 — Destination preparation

Describe:

- Infrastructure provisioning.
- Application runtime preparation.
- Database preparation.
- Firewall and network configuration.
- DNS readiness.
- Backup configuration.
- Security review.

## Section 3 — Testing

Describe:

- Website validation.
- Database integrity checks.
- Application functionality.
- Email delivery.
- DNS verification.
- SSL verification.
- Performance checks.
- Backup restoration tests where appropriate.

## Section 4 — Cutover

Describe:

- Final synchronization.
- DNS changes.
- Application verification.
- Mail delivery checks.
- Stakeholder communication.
- Rollback decision criteria.

## Section 5 — Post-migration support

Describe:

- Environment monitoring.
- Performance review.
- Backup verification.
- Incident resolution.
- Documentation.
- Ongoing management options.

## Section 6 — IONOS and Plesk migration

Use the existing product guide as a technical reference:

https://be.optimaxsuites.com/iaas/xcw/migration-ionos-plesk.html

Explain the relevance of:

- Plesk subscriptions.
- Website files.
- Databases.
- Domains.
- Email accounts.
- DNS.
- SSL certificates.

Do not promise compatibility with every hosting configuration.

## Section 7 — Managed cloud services

Connect this page to Centrifuge Group's existing cloud services offering.

Existing page:
https://www.centrifugegroup.com/cloud-services/

Explain services that Centrifuge can actually deliver, such as:

- Cloud infrastructure planning.
- Cloud migration.
- Cloud environment management.
- Application deployment.
- Backup and disaster recovery planning.
- Cloud application development.

Preserve and complement the existing corporate service descriptions.

## Migration CTA

Headline:
"Planning a cloud migration?"

Copy:
"Share your current hosting environment, applications, and operational requirements so our team can help you define the next steps."

Button:
Request a Migration Consultation

The button should open a working contact form or direct the visitor to the existing contact page.

---

# 12. PAGE SIX — PRICING

Route:
/optima-xcloud/pricing/

Page title:
"OptimaXCloud Pricing | Cloud Plans and Managed Services"

Use the current published OptimaXCloud pricing page as the source of truth:

https://be.optimaxsuites.com/iaas/xcw/pricing.html

Do not independently invent or modify published prices.

## Hero

Headline:
"Choose a cloud plan that fits your workload."

Copy:

"Start with an indicative service tier, then confirm the infrastructure, application, support, and operational requirements that determine your final quotation."

## Published indicative plans

STARTER CLOUD

₦35,000–₦60,000 per month.

Published description:

- One managed instance.
- DNS and public IP workflow.
- Basic backup policy.

Positioning:
Suitable for evaluating a small, managed cloud environment.

BUSINESS CLOUD

₦95,000–₦180,000 per month.

Published description:

- Production compute.
- Marketplace deployment support.
- Support and operations workflow.

Positioning:
For business workloads requiring a more substantial managed environment.

GPU / AI

Custom pricing.

Published description:

- GPU-capable plans.
- Quota and governance controls.
- Observability and backup options.

Positioning:
Specialized workloads requiring assessment of the infrastructure and capacity needed.

IMPORTANT:
These prices are reproduced from the linked published pricing page and must be checked against the current approved commercial offering before publication.

If the source pricing changes, update this page accordingly.

## Pricing clarification

Display a visible note:

"Published prices are indicative. Final pricing may vary depending on the infrastructure provider, service configuration, software package, support requirements, and partner arrangements. Confirm the complete quotation before placing an order."

## Payment methods

The product pricing page identifies:

- Paystack.
- Stripe.
- PayPal.

Only show payment methods as available for the relevant checkout flow after the implementation and supported currencies have been verified.

Do not promise automatic renewals, refunds, recurring billing, or support for every currency without confirmation.

## Pricing FAQ

Include:

- What is included in each plan?
- Are prices fixed?
- Is application deployment included?
- What determines GPU pricing?
- Can existing applications be migrated?
- What backup and support options are available?
- How do I request a custom quotation?

Answers must reflect approved commercial information.

## Final CTA

"Need a plan tailored to your organization?"

Button:
Request a Cloud Quote

---

# 13. PAGE SEVEN — DOCUMENTATION AND RESOURCES

Route:
/optima-xcloud/documentation/

Page title:
"OptimaXCloud Documentation | Guides and Resources"

## Hero

Headline:
"Everything you need to explore OptimaXCloud."

Copy:

"Browse the available product documentation, integration guides, and migration resources to understand the platform and plan your implementation."

## Resource categories

### Product overview

https://be.optimaxsuites.com/iaas/xcw/index.html

Purpose:
General platform information and available product links.

### User documentation

https://be.optimaxsuites.com/iaas/docs-user.html

Purpose:
User workflows, service orders, deployments, networking, billing, and support.

### Technical documentation

https://be.optimaxsuites.com/iaas/docs-technical.html

Purpose:
Architecture, integrations, security, operations, and technical implementation details.

### CloudStack integration

https://be.optimaxsuites.com/iaas/xcw/cloudstack-integration.html

Purpose:
CloudStack integration model and provisioning workflows.

### Terraform integration

https://be.optimaxsuites.com/iaas/xcw/terraform-integration.html

Purpose:
Infrastructure automation and Terraform integration.

### Proxmox integration

https://be.optimaxsuites.com/iaas/xcw/proxmox-integration.html

Purpose:
Private infrastructure and virtualization integration.

### Migration guide

https://be.optimaxsuites.com/iaas/xcw/migration-ionos-plesk.html

Purpose:
Migration planning for IONOS and Plesk environments.

### Product roadmap

https://be.optimaxsuites.com/iaas/xcw/roadmap.html

Purpose:
Published product direction and planned capabilities.

### Pricing

https://be.optimaxsuites.com/iaas/xcw/pricing.html

Purpose:
Indicative plans and pricing information.

### Account access

https://be.optimaxsuites.com/iaas/login.html

Purpose:
Product sign-in and account registration.

## Documentation card requirements

Each card must contain:

- Resource title.
- One-sentence explanation.
- Resource category.
- Appropriate external-link indicator.
- Accessible link text.
- Correct destination.

External links must open in the same tab unless there is a clear user-experience reason to open a new tab.

If a link opens a new tab, use appropriate security attributes.

Do not embed a complete external documentation website inside the Centrifuge website.

Provide a consistent directory that directs users to the original source.

---

# 14. SEO REQUIREMENTS

Optimize the new pages for relevant search intent without keyword stuffing.

## Main landing page

Suggested title:
OptimaXCloud | Cloud Infrastructure and Application Operations

Suggested description:
Explore OptimaXCloud from Centrifuge Group for cloud infrastructure management, application deployment, integrations, migration, and managed cloud services.

Suggested URL:
https://www.centrifugegroup.com/optima-xcloud/

## Platform page

Suggested title:
OptimaXCloud Platform | Cloud Infrastructure Management

## Integrations page

Suggested title:
OptimaXCloud Integrations | CloudStack, Terraform and Proxmox

## Solutions page

Suggested title:
Cloud Hosting for Business Applications | Centrifuge Group

## Migration page

Suggested title:
Cloud Migration and Managed Services | Centrifuge Group

## Pricing page

Suggested title:
OptimaXCloud Pricing | Cloud Plans and Services

## Documentation page

Suggested title:
OptimaXCloud Documentation and Technical Guides

Implementation requirements:

- Unique title and meta description per page.
- Canonical URLs.
- Appropriate heading hierarchy.
- Descriptive image alt text.
- Open Graph metadata.
- XML sitemap inclusion.
- Robots directives appropriate to the corporate site.
- Internal linking between related pages.
- Breadcrumb navigation.
- Structured data only where valid and supported by the actual content.

Do not add fabricated customer reviews or ratings schema.

Preserve any existing SEO plugin or metadata framework.

---

# 15. ACCESSIBILITY REQUIREMENTS

Meet WCAG 2.2 AA as the implementation target.

Requirements:

- Semantic HTML.
- Keyboard-accessible navigation.
- Visible focus states.
- Sufficient color contrast.
- Accessible dropdowns and accordions.
- Appropriate form labels.
- Descriptive link text.
- Reduced-motion support.
- Responsive text sizing.
- Meaningful alternative text.
- No information conveyed solely through color.
- Logical heading hierarchy.

Test the primary navigation using keyboard-only interaction.

---

# 16. RESPONSIVE REQUIREMENTS

Desktop:

- Full corporate navigation.
- Structured multi-column layouts.
- Large but restrained hero.
- Clear content hierarchy.
- Integration architecture illustration.

Tablet:

- Flexible grids.
- Appropriately reduced typography.
- Navigation adapted to available space.
- No horizontal overflow.

Mobile:

- Accessible navigation drawer.
- Single-column content.
- Stacked CTA buttons where necessary.
- Readable tables or mobile-friendly alternatives.
- Simplified architecture diagrams.
- Adequate touch targets.
- No oversized illustrations that obscure important content.

Test at approximately:

- 360px.
- 390px.
- 768px.
- 1024px.
- 1440px.

These are test widths, not hard-coded breakpoints.

---

# 17. FUNCTIONAL REQUIREMENTS

Every visible CTA must work.

Verify:

- Navigation dropdown.
- Mobile navigation.
- Breadcrumbs.
- Internal page links.
- External documentation links.
- Pricing links.
- Contact links.
- Integration links.
- Sign-in link.
- Footer navigation.
- Accordions.
- Any forms introduced during implementation.

If implementing a contact or consultation form:

- Reuse the existing form service where possible.
- Validate required fields.
- Provide accessible error messages.
- Display success and failure states.
- Prevent accidental duplicate submissions.
- Do not claim a request was sent unless the submission succeeds.
- Do not expose private credentials or API keys in frontend code.

Do not add a nonfunctional quote calculator or fake checkout experience.

---

# 18. TECHNICAL IMPLEMENTATION

Inspect the existing repository and identify:

- Framework and version.
- Routing system.
- Existing page components.
- Header and footer components.
- CSS architecture.
- Design tokens.
- Existing animation dependencies.
- Existing contact form integration.
- Existing SEO implementation.
- Build and deployment workflow.

Then implement the new pages using the established architecture.

Create reusable components where appropriate:

- OptimaXCloudHero.
- CloudCapabilityCard.
- CloudWorkflow.
- IntegrationCard.
- IntegrationArchitecture.
- WorkloadCard.
- MigrationStep.
- PricingPlan.
- DocumentationCard.
- CloudCTA.
- Breadcrumbs.

Avoid duplicating the header or footer.

Keep page content in structured, maintainable components or data files when appropriate.

Use semantic HTML and avoid unnecessary dependencies.

Do not introduce a second CSS framework if the existing project already has a consistent styling system.

Do not modify unrelated pages unless a shared navigation or footer update requires it.

---

# 19. CONTENT ACCURACY AND GOVERNANCE

Before publication, classify all product claims into three categories.

### Category A — Verified current capabilities

Only use this label when the implementation or approved product owner confirms that the capability is available.

### Category B — Documented integration or implementation approach

Use wording such as:

- Designed to support.
- The documented integration approach.
- Intended workflow.
- Available subject to configuration.
- Contact us to confirm availability.

### Category C — Planned capabilities

Use wording such as:

- Planned.
- Under development.
- Roadmap item.

Do not market planned capabilities as production-ready.

Do not invent:

- Uptime percentages.
- Service-level agreements.
- Security certifications.
- Compliance status.
- Customer counts.
- Performance benchmarks.
- Availability regions.
- Provider partnerships.
- Support response times.
- Backup retention periods.
- Disaster recovery guarantees.

Use the original product documentation and approved corporate information as the source of truth.

---

# 20. FINAL QUALITY ASSURANCE

Before marking the work complete, verify:

1. All seven pages exist and render correctly.
2. The primary navigation includes OptimaXCloud.
3. The footer includes the OptimaXCloud links.
4. Every internal route works.
5. Every external resource points to the correct destination.
6. No existing corporate pages or links have been broken.
7. Branding is consistent across all pages.
8. Mobile navigation works.
9. Responsive layouts have no horizontal overflow.
10. Keyboard navigation works.
11. Animations respect reduced-motion preferences.
12. Pricing matches the approved source.
13. Integration statuses are accurate.
14. No unsupported claims have been published.
15. SEO metadata is present.
16. Images and diagrams have appropriate alternative text.
17. The production build succeeds.
18. Forms work if included.
19. No fake metrics or fabricated testimonials are present.
20. The final implementation has been reviewed against the existing Centrifuge Group website.

## DEFINITION OF DONE

The task is complete when OptimaXCloud is integrated into the existing Centrifuge Group website as a coherent, responsive, accessible, and internally connected product section.

The result must preserve the existing corporate identity while providing enough detail for visitors to understand the product, explore its technical capabilities, evaluate the available services, review indicative pricing, and contact Centrifuge Group.

Do not stop after creating the landing page.

Implement all seven pages, navigation changes, footer changes, internal links, and required quality checks.
