import type { Metadata } from 'next';
import { APPS } from '@/config/apps';
import { cotyledon } from '@/content/cotyledon';
import { AppLanding } from '@/components/AppLanding';

export const metadata: Metadata = {
  title: cotyledon.title,
  description: APPS.cotyledon.runs,
};

/** The Cotyledon page, split from the old Tool Kit and Platform pages on 2026-11-10. */
export default function CotyledonPage() {
  return <AppLanding content={cotyledon} />;
}
