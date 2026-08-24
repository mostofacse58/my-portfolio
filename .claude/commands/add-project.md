---
description: Scaffold a new project entry with card + detail page
argument-hint: [project name]
allowed-tools: Read, Edit, Write, Bash(npm run typecheck), Bash(npm run lint), Bash(ls:*)
---

Add a new project to the portfolio: **$ARGUMENTS**

Steps:

1. Read `src/types/index.ts` to confirm the current `Project` shape, and `src/data/projects.ts`
   for tone, formatting and the source-of-truth rules in its header comment.
2. Interview me for anything you do not already know. Ask in ONE message, as a numbered list:
   - slug (kebab-case), category, my role, timeline/status
   - main tech (4 for the card) and the full stack list
   - one-line tagline, short description, 2–3 overview paragraphs
   - the module or feature list, **if one actually exists** — see step 4
   - live URL and repository URL (or "private")
3. Append the new object to the `projects` array in `src/data/projects.ts`. Match the existing
   voice: first person, concrete, no marketing filler.
4. **Do not invent detail.** `features` is optional. If I cannot give you a real module list, leave
   it off entirely — the detail page renders fine without it and says so honestly. Never pad a
   project with plausible-sounding bullets, metrics or challenges.
5. Set `image` to `/images/projects/<slug>.png` and tell me the exact path where I should drop a
   1200×750 cover. Do not invent an image file.
6. Run `npm run typecheck` and `npm run lint`, and fix anything that breaks.
7. Confirm the detail page URL: `/projects/<slug>`.

Do not touch any component file — the card, detail page, static params and sitemap all read from
the data array automatically.
