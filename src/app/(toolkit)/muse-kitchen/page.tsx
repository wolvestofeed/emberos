import type { Metadata } from 'next';
import { APPS } from '@/config/apps';
import { museKitchen } from '@/content/muse-kitchen';
import { AppLanding } from '@/components/AppLanding';

export const metadata: Metadata = {
  title: museKitchen.title,
  description: APPS.muse.runs,
};

/** The Muse Kitchen page: the Ember OS landing page since 2026-11-10 (was /tool-kit, which redirects here). */
export default function MuseKitchenPage() {
  return <AppLanding content={museKitchen} />;
}
