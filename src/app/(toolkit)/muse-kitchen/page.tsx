import type { Metadata } from 'next';
import { APPS } from '@/config/apps';
import { museKitchen } from '@/content/muse-kitchen';
import { AppLanding } from '@/components/AppLanding';

export const metadata: Metadata = {
  title: museKitchen.title,
  description: APPS.muse.runs,
};

/** The Muse Kitchen page. The Ember OS landing page is /emberos since 2026-11-19. */
export default function MuseKitchenPage() {
  return <AppLanding content={museKitchen} />;
}
