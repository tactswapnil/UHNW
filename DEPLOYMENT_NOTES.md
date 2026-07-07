# What changed & what you need to do before deploying

## Fixed
- **Build-breaking bug**: `index.html` pointed to `./main.jsx` (root) instead of `/src/main.jsx`. This would have failed on Vercel/any fresh `vite build`. Fixed.

## Added — Mobile responsiveness
All content and data is untouched. Added `className` hooks + CSS media queries (in `src/index.css`) so the existing inline-styled layout collapses correctly on phones instead of overflowing or shrinking illegibly:
- Hero banner: fluid height, `clamp()` font sizing, stacked layout below 900px.
- Tab bar: horizontal scroll on phones instead of wrapping into a tall multi-row block.
- All fixed 2/3/4-column grids (matrix summary cards, quadrant definitions, whitespace opportunities, analytical notes): collapse to 1 column under 900px.
- **Positioning Map (SVG)**: this was the "map coordinates" issue — on a narrow phone screen the scatter plot's 14 labeled dots and quadrant text would scale down to illegible size. Instead of shrinking, it's now wrapped in a horizontal-scroll container with a 640px minimum width, so labels stay readable and users pan across it — the standard pattern for dense data-viz on mobile.
- Prestige Spectrum rows: the project-name bar + archetype label now stack instead of overflowing on narrow screens.
- Added `viewport` hardening and a global `max-width: 1440px` centered container with responsive side padding (was 0 padding — content touched screen edges).

## Added — WhatsApp / social link previews
`index.html` now has Open Graph + Twitter Card meta tags (title, description, image) so pasting the link into WhatsApp, iMessage, LinkedIn, etc. shows a proper preview card instead of a bare link.

**⚠️ Action required:** I built these against the placeholder domain `https://swapnilgoelresearch.vercel.app/`. If your live URL is different, update the four `https://swapnilgoelresearch.vercel.app` occurrences in `index.html` (`og:url`, `og:image`, `twitter:image`) to your actual deployed URL before pushing — WhatsApp requires absolute (not relative) image URLs and won't render otherwise.

Also: WhatsApp and Facebook cache link previews per-URL for a while. If you've shared this link before, the old cached preview may persist. Force a re-scrape with Facebook's Sharing Debugger (`developers.facebook.com/tools/debug/`) after deploying, or share the URL with a harmless query string appended (`?v=2`) the first time.

## Generated
- `public/images/og-image.png` — 1200×630 social preview card, built from your existing SG monogram logo. Replace it with a real building photo collage if you'd prefer that over the wordmark treatment.

## You still need to supply
This zip has **all code + your icon files**, but I was never given your `/public/images/` folder from the actual repo (hero-backdrop.png, sg-icon.png, and the 14 project photos referenced in `projectImages`). Before deploying:
1. Copy your existing `public/images/` folder from your current repo into this project's `public/images/` folder (keep the `og-image.png` I generated alongside it).
2. Push to GitHub, redeploy on Vercel as before.

## Left out
`projects.js` (a separate, partially-duplicate data file you uploaded) was not carried into this build — the actual live component (`ultra_luxury_research_foundation.jsx`) has its own more complete inline `projects` array (includes `dimensionScores` etc.) which is the one actually rendered. Keeping both would risk them drifting out of sync. If you want the data extracted into its own module for maintainability going forward, say so and I'll do that as a separate pass.
