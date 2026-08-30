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
 *
 * Each candidate is normalised rather than trusted. `??` alone is not enough:
 * an env var that exists but is EMPTY is a string, not nullish, so it wins the
 * coalesce and leaves siteUrl as '' — which took the Vercel build down with
 * `new URL('')` → ERR_INVALID_URL while collecting /_not-found. A blank or
 * whitespace value must be treated as absent, and a bare host must get a
 * scheme, or `new URL` rejects it just the same.
 */
function normaliseOrigin(value: string | undefined): string | undefined {
  const trimmed = value?.trim().replace(/\/+$/, '');
  if (!trimmed) return undefined;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export const siteUrl =
  normaliseOrigin(process.env.NEXT_PUBLIC_SITE_URL) ??
  normaliseOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normaliseOrigin(process.env.VERCEL_URL) ??
  'http://localhost:3002';

export function absoluteUrl(path = ''): string {
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}
