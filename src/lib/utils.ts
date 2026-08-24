/** Tiny classname joiner — avoids pulling in clsx/tailwind-merge for a static site. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Absolute origin used for canonical tags, OG images, robots.txt and the sitemap.
 *
 * Only ever read in server files (layout metadata, robots.ts, sitemap.ts), so the
 * server-only VERCEL_* variables are safe here — they would be undefined in a
 * browser bundle. Precedence:
 *   1. NEXT_PUBLIC_SITE_URL — set this once there is a custom domain.
 *   2. The domain Vercel injects, so a fresh deploy is already correct.
 *   3. Local dev.
 */
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  (vercelDomain ? `https://${vercelDomain}` : 'http://localhost:3002');

export function absoluteUrl(path = ''): string {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
