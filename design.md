# Optimax Website Redesign — Brand-Preserving UI/UX Enhancement

## 1. Project Objective

Conduct a professional UI/UX redesign of the existing Optimax website:

**Website:** https://www.optimaxsuites.com/

The objective is to significantly improve the website's visual quality, user experience, layout, consistency, and responsiveness while preserving all existing website content, brand identity, routes, and functionality.

This is a **visual and structural redesign, not a copywriting or content-rewriting project.**

The finished website should communicate the credibility and polish of a premium enterprise SaaS platform.

## 2. Non-Negotiable Content Preservation

Do not change any existing text on the website.

This applies to:

- Main headings and subheadings.
- Paragraphs and descriptions.
- Navigation labels and dropdown items.
- Button and CTA text.
- Product and module names.
- Feature descriptions.
- Testimonials and customer information.
- Footer content.
- Contact information.
- Form labels, placeholders, and messages.
- Any other visible website text.

Do not rewrite, paraphrase, shorten, expand, remove, or invent content.

Preserve original capitalization, punctuation, spelling, and wording.

Do not introduce new marketing claims, statistics, testimonials, certifications, product capabilities, or integrations.

If a design improvement appears to require new text, find a visual solution that uses the existing content instead.

## 3. Phase One: Audit the Existing Website

Before implementation, inspect the actual website and the existing project source code.

Do not rely exclusively on screenshots, summaries, or previously generated descriptions.

### Website audit

Inspect:

- Every accessible website page.
- Existing navigation and dropdown menus.
- Hero section and homepage structure.
- Product and module sections.
- Existing images and screenshots.
- CTA placement and behavior.
- Footer and contact sections.
- Existing animations and transitions.
- Mobile and tablet layouts.
- Existing forms, links, and interactions.

### Source-code audit

Inspect:

- Existing components and page structure.
- CSS, SCSS, Tailwind configuration, or other styling systems.
- Existing design tokens and variables.
- Image, logo, icon, and font assets.
- Routing configuration.
- Reusable components.
- Third-party libraries and dependencies.

### Create a baseline

Before changing anything, establish:

1. A complete inventory of visible website text.
2. An inventory of pages and routes.
3. A record of existing functionality.
4. Desktop and mobile screenshots.
5. An inventory of existing brand and product assets.

Use these as the reference for the final regression checks.

## 4. Phase Two: Brand and Design Direction

Develop a consistent visual system based on Optimax's existing brand identity.

Use the following proposed palette as the starting point, subject to inspection of the original logo and brand assets.

| Token | Color | Usage |
|---|---|---|
| Primary Navy | #0B1B33 | Navigation, hero, headings, footer |
| Primary Teal | #00A6A6 | Primary interactions, highlights, active states |
| White | #FFFFFF | Main backgrounds and contrast |
| Light Background | #F4F7FA | Alternating content sections |
| Secondary Text | #526174 | Supporting descriptions |
| Border | #DCE5ED | Dividers, outlines, separators |
| Accent Orange | #F59E0B | Occasional visual emphasis |

### Color application

Use a restrained 60–30–10 visual distribution:

- 60% white and light backgrounds.
- 30% deep navy.
- 10% teal.

Use orange sparingly. It should not compete with the primary brand colors.

Do not introduce excessive gradients, unnecessary decorative elements, or competing accent colors.

### Typography

Inspect existing brand typography first.

If the existing typeface is unsuitable or unavailable, select a professional, highly readable sans-serif typeface appropriate for enterprise software.

Establish consistent typography rules for:

- Main headlines.
- Section headings.
- Subheadings.
- Body text.
- Navigation.
- Buttons.
- Metadata.

Typography styling may change, but the words themselves must remain unchanged.

## 5. Phase Three: Homepage and Navigation Redesign

Improve the existing homepage structure and navigation without removing or rewriting content.

### Merged navbar and hero presentation

Use the previously established integrated navbar and hero visual direction where applicable:

- A transparent or semi-transparent navy navbar positioned over the hero.
- Subtle backdrop blur and a refined border.
- A clear logo position on the left.
- Existing navigation labels and links.
- Existing primary and secondary CTA labels.
- A sticky navigation treatment that becomes more opaque when scrolling.
- A well-composed hero layout with strong visual hierarchy.
- Responsive mobile navigation.

Do not invent navigation items or replace existing labels.

### Hero section

Improve:

- Visual hierarchy.
- Headline presentation.
- Text alignment and spacing.
- CTA placement.
- Background treatment.
- Product imagery or existing visual assets.
- Responsive composition.

Use the actual Optimax product interface or approved brand imagery where available.

Do not substitute generic technology illustrations for meaningful product visuals.

### Homepage sections

Review the existing homepage and improve the presentation of its current sections.

Prioritize:

- Clear section hierarchy.
- Consistent content width.
- Purposeful whitespace.
- Better product presentation.
- Consistent visual rhythm.
- Clear CTA positioning.
- Logical transitions between sections.

Do not force a new homepage structure simply to imitate another website.

## 6. Phase Four: Design Benchmarking

Study the following enterprise software websites for specific design strengths:

- NetSuite: enterprise positioning, homepage storytelling, and conversion structure.
- Odoo: module discovery and product organization.
- SAP: enterprise credibility and industry presentation.
- Microsoft Dynamics 365: product demonstrations and feature presentation.
- Acumatica: modern SaaS presentation and conversion experience.

Do not copy their branding, content, layouts, or visual identity.

Extract useful design principles and adapt them to Optimax's actual product, content, and brand.

Optimax must retain its own identity.

## 7. Phase Five: Component and Design-System Consistency

Create or refine reusable design tokens and components.

Standardize:

- Navbar and dropdown menus.
- Buttons and CTA variants.
- Typography hierarchy.
- Section spacing.
- Content containers.
- Borders and radii.
- Product imagery.
- Cards, only where genuinely useful.
- Hover and focus states.
- Transitions and animations.
- Responsive breakpoints.

Avoid unnecessary cards, badges, icons, labels, shadows, and decorative elements.

Every visual element should have a clear purpose.

Do not introduce additional dependencies unless they provide a meaningful benefit.

## 8. Phase Six: Responsive and Accessibility Requirements

Test the website at:

- Mobile: 320–430px.
- Tablet: 768–1024px.
- Laptop: 1280–1440px.
- Desktop: 1600px and above.

Ensure:

- No horizontal overflow.
- Readable typography.
- Appropriate spacing.
- Functional mobile navigation.
- Proper image scaling.
- Consistent section alignment.
- Accessible color contrast.
- Visible keyboard focus states.
- Semantic HTML.
- Accessible interactive elements.

Do not sacrifice mobile usability to preserve desktop styling.

## 9. Phase Seven: Independent Verification

Do not consider the redesign complete simply because the pages render successfully.

Use independent testing to validate the result.

### Content integrity

Compare the original and redesigned website text.

Acceptance criteria:

- No existing text has been rewritten.
- No existing text has been removed.
- No new unsupported claims have been introduced.
- Existing button labels and navigation labels remain unchanged.

### Functionality

Test:

- All existing routes.
- Internal and external links.
- Navigation dropdowns.
- CTA buttons.
- Forms.
- Interactive components.
- Mobile navigation.
- Existing animations and transitions.

### Visual regression

Compare before-and-after screenshots.

Check:

- Desktop appearance.
- Mobile appearance.
- Tablet appearance.
- Section alignment.
- Image quality.
- Typography consistency.
- Navbar and hero behavior.

### Quality assurance tools

Use:

- Chrome DevTools.
- Lighthouse.
- axe DevTools.
- Playwright.
- Git diff.

Resolve critical accessibility, functionality, and responsive issues before completion.

## 10. Final Acceptance Criteria

The redesign is successful only when:

1. The website looks noticeably more polished and professional.
2. Optimax's original brand identity is preserved.
3. No existing website text has been changed.
4. No existing pages, routes, or functionality have been lost.
5. The visual system is consistent throughout the website.
6. Product screenshots and imagery accurately represent Optimax.
7. Navigation and hero presentation work correctly.
8. Desktop, tablet, and mobile layouts are responsive.
9. Accessibility and performance have been checked.
10. Independent regression testing confirms that the redesign has not introduced unwanted changes.

## 11. Final Delivery Report

After implementation, provide a concise report containing:

- Pages and sections redesigned.
- Design-system changes.
- Components improved or created.
- Existing functionality preserved.
- Content-integrity verification results.
- Responsive testing results.
- Accessibility and performance findings.
- Outstanding issues, if any.

Include before-and-after screenshots of the major redesigned sections.

**Final instruction: Improve the design, not the content. Preserve what Optimax says and how its existing features work. Improve how professionally and effectively the website presents them.**