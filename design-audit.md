# Optimax UI/UX Design Audit

**Audit date:** 2026-11-17  
**Project:** Optimax ERP marketing site  
**Stack:** Angular 17, Tailwind CSS 3, component-scoped CSS  
**Status:** Source audit complete; P1 UI updates applied; browser validation pending

## Scope and method

Reviewed project documentation, global styles and build configuration, application routing and module declarations, the homepage template and styles, shared navigation, and the pricing page. The application defines approximately 28 routes spanning the homepage, product modules, pricing, onboarding, blog, community, contact, industries, and OptimaXCloud.

The requested `ui-ux-pro-max` skill was not available in the active environment. This audit therefore reflects direct source inspection, not a skill-generated analysis. The deployed site was not opened in a browser; visual rendering, real device behavior, accessibility tooling, and performance metrics remain to be verified.

## P1 implementation update

The following P1 changes have been applied:

- Desktop Products and Industries dropdowns now expose `aria-controls`, `aria-hidden`, and `inert` states consistent with the Cloud menu.
- Pricing now uses the Manrope typeface, and its buttons use the shared global button styles. Homepage CTAs use the same shared base sizing while retaining the hero-specific outline treatment.
- Navigation descriptions and selected homepage and pricing supporting text have been enlarged for readability.

The production Angular build succeeds. Keyboard interaction, rendered responsive layouts, and measured color contrast still require browser-based validation.

## Current design system

### Brand colors

Global CSS custom properties establish a useful palette:

| Token | Value | Intended use |
|---|---|---|
| `--brand-blue` | `#2E6276` | Brand blue and accents |
| `--brand-blue-deep` | `#1F4251` | Dark surfaces and gradients |
| `--brand-green` | `#2EB270` | Primary actions and active states |
| `--brand-green-hover` | `#47E797` | Hover state |
| `--brand-surface` | `#F3F6F8` | Page background |
| `--brand-white` | `#FFFFFF` | Cards and light surfaces |
| `--brand-text` | `#172B36` | Primary text |
| `--brand-muted` | `#64748B` | Supporting text |
| `--brand-border` | `#E5EBEF` | Dividers and outlines |

The palette is supplemented by local values such as the homepage/navigation navy `#0B1B33` and teal `#00A6A6`. The homepage also redeclares equivalent values as component-local variables. This allows visual variation but increases the risk of drift.

### Typography and spacing

Manrope is loaded in the document head and set globally. The homepage follows it, while pricing explicitly uses Segoe UI and other components contain Arial, Inter, and Open Sans declarations. Typography is therefore not yet consistent across the full route set.

A global spacing scale is defined, but many component layouts still use individual pixel and `clamp()` values. The homepage uses generous section spacing and fluid headings; smaller supporting text is common in feature cards, module descriptions, and cloud pages.

### Components and layout

A shared button system exists in global CSS, but page-level `.button` and `.btn` rules override parts of its appearance. The shared navigation supports desktop dropdowns, a mobile menu, and mobile accordions. The homepage includes its own section hierarchy, product imagery, carousel, industry mosaic, resource cards, and footer. Pricing includes plan cards, a comparison table, a package builder, and FAQs.

## Audit findings

### Strengths

- The homepage hero presents a clear headline, product dashboard, and primary/secondary calls to action.
- The homepage sections have a coherent progression from product benefits and modules to use cases, pricing, resources, and a final CTA.
- Headings, section labels, image alternatives, and carousel announcements provide a solid semantic and accessibility foundation.
- The carousel and pricing builder expose useful interactive state, including slide selection and expanded/pressed states.
- Focus-visible styles and reduced-motion handling are present.
- The main dashboard image declares intrinsic dimensions and descriptive alternative text.
- Pricing content uses responsive card layouts and horizontally scrollable comparison tables.

### Opportunities and risks

1. **Cross-route consistency:** Manrope is the global typeface, but route-level font declarations differ. Button styles and brand colors also vary between global styles, homepage, navigation, pricing, and cloud pages.
2. **Supporting-text readability:** Some descriptive text is 11.5–12px; decorative orbit labels are 8px. Decorative labels are not equivalent to body copy, but smaller descriptive text should be reviewed for readability and contrast at actual viewport sizes.
3. **Closed dropdown keyboard access:** The Products and Industries dropdowns appear to hide through opacity and pointer-events without the `aria-hidden`/`inert` treatment used by the Cloud dropdown. Verify whether their closed links remain in the keyboard tab order and correct the state handling if needed.
4. **Responsive validation:** Multiple breakpoint values are used across homepage sections and route styles. Responsive rules are present, but code inspection alone cannot confirm the absence of overflow or awkward intermediate layouts.
5. **Long-page navigation:** The homepage contains many sections. Its existing section links are useful, but long-scroll findability and CTA visibility should be tested on mobile and desktop before adding navigation UI.
6. **Potential duplicate assets/styles:** `angular.json` lists `src/styles.css` twice. It also includes Swiper and Leaflet styles that are imported from `src/styles.css`. Font Awesome is included through both build styles and a CDN stylesheet. Confirm their impact in the built output before removing any inclusion.
7. **Initial bundle scope:** The app module declares many route components directly. Measure the production bundle before deciding whether route-level lazy loading would materially improve initial load.

## Prioritized implementation plan

### P1 — Accessibility and consistency

1. **Validate navigation with keyboard and assistive technology.** Closed-state semantics are implemented for Products and Industries; verify dropdown opening, closing, Escape behavior, and focus order in a browser.
2. **Unify route typography and controls.** Homepage, pricing, and shared navigation are aligned to the existing Manrope and global button base. Continue checking other routes for active local overrides.
3. **Review readable text sizes and contrast.** Selected supporting copy and navigation descriptions have been enlarged. Measure contrast and verify text at actual viewport sizes; preserve small decorative metadata only where it remains legible and nonessential.

### P2 — Responsive and performance verification

4. **Test key viewport sizes.** Validate at 320–430px, 768–1024px, 1280–1440px, and 1600px and above. Check navigation, cards, text wrapping, tables, touch targets, and horizontal overflow.
5. **Verify build-level asset duplication.** Inspect production output and remove duplicate stylesheet or icon-font inclusions only after confirming they are redundant and unused.
6. **Review image loading and layout stability.** Measure hero image cost and industry-image layout shifts; add responsive formats or dimensions where supported and beneficial.
7. **Standardize responsive conventions incrementally.** Align breakpoints and spacing usage as components are revised; avoid a broad restyle of functioning pages.

### P3 — Polish and maintainability

8. **Improve long-page wayfinding if testing identifies friction.** Prefer existing anchors and content before introducing new navigation elements.
9. **Measure route-loading opportunities.** Consider lazy loading only if production bundle and route performance measurements justify the change.
10. **Review deprecated components and unused styles.** Confirm usage and regression risk before removing legacy code.

## Existing audit notes that are no longer current

The previous version of this document contained several findings that do not match the inspected source:

- A global spacing-token scale and unified global button styles already exist.
- Manrope is the global body font; the old claim that the global body uses Inter is inaccurate, though some page-level font differences remain.
- The homepage module icons are marked `aria-hidden`.
- An Open Graph image is already configured.
- The inspected `index.html` does not contain the reported `window.onerror` alert.
- The shared navigation component exists. The footer component is marked deprecated, and the homepage contains its own footer.

These items should not be reintroduced as implementation tasks unless a new inspection finds otherwise.

## Overall assessment

The homepage has a strong visual foundation and useful interaction patterns. The largest design-system opportunity is to bring the wider multi-route experience into closer alignment, then verify navigation accessibility and responsive behavior in a browser. This is a source audit, not a claim that those runtime checks have passed.
