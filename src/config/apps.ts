/**
 * The two Ember OS applications and where they sign in.
 *
 * These are the only places an app URL is written. Muse Kitchen lives at
 * getcomptable.com/muse until it lifts out to muse.foodismymuse.com; change
 * the default here (or set NEXT_PUBLIC_MUSE_URL) and every button follows.
 */
export type AppKey = 'muse' | 'cotyledon';

export interface AppEntry {
  key: AppKey;
  name: string;
  /** The app's home, where the sign-in screen is. */
  url: string;
  /** The button label on every card and menu. */
  signInLabel: string;
  /** Who it is for, one line. */
  audience: string;
  /** What it runs, one line. */
  runs: string;
}

const MUSE_URL = process.env.NEXT_PUBLIC_MUSE_URL ?? 'https://getcomptable.com/muse';
const COTYLEDON_URL = process.env.NEXT_PUBLIC_COTYLEDON_URL ?? 'https://cotyledon.foodismymuse.com';

export const APPS: Record<AppKey, AppEntry> = {
  muse: {
    key: 'muse',
    name: 'Muse Kitchen',
    url: MUSE_URL,
    signInLabel: 'Sign in to Muse Kitchen',
    audience: 'For scratch commissary kitchens',
    runs: 'Recipes to batches to deliveries, with food safety, costing and the books in step.',
  },
  cotyledon: {
    key: 'cotyledon',
    name: 'Cotyledon',
    url: COTYLEDON_URL,
    signInLabel: 'Sign in to Cotyledon',
    audience: 'For microgreens and sprouts growers',
    runs: "Grow plans to sowings to subscriber flats, scored against each client's nutrition targets.",
  },
};

export const APP_LIST: AppEntry[] = [APPS.muse, APPS.cotyledon];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://foodismymuse.com';
