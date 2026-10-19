import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

/** The Tool Kit pages keep the Ember OS metadata: title, description and the stacked logo as the share image. */
export const metadata: Metadata = {
  title: { default: 'Ember OS', template: '%s · Ember OS' },
  description: 'Ember OS: a sustainable food business operating system that feeds people, farmers, our soil and the planet.',
  openGraph: {
    siteName: 'Ember OS',
    type: 'website',
    images: [{ url: '/brand/ember/ember-os-stacked-1024.png', width: 1024, height: 1024, alt: 'Ember OS' }],
  },
};

/**
 * The Tool Kit pages (`/tool-kit`, `/platform`, `/mission`): the Ember OS look, unchanged.
 * `.toolkit` restores the dark ground, cream text and amber focus ring from globals.css.
 */
export default function ToolkitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="toolkit flex flex-1 flex-col bg-ground text-cream">
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
