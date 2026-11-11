# OPTIMAX ERP PRICING PAGE — IMPLEMENTATION SPECIFICATION

## 1. Project Objective

Redesign and implement the Optimax ERP pricing page into a professional, modern, enterprise-grade pricing experience that clearly communicates the platform's value, pricing structure, available modules, and additional services.

The page should help prospective customers:

- Understand the differences between Starter, Growth, and Enterprise.
- Compare features and subscription costs.
- Choose between annual and monthly billing.
- Build a custom ERP package by selecting individual modules.
- Understand implementation, hosting, support, and mobile application costs.
- Explore perpetual licensing and white-label opportunities.
- Request a demo, start a free trial, or contact the sales team.

**Primary objective:** Convert pricing-page visitors into qualified sales enquiries and trial registrations.

## 2. Design Direction

Create a premium B2B SaaS pricing experience inspired by the clarity and usability of leading enterprise software websites.

### Visual principles

- Enterprise-grade visual hierarchy.
- Clear typography and readable pricing.
- Generous whitespace and consistent spacing.
- Minimal decorative elements.
- Strong contrast between headings, descriptions, prices, and supporting information.
- Subtle borders and shadows rather than excessive gradients.
- Consistent button styles, border radii, and alignment.
- Responsive layouts across desktop, tablet, and mobile.

### Brand direction

Use the existing Optimax brand identity.

- Primary colour: Deep navy.
- Secondary colour: Teal.
- Background: White and subtle light-grey surfaces.
- Text: Dark navy and neutral grey.
- Accent: Optimax teal for primary actions, selected states, and important highlights.

Do not introduce a completely new visual identity.

### Overall experience

The page should feel structured, trustworthy, and easy to navigate. Avoid overwhelming users with every available module at the beginning. Introduce information progressively, starting with the three main plans and revealing more detailed pricing as the visitor scrolls.

---

## 3. Page Architecture

Implement the page in the following order:

1. Pricing Hero
2. Subscription Billing Toggle
3. Main Pricing Cards
4. Feature Comparison
5. Build Your Own ERP — Module Pricing Calculator
6. Additional Services and Add-ons
7. Cloud Hosting and Deployment Options
8. Implementation and Training
9. Support Packages
10. White-label and OEM Solutions
11. Perpetual Licensing and Long-term Plans
12. Frequently Asked Questions
13. Final Conversion Section

Each section must have a clear purpose and consistent visual treatment.

---

## 4. Section One — Pricing Hero

Create a clean hero section introducing the pricing page.

### Suggested headline

**The Right ERP Solution for Every Stage of Your Business**

### Supporting text

Choose a ready-made ERP package or build a custom solution around your business operations. With Optimax ERP, you get the tools, visibility, and control to manage your entire business from one connected platform.

### Supporting elements

- Small eyebrow text: OPTIMAX ERP PRICING.
- Primary CTA: Explore Plans.
- Secondary CTA: Book a Demo.
- Supporting trust statement: 14-day free trial. No credit card required.

The Explore Plans CTA should smoothly scroll to the pricing cards.

The Book a Demo CTA should link to the existing demo-booking flow.

---

## 5. Section Two — Billing Selector

Place a clear billing selector above the pricing cards.

Provide two options:

- Annual Billing — Save 20%.
- Monthly Billing — Flexible payments.

### Interaction requirements

When the visitor switches between billing options:

- Update all three plan prices immediately.
- Update the displayed billing description.
- Show the annual total where applicable.
- Clearly communicate the billing frequency.
- Keep the plan features unchanged.

### Authoritative subscription prices

**Starter**

- Annual billing equivalent: ₦170,000/month.
- Annual total: ₦2,040,000.
- Monthly billing: ₦204,000.

**Growth**

- Annual billing equivalent: ₦430,000/month.
- Annual total: ₦5,160,000.
- Monthly billing: ₦516,000.

**Enterprise**

- Starting price: ₦1,200,000/month.
- Custom pricing depending on deployment, modules, users, and requirements.

Important: The main pricing-card values are authoritative. Do not use conflicting Growth prices from secondary FAQ content.

All prices must display the following disclaimer:

_All prices are in Nigerian Naira (₦) and exclude 7.5% VAT._

---

## 6. Section Three — Main Pricing Cards

Create three horizontally aligned pricing cards on desktop and vertically stacked cards on mobile.

Highlight Growth as the recommended plan.

### Card A — Starter

Label: STARTER

Price: ₦170,000/month

Annual total: ₦2,040,000

Monthly billing: ₦204,000/month

User limit: Up to 20 users.

Description:

Essential business management tools for small businesses looking to organise their daily operations.

**Included features**

- Business dashboard and workspace.
- Sales Hub.
- Quotes and invoicing.
- Delivery notes.
- Single-location inventory management.
- Full Point of Sale (POS).
- HR Core.
- Employee profiles.
- Attendance management.
- Leave management.
- Expense submission and approval.
- User and role management.
- Shared cloud hosting.
- Email support with 48-hour response target.

**Not included**

- Payroll and full financial accounting.
- Procurement and vendor management.
- CRM.
- Mobile application (available as an add-on).

CTA: Get Started.

Additional users: ₦5,000/user/month.

### Card B — Growth

Label: GROWTH

Badge: MOST POPULAR

Price: ₦430,000/month

Annual total: ₦5,160,000

Monthly billing: ₦516,000/month

User limit: Up to 100 users.

Description:

A complete business management platform for growing organisations managing multiple departments, locations, and business operations.

**Everything in Starter, plus:**

- Full Commerce Suite.
- Procurement management.
- RFQ management.
- LPO management.
- Goods Received Notes (GRN).
- Vendor management.
- Vendor Self-Service Portal.
- Multi-branch inventory.
- Logistics management.
- Finance and Accounting.
- General Ledger.
- Accounts Receivable.
- Accounts Payable.
- Reconciliation.
- Full HR management.
- Payroll management.
- Recruitment.
- Performance management.
- Work schedules and shifts.
- CRM Suite.
- Office Productivity Suite.
- Configurable multi-level approval workflows.
- iOS and Android mobile applications.
- Phone and email support with 24-hour response target.

CTA: Choose Growth.

Additional users: ₦6,500/user/month.

Not included: Loan & Cooperative, Hospitality, and Tender Management modules.

### Card C — Enterprise

Label: ENTERPRISE

Price: From ₦1,200,000/month.

User limit: 100+ users / unlimited users.

Description:

A configurable enterprise platform designed for complex operations, multi-company environments, and organisations requiring advanced control and custom deployment.

**Everything in Growth, plus:**

- All available Optimax ERP modules.
- Multi-tenancy.
- Subsidiary and branch management.
- Franchise management.
- Dedicated cloud or on-premise deployment.
- OptimaxAI.
- Loan & Cooperative Management.
- Hospitality Suite.
- Tender and Bid Management.
- Custom integrations.
- Banking integrations.
- FIRS integrations.
- Biometric integrations.
- Custom API integrations.
- White-label capabilities.
- Dedicated account manager.
- Four-hour support SLA.
- Mobile applications included.

CTA: Talk to Sales.

Additional users: Unlimited, subject to the agreed enterprise deployment.

### Card design requirements

Each card should contain:

1. Plan name.
2. Short description.
3. Prominent price.
4. Billing frequency.
5. User allowance.
6. CTA.
7. Included features.
8. Expandable feature list if necessary.

Use consistent card heights on desktop where practical.

Growth should be visually prominent without making Starter and Enterprise appear less important.

---

## 7. Section Four — Feature Comparison

Create a detailed comparison table immediately after the pricing cards.

Headline:

**Compare Plans. Find Your Fit.**

Supporting text:

See exactly what each Optimax ERP package includes before making your decision.

### Comparison categories

**Core Platform**

- Business dashboard.
- User management.
- Role management.
- Shared cloud hosting.
- Multi-location support.
- Multi-tenancy.

**Commerce**

- Sales Hub.
- POS.
- Inventory.
- Procurement.
- Vendor management.
- Vendor portal.
- Logistics.

**Finance**

- General Ledger.
- Accounts Receivable.
- Accounts Payable.
- Reconciliation.
- Financial reporting.

**Human Resources**

- Employee management.
- Attendance.
- Leave management.
- Payroll.
- Recruitment.
- Performance management.
- Shift management.

**Business Management**

- CRM.
- Expense management.
- Office Productivity.
- OptimaxAI.
- Loan & Cooperative.
- Hospitality.
- Tender Management.

**Mobile and Support**

- Mobile applications.
- Offline functionality.
- Email support.
- Phone support.
- Dedicated account manager.
- Support response SLA.

### Interaction requirements

- Use checkmarks for included features.
- Use dashes or clearly labelled exclusions for unavailable features.
- Add short tooltips or descriptions where a feature name may be unfamiliar.
- Allow the visitor to expand and collapse comparison categories.
- On mobile, use horizontally scrollable comparison content or a mobile-friendly comparison layout.

Do not use arbitrary feature availability. Follow the source pricing guide.

---

## 8. Section Five — Build Your Own ERP

This should be one of the most useful interactive sections on the page.

Headline:

**Build an ERP Package Around Your Business**

Supporting text:

Only pay for the modules your business needs. Select your preferred modules and calculate your estimated monthly subscription.

### Pricing structure

Every à la carte subscription requires:

Base Platform: ₦50,000/month.

Includes up to five users.

Additional users: ₦5,000/user/month.

Hosting and basic email support are included.

### Module selection interface

Organise modules into expandable categories.

**Commerce**

| Module                     | Monthly price |
| -------------------------- | ------------: |
| POS                        |       ₦35,000 |
| Sales Hub                  |       ₦40,000 |
| Procurement & RFQ          |       ₦45,000 |
| Vendor Management          |       ₦30,000 |
| Vendor Self-Service Portal |       ₦25,000 |
| Inventory Management       |       ₦35,000 |
| Logistics Management       |       ₦25,000 |

**Finance**

| Module               | Monthly price |
| -------------------- | ------------: |
| Finance & Accounting |       ₦80,000 |

**Human Resources**

| Module                   | Monthly price |
| ------------------------ | ------------: |
| HR Core                  |       ₦45,000 |
| Payroll Management       |       ₦65,000 |
| Recruitment & Onboarding |       ₦30,000 |
| Performance Management   |       ₦25,000 |
| Work Schedules & Shifts  |       ₦20,000 |

**Business Management**

| Module                    | Monthly price |
| ------------------------- | ------------: |
| CRM Suite                 |       ₦55,000 |
| Expense Management        |       ₦20,000 |
| Office Productivity Suite |       ₦35,000 |
| OptimaxAI                 |       ₦80,000 |

**Specialised Modules**

| Module                        | Monthly price |
| ----------------------------- | ------------: |
| Loan & Cooperative Management |       ₦65,000 |
| Hospitality Suite             |      ₦120,000 |
| Tender Management             |       ₦60,000 |

**Additional Products**

| Product                      | Monthly price |
| ---------------------------- | ------------: |
| Mobile Suite — iOS & Android |       ₦40,000 |
| OptiMerce Online Storefront  |       ₦75,000 |

### Calculator functionality

Allow visitors to:

- Select and deselect individual modules.
- View the cost of each selected module.
- See the base platform charge.
- Specify the number of users.
- See additional-user charges when applicable.
- View their estimated monthly total.
- Switch between monthly and annual billing if supported by the commercial pricing rules.
- Reset their selection.
- Request a quotation based on their configuration.

### Calculation logic

Monthly total:

Base Platform + Selected Module Prices + Additional User Charges.

Additional user charge:

Maximum of (Selected Users − 5, 0) × ₦5,000.

For this calculator, do not silently apply Starter or Growth bundle prices to individual modules.

Display this disclaimer:

_Your custom package estimate is indicative. Final pricing may depend on deployment requirements, configuration, integrations, and support arrangements._

### Calculator result panel

Show a visually distinct summary containing:

- Selected modules.
- Base platform.
- Number of users.
- Additional-user cost.
- Selected module subtotal.
- Estimated monthly total.
- Estimated annual total where applicable.

CTA: Request My Custom Quote.

The CTA should pass the visitor's selections and estimated price into the existing enquiry flow if supported. Otherwise, prepare the configuration for submission through the existing contact mechanism.

---

## 9. Section Six — Additional Services and Add-ons

Headline:

**Extend Your Optimax ERP Experience**

Display additional services in a structured grid or grouped pricing list.

### Mobile Applications

- Mobile Suite — iOS and Android: ₦40,000/month.
- Included in Growth and Enterprise.
- Starter mobile pricing requires clarification before publication: the guide contains a per-platform table entry and a separate footnote stating ₦20,000/month covers both platforms.

Do not display conflicting Starter mobile prices until commercially confirmed.

### Online Storefront

OptiMerce Online Storefront: ₦75,000/month.

### Dedicated Cloud Server

Starting from ₦150,000/month.

Includes:

- Isolated cloud server.
- Custom domain.
- 500GB+ scalable storage.
- Four-hour infrastructure response SLA.
- Configurable backups.

### Additional Users

- Starter: ₦5,000/user/month.
- Growth: ₦6,500/user/month.
- Enterprise: Unlimited, based on agreed deployment.

Use clear pricing labels and short explanations.

---

## 10. Section Seven — Hosting and Deployment

Headline:

**Choose How Your Business Runs Optimax**

Create three deployment options.

### Shared Cloud Hosting

Included in subscription plans.

Features:

- Subdomain.
- Daily backups.
- 30-day backup retention.
- SSL security.
- Automatic updates.
- Security patches.
- 99.9% uptime target.
- Starter storage: up to 50GB.
- Growth storage: up to 200GB.

### Dedicated Cloud

From ₦150,000/month.

Features:

- Isolated server environment.
- Custom domain.
- 500GB+ scalable storage.
- Configurable backups.
- Four-hour infrastructure response SLA.

### On-Premise Deployment

Requires a perpetual licence.

Features:

- Customer-provided infrastructure.
- Customer-managed server.
- Greater control over network and data.
- Offline or air-gapped deployment capability.

Add a comparison layout explaining who each deployment option is suitable for.

Do not imply that dedicated cloud or on-premise deployment is included in standard shared-cloud subscriptions.

---

## 11. Section Eight — Implementation and Training

Headline:

**Get Your Business Up and Running with Expert Implementation**

Display implementation packages as clearly priced services.

### Starter Onboarding

₦75,000 one-time.

Includes:

- Remote setup.
- Account and tenant setup.
- Basic data loading.
- One two-hour virtual training session.
- Go-live checklist.

### Standard Implementation

₦250,000–₦400,000 one-time.

Includes:

- Full module configuration.
- Up to two years of historical data migration.
- Approval workflow configuration.
- User roles and permissions.
- Four virtual training sessions.
- 30-day post-go-live support.

### Enterprise Implementation

From ₦800,000, subject to scope.

Includes:

- Project management.
- On-site discovery and workshops.
- Full data migration and cleansing.
- Custom reports and workflows.
- Third-party integrations.
- Multi-location configuration.
- Department-specific training.
- 90-day hypercare.

### Additional Training

- Two-hour virtual training: ₦25,000.
- Full-day virtual training: ₦60,000.
- On-site training: ₦80,000/day plus travel.
- Custom training video: ₦50,000.

CTA: Discuss Implementation.

---

## 12. Section Nine — Support Packages

Headline:

**Support That Keeps Your Business Moving**

Present four support levels.

### Basic — Included in Starter

- Email support.
- 48-hour response target.
- Knowledge base.
- In-app bug reporting.

### Standard — Included in Growth

- Email, phone, and WhatsApp support.
- 24-hour response target.
- Monthly check-in.
- Training videos and guides.

### Priority — ₦50,000/month

Includes Standard, plus:

- Eight-hour SLA.
- Named support contact.
- Biweekly reviews.
- Screen-sharing assistance.

### Dedicated — ₦150,000/month

Includes:

- Four-hour SLA.
- 24/7 support coverage.
- Dedicated account manager.
- Quarterly on-site visits.
- Custom feature prioritisation.
- Annual business review.

Use a clear comparison table rather than four unnecessarily large cards.

---

## 13. Section Ten — White-label and OEM Solutions

Headline:

**Launch Your Own Branded ERP Platform**

Supporting text:

Partner with Optimax to deliver a business management platform under your own brand.

### White-label Starter

Setup: ₦150,000 one-time.

Subscription: ₦50,000/month.

Includes:

- Basic logo and colour rebranding.
- Custom subdomain per client.
- Reseller administration dashboard.
- Optimax attribution footer.
- Minimum three client deployments.

### White-label Growth

Setup: ₦300,000 one-time.

Subscription: ₦100,000/month.

Includes:

- Full brand and name replacement.
- Custom domain.
- Branded mobile application.
- Co-branded or fully unbranded options.
- Partner training.
- Partner success manager.
- Minimum ten client deployments.

### Enterprise OEM

Custom engagement.

Commercial model:

- Revenue sharing or flat fee.

Includes:

- Zero Optimax branding.
- Dedicated mobile application under the partner's store account.
- Custom feature prioritisation.
- Source code escrow.
- Joint go-to-market opportunities.

CTA: Become an Optimax Partner.

---

## 14. Section Eleven — Perpetual Licensing and Long-term Plans

Headline:

**Explore Long-term Licensing Options**

Explain the distinction between subscription-based cloud access and perpetual licensing.

### Two-Year Cloud Prepayment

- 24 months of subscription.
- 20% discount on the total monthly-rate equivalent.
- Growth example: ₦8,256,000.
- Savings: ₦2,064,000.

### Three-Year Cloud Prepayment

- 36 months of subscription.
- 30% discount on the total monthly-rate equivalent.
- Growth example: ₦10,836,000.
- Savings: ₦4,644,000.

### On-Premise Perpetual Licence

Growth example:

₦15,480,000 one-time.

Includes:

- Perpetual licence.
- 12 months of updates and support.

Annual maintenance:

20% of licence fee.

Growth example: ₦3,096,000/year.

### Enterprise Perpetual Licence

Typically from ₦15,000,000, subject to scope.

Includes:

- Source code escrow.
- Dedicated implementation.
- 12-month support.

Annual maintenance starts from ₦3,000,000/year.

Use a comparison table to explain subscription, prepayment, and perpetual ownership models.

Do not suggest that perpetual licensing means lifetime free hosting, updates, or support.

---

## 15. Section Twelve — Frequently Asked Questions

Create an accordion FAQ section.

Include questions covering:

1. What is included in each Optimax ERP plan?
2. Can I change my subscription plan later?
3. Can I pay monthly?
4. Is hosting included?
5. Is there a free trial?
6. Can I migrate data from Excel or another ERP?
7. Does Optimax support multiple branches?
8. Can I deploy Optimax on my own server?
9. Are mobile applications included?
10. Can I purchase individual modules?
11. Does Optimax support Nigerian payroll requirements?
12. Is the platform suitable for multiple subsidiaries?
13. Can I resell Optimax under my own brand?
14. What happens if I exceed my user limit?
15. Does the price include VAT?

### FAQ content rules

- State that the free trial lasts 14 days and does not require a credit card.
- Explain that monthly billing is available without a minimum contract and customers can cancel anytime.
- Explain that annual billing locks the rate for 12 months.
- State that hosting is included in subscription plans, while dedicated cloud and on-premise deployment have separate commercial arrangements.
- Explain that Standard implementation supports up to two years of historical data migration, while Enterprise migration is scoped.
- State that all listed prices exclude 7.5% VAT.

**Important pricing rule:** Do not copy conflicting FAQ prices from the PDF. The main pricing cards and relevant module pricing tables are authoritative.

---

## 16. Section Thirteen — Final Conversion Section

End the page with a strong conversion section.

### Headline

**Ready to Bring Your Entire Business Together?**

### Supporting text

From sales and inventory to finance, HR, procurement, and business intelligence, Optimax ERP gives your organisation one connected platform to operate with greater visibility and control.

### CTAs

Primary: Start Your 14-Day Free Trial.

Secondary: Book a Personalised Demo.

Supporting text:

No credit card required. Talk to our team to find the right solution for your business.

Use the existing Optimax contact, registration, and demo-booking routes.

---

## 17. Functional and Technical Requirements

Implement this within the existing Optimax website architecture.

Do not rebuild unrelated sections of the website or introduce a separate application unnecessarily.

### Component architecture

Organise the page into reusable components.

Suggested structure:

- PricingPage
  - PricingHero
  - BillingToggle
  - PricingPlans
  - PricingCard
  - FeatureComparison
  - CustomPricingCalculator
  - ModuleCategory
  - PricingSummary
  - AddOnServices
  - HostingOptions
  - ImplementationPackages
  - SupportPackages
  - WhiteLabelSolutions
  - LicensingOptions
  - PricingFAQ
  - PricingCTA

Keep pricing data separate from presentation components.

### Pricing data management

Create a central pricing configuration containing:

- Plan names.
- Annual billing prices.
- Monthly billing prices.
- Annual totals.
- User limits.
- Module prices.
- Additional user charges.
- Hosting costs.
- Support costs.
- Implementation costs.
- White-label pricing.
- Licensing examples.

Avoid hardcoding the same price in multiple components.

This makes future commercial updates easier and reduces inconsistent pricing across the page.

### Interaction requirements

- Billing toggle updates all relevant plan prices.
- Pricing CTAs navigate to their intended destinations.
- Feature comparison categories expand and collapse.
- Module calculator updates totals immediately.
- Calculator selections can be reset.
- FAQ items expand and collapse.
- Navigation anchors scroll smoothly.
- Buttons have clear hover, focus, loading, and disabled states where appropriate.

### Accessibility

- Use semantic headings.
- Ensure keyboard navigation.
- Provide visible focus indicators.
- Use accessible labels for interactive controls.
- Do not rely on colour alone to communicate selected or unavailable states.
- Maintain sufficient colour contrast.

### Responsive behaviour

Desktop:

- Three pricing cards in one row.
- Comparison table with readable columns.
- Calculator with module selection on the left and summary on the right.

Tablet:

- Two-column layouts where appropriate.
- Maintain readable pricing and card spacing.

Mobile:

- Stack pricing cards vertically.
- Keep prices and CTAs prominent.
- Use a mobile-friendly comparison layout.
- Stack calculator sections and make the pricing summary easy to access.
- Avoid horizontal page overflow.

### Performance

- Avoid unnecessary animation libraries or heavy dependencies.
- Lazy-load non-critical content where appropriate.
- Keep animations subtle and performant.
- Prevent layout shifts.
- Reuse existing website styles and components where practical.

---

## 18. Motion and Micro-interactions

Use subtle motion to make the page feel polished without distracting from pricing information.

- Hero heading and supporting text enter smoothly.
- Pricing cards fade and move slightly into view.
- Growth card receives a restrained visual emphasis.
- Billing prices transition smoothly when toggled.
- Selected calculator modules receive a clear visual state.
- Calculator totals update without jarring layout changes.
- Comparison categories expand smoothly.
- FAQ accordions animate their open and close states.
- CTA buttons have subtle hover feedback.

Use scroll-triggered animation sparingly. Respect reduced-motion preferences.

Do not animate every element independently.

---

## 19. Commercial Accuracy and Content Validation

This section is mandatory.

Before publishing, validate the pricing configuration against the commercial guide.

Use these rules:

1. Main subscription card values take priority over conflicting FAQ figures.
2. The authoritative bundle prices are Starter ₦170,000, Growth ₦430,000, and Enterprise from ₦1,200,000 per month.
3. Use the individual module pricing table for à la carte module costs.
4. Do not reuse the conflicting FAQ examples for Loan & Cooperative, Hospitality, or Tender Management.
5. Do not publish an unconfirmed Starter mobile add-on price.
6. All subscription and add-on prices must be clearly labelled as monthly, annual, or one-time.
7. All prices must state that 7.5% VAT is excluded.
8. Clearly distinguish included features from paid add-ons.
9. Clearly distinguish shared hosting from dedicated cloud and on-premise deployment.
10. Do not invent discounts, integrations, guarantees, or features not supported by the commercial guide.

The pricing guide is marked for internal, sales, and partner use. Obtain the appropriate commercial approval before making the pricing publicly available.

---

## 20. Acceptance Criteria

The implementation is complete when:

- All three subscription plans display the correct prices.
- Monthly and annual billing switch correctly.
- Growth is clearly identified as the recommended plan.
- Features are accurately categorised and compared.
- The module calculator returns correct totals.
- Additional user charges calculate correctly.
- All add-on prices are labelled accurately.
- Hosting and deployment options are understandable.
- Implementation and support packages are displayed.
- White-label and perpetual licensing options are included.
- FAQ content does not contradict the main pricing cards.
- All CTAs link to working destinations.
- The page works across desktop, tablet, and mobile.
- No horizontal overflow or broken layouts exist.
- All interactive elements work with keyboard and touch input.
- Existing website navigation and unrelated functionality remain intact.

**Final implementation goal:** Deliver a pricing page that makes Optimax ERP's commercial offering easy to understand, builds confidence in the product, and helps businesses move from exploring plans to requesting a demo or starting a trial.
