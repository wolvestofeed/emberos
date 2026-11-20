/**
 * The Ember OS landing page (`/emberos`, Rob, 2026-11-19): a brief summary of the two applications that make
 * Ember OS, Muse Kitchen and CompTable. The consulting menu's Ember OS item lands here.
 *
 * Page flow (Rob, 2026-11-19): a light hero, then four numbered sections, each a section title plus headline:
 *   1. The 2-App Stack            — stack
 *   2. Actuals vs. Planning Mode  — planning
 *   3. The Two Engines            — engines (the two app cards)
 *   4. Peer-to-Peer Intelligence  — localPulse
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

export interface EmberOsSection {
  number: string;
  title: string;
  headline: string;
  subhead?: string;
  lead: string;
}

const apps: EmberOsApp[] = [
  {
    key: 'muse',
    audience: APPS.muse.audience,
    summary: 'Production, costing and the back office for restaurants and batch kitchens.',
    points: [
      'Suppliers, recipes, forecasts and the production floor',
      'A double-entry ledger, inventory at actual cost and CPA-ready statements',
      'Sustainability reporting on food, energy, water, waste and refrigerants',
      'Staffing, schedules, SOPs and training',
      'Local Pulse: your locked month beside kitchens like yours, with private introductions to peers',
    ],
    learn: { label: 'Explore Muse Kitchen', href: '/muse-kitchen' },
    start: { label: APPS.muse.signInLabel, href: APPS.muse.url },
  },
  {
    key: 'comptable',
    audience: APPS.comptable.audience,
    summary: 'Compliance-driven wage and benefits modeling for independent food businesses.',
    points: [
      'Pro forma comparisons across compensation templates',
      'Take-home pay for every employee',
      'Compliance findings and system alerts',
      'Local Pulse: your wage model beside operators like you',
      'Planned: payroll processing. Not available today',
    ],
    learn: { label: 'Explore CompTable', href: '/comptable' },
    start: { label: 'Get started free', href: `${COMPTABLE_URL}/sign-up` },
  },
];

export const emberOs = {
  title: 'Ember OS',
  hero: {
    eyebrow: 'Ember OS',
    headline: 'The unified operating system for independent food businesses.',
    support: 'Your books, back office, production, footprint and people, run as one connected business. Ember OS is built for restaurants, retail food and batch kitchen operators.',
  },

  stack: {
    number: '',
    title: 'The 2-App Stack',
    headline: 'Your POS handles the guests.',
    subhead: 'Ember OS runs your business.',
    lead: 'Ember OS is two applications built around independent and shared systems that manage almost every department you have. Your POS takes orders and payments; everything behind it runs here, in Ember OS.',
    layers: [
      { key: 'pos', name: 'Your POS', role: 'The guest', line: 'Orders, payments and the check.' },
      { key: 'muse', name: 'Muse Kitchen', role: 'The kitchen and the books', line: 'Suppliers, recipes, production, inventory, food safety, sales, the ledger and sustainability.' },
      { key: 'comptable', name: 'CompTable', role: 'Your people', line: 'Roster, wages, payroll burden, benefits and the schedule you publish.' },
    ],
  } satisfies EmberOsSection & { layers: { key: 'pos' | 'muse' | 'comptable'; name: string; role: string; line: string }[] },

  planning: {
    number: '',
    title: 'Actuals vs. Planning Mode',
    headline: 'Stop managing from the rearview mirror.',
    subhead: 'Test every decision before you spend a dime.',
    lead: 'Change one ingredient in one recipe and watch it move every engine it touches: purchase orders, production workflows, labor and meal costs, and your sustainability footprint. Every number updates system-wide, in real time.',
    modes: [
      {
        name: 'Actuals',
        tag: 'What happened',
        points: [
          'Inventory at actual cost and a double-entry ledger',
          'Locked months and CPA-ready statements',
          'Plan against actual, line by line',
        ],
      },
      {
        name: 'Planning Mode',
        tag: 'What could happen',
        points: [
          'Unlimited forecasts, with one plan of record you report against',
          'Open any forecast and every page, from the schedule to the P&L, runs under it',
          'Compare Mode: two forecasts or two recipes side by side, every difference listed',
        ],
      },
    ],
  } satisfies EmberOsSection & { modes: { name: string; tag: string; points: string[] }[] },

  engines: {
    number: '',
    title: 'The Two Engines',
    headline: 'One ledger from the prep table to the balance sheet.',
    lead: 'Muse Kitchen and CompTable share their systems. Wages and benefits modeled in CompTable land in Muse Kitchen as labor cost per batch and per plate, and from there in your books.',
    link: { label: 'How they work together', href: '/comptable#together' },
  } satisfies EmberOsSection & { link: { label: string; href: string } },

  apps,

  localPulse: {
    number: '',
    title: 'Peer-to-Peer Intelligence',
    headline: 'Don’t just benchmark your numbers.',
    subhead: 'Local Pulse connects you with operators who are performing well.',
    lead: 'Local Pulse runs through both applications. Muse Kitchen sets your kitchen KPIs and sustainability numbers beside your Local Group, operators with businesses like yours; CompTable does the same for wages, payroll and benefits. When a number isn’t where you want it, the network introduces you, privately, to an operator who has already reached your goal.',
    pillars: [
      { name: 'Anonymous', line: 'Your data is never shown with your name on it.' },
      { name: 'Opt-in by metric', line: 'You choose what you share, one number at a time.' },
      { name: 'Private introductions', line: 'Meet the operator behind the number you want to reach.' },
    ],
    link: { label: 'Explore The Local Pulse', href: `${COMPTABLE_URL}/the-local-pulse` },
  } satisfies EmberOsSection & { pillars: { name: string; line: string }[]; link: { label: string; href: string } },

  /** Getting started, three steps. Moved from the consulting home page on 2026-11-19; wording is Rob's. */
  startHeading: 'Start from where you are',
  startSteps: [
    { title: 'Bring last month, or start fresh', body: "Drop in last month's reports from your POS, accounting and payroll software and they are read into a baseline month, or begin with an empty kitchen." },
    { title: 'Set up by voice or by form', body: 'The onboarding wizard takes your business, your locations and your software, described in your own words or typed.' },
    { title: 'Go live by location', body: 'Each location gets its own go-live date. Before it, practice stays off the books; after it, the month to date is posted.' },
  ],

  cotyledon: {
    line: 'Also on Ember OS: Cotyledon, for microgreens and sprouts growers.',
    link: { label: 'Explore Cotyledon', href: '/cotyledon' },
  },
};
