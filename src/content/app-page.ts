/**
 * The shape of an application page in the Ember OS section (`/muse-kitchen`, `/cotyledon`), and the
 * "Have a seat at the table" band every Ember OS page closes with.
 *
 * Each application has its own complete copy (`muse-kitchen.ts`, `cotyledon.ts`), so one page's text
 * can be rewritten without touching the other. Split from the old Tool Kit and Platform pages on
 * 2026-11-10.
 */
import type { AppKey } from '@/config/apps';

export type Provenance = 'SOURCED' | 'STATED' | 'DERIVED' | 'PLACEHOLDER' | 'UNCONFIRMED' | 'DATED';

export interface SpotlightRow {
  label: string;
  value: string;
  unit: string;
  tag: Provenance;
  source: string;
}

export interface Screen {
  caption: string;
  /** Path under /public. An entry without `src` renders as a captioned frame. */
  src?: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface StripBlock {
  /** The block's name: a department on Muse Kitchen, a stage on Cotyledon. */
  name: string;
  line: string;
}

export interface TitledItem {
  title: string;
  body: string;
}

export interface ModuleGroup {
  heading: string;
  purpose?: string;
  modules: { name: string; line?: string }[];
}

export interface AppPageContent {
  app: AppKey;
  /** The browser tab title. */
  title: string;
  hero: { eyebrow: string; headline: string; support: string };
  /** Section 2: departments (Muse Kitchen) or stages (Cotyledon). */
  strip: {
    eyebrow: string;
    heading: string;
    /** The small label above each block's number: "Department" or "Stage". */
    blockLabel: string;
    /** Arrows between blocks when they are a sequence. */
    sequence: boolean;
    blocks: StripBlock[];
  };
  values: { heading: string; items: TitledItem[] };
  modules: {
    heading: string;
    sub: string;
    link: { label: string; href: string };
    tiles: { name: string; line: string }[];
  };
  planning: { heading: string; items: TitledItem[] };
  rules: { heading: string; items: TitledItem[] };
  groups: { heading: string; items: ModuleGroup[] };
  spotlight: {
    heading: string;
    body: string;
    /** The label on the example record, e.g. "Grow plan · Broccoli, 10 × 20 tray". */
    recordLabel: string;
    exampleNote: string;
    rows: SpotlightRow[];
    legend: Provenance[];
  };
  screens: { heading: string; items: Screen[] };
  missionTeaser: { quote: string; link: { label: string; href: string } };
}

export const PROVENANCE_LEGEND: Provenance[] = ['SOURCED', 'STATED', 'DERIVED', 'PLACEHOLDER', 'UNCONFIRMED', 'DATED'];

/**
 * The closing band on every Ember OS page: The Local Pulse and the peer-to-peer network, condensed from
 * the CompTable home page (Comptable/apps/web/src/app/(marketing)/page.tsx, 2026-11-10). Heading: Rob's.
 */
export const seatAtTheTable = {
  eyebrow: 'The Local Pulse · peer-to-peer intelligence network',
  heading: 'Have a seat at the table',
  paragraphs: [
    'The Local Pulse shows how your pay, staffing and benefits stack up against your Local Group: the operators who share your revenue band, your front- and back-of-house headcount, your service type and your labor law. It starts with your city, widens to your county and then your state only until at least ten operators are in the comparison, and the data is anonymous and opt-in.',
    'When a number is not where you want it, the built-in peer network finds an operator in your Local Group who has already moved it and connects you privately, one request at a time. Nothing is published, and no one sees a ranking.',
  ],
  primary: { label: 'Explore The Local Pulse', href: 'https://getcomptable.com/the-local-pulse' },
  secondary: { label: 'About CompTable', href: '/comptable' },
};
