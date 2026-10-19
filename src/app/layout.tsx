import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat, Newsreader, Poppins } from 'next/font/google';
import { SITE_URL } from '@/config/apps';
import { SITE_DESCRIPTION, SITE_NAME } from '@/config/site';
import '@/app/globals.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-montserrat', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'], variable: '--font-cormorant', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-poppins', display: 'swap' });
// Variable font with the optical-size axis: headings, the wordmark and large figures on the consulting pages.
const newsreader = Newsreader({ subsets: ['latin'], axes: ['opsz'], variable: '--font-newsreader', display: 'swap' });

/** Site-wide metadata is the consulting practice's. The Tool Kit group overrides it with Ember OS. */
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
