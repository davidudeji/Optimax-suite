# Shared Navbar and Footer Visual Refresh

## Status and scope

The shared navbar and footer refresh has been implemented. This specification
records the intended design, scope, and acceptance criteria.

Refresh the shared site navbar and footer to feel lighter and more welcoming,
while keeping the brand recognizable and all navigation easy to read. The
reference screenshot shows the current dark navy header/footer and white logo
backplates; the proposed direction is a restrained, light variation of the
existing brand palette.

Scope is limited to the shared navigation and shared footer, including their
responsive and interactive states. Do not redesign page content, hero
sections, routes, footer columns, or navigation behavior.

## Design direction

- Use a pale, cool blue-gray surface for the navbar and a closely related,
  slightly softer light surface for the footer. Prefer the existing
  `--brand-surface` (`#F3F6F8`) and nearby brand tones rather than introducing
  a new unrelated palette.
- Use `--brand-text` (`#172B36`) for primary text and a sufficiently dark
  brand blue for secondary copy and links. Avoid low-opacity gray text on
  light backgrounds.
- Preserve the existing green demo/contact actions as the visual accent.
  Verify their text and hover-state contrast on the final surfaces; adjust
  foreground or approved green shade if needed.
- Separate the navbar and footer from adjacent content with subtle brand
  borders or shadows, not heavy dark bands.
- Keep existing dimensions, spacing, typography, column structure, labels,
  link destinations, and component behavior unless a small visual adjustment
  is needed for legibility.

## Logo treatment

- Keep the logo background transparent so it blends into the light navbar and
  footer surfaces; do not add a white or dark-colored plate behind it.
- Use the original dark navy and teal brand artwork on these light surfaces so
  the wordmark remains legible without a filter or recoloring.
- Keep the logo's current approximate visual size, proportions, and accessible
  name. Apply the same treatment consistently in the header and footer.

## Navbar requirements

- Apply the light surface to the default, sticky/scrolled, desktop, and mobile
  menu states so the header does not switch back to a dark band while scrolling
  or opening the menu.
- Render top-level navigation labels and dropdown triggers in dark, readable
  brand text. Use a clear hover, active, and keyboard-focus state that remains
  distinguishable on the light surface.
- Keep dropdown panels light, with readable descriptions, visible boundaries,
  and existing open/close and keyboard-accessibility behavior intact.
- Retain the existing green demo CTA, ensuring its label remains high contrast.
- Preserve the current responsive layout, menu controls, dropdown content,
  link targets, and sticky positioning.

## Footer requirements

- Use a light brand surface and dark primary headings. Increase the contrast
  of supporting text, navigation links, copyright text, and social icons
  against the new background.
- Keep the existing footer columns, social links, divider rows, contact
  actions, and copyright structure; do not remove or reorder content as part
  of this visual refresh.
- Use subtle dividers and consistent link hover/focus treatment. Ensure focus
  remains visible without relying on color change alone.
- Preserve the existing tablet and mobile column reflow and spacing behavior.

## Accessibility and visual validation

- Meet WCAG 2.2 AA contrast targets: at least 4.5:1 for normal text and 3:1
  for large text and meaningful controls/icons.
- Check all text, links, CTA labels, logo artwork, borders, hover/active states,
  keyboard focus, and disabled states against their actual backgrounds.
- Verify desktop and mobile layouts, including the sticky navbar, open
  dropdown, expanded mobile menu, and footer at narrow widths.
- Confirm no horizontal overflow, clipped labels, or loss of visible focus.
- Keep semantic links, accessible names, current destinations, and existing
  keyboard interactions unchanged.

## Implementation plan and status

1. Complete — use the existing transparent brand logo on the light surfaces
   without a background plate.
2. Complete — update the shared navigation styles and logo treatment, including
   scrolled, dropdown, and mobile states.
3. Complete — update shared footer colors, logo treatment, dividers, links, and
   social icon contrast while retaining its markup and content.
4. Complete — browser-checked at 390px, 1024px, and 1280px; Angular build
   passed.

## Acceptance criteria

- The navbar and footer use coordinated light brand surfaces rather than large
  dark blocks.
- All navbar/footer text and interactive elements remain clearly readable in
  default, hover, active, focus, sticky, and expanded-menu states.
- The logo uses transparent original artwork, with no background plate, and
  remains legible on the light header and footer.
- Navigation and footer content, destinations, and responsive behavior are
  preserved.
- No unrelated application code or page design is changed for this task.