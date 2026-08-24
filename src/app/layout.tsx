import type { Metadata, Viewport } from 'next';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import BackToTop from '@/components/ui/BackToTop';
import ScrollProgress from '@/components/ui/ScrollProgress';
import ThemeScript from '@/components/ui/ThemeScript';
import { socialLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import { siteUrl } from '@/lib/utils';
import './globals.css';

const fullTitle = `${profile.name} — ${profile.designation} & ${profile.secondaryTitle}`;

const description =
  'Senior Software Engineer and ERP Architect with 11+ years building enterprise systems — ASP.NET Core, C#, SQL Server, Laravel and Next.js — across government, textile, leather and energy manufacturing.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: fullTitle,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    'Golam Mostofa',
    'Senior Software Engineer',
    'ERP Architect',
    'Full Stack Developer Bangladesh',
    'ASP.NET Core Developer',
    'Laravel Developer',
    'Next.js Developer',
    'SQL Server',
    'Epicor Kinetic',
    'ERP Bangladesh',
  ],
  authors: [{ name: profile.name, url: 'https://github.com/mostofacse58' }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: fullTitle,
    description:
      '11+ years turning fragmented factory floors into synchronized digital ecosystems — ERP architecture, enterprise .NET and modern full-stack.',
    images: [{ url: profile.ogImage, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.designation}`,
    description: 'Enterprise ERP architect and full-stack developer.',
    images: [profile.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  /* Matches the browser chrome to the active theme on mobile. */
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#050a09' },
  ],
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: `${profile.designation} & ${profile.secondaryTitle}`,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  image: `${siteUrl}${profile.photoSolid}`,
  worksFor: { '@type': 'Organization', name: profile.currentEmployer },
  address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
  sameAs: socialLinks.map((s) => s.href),
  knowsAbout: [
    'ERP Architecture',
    'ASP.NET Core',
    'C#',
    'SQL Server',
    'PHP Laravel',
    'Next.js',
    'Epicor Kinetic ERP',
    'Power BI',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      {/* Grammarly and similar extensions inject attributes into <body> before
          React hydrates, which React reports as a mismatch. suppressHydrationWarning
          silences that one element's attribute diff only — child mismatches are
          still reported normally. */}
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
