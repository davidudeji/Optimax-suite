# OptimaX Website Design Audit

**Audit date:** 2026-11-25
**Project:** OptimaX ERP marketing site
**Stack:** Angular 17, Tailwind CSS 3, component-scoped CSS  
**Status:** Audit complete; implementation and focused browser verification completed. See implementation update below.

## Executive summary

The site has a strong homepage, useful product content, an existing shared navigation/footer, and a working multi-route foundation. The supplied `landingpage.md` specification calls for a coherent, light, enterprise-facing design while preserving the existing content, routes, and interactions. The site already has pieces of that direction, but local styles and page-specific implementations have drifted.

The most important verified issues are:

1. The shared green button system uses white text on `#2EB270`, and its hover state uses white text on `#47E797`; both combinations have low text contrast.
2. The pricing comparison group expands the document to 723px at 320px and 375px viewport widths.
3. The retail industry page has 8px of horizontal overflow at 320px.
4. Twenty-six placeholder `href="#"` links were found across eight templates.
5. Typography and visual values are inconsistently declared across the site, despite global Manrope and design tokens already existing.

The current homepage and common shell are a useful base, not a reason to rebuild the site from scratch. In particular, the homepage already contains an interactive product ecosystem graphic around the OptimaX mark.

## Specification principles

`landingpage.md` is the governing design brief. The implementation should:

- Apply a unified, light-mode enterprise visual system with clear text hierarchy and accessible contrast.
- Preserve existing pages, routes, copy, integrations, and meaningful interactions.
- Use shared visual tokens and reusable styles rather than making every route identical.
- Maintain responsive behavior and keyboard/focus usability.
- Improve the existing experience incrementally; do not replace working product features with static mockups.

## Scope and method

Reviewed the design brief, Angular route table, app shell and module setup, global stylesheet, index font configuration, shared navigation/footer, and the principal templates/styles for the homepage, product pages, cloud pages, pricing, onboarding, contact, industries, blog, and community.

The router contains **31 route patterns**. A local browser smoke check loaded nine representative routes, each returning HTTP 200; each rendered an `h1` except the onboarding flow, which currently has no `h1`. This confirms basic route rendering, not the correctness of all content, data, or guarded flows.

Responsive overflow was sampled at 320, 375, 768, 1280, and 1920px on nine representative routes. The verified overflow findings below are specific to the routes and sizes reported. The homepage was also visually checked at a 375px viewport. A third-party chat welcome panel overlaps part of the dashboard preview in that mobile view.

## Route and page inventory

| Route pattern(s) | Page/component | Primary content and interactions |
|---|---|---|
| `/` | Home | Platform overview; interactive dashboard preview/carousel; product ecosystem; benefits, industries, pricing, resources, and demo CTAs. |
| `/pos`, `/hr`, `/accounting`, `/procurement`, `/expense`, `/crm` | Product pages | Individual module landing pages with product-specific hero, feature/benefit sections, and conversion CTAs. Each page has local styling and section composition. |
| `/inventory-management`, `/sales-management`, `/vendor-management` | Shared module detail | Data-driven product detail pages using `ModuleDetailComponent`, with module-specific feature content and CTAs. |
| `/optima-xcloud`, `/optima-xcloud/platform`, `/optima-xcloud/integrations`, `/optima-xcloud/solutions`, `/optima-xcloud/migration`, `/optima-xcloud/pricing`, `/optima-xcloud/documentation` | OptimaXCloud | Seven route variants rendered by one component with route data; cloud-focused sub-navigation, explanatory sections, and consultation CTAs. |
| `/pricing` | Pricing | Plan cards, billing controls, comparison accordion/table, package builder, FAQs, and conversion CTAs. |
| `/get-started` | Onboarding | Multi-step sign-up/onboarding flow. It omits the shared navigation; the root shell still renders the global footer. |
| `/contact` | Contact | Demo/contact content and form, supporting contact channels, process details, and FAQs. |
| `/industries/:slug` | Industry landing page | Data-driven industry hero, outcomes, features, onboarding steps, conversion CTAs, and links to related industries. |
| `/blog`, `/blog/:slug` | Blog listing and post | Resource listing and article detail with post interactions such as comments/replies and sharing. |
| `/blog/admin/login`, `/blog/admin`, `/blog/admin/new` | Blog administration | Login and content administration. `/blog/admin` and `/blog/admin/new` are guarded; the login route is public. |
| `/community`, `/community/category/:slug`, `/community/thread/:slug`, `/community/new`, `/community/verify` | Community/forum | Community landing, category and thread views, new-thread flow, and verification flow. |

### Shared shell and routing

- The app root hosts the router outlet and global `SiteFooterComponent`.
- `NavigationComponent` is included by routed page templates rather than mounted once as a route shell. Onboarding is the noted exception and does not render this shared navigation.
- The footer is shared globally. The separate legacy `FooterComponent` is marked deprecated.
- The router has a catch-all redirect to `/`, so an unknown path appears as the homepage rather than a not-found page.
- `angular.json` includes `src/styles.css` twice in the build styles array.

## Existing design foundation

- Global styles already define brand colors, a spacing scale, Manrope as the body font, and shared button classes.
- The shared navigation and global footer currently use light backgrounds with dark text, separating them visually from darker hero sections.
- Homepage, pricing, cloud, and module-detail pages include reduced-motion or responsive treatments in selected components.
- The homepage has a distinctive dashboard-led hero and a working interactive ecosystem visualization. Keep these recognizable elements while aligning the surrounding visual language.
- Existing page content is substantial. The redesign should organize and restyle it, not remove sections or routes.

## Findings and priority

### P1 — Accessibility and responsive defects

1. **Low-contrast primary and hover buttons.** The global primary button applies white text over `#2EB270`; its hover state changes to lighter `#47E797` while retaining white text. These combinations do not provide sufficient contrast for normal-size button labels. Use a darker accessible action color or a dark foreground where appropriate, and verify all interactive states.
2. **Pricing horizontal overflow.** The comparison group reaches 723px wide on both 320px and 375px viewports. Its comparison table is not contained within the visible page width, despite the intended horizontally navigable comparison pattern.
3. **Industry horizontal overflow.** `/industries/retail` has an 8px horizontal overflow at 320px. The rest of the sampled route/viewport combinations did not show document overflow.
4. **Mobile chat overlay.** The chat welcome panel covers part of the homepage dashboard preview at 375px. Confirm a responsive placement or dismissal treatment that does not obscure primary content.

### P2 — System consistency and interaction quality

1. **Typography drift.** Manrope is loaded globally, but route/component CSS declares Arial, Inter, and Open Sans. One CRM feature rule declares `font-family: 500`, which is invalid CSS and likely intended to be a font weight.
2. **Style-value drift.** The scan found 634 declarations matching font, background, border-radius, or gradient patterns across 73 CSS files. The selected hard-coded color values also recur in 57 CSS files and multiple templates. Global tokens exist, but page-local and inline values bypass them.
3. **Placeholder navigation.** Twenty-six `href="#"` anchors occur in eight templates: the six standalone module pages, homepage CTA content, and industry cross-links. Several industry destinations and product CTAs can use existing routes; app-store destinations must be confirmed rather than guessed.
4. **Community data presentation.** The sampled community landing displayed `Invalid Date` for a recent discussion. Correct or safely format the underlying date before presenting the card as finished content.
5. **No dedicated not-found page.** Unknown routes silently redirect to the homepage, which can make broken or mistyped URLs difficult to recognize.
6. **Footer policy destinations.** The footer currently presents product/company/social links but no visible privacy/terms destinations. Add legal links only when the correct approved URLs are known.

### P3 — Maintainability and polish

1. Shared controls and layout primitives should be used consistently; avoid a broad mechanical rewrite of every local style.
2. Keep intentional page-specific composition—especially the homepage, onboarding, pricing, cloud, and forum flows—while aligning typography, color, spacing, and surface treatments.
3. Review image sizing/loading and small supporting text on a route-by-route basis as pages are touched.
4. Remove duplicate global style inclusion only after confirming the generated output and behavior.

## Strengths to preserve

- The homepage clearly communicates the “one connected platform” proposition and puts product imagery near the top of the page.
- The homepage already has working dashboard selection and a central interactive module ecosystem.
- Pricing has meaningful billing and plan-comparison interactions, not just static plan cards.
- Cloud pages share one component and route-data model, and the three module-detail routes share a template.
- The main navigation supports products, cloud, industries, and mobile interactions; the common footer exposes product and company navigation.
- Product and industry pages include tailored content rather than generic placeholder sections.

## Recommended implementation sequence

1. **Design-system foundation:** Define the page/surface/text/action palette, accessible interactive states, typography scale, content widths, spacing, borders, and radii as shared tokens. Preserve the existing Manrope direction.
2. **Shared shell and controls:** Align navigation, footer, links, focus rings, buttons, and mobile menu states to those tokens. Keep the current light nav/footer treatment.
3. **Responsive fixes:** Contain the pricing comparison table within an intentional horizontal-scroll region and remove the industry page's 320px overflow. Verify dashboard/chat coexistence on mobile.
4. **Page families:** Align home, product, module-detail, cloud, pricing, contact, industry, blog, onboarding, and community pages in focused groups. Preserve all route-specific sections and interactions.
5. **Link and content integrity:** Replace placeholder links only where a real destination is known; confirm app-store URLs before linking. Correct the invalid community date display and add a real not-found experience if approved by the route specification.
6. **Quality verification:** Build and run focused tests; verify keyboard/focus states, 320–1920px responsive layouts, page routes, and interaction behavior. Check contrast on default, hover, focus, active, and disabled states.

## Baseline verification results

- **Local route smoke check:** `/`, `/pricing`, `/contact`, `/industries/retail`, `/pos`, `/optima-xcloud`, `/get-started`, `/blog`, and `/community` loaded with HTTP 200. All except onboarding rendered an `h1`.
- **Responsive overflow check:** Nine representative routes were checked at 320, 375, 768, 1280, and 1920px. Verified issues: `/pricing` at 320/375px and `/industries/retail` at 320px.
- **Visual check:** Homepage at 375px shows the light shared navigation and dark hero treatment; the chat welcome panel obscures part of the dashboard preview.
- **Build:** The development server compiled successfully. Angular emitted existing optional-chain warnings in blog/community templates; no compilation failure occurred.
- **Limitations:** This baseline is not a full accessibility audit, production performance audit, or backend/data integration test.

## Audit conclusion

The site should be refined into the supplied enterprise design system without flattening its distinct page experiences. Fix contrast and the measured narrow-screen overflow first, then centralize repeated visual decisions and align page families. Preserve existing routes, content, and interactions throughout.

## Implementation update

The first implementation pass applies shared design tokens for color, typography, spacing, and layout; aligns the shared navigation and footer; improves global action/focus contrast; and updates selected page templates to use real application routes for known destinations. It also removes duplicate global stylesheet entries, contains the pricing comparison table on narrow screens, stacks retail industry statistics on small screens, and provides a safe fallback for invalid community dates. Existing user-edited specification and module files were preserved.

### Verification

- **Production build:** Passed. Angular reports existing optional-chain warnings in blog/community templates.
- **Responsive browser check:** `/pricing` and `/industries/retail` were checked at 320, 375, 430, 768, 1024, 1280, 1440, and 1920px with no document-level horizontal overflow.
- **Homepage browser check:** At 375px, the page rendered its expected heading with no horizontal overflow. The primary “Book a demo” action rendered with dark teal (`#0F4350`) and white text.
- **Focused test command:** Could not complete because an unrelated existing `src/app/openai.service.spec.ts` imports `OpenaiService`, while `src/app/openai.service.ts` exports `OpenAIService`. This compile error prevents the test runner from running the requested forum date regression test; neither OpenAI file was changed.

### Remaining decisions and follow-up

- Confirm official App Store and Google Play URLs before linking the homepage badges.
- Confirm approved privacy/terms destinations before adding legal links.
- Review the third-party chat welcome panel placement on mobile; its overlap with the homepage dashboard preview was present in the baseline.
- The work is a focused first implementation pass, not a complete visual audit of all 31 route patterns or a full accessibility audit.
