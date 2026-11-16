# Implementation Specification: YouTube Video Integration in the Optimax Showcase Section

## 1. Objective

Enhance the existing Optimax Showcase section by integrating a YouTube product demonstration video.

The objective is to allow prospective customers to understand how Optimax works through an embedded video without leaving the website.

This should feel like a premium SaaS product demonstration, not a generic YouTube video inserted into a webpage.

## 2. Initial Project Inspection

Before implementation:

- Inspect the existing landing page and locate the Optimax Showcase section.
- Understand the current component structure, styling conventions, layout, and responsive breakpoints.
- Identify the existing Optimax branding, typography, colors, spacing, and design patterns.
- Reuse existing components and design tokens wherever possible.
- Do not rebuild the landing page or unnecessarily modify unrelated sections.

## 3. Showcase Section Design

Maintain the existing section's visual identity while improving its presentation.

### Content structure

Use the following hierarchy:



**Main heading:**
See How Optimax Connects Your Entire Business

**Supporting description:**
Discover how Optimax simplifies business operations by bringing sales, inventory, finance, human resources, and business intelligence into one connected platform.

**Video container:**
Display the embedded YouTube video prominently beneath the introductory text.

**Optional CTA:**
Explore Optimax Platform

The CTA should link to the existing relevant Optimax product or inquiry page. Reuse an existing route if available.

## 4. YouTube Integration

Implement the video using the YouTube IFrame Player API (which uses an HTML iframe).

Use this embed URL structure:

https://www.youtube.com/embed/VIDEO_ID

Replace VIDEO_ID with the actual YouTube video ID supplied for the project.

Requirements:

- Use the YouTube embed URL, not the regular watch URL.
- Maintain a 16:9 aspect ratio.
- Make the iframe responsive.
- Allow fullscreen playback.
- Set an appropriate descriptive iframe title.
- Include the necessary permissions for video playback.
- Use `loading="lazy"` where appropriate.
- Add `referrerPolicy="strict-origin-when-cross-origin"`.
- Use the YouTube IFrame Player API to enforce the 15-second preview limit and
  detect when the preview ends.

Example implementation:

```jsx
<iframe
  src="https://www.youtube.com/embed/VTntzBr227k?enablejsapi=1&controls=0&disablekb=1&end=15"
  title="Optimax Platform Demonstration"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>
```

The snippet shows the required player configuration; initialize it with the
IFrame Player API and handle the 15-second stop and prompt in the application.

Do not enable autoplay with sound. Do not allow the user to seek past the
15-second preview limit.

### 15-second preview and full-video destination

- Play only the first 15 seconds of the video in the embedded player.
- At 15 seconds, pause playback and replace/cover the player with a clear
  prompt such as **"Want to watch the full video?"** and a
  **"Watch on YouTube"** button.
- The button must open the company's official YouTube channel/page, using the
  channel URL supplied for the project. Do not link to a personal channel,
  unrelated YouTube page, or an invented URL.
- Open the company YouTube page in a new tab with
  `target="_blank"` and `rel="noopener noreferrer"`.
- Keep the company channel URL configurable alongside the video ID.
- The preview limit must not be bypassable through player controls or seeking.
- If the player API fails to load, show a clear fallback and the same link to
  the official company YouTube page; do not silently make the full video
  playable in the embed.

## 5. Video Container Styling

The video should appear inside a premium browser-style presentation frame.

Design requirements:

- Large, prominent video presentation.
- Rounded corners consistent with the existing design system.
- Subtle border and shadow.
- Dark video background to prevent visual gaps.
- Responsive 16:9 aspect ratio.
- Appropriate spacing around the video.
- Avoid excessive gradients, decorative elements, or unnecessary visual effects.

If the existing website uses a light enterprise theme, preserve it rather than introducing a new visual direction.

## 6. Performance and User Experience

Optimize the implementation for performance.

- Lazy-load the YouTube iframe.
- Avoid loading the YouTube player before the section is needed.
- Consider a lightweight thumbnail with a play button that loads the iframe only after user interaction.
- Do not load the player until the visitor starts the preview, if using a
  thumbnail-based approach.
- Show the configured video's YouTube thumbnail inside the 16:9 video frame as
  its poster before playback. Place the play button over the thumbnail and
  replace it with the player in the same frame after activation.
- Do not add a separate video-thumbnail gallery outside the video frame.
- Ensure the video does not cause layout shifts.
- Provide a fallback message and company YouTube page link if the player cannot
  load or the preview cannot be started.
- Avoid unnecessary JavaScript dependencies.

If using a thumbnail-based approach, ensure the play button is keyboard
accessible and has an appropriate accessible label. Derive the poster from the
configured video ID (for example,
`https://i.ytimg.com/vi/VIDEO_ID/hqdefault.jpg`) so it always matches the video
being previewed.

## 7. Responsive Design

Desktop:

- Use a large centered video container.
- Maintain a balanced relationship between the heading, description, and video.
- Avoid excessive horizontal whitespace.

Tablet:

- Preserve the video aspect ratio.
- Adjust section padding and typography.

Mobile:

- Use the full available content width.
- Maintain the 16:9 ratio.
- Prevent horizontal overflow.
- Ensure the video controls remain accessible.

## 8. Accessibility

- Give the iframe a meaningful title.
- Ensure interactive controls are keyboard accessible.
- Provide sufficient color contrast.
- Use semantic HTML section and heading elements.
- Respect reduced-motion preferences if animations are introduced.

## 9. Technical Requirements

- Follow the existing framework and project architecture.
- If the project uses React, create a reusable Optimax showcase video component where appropriate.
- Keep the YouTube video ID configurable rather than hardcoding it in multiple locations.
- Avoid duplicating existing components.
- Do not introduce unnecessary dependencies.
- Maintain existing functionality and routing.

## 10. Acceptance Criteria

The implementation is complete when:

1. The Optimax Showcase section contains the YouTube demonstration.
2. The embedded preview plays no more than the first 15 seconds and cannot be
   extended by seeking or player controls.
3. At the 15-second limit, playback stops and a prompt offers to watch the
   full video on the company's official YouTube page.
4. The prompt opens only the configured company YouTube page in a new tab.
5. Fullscreen playback works during the preview, without bypassing the
   15-second limit.
6. The video remains responsive across desktop, tablet, and mobile.
7. The section follows the existing Optimax brand identity.
8. The implementation does not negatively affect page performance.
9. No existing landing page functionality is broken.
10. Before playback, the company's video thumbnail and play button appear
    inside the video frame; activating it replaces the poster with the player.
11. The preview does not show a separate thumbnail gallery outside the video
    frame.
12. The page builds successfully without errors.

## 11. Final Validation

After implementation:

- Run the project's build command.
- Check browser console errors.
- Test video playback.
- Confirm playback stops at 15 seconds and seeking cannot bypass the limit.
- Confirm the full-video prompt opens the configured official company YouTube
  page, and no other YouTube destination is used.
- Test fullscreen functionality.
- Verify mobile and tablet layouts.
- Confirm that the iframe uses the correct YouTube embed URL.
- Confirm that the rest of the landing page remains unchanged.

**Important implementation instruction:** Work within the existing Optimax Showcase section. Do not redesign the entire landing page. Prioritize consistency, performance, accessibility, and a polished enterprise SaaS presentation.
