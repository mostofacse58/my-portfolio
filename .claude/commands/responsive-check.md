---
description: Audit responsiveness and accessibility across breakpoints
allowed-tools: Read, Edit, Grep, Glob, Bash(npm run build), Bash(npm run lint)
---

Audit the portfolio for responsive and accessibility problems, then fix them.

**Breakpoints to reason about:** 360, 390, 768, 1024, 1280, 1536 px.

Check every file under `src/components/` and `src/app/` for:

1. **Overflow** — fixed widths, long unbroken strings, grids that do not collapse, tables.
2. **Touch targets** — anything interactive smaller than 44×44 px on mobile.
3. **Type scale** — text below 14 px on mobile; headings that do not step down.
4. **Spacing** — sections without responsive padding; content touching the viewport edge.
5. **Images** — missing `sizes`, missing `alt`, wrong `fill`/`width` usage.
6. **Accessibility** —
   - icon-only buttons and links without `aria-label`
   - non-semantic elements used as buttons
   - missing focus-visible styles
   - heading order (single `h1`, no skipped levels)
   - `aria-expanded` / `aria-controls` on the mobile menu toggle
7. **Both themes.** This is the one that bites here. `globals.css` darkens the brand and accent
   ramps at steps 50–400 for the light theme because they carry text. Flag any use of those steps
   as a bright FILL behind `text-onbrand` or `text-ink-950` — `--color-onbrand` is near-black in
   this project, so a darkened fill destroys the contrast. Raw Tailwind steps are never overridden
   and are the safe choice for tile fills.
8. **Motion** — animations that ignore `prefers-reduced-motion`.

Report findings as a table (file · line · issue · severity), fix the high and medium ones, then run
`npm run lint && npm run build`. List anything you deliberately left alone and why.
