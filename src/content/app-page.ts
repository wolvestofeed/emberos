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
  /** Plan it before you run it. `band` light puts it on cream with light cards (Muse Kitchen, 2026-11-10); dark is the default. */
  planning: { heading: string; items: TitledItem[]; band?: 'light' | 'dark' };
  /** How the engine thinks. Optional: Muse Kitchen dropped it on 2026-11-10 and a cream gap stands in its place. */
  rules?: { heading: string; items: TitledItem[] };
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
    'The Local Pulse shows how your kitchen KPIs and sustainability numbers stack up against your Local Group of peer operators with businesses like yours. Your data is anonymous and sharing is opt-in by each metric. What you share is what you can see in the Group.',
    'When a number is not where you want it, the built-in peer network finds an operator in your Local Group who has already achieved your goal and connects you privately with a qualified Sharer. Nothing is published, and no one sees a ranking.',
  ],
  primary: { label: 'Explore The Local Pulse', href: 'tbd' },
  secondary: { label: 'About CompTable', href: '/comptable' },
};
