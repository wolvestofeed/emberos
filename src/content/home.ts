/**
 * Home page copy. Source of truth: content/home.md. Edit the deck, then this file.
 * Headline: Rob's own, set 2026-10-02.
 */
import type { AppKey } from '@/config/apps';

export const hero = {
  eyebrow: 'Ember OS',
  headline: 'A sustainable food business operating system that feeds people, farmers, our soil and the planet.',
  support:
    'Ember OS runs your entire business, organizes your people and delivers sustainability reports, side by side.',
};

export interface EcosystemStage {
  stage: string;
  line: string;
  runsOn: AppKey[];
}

export const ecosystem = {
  heading: 'One platform, from seed to supper',
  stages: [
    { stage: 'Seed', line: 'Organic and heirloom seed, every lot traced to its supplier', runsOn: ['cotyledon'] },
    { stage: 'Soil', line: 'Growing media, nutrients and light, costed per tray', runsOn: ['cotyledon'] },
    { stage: 'Grow', line: 'Sowings, stages and harvests on a living calendar', runsOn: ['cotyledon'] },
    { stage: 'Prepare', line: 'Scratch recipes, batches and food safety', runsOn: ['muse'] },
    { stage: 'Serve & gather', line: 'Orders, deliveries, subscriptions and the people being fed', runsOn: ['muse', 'cotyledon'] },
  ] satisfies EcosystemStage[],
};

export const values = {
  heading: 'Built on four commitments',
  items: [
    {
      title: 'Complete transparency',
      body: 'Every figure shows where it came from: sourced, stated, derived or placeholder. A placeholder never looks like a real number.',
    },
    {
      title: 'Regenerative and sustainable',
      body: 'Energy, water, waste, refrigerants and supplier footprint are measured in the same system that runs production, not in a spreadsheet off to the side.',
    },
    {
      title: 'Nutrition first',
      body: "Food is judged by what it does for the body. Cotyledon scores every flat against a client's nutrition targets, and each benefit cites its research source.",
    },
    {
      title: 'Hospitality and community',
      body: 'The kitchen is where people gather. Ember OS includes customer, supplier and staff portals to bring your people into the system, with their orders, invoices and choices in one place.',
    },
  ],
};

export const modules = {
  heading: 'Runs the kitchen or the farm, keeps the books, and knows every employee, supplier and customer.',
  sub: 'Now you can manage every slice of your business from one system, including sustainability measured from your own recipes and your own facility.',
  link: { label: 'See every module', href: '/platform' },
  tiles: [
    { name: 'Production engine', line: 'Plans, batches or sowings, schedules, capacity and time studies, from one plan of record.' },
    { name: 'CPA-grade accounting', line: 'Double-entry ledger, US GAAP perpetual inventory at actual cost, P&L, balance sheet and cash flow.' },
    { name: 'Unit economics', line: 'True cost per unit and cost to serve, built from tagged inputs.' },
    { name: 'Sustainability', line: 'Scope 1, 2 and 3 emissions, energy, water, waste, refrigerants and supplier life-cycle data.' },
    { name: 'Supply chain', line: 'Procurement, purchase orders and a supplier directory with what each supplies.' },
    { name: 'Inventory and safety', line: 'FIFO lots and full traceability; HACCP control points or the Produce Safety Rule.' },
    { name: 'People', line: 'Staffing, schedules against labor demand, SOPs and training.' },
    { name: 'Sales and clients', line: 'Sales portal, prospects, customers and subscribers, orders.' },
    { name: 'Portals', line: 'Customer, client, supplier and family portals, each in its own space.' },
    { name: 'Billing and payments', line: 'Invoicing, receivables and payables, and subscriptions billed through Stripe.' },
  ],
};

export type Provenance = 'SOURCED' | 'STATED' | 'DERIVED' | 'PLACEHOLDER' | 'UNCONFIRMED' | 'DATED';

export interface SpotlightRow {
  label: string;
  value: string;
  unit: string;
  tag: Provenance;
  source: string;
}

/** A static mock with invented example values, labelled as examples on the page. */
export const spotlight = {
  heading: 'Every number shows its work',
  body: 'Open any figure in Ember OS and it tells you where it came from. A seed price carries its supplier and the receipt it was paid on. A labor minute carries the time study it was timed in. A number still waiting on real data says so, in a different color, until the real one replaces it.',
  exampleNote: 'Example values, not a live record.',
  rows: [
    { label: 'Broccoli seed', value: '$9.40', unit: '/ lb', tag: 'SOURCED', source: 'Supplier price list, received 14 Sep 2026 · receipt #4120' },
    { label: 'Sowing labor', value: '6.5', unit: 'min / tray', tag: 'DERIVED', source: 'Time study TS-07, three timed observations' },
    { label: 'Grow-room electricity', value: '$0.142', unit: '/ kWh', tag: 'PLACEHOLDER', source: 'Awaiting the first utility bill' },
  ] satisfies SpotlightRow[],
  legend: ['SOURCED', 'STATED', 'DERIVED', 'PLACEHOLDER', 'UNCONFIRMED', 'DATED'] satisfies Provenance[],
};

export interface Screen {
  caption: string;
  /** Path under /public. An entry without `src` renders as a captioned frame. */
  src?: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Cotyledon screens, shot by Rob 2026-10-02 (originals in content/cotyledon-*.png; web copies in public/screens/). */
export const screens: { heading: string; items: Screen[] } = {
  heading: 'Inside the system',
  items: [
    { caption: "Dashboard — every section's key figures, one page", src: '/screens/dashboard.webp', width: 1600, height: 989, alt: 'Cotyledon dashboard: one card per section with its key figures' },
    { caption: 'Production planning — orders become whole batches on a real schedule', src: '/screens/grow-calendar.webp', width: 1600, height: 1021, alt: "Cotyledon grow calendar: every sowing's stages across the days" },
    { caption: 'Sales — prospects, customers and orders in one pipeline', src: '/screens/sales.webp', width: 1600, height: 988, alt: 'Cotyledon sales: prospects and subscribers in one pipeline' },
    { caption: 'Sustainability — emissions and resources beside the work that produced them', src: '/screens/sustainability.webp', width: 1600, height: 990, alt: 'Cotyledon sustainability inventory and audit' },
  ],
};

export const missionTeaser = {
  // Rob's pick (2026-10-16): the audience line from the Mission note, verbatim.
  quote: 'This is for the chefs, farmers, cooks, bakers, caterers and community kitchens who believe food can heal people and the places we call home.',
  link: { label: 'Read why I built this', href: '/mission' },
};
