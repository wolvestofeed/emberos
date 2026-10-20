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
import type { WholeSystemsContent } from '@/components/consulting/WholeSystems';
import { BOOKING_URL, BOOK_LABEL } from '@/config/site';
import { services, servicesPage } from '@/content/services';

export const hero: HeroContent = {
  eyebrow: 'Independent Food businesses & Restaurants in Austin',
  headline: "You've mastered your food craft.\nNow it's time to run your business.",
  lede: {
    name: 'Food Is My Muse Consulting',
    intro: "is Austin's first food business partner that offers owners an integrated, whole systems foundation to launch, sustain and grow their business.",
  },
  primary: { label: BOOK_LABEL, href: BOOKING_URL },
  secondary: { label: 'See how I work', href: '/services' },
  // Illustrative figures; the page computes the totals from the rows:
  // true cost 802.50 + 396 + 230 + 22 + 175 = 1,625.50; price 2,700; margin 1,074.50 = 39.8%; hours 1 + 18 + 4 + 1 = 24.
  traced: {
    title: 'One order, every department',
    label: 'Illustrative example',
    item: 'Catering order: 150 boxed lunches at $18',
    rows: [
      { department: 'Purchasing', item: 'Ingredients, ordered and received', cost: 802.5, hours: 1 },
      { department: 'Production', item: 'Prep and cook, 18 h at $22', cost: 396.0, hours: 18 },
      { department: 'Operations', item: 'Packaging and delivery', cost: 230.0, hours: 4 },
      { department: 'Sales and admin', item: 'Booking and invoicing', cost: 22.0, hours: 1 },
      { department: 'Accounting', item: 'Share of rent and overhead', cost: 175.0 },
    ],
    price: 2700.0,
    sustainability: {
      title: 'Order sustainability report',
      rows: [
        { metric: 'Carbon emissions', value: '144 kg CO₂e' },
        { metric: 'Methane', value: '3.4 kg CH₄' },
        { metric: 'Water', value: '4,725 L' },
        { metric: 'Energy consumption', value: '158 kWh' },
        { metric: 'Waste, compost', value: '23.3 kg' },
        { metric: 'Waste, landfill', value: '6.8 kg' },
      ],
    },
  },
  // Working line; Rob may rewrite it.
  caption: 'An integrated whole-systems foundation: accounting and sustainability built into every process, so one order shows its true cost, its hours and its footprint.',
};

export const audiences = {
  label: 'Food business operators i work with',
  items: ['Chefs and restaurateurs', 'CPG founders', 'Caterers', 'Ghost kitchens', 'Bakers'],
};

export const symptoms: SymptomsContent = {
  eyebrow: "I've been through every pain point already",
  heading: "Let's build your roadmap to solve problems before they impact your business",
  items: [
    'Expensive & slow startup phases',
    'Outgrowing the $150k cottage food cap',
    'Rising food costs & fuel charges',
    'Staff shortages & increasing wages',
    'Customers are always price sensitive',
    'Being busy does not equal profitability'
  ],
};

export const wholeSystems: WholeSystemsContent = {
  eyebrow: 'Integrated, Whole systems',
  heading: 'Every input, wired to the books.',
  body: "Food Is My Muse Consulting builds and offers food business clients CPA-grade accounting ledgers & reports with sustainability metrics baked in.",
  ledger: {
    title: 'One master ledger',
    lines: ['Food cost and production', 'Labor cost and staffing', 'Cash flow and sales forecasts', 'Sustainability'],
  },
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

/** "How it works" (brief §6): the Diagnostic, then a retainer with the software, then independence. Scope copy, not voice. */
export const howItWorks: HowItWorksContent = {
  eyebrow: 'How it works',
  heading: 'A diagnostic, then a retainer with the software, then your own system.',
  steps: [
    { title: 'A call', body: 'Thirty minutes on where the business stands and whether the Diagnostic is the right first step.' },
    {
      title: 'The Diagnostic',
      body: 'About two weeks on the business as it is, at a fixed fee. It ends in a written report: real costs and a ranked list of fixes.',
    },
    {
      title: 'A retainer, software included',
      body: 'Stabilize for an open business, Business Launch before opening, Scale for growth. Three months minimum. Month one sets the business up on Muse Kitchen and CompTable and trains the people who use them; both are included while the retainer runs.',
    },
    {
      title: 'Independence',
      body: 'The engagement ends with you running the business on your own system. Keep a monthly check-in if you want one, with an active-client subscription discount.',
    },
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
  lead: 'Every engagement comes with its own software, set up and taught by the person who built it.',
  body: 'Both are included while a retainer is active. Rob sets the business up on both, trains the staff who use them, and keeps working weekly or monthly until the owner runs the business without him.',
  apps: [
    { name: 'Muse Kitchen', line: 'Runs production, costing and the kitchen.', price: 'List price [$___]/month', emberBadge: true },
    { name: 'CompTable', line: 'Models compensation, payroll cost and labor compliance.', price: 'List price [$___]/month', href: 'https://getcomptable.com' },
  ],
  link: { label: 'Open the Tool Kit', href: '/tool-kit' },
};

export const closing: ClosingContent = {
  heading: "[Closing line in Rob's words]",
  button: { label: BOOK_LABEL, href: BOOKING_URL },
};
