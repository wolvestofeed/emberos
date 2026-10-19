/**
 * Home page copy for the consulting site. Source of truth: content/consulting-home.md.
 * Edit the deck, then this file. Bracketed text is a slot Rob fills (design/default-style-sheet.md §10).
 */
import type { HeroContent } from '@/components/consulting/Hero';
import type { ServicesIntro } from '@/components/consulting/Services';
import type { HistoryContent } from '@/components/consulting/OperatingHistory';
import type { ToolKitTeaserContent } from '@/components/consulting/ToolKitTeaser';
import type { ClosingContent } from '@/components/consulting/ClosingCTA';
import { BOOKING_URL, BOOK_LABEL } from '@/config/site';

export const hero: HeroContent = {
  eyebrow: 'Setup · Costing · Operations · Production',
  headline: 'Operations, costing and production for food businesses.',
  lede: {
    name: 'Rob Bogatin',
    intro: "[intro line: who he works with and what changes after he's been in the kitchen and in the books.]",
  },
  primary: { label: BOOK_LABEL, href: BOOKING_URL },
  secondary: { label: 'See the services', href: '/services' },
  // Illustrative figures, arithmetic computed on the page: 4.85 + 0.62 + 0.48 + 0.39 = 6.34; 6.34 / 28.00 = 22.6%.
  costing: {
    title: 'Plate costing',
    label: 'Illustrative example',
    item: 'Braised short rib, polenta, greens',
    rows: [
      { label: 'Short rib, 10 oz', amount: 4.85 },
      { label: 'Polenta', amount: 0.62 },
      { label: 'Greens and dressing', amount: 0.48 },
      { label: 'Jus and garnish', amount: 0.39 },
    ],
    menuPrice: 28.0,
  },
};

export const audiences = {
  label: 'Built for',
  items: ['Chefs and restaurateurs', 'CPG founders', 'Caterers', 'Ghost kitchens', 'Bakers'],
};

export const servicesIntro: ServicesIntro = {
  eyebrow: 'Services',
  heading: 'Rob Bogatin',
  description: '[Description of Rob: background, how he works, and what a founder gets from working with him.]',
};

/** Rob-confirmed facts only (CLAUDE.md rule 3). */
export const history: HistoryContent = {
  eyebrow: 'Operating history',
  heading: 'On the line and in the books.',
  photoPlaceholder: '[Photo: Rob at work in a kitchen]',
  rows: [
    { label: 'Owner', fact: 'A Philadelphia pizzeria' },
    { label: 'Owner', fact: 'A 150-seat bar and grill in Boulder' },
    { label: 'Co-packer', fact: "SW Colorado's kettle co-packer: prepared foods, SOPs, COGS" },
    { label: 'Food systems', fact: 'Good Food Collective: farm-to-shelf production and financial model for heritage orchards' },
    { label: 'Finance', fact: 'Director of Operations and Finance, San Juan Mountains Association' },
  ],
};

export const toolKit: ToolKitTeaserContent = {
  eyebrow: 'Tool Kit',
  heading: 'The software that comes with the work.',
  body: 'Ember OS, Muse Kitchen and Cotyledon: the costing, production and compliance tools used inside an engagement.',
  link: { label: 'Open the Tool Kit', href: '/tool-kit' },
};

export const closing: ClosingContent = {
  heading: "[Closing line in Rob's words]",
  button: { label: BOOK_LABEL, href: BOOKING_URL },
};
