/**
 * The consulting practice: name, owner, where "Book a call" goes, and the site navigation.
 *
 * Book a call is a link, never a form (Docs/CLAUDE.md, decisions in force). With a booking URL it
 * goes there; with only an email it is a mailto; with neither it points at the contact block on /about.
 */
export const SITE_NAME = 'Food Is My Muse Consulting';
export const LOCATION = 'Austin, Texas';
export const SITE_DESCRIPTION =
  'Food business consulting by Rob Bogatin: business setup, costing and accounting, operations and SOPs, production and scale, for chefs and restaurateurs, CPG founders, caterers, ghost kitchens and bakers.';

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? (CONTACT_EMAIL ? `mailto:${CONTACT_EMAIL}` : '/about#contact');
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
