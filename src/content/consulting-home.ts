/**
 * Home page copy for the consulting site. This file is the source of truth; the operating history
 * rows come from src/content/work.ts and the Diagnostic block from src/content/services.ts.
 */
import type { HeroContent } from '@/components/consulting/Hero';
import type { HistoryContent } from '@/components/consulting/OperatingHistory';
import type { ToolKitTeaserContent } from '@/components/consulting/ToolKitTeaser';
import type { ClosingContent } from '@/components/consulting/ClosingCTA';
import type { SymptomsContent } from '@/components/consulting/Symptoms';
import type { DiagnosticContent } from '@/components/consulting/DiagnosticBlock';
import type { HowItWorksContent } from '@/components/consulting/HowItWorks';
import type { WholeSystemsContent } from '@/components/consulting/WholeSystems';
import { BOOKING_URL, BOOK_LABEL } from '@/config/site';
import { offer, servicesPage } from '@/content/services';
import { cases } from '@/content/work';

export const hero: HeroContent = {
  eyebrow: 'Indy Food businesses & Restaurants in Austin',
  headline: "You've mastered your food craft.",
  headlineAccent: "Now, it's time to run your business.",
  lede: {
    name: 'Food Is My Muse Consulting',
    intro: "is Austin's first food business partner that offers owners an integrated, whole systems foundation to launch, sustain and grow their business.",
  },
  primary: { label: BOOK_LABEL, href: BOOKING_URL },
  secondary: { label: 'See how I work', href: '/services' },
  // Illustrative figures; the page computes the totals from the rows:
  // true cost 802.50 + 396 + 230 + 22 + 175 = 1,625.50; price 2,700; margin 1,074.50 = 39.8%; hours 1 + 18 + 4 + 1 = 24.
  traced: {
    title: 'Every order or batch moves every calculation',
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
      title: 'Order Sustainability Report',
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
  label: 'Food business operators I work with',
  items: ['Chefs and restaurateurs', 'CPG founders', 'Caterers', 'Ghost kitchens', 'Bakers'],
};

export const symptoms: SymptomsContent = {
  eyebrow: "I've been through every pain point already, so",
  heading: "Let's build your roadmap to solve problems before they impact your business.",
  items: [
    'Expensive & slow startup phases',
    'Outgrowing the $150k cottage cap',
    'Rising food costs & fuel charges',
    'Staff shortages & increasing wages',
    'Customers are always price sensitive',
    'Busy does not equal profitability'
  ],
};

export const wholeSystems: WholeSystemsContent = {
  eyebrow: 'Integrated business systems',
  heading: 'Every input is wired to the books.',
  body: "Food Is My Muse Consulting builds its own tools and offers food business clients CPA-grade accounting ledgers & reports with unit economics, HR and sustainability metrics baked in.",
  ledger: {
    title: 'One master ledger captures',
    lines: ['Food cost and production', 'Labor cost and staffing', 'Cash flow and sales forecasts', 'Sustainability'],
  },
};

export const diagnostic: DiagnosticContent = {
  eyebrow: 'Start here',
  heading: offer('01').name,
  body: offer('01').line,
  price: offer('01').price,
  primary: { label: BOOK_LABEL, href: BOOKING_URL },
  detail: { label: 'See what is included', href: `/services#${offer('01').slug}` },
  card: { title: 'What you get', items: servicesPage.sections[0].included },
};

export const howItWorks: HowItWorksContent = {
  eyebrow: 'How it works',
  heading: 'A diagnostic, then a retainer with the software, then your own system.',
  steps: [
    { title: 'A call', body: 'Thirty minutes on where the business stands and which Diagnostic package is the right first step.' },
    {
      title: 'Basic Diagnostic or Deep Dive',
      body: 'About two to four weeks on the business as it is, at a fixed fee. It ends in a written report: real costs and a ranked list of fixes.',
    },
    {
      title: 'A retainer, software included',
      body: `${offer('03').name} for an open business, ${offer('04').name} before opening, ${offer('05').name} for growth. Three months minimum. Month one sets the business up on Muse Kitchen and CompTable and trains the people who use them; both are included while the initial retainer runs.`,
    },
    {
      title: 'Independence',
      body: 'The engagement ends with you running the business on your own system. Keep a monthly check-in if you want one, with an active-client subscription discount.',
    },
  ],
};

/**
 * Operating history, fed from the Work page's cases so each business is written once (per Rob,
 * 2026-10-20). The San Juan Mountains Association row is Home-only: Rob keeps it off Work, it is not food.
 */
export const history: HistoryContent = {
  eyebrow: 'Operating history',
  heading: 'On the line and in the books.',
  photoPlaceholder: '[Photo: Rob at work in a kitchen]',
  rows: [
    ...cases.map((c) => ({ label: c.label, fact: c.fact })),
    { label: 'Finance', fact: 'Director of Operations and Finance, San Juan Mountains Association' },
  ],
};

export const toolKit: ToolKitTeaserContent = {
  eyebrow: 'Tool Kit',
  heading: 'The software that comes with me.',
  lead: 'Every retainer engagement includes its own software accounts, set up and taught by the person who built them.',
  body: 'Both are included while a retainer is active. Rob sets the business up on both, trains the staff who use them, and keeps working weekly or monthly until the owner runs the business without him.',
  apps: [
    { name: 'Muse Kitchen', line: 'Runs production, costing and the kitchen.', price: 'List price $250/month', emberBadge: true },
    { name: 'CompTable', line: 'Models compensation, payroll cost and labor compliance.', price: 'List price $50/month + tokens', href: 'https://getcomptable.com' },
  ],
  link: { label: 'Open the Tool Kit', href: '/tool-kit' },
};

export const closing: ClosingContent = {
  heading: "It's time to build the food business you've been dreaming about.",
  button: { label: BOOK_LABEL, href: BOOKING_URL },
};
