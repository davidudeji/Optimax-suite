# Homepage Content and Footer Spec

## Goal

Add a polished trust-and-impact section to the homepage, using the attached reference for its content and layout cues while preserving Optimax's current hero branding. The result should feel intentional, refined, and award-caliber without copying another website or introducing a new visual identity.

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

- The new section presents the partner content and four stats from the reference, subject to verification of claims and figures.
- The comparison section appears after the workflow explanation and before industry/pricing content, and presents the reference matrix with accessible table semantics.
- The footer contains the referenced social/store-link row; all rendered links have valid, verified destinations.
- The section uses Optimax's current hero branding and complements, rather than replaces, existing homepage content.
- Each stat counts upward to its final value in the displayed left-to-right order when the section first comes into view.
- Comparison claims are verified against approved sources before publication; unverified claims are corrected or omitted.
- Reduced-motion, keyboard, screen-reader, and responsive behavior are supported.
- No unsupported customer relationships, logos, endorsements, statistics, or growth claims are published.
