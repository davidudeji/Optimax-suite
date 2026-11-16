# Homepage Content and Footer Spec

## Goal

Implement the homepage content updates in this spec using the attached references while preserving Optimax's current hero branding. The result should feel intentional, refined, and award-caliber without copying another website or introducing a new visual identity.

## Business Benefits Carousel

### Placement and spacing

- Keep this section directly below the hero/statistics area and before the platform modules section.
- Fix the current narrow content column and excess side whitespace. Use a full-width section surface with a centered inner container, a consistent responsive page gutter, and balanced vertical spacing.
- Keep the heading/supporting copy aligned with the carousel content and provide enough breathing room around the image, text, and controls.

### Content

Keep the existing heading and benefit copy unchanged:

- Section heading: **Everything your business needs. Working together.**
- **One business view** — Bring core business functions into one suite.
- **Financial clarity** — Keep financial records and reporting in reach.
- **Organized operations** — Manage everyday work across dedicated modules.
- **Informed decisions** — Review business activity through reports and dashboards.
- **Ready to grow** — Explore the modules that fit your business needs.

Remove the decorative `01`–`05` numbers. Do not remove or alter the separate impact statistics section.

### Carousel imagery

Show one benefit per slide with an existing, locally stored image tailored to its subject:

| Benefit | Asset |
|---|---|
| One business view | `/assets/images/optimax-dashboard-hero.png` |
| Financial clarity | `/assets/images/modules/finance-module.jpg` |
| Organized operations | `/assets/images/modules/pos-module.jpg` |
| Informed decisions | `/assets/images/report.jpg` |
| Ready to grow | `/assets/images/modules/personnel-module.jpg` |

Use descriptive alt text, responsive image sizing, and lazy loading. Do not use remote stock imagery or introduce new image files/dependencies for this section.

### Carousel behavior and accessibility

- Provide visible previous/next controls and direct slide selection controls; do not auto-rotate.
- Keep controls keyboard-operable with visible focus and accessible names. Support touch interaction without requiring hover.
- Identify the carousel and each slide semantically. Hide inactive slides from assistive technology and provide a meaningful, non-numbered accessible description for the current slide.
- Respect reduced-motion preferences and avoid motion that interferes with reading or control use.
- Keep all slides available if JavaScript is unavailable; ensure the initial slide and its content render immediately.
- Maintain a responsive composition with no clipped content or page-level horizontal overflow.

## Content

### Trusted partners

- Eyebrow: **TRUSTED PARTNERS**
- Heading: **Trusted by businesses across Africa and beyond**
- Supporting text: **Powering growth for SMEs and enterprises across every sector.**
- Present the referenced organizations as a clean, horizontally moving or responsive collection of text chips:
  - Dangote Group
  - MTN Nigeria
  - Zenith Bank
  - Access Bank
  - Flour Mills
  - BUA Group
  - Guinness Nigeria
  - Indomie
  - First Bank
  - GT Bank
  - Shoprite
  - Chicken Republic
  - Tantalizers
  - Sundry Foods
  - PZ Cussons
  - Honeywell
  - Oando
  - Seplat
  - Julius Berger
  - ARM Holdings

Use the names as text, not unverified logos. Confirm the listed customer/partner relationships against approved website or business sources before publishing; do not imply endorsements or partnerships that cannot be verified. Avoid duplicate names when laying out or animating the collection.

### Impact stats

Show four metrics in this order:

1. **100+** — CLIENTS
2. **512+** — ACTIVE USERS
3. **12** — MODULES
4. **4+** — COUNTRIES

Treat these as reference values and verify them against approved, current business data before publishing. Preserve their exact values and labels; do not invent, round, or silently change figures.

Below the stats, include the reference supporting line: **Growing every month — built for businesses across Africa and beyond**. Verify that this claim is approved before publication.

## ERP Comparison Section

### Placement

Place the comparison section after the homepage workflow/product explanation and before the industry and pricing sections. Visitors should understand Optimax's offering before they see a side-by-side comparison.

### Content

- Heading: **Why businesses choose OptimaX over the rest**
- Supporting text: **A transparent look at how we compare against leading ERP solutions.**
- Use a comparison table with these columns, in order: **Feature**, **OptimaX**, **SAP Business One**, **Odoo**, **QuickBooks**, **Sage 200**.
- Mark OptimaX as **BEST CHOICE** in its column header.

Use the following reference matrix. A check mark means fully supported, a dash means partial support or an add-on, and a cross means not available.

| Feature | OptimaX | SAP Business One | Odoo | QuickBooks | Sage 200 |
|---|---|---|---|---|---|
| Africa-first localisation | ✓ | — | — | ✕ | — |
| Built-in POS + ERP | ✓ | — | ✓ | ✕ | — |
| Multi-currency (NGN, GHS, KES) | ✓ | ✓ | ✓ | ✕ | ✓ |
| Affordable SME pricing | ✓ | ✕ | ✓ | ✓ | — |
| HR + Payroll included | ✓ | — | ✓ | ✕ | ✓ |
| Full offline support | ✓ | — | — | — | — |
| 24/7 African time-zone support | ✓ | ✕ | ✕ | ✕ | ✕ |
| Fast 2-week implementation | ✓ | ✕ | — | ✓ | — |
| No per-module licensing | ✓ | ✕ | ✕ | ✓ | ✕ |
| Custom workflows | ✓ | ✓ | ✓ | ✕ | ✓ |

- Include a legend: **✓ = Fully supported · — = Partial / add-on · ✕ = Not available**.
- Include the CTA **Start with OptimaX today →**, linking to the existing `/get-started` route.

### Verification and responsible comparison

Treat every capability, price, implementation timeline, support claim, and competitor comparison in the matrix as unverified reference content until reviewed by the product/business owner against current, reliable sources. Verify that each comparison is fair, current, and specific to the named product/version and applicable plan or configuration. Do not publish unsupported superiority claims or misleading competitor statements. If any cell cannot be substantiated, correct it with approved evidence or omit that comparison before launch.

## Comparison visual and interaction requirements

- Reuse Optimax's existing homepage typography, colors, and spacing. Highlight the OptimaX column using the current brand palette, without making the other products difficult to read.
- Use a semantic HTML table with a caption or accessible heading, column headers, and row headers. Provide text labels for symbols so meaning does not depend on color or icon shape.
- Keep the table readable on desktop and tablet. On narrow screens, place it in a clearly indicated, touch-scrollable horizontal container; do not cause page-level horizontal overflow. Preserve the feature name and column context while scrolling.
- Keep row spacing, borders, hover treatment, and the CTA restrained and consistent with the homepage design system.
- Ensure keyboard access to horizontal scrolling, visible focus, sufficient contrast, and a useful screen-reader experience.

## Industry Showcase

### Placement and content

- Keep the industry showcase after the ERP comparison and before pricing.
- Use the heading **Works across every industry** and explain that OptimaX adapts to retailers, supermarkets, pharmacies, distributors, and service companies.
- Add the **KEY FEATURES** list:
  - **Supermarkets** — Manage POS, inventory, and store operations in real time.
  - **Manufacturing** — Monitor production, raw materials, and supply flow.
  - **Restaurants & Hospitality** — Manage orders, stock usage, and daily sales.
  - **E-commerce Stores** — Sync online orders, inventory, and payments.
- End the copy column with the concise trust markers **Fast**, **Secure**, and **Reliable**.

### Visual and interaction requirements

- Replace the small 2-by-2 image-card layout with a balanced two-column section: copy and key features on the left, a photo mosaic on the right, and an OptimaX brand tile centered in the mosaic.
- Use seven labeled, clickable industry photos for pharmacies, hospitals and clinics, restaurants and cafes, hotels and hospitality, manufacturing, warehousing, and construction. Link each card to its matching existing industry route.
- Use descriptive image alt text, lazy-load the photos, and crop them consistently. Keep the brand tile non-interactive and use the local OptimaX app mark.
- On tablet, stack the copy above the mosaic. On mobile, reflow the mosaic into two columns; preserve readable labels, keyboard-visible focus, and no page-level horizontal overflow.

| Tile | Image source | Route |
|---|---|---|
| Pharmacies | Unsplash photo `1576602976047-174e57a47881` | `/industries/healthcare` |
| Hospitals & Clinics | Unsplash photo `1519494026892-80bbd2d6fd0d` | `/industries/healthcare` |
| Restaurants & Cafes | Unsplash photo `1414235077428-338989a2e8c0` | `/industries/hospitality` |
| Hotels & Hospitality | Unsplash photo `1566073771259-6a8506099945` | `/industries/hospitality` |
| Manufacturing | Existing Unsplash photo `1567789884554-0b844b597180` | `/industries/manufacturing` |
| Warehousing | `/assets/images/modules/commerce-module.jpg` | `/industries/logistics` |
| Construction | Unsplash photo `1504307651254-35680f356dfd` | `/industries/construction` |

## Footer Social and App Links

### Placement and layout

Add a distinct footer bottom row beneath the existing footer navigation, using the attached reference as a cue:

- Place the five social links together on the left: Facebook, YouTube, Instagram, LinkedIn, and X.
- Place the App Store and Google Play download badges together on the right.
- Keep the existing copyright/contact content in a separate, legible line below or alongside this row, adapting to the current footer layout.
- On narrow screens, wrap or stack the social links and badges cleanly; do not clip them or create horizontal page overflow.

### Destinations and behavior

- Use the social account destinations currently published on the Optimax homepage:
  - Facebook: `https://www.facebook.com/profile.php?id=61587287975959`
  - YouTube: `https://www.youtube.com/@OptimaXSuites`
  - Instagram: `https://www.instagram.com/optimaxsuites/`
  - LinkedIn: `https://www.linkedin.com/company/centrifuge-group/`
  - X: `https://x.com/optimaxsuites/`
- Open social destinations in a new tab with `rel="noopener noreferrer"`. Give every icon-only link a descriptive accessible name, visible keyboard focus, and a sufficiently large touch target.
- Link each store badge directly to the confirmed OptimaX app listing for that store. Do not use `#`, generic store home/search pages, or unrelated applications as destinations.
- The repository and current public store search do not provide verified OptimaX App Store or Google Play listing URLs. Obtain the official listing URL for each available platform before rendering its badge as a link. If no listing exists for a platform, omit that badge rather than showing a nonfunctional or misleading control.
- The product owner confirmed that neither store listing is published yet. Omit both badges until official listings are available.

### Acceptance criteria

- Social links navigate to their intended, currently published accounts and are operable by keyboard and touch.
- Store badges are shown only for platforms with confirmed OptimaX listings and open the correct listing.
- No placeholder `href="#"` or generic app-store destination remains in the active homepage footer.
- Footer content preserves the existing navigation and copyright, adapts to mobile, and matches the current Optimax brand styling.

## Visual direction

- Reuse the existing homepage hero's brand palette, typography, and visual language so this section feels native to the current site.
- Present the business benefits as a refined image-and-copy carousel, with the slide image and benefit text balanced at desktop sizes and comfortably stacked on mobile.
- Create clear contrast between the light partner area and the darker stats area, using existing brand colors rather than introducing a new palette.
- Keep the partner names legible in restrained, consistent text chips; avoid fabricated logos, excessive decoration, and visual clutter.
- Present the metrics with strong hierarchy, generous spacing, subtle dividers, and clear labels. Ensure the section transitions smoothly from the sections above and below it.
- Make the partner collection usable on small screens without clipped text or page-level horizontal overflow. If it scrolls or marquee-animates, provide a touch-friendly, keyboard-accessible alternative and respect reduced-motion preferences.
- Keep the layout responsive across mobile, tablet, and desktop breakpoints.

## Number animation and accessibility

- When the stats section first enters the viewport, animate each numeric value upward from zero to its verified final value.
- Stagger the count-up animations in the displayed order, from **CLIENTS** through **COUNTRIES**; do not reorder the metrics by value.
- Keep the animation smooth, restrained, and brief. The final value must remain visible after the animation and must not depend on scrolling repeatedly.
- Render the final values immediately when reduced motion is enabled, and ensure assistive technology receives meaningful labels and does not announce every intermediate count.
- Ensure the stats remain understandable and complete if animation or JavaScript is unavailable.

## Acceptance criteria

- The benefits section uses the full available content width with balanced spacing, keeps the existing copy, removes the `01`–`05` markers, and presents all five benefits in an accessible, manually controlled image carousel using the listed local assets.
- The new section presents the partner content and four stats from the reference, subject to verification of claims and figures.
- The comparison section appears after the workflow explanation and before industry/pricing content, and presents the reference matrix with accessible table semantics.
- The industry showcase follows the comparison section and precedes pricing, with the feature list, linked image mosaic, and central OptimaX brand tile.
- The footer contains the referenced social/store-link row; all rendered links have valid, verified destinations.
- The section uses Optimax's current hero branding and complements, rather than replaces, existing homepage content.
- Each stat counts upward to its final value in the displayed left-to-right order when the section first comes into view.
- Comparison claims are verified against approved sources before publication; unverified claims are corrected or omitted.
- Reduced-motion, keyboard, screen-reader, and responsive behavior are supported.
- No unsupported customer relationships, logos, endorsements, statistics, or growth claims are published.
