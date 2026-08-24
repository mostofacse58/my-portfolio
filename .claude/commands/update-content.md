---
description: Update portfolio copy, links or details in the data layer
argument-hint: [what to change]
allowed-tools: Read, Edit, Grep, Glob, Bash(npm run typecheck), Bash(npm run lint)
---

Update portfolio content: **$ARGUMENTS**

Rules:

1. **Everything lives in `src/data/`.** `profile.ts`, `navigation.ts`, `skills.ts`, `services.ts`,
   `experience.ts`, `education.ts`, `projects.ts`. Never hard-code copy into a component.
2. **Check the source before writing.** Each data file opens with a comment naming where its facts
   come from (his portfolio, his GitHub profile). If the new fact is not something Golam has
   published or told me directly, stop and ask — do not fill the gap with something plausible.
3. **Prefer omission to placeholders.** `company`, `institution`, `result`, `features` and
   `resumeFile` are optional and every component degrades cleanly when they are absent. Do not add
   "N/A", "Coming soon" or invented filler.
4. If a new shape is needed, add the type to `src/types/index.ts` first.
5. Keep the voice: first person, plain English, concrete, British/neutral spelling, no emoji.
6. Run `npm run typecheck && npm run lint` when done and report what changed.

If the change touches a URL, confirm the target actually resolves before committing it.
