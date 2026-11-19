/**
 * The Ember OS landing page (`/emberos`, Rob, 2026-11-19): a brief summary of the two applications that make
 * Ember OS, Muse Kitchen and CompTable, side by side. The consulting menu's Ember OS item lands here.
 * Lines are drawn from muse-kitchen.ts, comptable.ts and consulting-home.ts; Cotyledon sits below as the
 * side project it is.
 */
import { APPS } from '@/config/apps';
import { COMPTABLE_URL } from '@/content/comptable';

export interface EmberOsApp {
  key: 'muse' | 'comptable';
  audience: string;
  summary: string;
  points: string[];
  learn: { label: string; href: string };
  start: { label: string; href: string };
}

const apps: EmberOsApp[] = [
  {
    key: 'muse',
    audience: APPS.muse.audience,
    summary: 'Runs production, costing and the back office in Restaurant or Batch Kitchen mode.',
    points: [
      'Suppliers, recipes, forecasts and the production floor',
      'A double-entry ledger, inventory at actual cost and CPA-ready statements',
      'Sustainability reports on food, energy, water, waste and refrigerants',
      'Staffing, schedules, SOPs and training',
      'Local Pulse: your locked month beside kitchens like yours, with private introductions to peers',
    ],
    learn: { label: 'Explore Muse Kitchen', href: '/muse-kitchen' },
    start: { label: APPS.muse.signInLabel, href: APPS.muse.url },
  },
  {
    key: 'comptable',
    audience: APPS.comptable.audience,
    summary: 'Compliance-driven wage and benefits modeling for independent food businesses, with a peer-to-peer intelligence network.',
    points: [
      'Pro forma comparisons across compensation templates',
      'Take-home pay for every employee',
      'Compliance findings and system alerts',
      'The Local Pulse: your model beside operators just like you',
    ],
    learn: { label: 'Explore CompTable', href: '/comptable' },
    start: { label: 'Get started free', href: `${COMPTABLE_URL}/sign-up` },
  },
];

export const emberOs = {
  title: 'Ember OS',
  hero: {
    eyebrow: 'Ember OS',
    headline: 'Ember OS is the first comprehensive food business operating system that lets you keep your actual records and plan beside them.',
    support: 'Ember OS is two applications built on one system. Muse Kitchen runs the kitchen and the books. CompTable runs wages and benefits. Build unlimited forecasts and scenarios, where changing one ingredient in a recipe moves every engine and output it touches: purchase orders, production workflows, labor and meal costs, and your sustainability footprint. Every adjustment updates your numbers system-wide, in real time.',
  },
  apps,
  localPulse: {
    eyebrow: 'Peer-to-peer intelligence network',
    heading: 'Local Pulse runs through both.',
    body: 'Muse Kitchen sets your kitchen KPIs and sustainability numbers beside your Local Group of operators with businesses like yours; CompTable sets your wages, payroll and benefits beside theirs. Your data is anonymous and sharing is opt-in by each metric. When a number is not where you want it, the network connects you privately with an operator who has already reached your goal.',
    link: { label: 'Explore The Local Pulse', href: `${COMPTABLE_URL}/the-local-pulse` },
  },
  together: {
    heading: 'One system',
    body: 'CompTable holds your people: roster, wages, payroll burden, benefits and the schedule you publish. Muse Kitchen runs suppliers, recipes, production, inventory, food safety, the books, sales and sustainability. Labor cost lands in Muse Kitchen per batch and per plate.',
    link: { label: 'How they work together', href: '/comptable#together' },
  },
  cotyledon: {
    line: 'Also on Ember OS: Cotyledon, for microgreens and sprouts growers.',
    link: { label: 'Explore Cotyledon', href: '/cotyledon' },
  },
};
