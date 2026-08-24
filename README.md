# Golam Mostofa — Portfolio

Personal portfolio of **Golam Mostofa**, Senior Software Engineer and ERP Architect
(Dhaka, Bangladesh). 11+ years across Bangladesh's Army MGO Branch, textile, IT, energy and
leather manufacturing — plus the MaatDrive SaaS platform for the German market.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Framer Motion.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # optional; the site runs fine without it
npm run dev                    # http://localhost:3002
```

## Scripts

| Command             | What it does                                    |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Dev server on port 3002                          |
| `npm run build`     | Production build                                 |
| `npm run start`     | Serve the production build                       |
| `npm run lint`      | ESLint                                           |
| `npm run typecheck` | `tsc --noEmit`                                   |
| `npm run format`    | Prettier write                                   |
| `npm run check`     | typecheck → lint → build — run before committing |

## Editing content

**All copy lives in `src/data/`.** Components never hard-code text.

| File            | Holds                                                      |
| --------------- | ---------------------------------------------------------- |
| `profile.ts`    | Name, titles, tagline, contact, stats, About copy           |
| `navigation.ts` | Nav links and social profiles                               |
| `skills.ts`     | The eight proficiency bars and the technology chip groups    |
| `services.ts`   | "What I do" blocks and the domain-expertise list             |
| `experience.ts` | The three roles                                             |
| `education.ts`  | Degrees                                                     |
| `projects.ts`   | Every project — card, detail page, sitemap all read from it  |

### The one rule that matters

Every fact in `src/data/` traces back to something Golam published — his portfolio at
`mostofacse58.github.io/mostofacse58` or his GitHub profile. Each data file opens with a comment
naming its source. **Where something is not published, the field is omitted rather than filled in.**

That is why there is no phone number, no GPA, no certifications section and no institution names:
they are not public, so they are absent, and the components render without them. If you add
content, keep that discipline — an invented line on a portfolio becomes an awkward question in an
interview.

## Adding a project

1. Append an object to `projects` in `src/data/projects.ts`.
2. Drop a 1200×750 cover at `public/images/projects/<slug>.png`.

The card, the `/projects/<slug>` detail page, `generateStaticParams` and the sitemap all pick it
up automatically. `features` is optional — leave it off rather than padding it out.

## Resume

No PDF has been published, so the resume call-to-action points at **`/resume`** — a
print-optimised page generated from the same data layer, which any browser can save as a PDF.

To switch to a real file: drop it in `public/resume/` and set `profile.resumeFile` to its path.
Every resume button across the site becomes a direct download with no further edits.

## Theme

Design tokens live in the `@theme` block of `src/app/globals.css`: an emerald/teal brand with a
warm gold accent on a deep carbon surface. Light and dark are both first-class — the theme is
resolved before first paint by `ThemeScript`, so there is no flash.

One trap worth knowing about: the brand and accent ramps at steps 50–400 are **darkened** for the
light theme because they are used as text. Never use those steps as a bright tile fill behind an
icon — `--color-onbrand` is near-black in this project. Reach for a raw Tailwind step
(`emerald-400`, `amber-400`, …), which is never overridden.

## Contact form

`POST /api/contact` validates input, rate-limits per IP, and includes a honeypot field. Without
`RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` it logs the message and returns a
success response that points the sender at the email address directly — so the form is never
broken, it just is not delivering mail yet.

## Deployment

Vercel, out of the box. Set `NEXT_PUBLIC_SITE_URL` to the final domain so canonical tags, OG image
URLs and the sitemap are absolute and correct.

For a self-hosted Node server or a static export, see the commented options at the top of
`next.config.ts`.

## Licence

MIT — see [LICENSE](LICENSE). The content, images and personal information are Golam Mostofa's.
