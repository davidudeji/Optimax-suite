# Website brand system

- Hero sections use a deep navy-to-teal gradient (`#0B1B33` to `#0F4350`) with a subtle grid where appropriate.
- The site navbar stays solid navy (`#0B1B33`) across all pages.
- Primary calls to action use the OptimaX green (`#2EB270`) with a brighter green hover (`#47E797`) and white text.
- Secondary actions remain outlined on dark hero surfaces.

## Motion direction: GSAP

Use motion to clarify hierarchy and make the site feel responsive, polished, and alive—not to compete with product content. Keep the existing visual identity, content order, and interaction behavior intact. Prefer short, purposeful transitions with restrained easing; avoid constant motion, large parallax effects, and animation that delays access to content or controls.

### Animation plan

- **Page heroes:** On first entry, reveal the heading, supporting copy, CTAs, and product/dashboard visual in a brief, ordered sequence. Use subtle opacity and vertical-position changes; keep the headline and actions readable and usable immediately.
- **Long-page sections:** Reveal section headings and content as they enter the viewport. Use one-time, low-distance reveals and small stagger groups for related cards or lists. Keep section headings visible if animation is unavailable.
- **Product and industry cards:** Use a restrained lift or emphasis on pointer hover and keyboard focus, with matching focus-visible feedback. Do not rely on motion or hover to disclose essential content.
- **Impact statistics:** If count-up motion is used, animate only from zero to the approved values, once when visible. Keep the final values in the accessible text and do not imply different or unverified metrics.
- **Navigation and CTAs:** Use brief feedback for menu open/close and button hover/press states. Preserve existing keyboard, focus, and route behavior; do not make route changes wait on an animation.
- **Carousels and moving collections:** Do not add autoplay to user-controlled carousels. Preserve explicit controls, touch support, and reduced-motion behavior. Any continuous partner-name marquee must pause on hover/focus, avoid duplicate announcements, and have a static responsive alternative.

### Implementation and accessibility requirements

- GSAP is not currently listed in `package.json`. Add it only when implementing this motion plan; use `ScrollTrigger` only for viewport-based reveals that need it.
- Scope animations to their Angular component with `gsap.context()` and revert the context during component teardown. Avoid global selectors and clean up ScrollTriggers and other listeners when a component is destroyed or a route changes.
- Keep animation progressive: content must remain visible and functional if JavaScript, GSAP, or ScrollTrigger is unavailable. Avoid hiding page content until an animation runs.
- Respect `prefers-reduced-motion`: disable or substantially simplify entrance, stagger, count-up, parallax, and continuous motion. Keep state changes and interaction feedback understandable without movement.
- Animate opacity and transforms where possible; avoid layout-triggering properties. Do not animate large images or many elements simultaneously. Lazy-load below-the-fold media as appropriate and verify that motion does not introduce layout shifts.
- Avoid scroll-jacking, pinned sections that trap or delay scrolling, and animation that moves content away from the user's current focus.

### Acceptance checks

- Review the homepage and representative product, pricing, and content routes at desktop and mobile widths; motion must not cause overflow, clipping, or obstruct controls.
- Verify keyboard navigation, focus visibility, carousel operation, route changes, and reduced-motion behavior with animations enabled and disabled.
- Check that animations run once as intended, do not replay unexpectedly on scroll, and leave no active triggers or listeners after navigation.