/**
 * The Ember OS applications and where they sign in: Muse Kitchen and CompTable, the two that make Ember
 * OS, and Cotyledon beside them (Rob, 2026-11-18).
 *
 * These are the only places an app URL is written. Muse Kitchen lives at
 * musekitchen.foodismymuse.com/kitchen (its own repo since 17 October 2026); change
 * the default here (or set NEXT_PUBLIC_MUSE_URL) and every button follows.
 */
export type AppKey = 'muse' | 'comptable' | 'cotyledon';

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

const MUSE_URL = process.env.NEXT_PUBLIC_MUSE_URL ?? 'https://musekitchen.foodismymuse.com/kitchen';
// Deep-links to the dashboard: the preview gate carries the path through its password page, so a visitor
// lands on the dashboard instead of the app's own welcome page and its second Login click.
const COMPTABLE_SIGN_IN = 'https://getcomptable.com/sign-in';
const COTYLEDON_URL = process.env.NEXT_PUBLIC_COTYLEDON_URL ?? 'https://cotyledon.foodismymuse.com/farm/dashboard';

export const APPS: Record<AppKey, AppEntry> = {
  muse: {
    key: 'muse',
    name: 'Muse Kitchen',
    url: MUSE_URL,
    signInLabel: 'Sign in to Muse Kitchen',
    audience: 'Restaurant and Batch Kitchen Modes',
    runs: 'Sustainable food business management, with Local Pulse peer-to-peer intelligence.',
  },
  comptable: {
    key: 'comptable',
    name: 'CompTable',
    url: COMPTABLE_SIGN_IN,
    signInLabel: 'Sign in to CompTable',
    audience: 'Hospitality wages & benefits',
    runs: 'Compensation modeling, payroll cost, take-home pay and labor compliance, with Local Pulse peer-to-peer intelligence.',
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

export const APP_LIST: AppEntry[] = [APPS.muse, APPS.comptable, APPS.cotyledon];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://foodismymuse.com';
