/**
 * The consulting practice: name, owner, where "Book a call" goes, and the site navigation.
 *
 * Book a call is a link, never a form (Docs/CLAUDE.md, decisions in force): Rob's Cal.com event.
 */
export const SITE_NAME = 'Food Is My Muse Consulting';
export const LOCATION = 'Austin, Texas';
export const SITE_DESCRIPTION =
  'Food business consulting by Rob Bogatin: business setup, costing and accounting, operations and SOPs, production and scale, for chefs and restaurateurs, CPG founders, caterers, ghost kitchens and bakers.';

/** Rob's 30-minute Cal.com event (2026-10-20). NEXT_PUBLIC_BOOKING_URL overrides it. */
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://axiomdelta.cal.com/lonewolf/30min';
export const BOOK_LABEL = 'Book a 30-minute call';

export interface NavItem {
  label: string;
  href: string;
}

/** Main navigation on the consulting pages, in order. The Tool Kit is the Ember OS group. */
export const NAV: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Tool Kit', href: '/tool-kit' },
  { label: 'About', href: '/about' },
];
