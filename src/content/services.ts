/**
 * The five offers (02 is a copy of 01 for Rob to rewrite, 2026-10-20). Source of truth: content/services.md. Edit the deck, then this file.
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
    name: 'Basic Business Diagnostic',
    line: 'A fixed-fee look inside your kitchen and your books: assessing costs, where the money and the hours go, and the fixes that matter most.',
    price: 'Fixed fee $1,500',
  },
  {
    slug: 'diagnostic-2',
    numeral: '02',
    name: 'Deep Dive Diagnostic',
    line: 'An advanced assessment of your kitchen and your books: calculating true costs, cash flow, and productive labor hours. Review menu pricing, compensation model and the fixes that matter most.',
    price: 'Fixed fee $3,500',
  },
  {
    slug: 'sustain',
    numeral: '03',
    name: 'Sustain',
    line: 'A monthly retainer for your first years: costing and pricing, the monthly close, staff scheduling, compensation modeling, quality control and SOPs.',
    price: 'Starting at $1,000 a month',
  },
  {
    slug: 'launch',
    numeral: '04',
    name: 'Business Launch',
    line: 'Before you open: the operating systems, chart of accounts, costing & pricing models, opening budget & forecast, staffing plan & comp model, SOPs - built to run on day one.',
    price: 'Project fee starting at $2,500',
  },
  {
    slug: 'scale',
    numeral: '05',
    name: 'Growth & Expansion',
    line: 'Production planning, wholesale and CPG pricing, co-packing, time studies, and the move to a second unit or a commissary.',
    price: 'Project or retainer fee starting at $1,500',
  },
];

/** The offer with this numeral, so the sections below read '01', '02'… exactly as the cards do. */
export const offer = (numeral: string): Service => {
  const found = services.find((o) => o.numeral === numeral);
  if (!found) throw new Error(`No offer numbered ${numeral}`);
  return found;
};

export const servicesPage = {
  header: {
    eyebrow: 'Consulting Services',
    headline: 'Start with a diagnostic.',
    headlineAccent: 'Stay for the systems and partner value.',
    lede: 'Rob Bogatin works with owner operators onsite and in-person.',
  },
  sections: [
    {
      service: offer('01'),
      included: [
        'Review of your books, sales mix and last months of costs',
        'Batch and plate prime costing',
        'Labor, scheduling and prep assessment',
        'A written report with your real costs and a ranked list of improvements',
      ],
      outcome: "A clear picture of where your business stands and what to fix. Then, what's the best consulting partnership strategy that meets your needs and budget.",
    },
    {
      service: offer('02'),
      included: [
        'Recalculated books, sales mix and last quarter cost averages',
        'Batch and plate prime costing and cost to serve',
        'Labor, scheduling and prep assessment + strategy scenarios',
        'A detailed written report with a ranked list of improvements',
      ],
      outcome: "A precise picture of where your business stands and what to fix. Then, what's the best consulting partnership strategy that meets your needs and budget.",
    },
    {
      service: offer('03'),
      included: [
        'Monthly review, a P&L you can read and financials you can understand',
        'Costing and pricing kept current as suppliers and menus change',
        'Labor, scheduling, hiring and HR systems',
        'Quality control and written SOPs the crew follows',
        'Monthly advisory or weekly embedded cadence',
      ],
      outcome: 'A partner that delivers serious results in the first three months. A roadmap to phase me out, so you can own every aspect of running your business.',
    },
    {
      service: offer('04'),
      included: [
        'Chart of accounts built around how the business runs',
        'Costing model, opening budget and first-year forecast',
        'Staffing plan, compensation model, roles and onboarding',
        'Core SOPs for prep, service and closing',
        'Formation, licensing and permits',
      ],
      outcome: 'A complete build and launch plan working backwards from Opening Day',
    },
    {
      service: offer('05'),
      included: [
        'Production planning and batch scaling',
        'Wholesale and CPG pricing built from true costs',
        'Co-packer selection, agreements and time studies',
        'Second-unit or commissary planning and forecasts',
      ],
      outcome: 'Clear numbers and a solid growth plan to navigate taking your business to the next level.',
    },
  ],
};

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
