/**
 * The four services. Source of truth: content/services.md. Edit the deck, then this file.
 * The names are fixed and reused on proposals and invoices (Docs/CLAUDE.md, decisions in force).
 * Prices are placeholders until Rob sets them or decides to show none; never invent one.
 */
import type { Service } from '@/components/consulting/Services';

export const PRICE_PLACEHOLDER = '[Starting at $___]';

export const services: Service[] = [
  {
    slug: 'business-setup',
    numeral: '01',
    name: 'Business Setup',
    line: 'Entity, licensing, permits, books, chart of accounts and the first-year plan.',
    price: PRICE_PLACEHOLDER,
  },
  {
    slug: 'costing-and-accounting',
    numeral: '02',
    name: 'Costing and Accounting',
    line: 'Recipe and plate costing, COGS, pricing, P&L structure and a monthly close you can keep.',
    price: PRICE_PLACEHOLDER,
  },
  {
    slug: 'operations-and-sops',
    numeral: '03',
    name: 'Operations and SOPs',
    line: 'Prep systems, ordering, inventory, staffing and written standards the crew actually follows.',
    price: PRICE_PLACEHOLDER,
  },
  {
    slug: 'production-and-scale',
    numeral: '04',
    name: 'Production and Scale',
    line: 'Batch scaling, co-packing, time studies and the move from kitchen to shelf.',
    price: PRICE_PLACEHOLDER,
  },
];

/** The /services page: the head, then one section per service. Bracketed text is a slot Rob fills. */
export const servicesPage = {
  header: {
    eyebrow: 'Services',
    headline: 'Four ways to work together.',
    lede: '[One or two lines on how an engagement starts and what it looks like from the inside.]',
  },
  sections: services.map((s) => ({
    service: s,
    included: ['[What is included, item one]', '[What is included, item two]', '[What is included, item three]'],
    outcome: '[What the founder has at the end of this engagement.]',
  })),
};
