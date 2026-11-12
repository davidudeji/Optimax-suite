# SPEC.md — Optimax ERP Module Image Discovery & Integration

## 1. Project Overview

Find out the suitable section of the Optimax website homepage and identify the appropriate visual assets for the following ERP modules:

1. Dashboard
2. Commerce
3. Personnel
4. POS (Point of Sale)
5. CRM (Customer Relationship Management)
6. Expense
7. Finance
8. Settings

The objective is to source high-quality, professional images from **Unsplash** that visually communicate the purpose, functionality, and business context of each module.

The selected images must complement the existing website design rather than introduce a new or inconsistent visual direction.

## 2. Primary Objectives

- Analyze the attached website section before making any changes.
- Understand the visual hierarchy, layout, typography, spacing, colors, and overall design language.
- Understand what each ERP module represents.
- Search Unsplash for images that communicate the functionality of each module.
- Select images based on relevance, visual quality, composition, and consistency.
- Integrate the selected images into the existing website section.
- Preserve the current layout, responsiveness, and brand identity.

## 3. Module-by-Module Image Direction

### A. Dashboard

**Purpose:** Provides an overview of business performance, operations, and important business metrics.

Image direction:

- Business executive analyzing performance reports.
- Professional looking at analytics on a computer screen.
- Modern office environment with data-driven decision-making.
- Business intelligence and operational monitoring.

Search keywords:

- `business analytics dashboard`
- `business intelligence office`
- `executive analyzing business data`
- `business performance analytics`

Visual objective: Communicate visibility, control, intelligence, and business performance.

### B. Commerce

**Purpose:** Manages business transactions, sales, procurement, inventory, and vendor relationships.

Image direction:

- Modern commercial operations.
- Warehouse inventory management.
- Supply chain operations.
- Business transactions and procurement activities.
- Retail and wholesale business environments.

Search keywords:

- `modern warehouse inventory management`
- `supply chain business operations`
- `commercial business operations`
- `warehouse logistics management`

Visual objective: Communicate connected commercial operations and business growth.

### C. Personnel

**Purpose:** Manages employees, recruitment, attendance, organizational structure, and workforce operations.

Image direction:

- Professional employees collaborating in an office.
- Human resource management activities.
- Corporate team meetings.
- Employee engagement and workforce management.

Search keywords:

- `professional corporate team meeting`
- `human resources management`
- `modern office employees`
- `business team collaboration`

Visual objective: Communicate people management, workforce organization, and productivity.

### D. POS (Point of Sale)

**Purpose:** Supports retail transactions, checkout operations, and payment processing.

Image direction:

- Modern retail checkout counter.
- Cashier using a digital POS terminal.
- Customer making a contactless payment.
- Retail transaction environment.
- Tablet-based checkout systems.

Search keywords:

- `modern retail point of sale`
- `digital payment terminal retail`
- `contactless payment checkout`
- `modern retail cashier`

Visual objective: Communicate transaction speed, convenience, and modern retail operations.

### E. CRM (Customer Relationship Management)

**Purpose:** Helps businesses manage customer information, relationships, communication, and sales opportunities.

Image direction:

- Business professional interacting with customers.
- Customer support representative using a computer.
- Professional client consultation.
- Sales team communicating with customers.
- Customer relationship and business networking.

Search keywords:

- `customer relationship management business`
- `professional client consultation`
- `customer support office`
- `business sales team meeting`

Visual objective: Communicate customer engagement, relationship building, and sales management.

### F. Expense

**Purpose:** Manages operational expenses, spending records, expense reporting, and approvals.

Image direction:

- Professional reviewing invoices and receipts.
- Business expense documentation.
- Financial reporting and expense analysis.
- Employee submitting business expenses.
- Office desk with calculator and financial documents.

Search keywords:

- `business expense management`
- `financial documents invoice desk`
- `business accounting receipts`
- `expense reporting business`

Visual objective: Communicate accountability, transparency, and control over business spending.

### G. Finance

**Purpose:** Handles financial management, accounting, general ledger, financial reporting, and business performance.

Image direction:

- Financial analyst reviewing reports.
- Accounting professionals working with financial statements.
- Business financial planning.
- Professional financial analysis environment.
- Modern office with financial data visualization.

Search keywords:

- `corporate financial analysis`
- `professional accounting office`
- `financial planning business`
- `business financial reporting`

Visual objective: Communicate financial accuracy, stability, visibility, and informed decision-making.

### H. Settings

**Purpose:** Provides centralized configuration and administration for the ERP platform.

Image direction:

- Minimal and modern technology workspace.
- IT professional managing computer systems.
- System administration and configuration.
- Professional interacting with a computer workstation.

Search keywords:

- `IT system administration`
- `technology workspace computer`
- `software configuration workstation`
- `IT professional computer systems`

Visual objective: Communicate configuration, administration, flexibility, and system control.

## 4. Unsplash Image Discovery Requirements

Use Unsplash as the primary image source.

Website: https://unsplash.com/

For every module:

1. Search using multiple relevant keywords.
2. Review the available image results.
3. Select the image that best communicates the module's purpose.
4. Prefer authentic business environments over generic staged stock photography.
5. Prioritize images with professional lighting, strong composition, and sufficient resolution.
6. Ensure the subject is clearly visible.
7. Avoid images containing prominent watermarks, distracting text, or unrelated branding.
8. Avoid selecting eight images that look almost identical.

### Image Quality Standards

- Minimum recommended resolution: 1200px on the longest side.
- Prefer landscape photography where the existing layout requires it.
- Use consistent image treatment across all modules.
- Prefer natural lighting and realistic business environments.
- Avoid overly saturated colors and excessive visual effects.
- Avoid illustrations when professional photography is more appropriate.

## 5. Visual Consistency

All selected images must feel like part of one enterprise software product.

Maintain consistency in:

- Photography style.
- Image quality.
- Lighting.
- Color balance.
- Composition.
- Cropping.
- Border radius.
- Image dimensions.

The images should complement Optimax's existing navy, white, and teal brand identity.

Do not force every image to contain the brand colors. Natural photography is preferred, provided it does not visually conflict with the website.

## 6. Website Analysis Before Implementation

Before integrating images, inspect the attached website section and determine:

- How the modules are currently presented.
- Whether each module has an existing image container.
- Whether images appear as backgrounds, thumbnails, illustrations, or standalone visuals.
- The existing image aspect ratio.
- The available space for imagery.
- Whether the section uses cards, tabs, a grid, or another layout.
- How the layout behaves on mobile and desktop.

Do not redesign the section simply to accommodate the images.

Use the existing design structure unless a small adjustment is necessary for proper image presentation.

## 7. Implementation Requirements

After identifying suitable images:

- Integrate the images into their corresponding module sections.
- Preserve all existing module names and descriptions.
- Maintain existing navigation and interactions.
- Use responsive image containers.
- Apply appropriate `object-fit: cover` or equivalent image fitting.
- Use consistent border radii and image positioning.
- Prevent image stretching and distortion.
- Add meaningful alt text for accessibility.
- Use lazy loading where appropriate.
- Ensure images load efficiently.

### Image Asset Management

Use descriptive asset names if images are downloaded locally:

- `dashboard-module.jpg`
- `commerce-module.jpg`
- `personnel-module.jpg`
- `pos-module.jpg`
- `crm-module.jpg`
- `expense-module.jpg`
- `finance-module.jpg`
- `settings-module.jpg`

Prefer optimized local image assets when the project architecture supports them.

If using remote Unsplash images, use reliable image URLs and appropriate width and quality parameters. Do not rely on temporary image URLs.

## 8. Design Quality Restrictions

Avoid the following:

- Random stock photography unrelated to the module.
- Generic images repeated across multiple modules.
- Images that compete with the module heading.
- Excessive gradients or decorative overlays.
- Unnecessary icons added on top of photographs.
- Arbitrary image shapes that conflict with the existing design.
- Inconsistent image dimensions.
- Unnecessary changes to the website's layout.
- Fake screenshots of ERP functionality.
- AI-generated dashboard interfaces presented as real Optimax product screenshots.

**Important:** The purpose of these images is to provide meaningful visual context, not to make the website look like a generic stock photography template.

## 9. Final Validation

After implementation, verify:

- All eight modules have relevant images.
- Each image accurately represents its module.
- Images are visually consistent.
- Images display correctly on desktop, tablet, and mobile.
- No image is distorted or improperly cropped.
- Existing website functionality remains intact.
- No broken image URLs exist.
- Page performance is not negatively affected.

## 10. Expected Deliverables

Provide the following:

1. A brief analysis of the attached website section.
2. A list of all eight modules and their selected Unsplash images.
3. The original Unsplash image source links.
4. A short explanation of why each image was selected.
5. Implementation of the selected images in the existing website.
6. A summary of files modified.
7. Confirmation that responsive behavior and existing functionality have been preserved.

## 11. Final Instruction

Work directly with the attached Optimax website section.

Do not start by randomly downloading images.

First understand the module, then search for images that communicate its purpose, compare the available options, and select the strongest visual match.

**The final result should look like a professionally designed enterprise ERP platform where every image has a clear purpose and strengthens the user's understanding of the module.**
