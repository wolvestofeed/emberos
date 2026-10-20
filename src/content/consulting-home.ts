/**
 * Home page copy for the consulting site. Source of truth: content/consulting-home.md.
 * Edit the deck, then this file. Bracketed text is a slot Rob fills (design/default-style-sheet.md §10).
 */
import type { HeroContent } from '@/components/consulting/Hero';
import type { ServicesIntro } from '@/components/consulting/Services';
import type { HistoryContent } from '@/components/consulting/OperatingHistory';
import type { ToolKitTeaserContent } from '@/components/consulting/ToolKitTeaser';
import type { ClosingContent } from '@/components/consulting/ClosingCTA';
import type { SymptomsContent } from '@/components/consulting/Symptoms';
import type { DiagnosticContent } from '@/components/consulting/DiagnosticBlock';
import type { HowItWorksContent } from '@/components/consulting/HowItWorks';
import { BOOKING_URL, BOOK_LABEL } from '@/config/site';
import { services, servicesPage } from '@/content/services';

export const hero: HeroContent = {
  eyebrow: 'Costing · Accounting · Operations · Production',
  headline: 'Your food business is open. Now make it pay.',
  lede: {
    name: 'Rob Bogatin',
    intro: "[intro line: who he works with and what changes after he's been in the kitchen and in the books.]",
  },
  primary: { label: BOOK_LABEL, href: BOOKING_URL },
  secondary: { label: 'See how it works', href: '/services' },
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
  label: 'For owners of',
  items: ['Chefs and restaurateurs', 'CPG founders', 'Caterers', 'Ghost kitchens', 'Bakers'],
};

/**
 * "Sound familiar?" (roadmap Update 1). The symptoms are the ones in the agreed direction for the
 * first-year operator; working lines until Rob rewrites them.
 */
export const symptoms: SymptomsContent = {
  eyebrow: 'Sound familiar?',
  heading: 'Busy every day, and still not sure the business pays.',
  items: [
    'The dining room is full and the bank account is not.',
    'You do not know what a plate really costs to make.',
    'Labor is your biggest number and nobody can say what it should be.',
    'You are in the kitchen every day, so nothing gets fixed.',
    'Good people keep leaving, and training starts over.',
    'Prices were a guess on opening day and have not moved since.',
  ],
};

/** The Diagnostic as the entry offer (roadmap Update 1). "What you get" is the offer's included list from services.ts. */
export const diagnostic: DiagnosticContent = {
  eyebrow: 'Start here',
  heading: services[0].name,
  body: services[0].line,
  price: services[0].price,
  primary: { label: BOOK_LABEL, href: BOOKING_URL },
  detail: { label: 'See what is included', href: `/services#${services[0].slug}` },
  card: { title: 'What you get', items: servicesPage.sections[0].included },
};

/** "How it works" (roadmap Update 1): the Diagnostic, then Stabilize, with Build and Scale as the paths after. Working copy. */
export const howItWorks: HowItWorksContent = {
  eyebrow: 'How it works',
  heading: 'Start with the Diagnostic. Stay for the systems.',
  steps: [
    { title: 'A call', body: 'Thirty minutes on where the business stands and whether the Diagnostic is the right first step.' },
    { title: 'The Diagnostic', body: 'A fixed-fee look inside the kitchen and the books, ending in a written report: your real costs and a ranked list of fixes.' },
    { title: 'Stabilize', body: 'A monthly retainer through the first years: the close, costing and pricing, labor, HR, quality and SOPs, on a monthly or weekly cadence.' },
    { title: 'Build or Scale', body: 'Opening the next place, or growing into wholesale, co-packing or a second unit: a project or retainer when that stage comes.' },
  ],
};

export const servicesIntro: ServicesIntro = {
  eyebrow: 'Work with',
  heading: 'Rob Bogatin',
  description: '[Description of Rob: background, how he works, and what a founder gets from working with him.]',
};

/** Rob-confirmed facts only (CLAUDE.md rule 3). */
export const history: HistoryContent = {
  eyebrow: 'Operating history',
  heading: 'On the line and in the books.',
  photoPlaceholder: '[Photo: Rob at work in a kitchen]',
  rows: [
    { label: 'Co-owner', fact: 'A Philadelphia pizzeria' },
    { label: 'Co-owner', fact: 'A 150-seat bar and grill in Boulder' },
    { label: 'Co-packer', fact: "SW Colorado's kettle co-packer: prepared foods, SOPs, COGS" },
    { label: 'Social enterprise', fact: 'Good Food Collective: farm-to-shelf production and financial model for heritage orchards' },
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
