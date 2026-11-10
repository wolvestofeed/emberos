/**
 * The CompTable page (`/comptable`): a summary of the getcomptable.com home page, in its own wording.
 * Source: Comptable/apps/web/src/app/(marketing)/page.tsx, src/lib/marketing/local-pulse-copy.ts and
 * src/components/platform-inventory.tsx, read 2026-11-10. Facts only: CompTable copy never advises.
 * No price: the consulting site says $50/month + tokens, getcomptable.com says "Get started free";
 * Rob picks one before a number goes here.
 */
export const COMPTABLE_URL = 'https://getcomptable.com';

export const comptable = {
  hero: {
    eyebrow: 'Ember OS · CompTable',
    headlineLines: ['Labor and wage laws change often.', 'Staff members do too.', 'CompTable helps you solve for both.'],
    sub: 'Compliance-driven wage and benefits modeling for independent food businesses, with a peer-to-peer intelligence network.',
    lede: "Model your whole roster before payroll. Then talk privately with a local operator who has already moved the number you're working on.",
    primary: { label: 'Get started free', href: `${COMPTABLE_URL}/sign-up` },
    secondary: { label: 'See how it works', href: `${COMPTABLE_URL}/how-it-works` },
    screenshot: {
      src: '/images/consulting/software/comptable-engine.webp',
      alt: 'CompTable: building a compensation model, with the live preview against the traditional baseline and a compliance finding',
      width: 863,
      height: 507,
    },
  },

  questions: {
    eyebrow: 'The questions operators ask',
    heading: 'Synchronized with the rules that govern your payroll.',
    closing:
      'CompTable is synchronized with the federal, state, and local rules that govern your payroll, so you can build compensation plans and high-performing teams with total confidence.',
    cards: [
      {
        questions: [
          'What do I do when the minimum wage law changes?',
          'What happens to my payroll if the tip credit goes away?',
          'How much will the next wage increase cost?',
        ],
        title: 'Minimum wages and tax credits are a moving target.',
        body: 'Indexed rates, tip credit rules, and FUTA credit reductions vary by state and city, and they change every year.',
      },
      {
        questions: ['Am I paying my people correctly right now?', 'What am I getting wrong that I don’t know about?', 'Would my payroll hold up in an audit?'],
        title: 'One wrong assumption can cost you a lot of money.',
        body: 'Missing a local ordinance exposes you to back-pay, penalties, and audits. Build staff retention with confidence.',
      },
      {
        questions: ['Is the calculator I’m using built for my location?', 'Which rules apply to my city, not just my state?'],
        title: 'Spreadsheets don’t know your jurisdiction.',
        body: 'Generic calculators ignore the locality rules that apply specifically to your business.',
      },
      {
        questions: ['How do I pay more without losing money?', 'How can I invest in my staff to optimize my business?'],
        title: 'Workforce culture is built, not hired.',
        body: 'Career paths, sustainable wages, retention and loyalty all start with how your compensation model is put together.',
      },
    ],
  },

  localPulse: {
    eyebrow: 'The Local Pulse',
    heading: 'Local Groups share anonymous, opt-in data so you can see how your model stacks up to operators just like you.',
    body: 'Your Local Group is the operators who share your revenue band, your front- and back-of-house headcount, your service type and your labor law. CompTable starts with your city, widens to your county and then your state only until at least ten operators are in the comparison, and shows on every tile how far it went.',
    metricsLabel: 'What it compares',
    metrics: [
      'Payroll % of sales',
      'FOH, BOH and all staff hourly wage averages',
      'Employee take-home income',
      'The wage gap between front and back of house',
      'Health, retirement and paid time off',
      'Staff retention to break even',
    ],
    link: { label: 'Explore The Local Pulse', href: `${COMPTABLE_URL}/the-local-pulse` },
  },

  network: {
    eyebrow: 'Built-in peer network',
    heading: 'Opt in to connect with your Local Group peers, as an Insight Seeker or Insight Sharer.',
    body: [
      'Every metric on The Local Pulse carries a simple stated goal: the position or direction a value would be if you optimized that component. If your number is not in the top quartile toward that goal, you can ask for guidance from someone in your Local Group who has consistently posted a high-ranking number.',
      'Insight Seekers and Insight Sharers choose every metric they are willing to share, and the metrics you share with your Local Group are the same metrics available to you from the group.',
    ],
    steps: [
      {
        lead: 'Request an Insight.',
        text: 'Select the metric you want help with and CompTable internally communicates with qualified Insight Sharers. There is no directory to browse and no list of names.',
      },
      {
        lead: 'CompTable Matching.',
        text: 'It looks for an operator in the top quartile on that metric who has opened it to connect: same city first, then county, then state.',
      },
      {
        lead: 'The Sharer Decides.',
        text: 'They only see your name and the metric title. They accept, or they decline, and the request moves on until we find you a match.',
      },
      {
        lead: 'Connect Privately.',
        text: 'When a Sharer accepts, they receive your contact details and reach out to you directly.',
      },
    ],
    monthly:
      'Once a month, CompTable tells each operator which metrics place them in the top quartile of their Local Group and invites them to share insight on those metrics. Nothing is published. No one sees a ranking.',
  },

  share: {
    heading: 'The more you share, the more you see.',
    body: 'Sharing is an opt-in checklist, one metric at a time. Every metric you share adds your anonymous figure to your Local Group and opens that comparison to you. Sharing insight is the same menu: of the metrics where you sit in the top quartile, you choose the ones you will talk about. Switch any of them off at any time, pause when you are busy, and decline any request without giving a reason.',
  },

  engine: {
    eyebrow: 'How the compliance engine works',
    headingLines: ['Compliance is the foundation.', 'Staff retention and performance are the goals.'],
    sub: 'You build scenarios that work for your business.',
    tiers: [
      { tier: 'Tier 1', name: 'Federal FLSA' },
      { tier: 'Tier 2', name: 'State + indexed wages' },
      { tier: 'Tier 3', name: 'Local ordinances + tip credit rules' },
    ],
    blocks: [
      {
        title: 'Regulatory Compliance',
        body: 'The CompTable platform is updated continuously with federal FLSA regulations, state-indexed minimum wages, FUTA credit reduction schedules, tip credit rules, and local municipal ordinances. Every model scenario you run reflects the rules in force for your specific jurisdiction, not a national average.',
      },
      {
        title: 'CompTable Model Engine',
        body: 'The math is deterministic; the AI is your support team. Accounting functions are handled within the codebase, so your financials are secure, accurate and never touch an AI agent. AI layers interpret regulations and labor laws in context, assist with ingesting and exporting your data, and process plain-language descriptions of your operations to speed up model building.',
      },
    ],
  },

  inventory: {
    eyebrow: 'What runs on the CompTable platform',
    heading: 'A Model Generator with built-in simulators, tools and templates.',
    outputsLabel: 'The Model Generator produces',
    outputs: [
      'Pro forma comparisons',
      'Dashboard and values-driven metrics',
      'Per-employee differentials',
      'Compliance findings and system alerts',
      'AI-assisted data ingestion and narratives',
      'Math trails, scenario and library management',
      'CPA-ready audit exports and account access',
    ],
    simulatorsLabel: 'Simulators and tools',
    simulators: [
      { name: 'Staff Retention Simulator', line: 'Multi-year cash flow projection with retention assumptions: the break-even month, cumulative savings and the dominant sensitivity.' },
      { name: 'Menu Pricing Engine', line: 'Translates a labor cost change into menu price changes by category, under a chosen strategy: maintain margin, prime cost % or target labor %.' },
      { name: 'Labor Headroom Solver', line: 'Given a fixed menu, searches the other levers (hours, headcount, wages, bonus, benefits, margin) and returns ranked candidates.' },
      { name: 'Wage Compression Simulator', line: 'Given a new wage floor, shows who falls below it and who collapses into the new-hire band. Tenure-aware when hire dates are present.', tag: 'Tool' },
    ],
    templatesLabel: 'Compensation templates',
    templates: [
      { name: 'Traditional', line: 'Tipped minimum wage and tip retention by FOH. The baseline most operators run today.' },
      { name: 'Full House Service Charge', line: 'A four-tier point system distributing one service charge pool across BOH and FOH. Tip credit forfeited.' },
      { name: 'BOH-only Service Charge', line: 'The service charge flows to BOH plus a benefits pool; FOH continues to receive tips. Tip credit retained on FOH.' },
      { name: 'Full House Tip Pool', line: 'Tipped FOH at full minimum wage; pooled tips split 75% FOH / 25% BOH.' },
      { name: 'Tip Credit Elimination', line: 'Models the jurisdiction eliminating the tip credit: tipped FOH base wages rise to the full minimum and tips restructure into a Full House Tip Pool.' },
    ],
  },

  privacy: {
    eyebrow: 'Privacy',
    heading: 'Privacy and anonymity are strict rules applied to AI-assisted tasks and The Local Pulse engine.',
    layers: [
      {
        title: 'The AI layer never sees who you are.',
        body: 'Names, your business name and your financial identifiers are stripped before anything reaches an AI model. Every dollar is computed by the deterministic engine.',
      },
      {
        title: 'The Local Pulse pool is anonymous.',
        body: 'Each Working Model you share adds one row to the Local Groups data set with no name, no roster and no link back to your business. Comparisons appear only when at least ten operators share a Local Group; below that, the tile says so instead of showing a number.',
      },
      {
        title: 'You are identified only when you choose to be.',
        body: 'Opening a metric to connect, requesting an insight, and accepting a request are each opt-in. A request sends your business name and the metric, and nothing else, to one peer at a time; a Sharer who accepts receives your contact details and reaches out to you.',
      },
    ],
    link: { label: 'Read the security page', href: `${COMPTABLE_URL}/security` },
  },

  callouts: [
    {
      eyebrow: 'For CPAs & accounting firms',
      heading: 'Managing hospitality clients?',
      body: 'Run every operator workspace from one firm dashboard. Deterministic math, jurisdiction-aware compliance findings, and PII-stripped AI processing, built for the way accounting firms actually work.',
      link: { label: 'CompTable for Accountants', href: `${COMPTABLE_URL}/accountants` },
    },
    {
      eyebrow: 'For local coalitions, nonprofits and programs',
      heading: 'Peer support that runs itself.',
      body: 'The Local Pulse produces anonymous, jurisdiction-true data on how independent operators in your area pay, staff and offer benefits, built from the models they actually run. The peer network does the matching a coalition would do by hand. Aggregated data is available on request.',
      link: { label: 'The Local Pulse for organizations', href: `${COMPTABLE_URL}/the-local-pulse#organizations` },
    },
  ],

  /** The photo beside "Have a seat at the table" on this page (Comptable/apps/web/public/images). */
  teamPhoto: {
    src: '/images/ember-os/comptable-team.jpg',
    alt: 'A restaurant team gathered on a rooftop at sunset',
    width: 576,
    height: 461,
  },
};
