/**
 * The four offers. Source of truth: content/services.md. Edit the deck, then this file.
 * Offer structure (Rob, 2026-10-19; Docs/roadmaps/consulting-roadmap.md, Update 1): the Diagnostic is the
 * entry offer, Stabilize is the core retainer for operators in their first years, Build and Scale are the
 * secondary paths. Setup, costing and accounting, operations and SOPs, and production are the areas each
 * offer covers, not separate products. The offer names are reused on proposals and invoices.
 * Prices are placeholders until Rob sets them or decides to show none.
 */
import type { Service } from '@/components/consulting/Services';
import type { CoverageContent } from '@/components/consulting/Coverage';
import type { TermsContent } from '@/components/consulting/Terms';

export const services: Service[] = [
  {
    slug: 'diagnostic',
    numeral: '01',
    name: 'Business Diagnostic',
    line: 'A fixed-fee look inside your kitchen and your books: what everything really costs, where the money and the hours go, and the fixes that matter most.',
    price: '[Fixed fee $___]',
  },
  {
    slug: 'stabilize',
    numeral: '02',
    name: 'Stabilize',
    line: 'A monthly retainer for your first years: costing and pricing, the monthly close, labor and scheduling, HR, quality control and SOPs.',
    price: '[From $___ a month]',
  },
  {
    slug: 'launch',
    numeral: '03',
    name: 'Business Launch',
    line: 'Before you open: the systems, chart of accounts, costing model, opening budget, staffing plan and SOPs, built to run from day one.',
    price: '[Project fee $___]',
  },
  {
    slug: 'scale',
    numeral: '04',
    name: 'Scale',
    line: 'Production planning, wholesale and CPG pricing, co-packing, time studies, and the move to a second unit or a commissary.',
    price: '[Project or retainer, from $___]',
  },
];

/** The /services page: the head, then one section per offer. Bracketed text is a slot Rob fills. */
export const servicesPage = {
  header: {
    eyebrow: 'Services',
    headline: 'Start with a diagnostic. Stay for the systems.',
    lede: '[One or two lines on how an engagement starts and what it looks like from the inside.]',
  },
  sections: [
    {
      service: services[0],
      included: [
        'Review of your books, sales mix and last months of costs',
        'Recipe and plate costing on your top sellers',
        'Labor, scheduling and prep walk-through',
        'A written report with your real costs and a ranked list of fixes',
      ],
      outcome: 'A clear picture of where the business stands and what to fix first, whether or not you keep working with Rob.',
    },
    {
      service: services[1],
      included: [
        'Monthly close review and a P&L you can read',
        'Costing and pricing kept current as suppliers and menus change',
        'Labor, scheduling, hiring and HR systems',
        'Quality control and written SOPs the crew follows',
        'Monthly advisory or weekly embedded cadence',
      ],
      outcome: '[What the owner has after the first three months.]',
    },
    {
      service: services[2],
      included: [
        'Chart of accounts built around how the business runs',
        'Costing model, opening budget and first-year forecast',
        'Staffing plan, roles and onboarding',
        'Core SOPs for prep, service and closing',
        'Formation, licensing and permits through a Texas attorney or CPA',
      ],
      outcome: '[What the founder has on opening day.]',
    },
    {
      service: services[3],
      included: [
        'Production planning and batch scaling',
        'Wholesale and CPG pricing built from true COGS',
        'Co-packer selection and time studies',
        'Second-unit or commissary planning and forecasts',
      ],
      outcome: '[What the owner has when the next stage is running.]',
    },
  ],
};

/** "What every engagement covers" (roadmap Update 1): the four areas inside every offer, one line each. */
export const coverage: CoverageContent = {
  eyebrow: 'Inside every offer',
  heading: 'What every engagement covers.',
  areas: [
    { name: 'Setup', line: 'Books, chart of accounts, budget and the first-year plan. Formation, permits and licensing go to a Texas attorney or CPA.' },
    { name: 'Costing and accounting', line: 'Recipe and plate costing, COGS, pricing, P&L structure and a monthly close you can keep.' },
    { name: 'Operations and SOPs', line: 'Prep systems, ordering, inventory, staffing, HR, quality control and written standards the crew actually follows.' },
    { name: 'Production', line: 'Batch scaling, co-packing, time studies and the move from kitchen to shelf.' },
  ],
};

/** Software and terms (brief §4). Plain statements; every price is a slot. */
export const terms: TermsContent = {
  eyebrow: 'Software and terms',
  heading: 'What a retainer includes, and what happens after.',
  items: [
    { label: 'Minimum', text: 'Retainers (Stabilize, Business Launch, Scale) run three months minimum, billed monthly in advance.' },
    {
      label: 'Software included',
      text: 'While a retainer is active, Muse Kitchen (list price [$___]/month) and CompTable (list price [$___]/month) are included.',
    },
    { label: 'Month one', text: 'Rob sets the business up on both platforms and trains the staff who use them, so you run the software alongside him for at least two months.' },
    { label: 'The end', text: 'The engagement ends with you running the business on your own system.' },
    { label: 'After', text: 'Keep Rob on a monthly check-in retainer ([$___]/month) and receive an active-client subscription discount ([___]%).' },
    { label: 'Outside an engagement', text: 'Subscriptions on their own are at regular rates. The Diagnostic and single projects are billed at consulting rates, with no software.' },
  ],
  note: 'Single projects: paid one-off work at its own rate ([by quote]), without software.',
};
