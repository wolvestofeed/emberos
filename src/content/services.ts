import type { Service } from '@/components/consulting/Services';
import type { SoftwareAndTermsContent } from '@/components/consulting/SoftwareAndTerms';

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

/**
 * Software and terms (Rob, 2026-10-20): the two apps, what each offer comes with, and the terms.
 * Replaces the coverage band and the terms list. Prices are slots.
 */
export const software: SoftwareAndTermsContent = {
  eyebrow: 'Software Tools and Service Terms',
  heading: 'Three decades of experience on top of cutting-edge food business software.',
  lead: 'Every engagement comes with my expertise and focused attention on your business success. Retainers include use of the two software applications I built myself for food businesses just like yours - Muse Kitchen and CompTable.',
  apps: [
    {
      name: 'Muse Kitchen',
      line: 'Runs the kitchen and the business, end-to-end',
      covers: ['Recipes, batches and production planning, forecasts', 'Plate and batch costing from real prices paid', 'Customer CRM, Orders, Deliveries, Suppliers and CPA-grade books'],
      price: 'List price $250/month',
      emberBadge: true,
      screenshot: { src: '/images/consulting/software/muse-kitchen-admin-dashboard.webp', alt: 'The Muse Kitchen admin dashboard: financials, cold chain, supply chain, sustainability, people and sales on one page', width: 1200, height: 640 },
    },
    {
      name: 'CompTable',
      line: 'Compensation modeling and compliance for hospitality: payroll cost, take-home pay and the FOH/BOH gap, side by side',
      covers: [
        'Maximize profit and offer living wages and staff benefits',
        'Payroll liabilities, staff income and FOH/BOH disparity',
        'Compliance rules that cite the statute and the dollar impact',
      ],
      price: 'List price $50/month+ AI tokens as needed',
      href: 'https://getcomptable.com',
      logo: { src: '/brand/comptable/comptable-name-logo.webp', alt: 'CompTable', width: 800, height: 175 },
      overlay: { src: '/brand/comptable/comptable-name-logo.webp', alt: '', width: 800, height: 175 },
      screenshot: { src: '/images/consulting/software/comptable-engine.webp', alt: 'CompTable: building a compensation model, with the live preview against the traditional baseline and a compliance finding', width: 863, height: 507 },
    },
  ],
  matrix: {
    heading: 'What each service comes with',
    rows: [
      { numeral: '01', form: 'Fixed fee, about two weeks', museKitchen: false, compTable: false, minimum: '—' },
      { numeral: '02', form: 'Fixed fee, two to four weeks', museKitchen: false, compTable: false, minimum: '—' },
      { numeral: '03', form: 'Monthly retainer (monthly or weekly)', museKitchen: true, compTable: true, minimum: 'Three months' },
      { numeral: '04', form: 'Fixed-fee project (weekly)', museKitchen: true, compTable: true, minimum: 'Three months' },
      { numeral: '05', form: 'Project or retainer (monthly or weekly)', museKitchen: true, compTable: true, minimum: 'Three months' },
    ],
  },
  terms: {
    heading: 'The terms',
    items: [
      { label: 'Minimum', text: `Retainers (${offer('03').name}, ${offer('04').name}, ${offer('05').name}) run three months minimum, billed monthly in advance.` },
      {
        label: 'Software included',
        text: 'While a retainer is active, Muse Kitchen (list price $250/month) and CompTable (list price $50/month + tokens) are included free for three months.',
      },
      { label: 'Month one', text: 'Rob sets the business up on both platforms and trains the staff who use them, so you run the software alongside him for at least two months.' },
      { label: 'The end', text: 'The engagement ends with you running the business on your own system.' },
      { label: 'After', text: 'Keep Rob on a monthly Sustain retainer and receive an active-client subscription discount of 50%.' },
      { label: 'Outside an engagement', text: 'Subscriptions on their own are at regular rates. The Diagnostic and single projects are billed at consulting rates, with no software.' },
    ],
  },
};
