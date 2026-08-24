import type { NextConfig } from 'next';

/**
 * Deployment notes
 * ----------------
 * Vercel (default)                    -> leave this file as-is.
 * Own VPS / cPanel with Node          -> uncomment `output: 'standalone'`
 *                                        then run: npm run build && node .next/standalone/server.js
 * Static hosting (cPanel, GitHub Pages, S3)
 *                                     -> uncomment `output: 'export'` AND
 *                                        `images.unoptimized`, then: npm run build  (outputs ./out)
 *                                        NOTE: the /api/contact route must be removed for static export.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // output: 'standalone',
  // output: 'export',

  images: {
    // unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'avatars.githubusercontent.com' }],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
