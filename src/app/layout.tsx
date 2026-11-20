import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SITE_URL } from '@/config/apps';
import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site';
import '@/app/globals.css';

/*
 * Fonts are stored in the repo (src/app/fonts, Latin subset, OFL-1.1, from the @fontsource packages) so the
 * build never fetches Google Fonts; Vercel builds failed twice on 19 Nov 2026 when that fetch broke.
 */
const montserrat = localFont({ src: './fonts/montserrat-latin-wght-normal.woff2', weight: '300 700', variable: '--font-montserrat', display: 'swap' });
const cormorant = localFont({
  src: [
    { path: './fonts/cormorant-garamond-latin-wght-normal.woff2', weight: '500 600', style: 'normal' },
    { path: './fonts/cormorant-garamond-latin-wght-italic.woff2', weight: '500 600', style: 'italic' },
  ],
  variable: '--font-cormorant',
  display: 'swap',
});
const poppins = localFont({
  src: [
    { path: './fonts/poppins-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/poppins-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});
// Variable font with the optical-size axis: headings, the wordmark and large figures on the consulting pages.
const newsreader = localFont({ src: './fonts/newsreader-latin-opsz-normal.woff2', weight: '200 800', variable: '--font-newsreader', display: 'swap' });

/** Site-wide metadata is the consulting practice's. The Ember OS group overrides it with Ember OS. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: { siteName: SITE_NAME, type: 'website' },
  icons: { icon: '/favicon.ico', apple: '/apple-icon.png' },
};

/**
 * The root layout carries fonts, the skip link and metadata only. Each route group's layout
 * supplies its own header, footer and ground: `(site)` the consulting look, `(toolkit)` Ember OS.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable} ${poppins.variable} ${newsreader.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-tomato focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
