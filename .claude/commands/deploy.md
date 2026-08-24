---
description: Pre-flight check then deploy to Vercel
allowed-tools: Read, Edit, Bash(npm run check), Bash(npm run build), Bash(npx vercel:*), Bash(git status), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*)
---

Ship the portfolio.

Pre-flight — do all of this before deploying, and stop if any step fails:

1. `npm run check` (typecheck → lint → build). Fix anything that breaks.
2. Confirm every external URL in `src/data/` still resolves — especially `gtechsoft.xyz`, which
   was unreachable when the site was built. A dead link in the footer, contact card and social row
   is worse than no link.
3. Confirm `NEXT_PUBLIC_SITE_URL` is set in the Vercel project to the final domain, otherwise the
   canonical tag, OG image URLs and sitemap point at the preview domain.
4. Check `git status` is clean of secrets — `.env.local` must never be staged.
5. Show me the diff summary and ask before committing.

Then deploy with `npx vercel --prod` and report the deployment URL.

After deploying, sanity-check: `/`, `/projects`, one project detail page, `/resume`, `/sitemap.xml`
and `/robots.txt` should all return 200, and a bad slug should 404.
