# CLAUDE.md — project guide for Claude Code

This file is read automatically by Claude Code (VS Code extension or CLI) at the start of every
session in this repo. Keep it accurate; it is the single highest-leverage file for output quality.

---

## 1. What this project is

The personal portfolio of **Golam Mostofa** — Senior Software Engineer and ERP Architect based in
Dhaka, Bangladesh, with 11+ years across government, textile, leather and energy manufacturing.
Its job is to get him hired: it must load fast, look senior, and read clearly on a phone.

**Live target:** Vercel first, `gtechsoft.xyz` (his own domain) later.

> This site shares an architecture with a sibling portfolio in `../../alamin-portfolio`. It is a
> **separate brand** — different palette, different type stack, different layout rhythm. Do not
> copy content, colours or fonts across. Never edit the sibling project from this one.

## 2. Stack

| Layer      | Choice                                                          |
| ---------- | --------------------------------------------------------------- |
| Framework  | Next.js 15 (App Router, RSC by default)                          |
| Language   | TypeScript, `strict: true`                                       |
| Styling    | Tailwind CSS v4 (CSS-first `@theme` tokens)                      |
| Animation  | Framer Motion                                                    |
| Icons      | `react-icons/fa6`                                                |
| Fonts      | Fontsource variable — Sora (display), Plus Jakarta Sans (body), Fira Code (mono) |
| Deployment | Vercel → later self-hosted Node/Docker                           |

Dev server runs on **port 3002** so it never collides with the sibling portfolio on 3001.

## 3. Directory map

```
src/
├── app/                      # App Router
│   ├── layout.tsx            # Root layout, metadata, JSON-LD, chrome
│   ├── page.tsx              # Home — composes every section
│   ├── globals.css           # Tailwind v4 @theme tokens + utilities
│   ├── icon.png  apple-icon.png       # Favicons (generated)
│   ├── not-found.tsx  sitemap.ts  robots.ts
│   ├── api/contact/route.ts  # Contact form handler (Resend, optional)
│   ├── resume/page.tsx       # Print-optimised resume, built from the data layer
│   └── projects/
│       ├── page.tsx          # All-projects index
│       └── [slug]/page.tsx   # Project detail (SSG via generateStaticParams)
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Hero, About, Skills, Experience, Projects, Education, Contact
│   └── ui/                   # Reveal, SectionHeading, Chip, SkillBar, ProjectCard, ResumeButton, …
├── data/                     # ⭐ ALL CONTENT LIVES HERE — edit these, not the components
│   ├── profile.ts  navigation.ts  skills.ts  services.ts
│   ├── experience.ts  education.ts  projects.ts
├── lib/                      # utils.ts (cn, siteUrl), motion.ts (shared variants)
└── types/index.ts            # Every shared type
public/
├── images/profile.jpg|.webp  # Portrait (from his own avatar)
├── images/projects/*.png     # Generated project covers
├── images/og-image.png       # Social share card
```

## 4. Rules — follow these

1. **Content changes go in `src/data/`.** Never hard-code copy, links or lists inside a component.
2. **Never invent biography.** Every fact in `src/data/` traces back to something Golam published
   or supplied: his portfolio (`mostofacse58.github.io/mostofacse58`), his GitHub profile, or
   `Golam Mostofa-details_cv.pdf` in the repo root. The source-of-truth header at the top of each
   data file says which. If a fact is not in one of those, it does not go in. Where something is
   still unrecorded (certificate numbers, verification links), the field is **omitted** and the
   component degrades — see rule 5.

   Deliberately kept **out** of the site even though the CV has them: date of birth, parents'
   names, marital status, religion, blood group, permanent address, and present/expected salary.
   A hiring portfolio is the wrong place for those.
3. **Server Components by default.** Only add `'use client'` when the file needs state, effects,
   browser APIs or Framer Motion hooks. Today the client components are: `Navbar`, `Hero`,
   `ContactForm`, `Reveal`, `ScrollProgress`, `BackToTop`, `SkillBar`, `ThemeToggle`, `PrintButton`.
4. **Types first.** New content shapes get a type in `src/types/index.ts`.
5. **Optional data must degrade, not placeholder.** `company`, `institution`, `result`, `features`
   and `resumeFile` are all optional. Components render nothing rather than "N/A" or filler.
6. **Tailwind only.** No CSS modules, no styled-components, no inline `style` except for animation
   delays. Design tokens live in the `@theme` block in `globals.css` — use `brand-*` / `accent-*` /
   `ink-*`, never a raw hex in a component.
7. **Light-theme contrast is a real constraint.** `globals.css` darkens the brand/accent ramps at
   steps 50–400 for the light theme because they are used as *text*. That means those steps must
   **never** be used as a bright tile fill behind a near-black icon — reach for a raw Tailwind step
   (`emerald-400`, `amber-400`, …) which is never overridden. `--color-onbrand` is **near-black**
   here, not white, because emerald and gold are both light fills.
8. **Mobile first.** Write the base styles for 360 px, then add `sm:` `md:` `lg:` `xl:`.
9. **Accessibility is not optional.** Every image needs meaningful `alt` (or `alt=""` if
   decorative), every icon-only control needs `aria-label`, and every interactive element must be
   keyboard reachable with a visible focus ring.
10. **Reuse the motion variants** in `src/lib/motion.ts`. Do not invent new easing curves per file.
11. **Never commit secrets.** `.env.local` only; `.env.example` documents the keys.
12. **`next/image` for every image** with explicit `sizes`. No bare `<img>`.
13. **Run `npm run check` before declaring done.** It runs typecheck → lint → build.

## 5. Commands

```bash
npm run dev         # http://localhost:3002
npm run build       # production build
npm run start       # serve the production build
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run format      # Prettier write
npm run check       # typecheck + lint + build  ← run this before every commit
```

## 6. Common tasks

**Add a project** → append an object to `projects` in `src/data/projects.ts`, drop a
1200×750 cover into `public/images/projects/`, done. The card, the detail page,
`generateStaticParams` and the sitemap all pick it up automatically. Slash command: `/add-project`.

**Change the colour scheme** → edit the `--color-brand-*` and `--color-accent-*` values in the
`@theme` block of `src/app/globals.css`, then re-check the light-theme overrides below it.

**Add a real resume PDF** → drop the file in `public/resume/` and set `profile.resumeFile` to its
path. Every resume button across the site switches from "View Resume" (→ `/resume`) to a direct
download automatically — see `src/components/ui/ResumeButton.tsx`.

**Add a nav section** → add the link to `navLinks` in `src/data/navigation.ts` and give the
matching `<section>` the same `id`. The active-link observer is automatic.

## 7. Known TODOs

- [ ] Restore `gtechsoft.xyz` once it serves. Checked again at deploy time: DNS resolves to
      95.216.113.114 but HTTPS does not respond and HTTP returns 404. The footer, contact card and
      social row now point at https://golammostofa.vercel.app; the GTechSoft project's
      `liveUrl` is `null` with a note, because a "View live project" button opening this same
      site would be worse than a disabled one. Put all four back when the domain is live.
- [x] Location confirmed as **Rangpur** — the CV gives Rangpur Sadar, Rangpur 5400 as his current
      location, which settles the Dhaka/Rangpur split. `profile.location` and the contact map link
      both point at Rangpur now.
- [ ] Reconcile the pre-2015 experience. His portfolio describes 2013—2016 work for the Army MGO
      Branch and an IT firm; the CV's work history starts Jan 2015 at Promiti Computer and Networks
      and never mentions it. `experience.ts` follows the CV, so that early role is not on the
      timeline — but `profile.about.journey` still names the Army MGO Branch. Ask him which is
      right and make the two agree.
- [ ] The mobile number from the CV (01723695251) is now public on the contact card and the resume
      page. Confirm he is happy with that; drop `profile.phone` / `profile.phoneIntl` to remove it.
- [ ] Add the Consultant Management System (anjapex.com) from the CV's "Accomplishment" section as
      a project — it needs a 1200×750 cover before it can go in.
- [ ] Replace the generated project covers with real screenshots where the client permits it.
- [x] CV PDF generated at `public/resume/Golam-Mostofa-CV.pdf` (6 pages, laid out like the
      reference resume: header, objective, academics, skills table, numbered training, employment
      history with "Projects Contributed", eight detailed key projects, proficiencies, references).
      `profile.resumeFile` points at it, so every Resume button is now a direct download.
      It is built from `src/data/` by a generator kept in the session scratchpad — regenerate it
      after editing projects, skills, education or experience, or the PDF drifts from the site.
- [ ] Decide whether the CV should carry date of birth. The reference resume has one; it is left
      out here because the PDF is served publicly from `/public`, and CLAUDE.md rule 2 keeps DOB,
      religion, marital status and blood group off the public site.
- [x] Institution names and results added to `src/data/education.ts` from the CV, plus the SSC
      entry and a "Certifications & training" block driven by the `training` export.
- [x] Deployed to Vercel as project `golammostofa` → https://golammostofa.vercel.app
      with `NEXT_PUBLIC_SITE_URL` set for production. Redeploy with `npx vercel --prod`.
- [ ] Optionally add `RESEND_API_KEY` so the contact form actually delivers mail — until
      then the form logs the message and tells the sender to email him directly.

- [ ] Identify `mostofa-portfolio/public/Golam_Mostofa_Certificate.pdf` — its text is vector
      layers and could not be read, so it is not in `src/data/certificates.ts` yet.
- [ ] Confirm the Leather Manufacturing ERP project (first in `projects.ts`). It is assembled only
      from facts already on record, but the combined module list should get his sign-off.

## 8. Tone of voice

First person, plain English, concrete. Prefer "18 modules delivered and live" over "leveraged
synergies". No emoji in UI copy. British/neutral spelling is used throughout — keep it consistent.
Claims must be defensible in an interview: if it cannot be traced to a source in rule 2, cut it.
