# Optimax Homepage Audit and Redesign

## Audit summary

The existing homepage already had an Optimax dashboard screenshot, product video, module destinations, an industry section, a final CTA and a footer. Its main content issue was repetition: a module list and a second capability-card grid described many of the same products. The value proposition was brief, and pricing and resources were not surfaced on the homepage.

The site uses Angular 17. The route registry includes onboarding, pricing, POS, HR, accounting, procurement, expense management, CRM, blog, contact, industry pages and community routes. The existing navigation contains product and industry dropdowns and a mobile menu.

| Existing content | Audit finding | Homepage action |
|---|---|---|
| Hero | Genuine Optimax dashboard visual; CTA order and copy could be clearer | Kept the screenshot, clarified the product message and made demo booking primary |
| Benefits and modules | Benefits were brief; modules were repeated in a second grid | Added concise outcome descriptions and grouped the six existing module links |
| Customer challenges | Existing problem-and-response section was useful | Retained without adding quantified outcome claims |
| Product demonstration | Existing product video and genuine dashboard screenshot | Retained both; did not substitute stock art for product visuals |
| Industry solutions | Existing routes for retail, manufacturing, professional services and logistics | Retained destinations and added relevant Unsplash photography |
| Trust and OptimaxAI | No homepage-ready verified testimonial, credential or AI capability was identified in the inspected source | Omitted rather than inventing proof or product functionality |
| Pricing | Existing pricing page is the authoritative source | Added links to pricing and sales contact without duplicating amounts |
| Resources | Blog service can provide published posts as well as local fallback examples | Added a preview of up to three published posts; seeded fallback examples are excluded |
| Final CTA and footer | Existing contact, onboarding and module destinations were present | Retained and added pricing/resources navigation |

## Homepage content architecture

1. Hero and primary demo CTA
2. Business value proposition
3. Grouped ERP modules
4. Business challenges
5. Product overview video
6. How Optimax can support everyday workflows
7. Industry solutions
8. Pricing link
9. Published resources preview
10. Why Optimax
11. Final conversion CTA
12. Footer

## Image inventory

- Hero product visual: `/assets/images/optimax-dashboard-hero.png` (existing Optimax interface screenshot).
- Industry photography: [retail](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&q=80), [manufacturing](https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1280&q=80), [professional services](https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1280&q=80), and [logistics](https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1280&q=80).
- Resource card images are taken from the published blog records and loaded responsively with lazy loading.
- Photographer credits were not recorded in the existing project data.

## Preserved functionality

Existing navigation and its dropdown/mobile behavior remain unchanged. Homepage links continue to target the existing `/contact`, `/get-started`, `/pricing`, `/blog`, module, industry and community routes. The existing video, analytics, chat configuration and footer destinations were not replaced.

## Validation and open items

- `npm run build` succeeds. Angular reports existing optional-chain warnings in blog and forum templates.
- A focused TypeScript check of the homepage spec succeeds.
- Browser checks confirmed the dashboard and resource images load, the pricing route is reachable, and no horizontal overflow appeared at 320, 390, 768 or 1440 pixel viewport widths.
- The Angular test runner is blocked by an existing import mismatch in `openai.service.spec.ts` (`OpenaiService` versus the exported `OpenAIService`).
- Customer evidence, OptimaxAI use cases, photographer credits and a full page-by-page audit of every module destination still require business/product-owner verification.
