import { PROVENANCE_LEGEND, type AppPageContent } from '@/content/app-page';

export const museKitchen: AppPageContent = {
  app: 'muse',
  title: 'Muse Kitchen',

  hero: {
    eyebrow: 'Ember OS · Muse Kitchen',
    headline: 'A sustainable food business operating system that feeds people, farmers, our soil and the planet.',
    support: 'In Restaurant or Batch Kitchen mode, Ember OS runs your entire business, organizes your people and delivers sustainability reports, side by side. Local Pulse, a peer-to-peer intelligence network, sets your numbers beside kitchens like yours. All it needs beside it is your POS; keeping your accounting software is your choice.',
  },

  strip: {
    eyebrow: 'The departments it runs',
    heading: 'Sourcing, Recipes, Production, Costing, Food Safety, Accounting, Sales, Sustainability and Peer Network Intelligence.',
    blockLabel: 'ENGINE',
    sequence: false,
    blocks: [
      { name: 'Food Production', line: 'Restaurant or Batch Kitchen Modes, Organic Supplier Directory, Ingredient & Recipe / Batch Management, Unlimited Forecasts, the day schedule and the floor, order-driven planning.' },
      { name: 'People & Training', line: 'Staffing, schedules against labor demand, SOPs and training. Connects to the CompTable application for extensive staff wage and benefits planning.' },
          { name: 'Sustainability', line: 'Live calculations based on ingredients and supplier data, full reporting suite, track direct and indirect energy, water, waste, refrigerants and supplier footprint, beside the batches that made them.' },
      { name: 'Accounting', line: 'A double-entry ledger, inventory at actual cost, and the P&L, balance sheet and cash flow statements your CPA will approve.' },
      { name: 'Sales & Clients', line: 'A CRM surface with prospects, customers, orders and the portal interfaces for each.' },
      { name: 'Local Pulse', line: 'A peer-to-peer intelligence network. Share your locked month anonymously, see where you stand in your Local Group of kitchens like yours, and ask for a private introduction to one that has already reached your goal.' },
    ],
  },

  values: {
    heading: 'Built on four commitments',
    items: [
      {
        title: 'Complete transparency',
        body: 'We tag everything related to food and people safety and display source data with a timestamp and category: sourced, stated, derived or placeholder. A placeholder never looks like a real number.',
      },
      {
        title: 'Sustainability intelligence',
        body: 'Energy, water, waste, refrigerants and supplier footprint are measured in the same system that runs production, not in a spreadsheet off to the side. Your financials, production runs, staff planning and sustainability numbers are interconnected.',
      },
      {
        title: 'Power to decide',
        body: "Today's orders, costs, people and books in one connected system, with as many forecasts of tomorrow as you need beside them. Decide with the whole business in view, not one slice of it.",
      },
      {
        title: 'Hospitality and community',
        body: 'The kitchen is where people gather. Ember OS includes customer, supplier and staff portals to bring your people into the system. Used with CompTable, you have a workforce culture model generator where your roster feeds both systems.',
      },
    ],
  },

  modules: {
    heading: 'A food business operating system with Restaurant and Batch Kitchen Modes.',
    sub: 'Now you can manage every slice of your business from one system, including sustainability measured from your own recipes and your own facility.',
    link: { label: 'See every module', href: '#every-module' },
    featured: {
      eyebrow: 'Peer-to-peer intelligence network',
      name: 'Local Pulse',
      line: 'Lock a month and share up to 19 production, financial and sustainability ratios, anonymously and one metric at a time, with your Local Group: kitchens of your kind and size, near you first. See the range, median and top quartile on every metric you share, and ask for a private introduction to a kitchen that has already reached your goal.',
      link: { label: 'How Local Pulse works', href: '#local-pulse' },
    },
    tiles: [
      { name: 'Production engine', line: 'Plans, batches, prep against par, schedules, capacity and time studies, from one plan of record.' },
      { name: 'CPA-grade accounting', line: 'Double-entry ledger, US GAAP perpetual inventory at actual cost, P&L, balance sheet and cash flow.' },
      { name: 'Unit economics', line: 'True cost per unit and cost to serve, built from tagged inputs.' },
      { name: 'Sustainability', line: 'Scope 1, 2 and 3 emissions, energy, water, waste, refrigerants and supplier life-cycle data.' },
      { name: 'Supply chain', line: 'Procurement, purchase orders and an organic supplier directory with what each supplies.' },
      { name: 'Inventory and safety', line: 'FIFO lots and full traceability, par and count sheets, HACCP control points and line checks.' },
      { name: 'People', line: 'Staffing, schedules against labor demand, SOPs and training.' },
      { name: 'Sales and clients', line: 'Sales portal, prospects, customers and subscribers, orders.' },
      { name: 'Portals', line: 'Customer, client, supplier and family portals, each in its own space.' },
      { name: 'Receipt and bill management', line: 'Invoicing and receivables; payables with bills captured by camera and a bill register.' },
    ],
  },

  planning: {
    heading: 'Plan it before you run it',
    band: 'light',
    items: [
      {
        title: 'Forecasts',
        body: 'Save as many forecasts as you need. One is the plan of record you report against. Open any other and every page, from the schedule to the P&L, runs under it.',
      },
      {
        title: 'Compare Mode',
        body: 'One day under two forecasts, or two recipes side by side: cost, labor, resources, footprint and the management figures, with every difference listed.',
      },
      {
        title: 'Recipe Assistant',
        body: 'Type or dictate a change to any recipe. The engine proposes the new version, you approve it, and it is costed and saved into your library.',
      },
    ],
  },

  /** Highlights (marketing refresh, 2026-11-18): built since the 10 Nov page. Drafts for Rob's rewrite. */
  highlights: {
    eyebrow: 'Built for the way you run',
    heading: 'Two modes, one set of books, and a start from where you are.',
    sub: 'What Muse Kitchen does beyond the module list, from the first day on the system to the month you compare with your peers.',
    items: [
      {
        title: 'Two modes',
        body: 'A business runs one or both. Each mode has its own menu, dashboard, vocabulary and costing basis; your business, locations and settings are shared.',
        points: [
          'Restaurant: covers and plates, the menu at its prices, par, prep list, order guide, line checks, sales by channel',
          'Batch Kitchen: meals and portions, the batch your equipment makes, production planning, cold chain, deliveries',
        ],
      },
      {
        title: 'Start from where you are',
        body: "Set up by voice or by form in the onboarding wizard. Drop in last month's reports from any POS, accounting or payroll software and they become your baseline month.",
        points: ['A go-live date for each location', 'Practice stays off the books until then', 'POS sales and staff schedules import'],
      },
      {
        title: 'Capture by camera',
        body: 'Photograph a receipt or a supplier bill, or drop in the file. AI reads it into a draft, a person reviews it, and the approval posts it to the right account.',
        points: ['Receipts and bills by location', 'The bill register and card payments'],
      },
      {
        title: 'Every location, one ledger',
        body: 'Each location keeps its own books, and the business reads as one double-entry ledger, with statements by location and by unit.',
        points: ['Profit and loss, balance sheet and cash flow for any date range', 'Plan against actual', 'Every statement computed from records, none typed'],
      },
      {
        title: 'Reports and lenses',
        body: 'A library of 35 management reports across every department, with charts by week or month.',
        points: [
          'Five lenses: Performance, Loss & leakage, Alerts & compliance, Utilization & staffing, Sustainability',
          'Export one report, a department or a lens as a workbook',
        ],
      },
      {
        id: 'local-pulse',
        title: 'Local Pulse for kitchens',
        body: 'Lock a month and share up to 19 ratio metrics, anonymously and one at a time, with your Local Group: kitchens of your kind and size, near you first.',
        points: [
          "The group's range, average, median and top quartile on every metric you share",
          'Production, Financial and Sustainability views',
          'A private introduction to a top-quartile kitchen, only when you ask',
        ],
      },
      {
        title: 'Libraries that ship with it',
        body: 'Muse Kitchen arrives with the reference data a kitchen would otherwise have to build.',
        points: ['700 certified organic and school-ready suppliers', 'An equipment catalog for each mode', '43 food emission factors and a register of cited sources', 'The chart of accounts'],
      },
      {
        title: 'Sustainability to the portion',
        body: 'A greenhouse-gas inventory across Scopes 1, 2 and 3, computed per portion and per batch, on the plan and on actuals, with every factor cited.',
        points: ['The evidence pack', 'The organics and recycling compliance pack'],
      },
    ],
  },
  seatPrimaryHref: '#local-pulse',

  groups: {
    heading: 'Every module, by section',
    items: [
      {
        heading: 'Overview',
        purpose: 'See the whole operation at a glance.',
        modules: [
          { name: 'Dashboard', line: 'one card per section with its key figures; operators see their own view without company financials' },
          { name: 'Reports', line: '35 management reports, charts and five lenses, exported to a workbook' },
          { name: 'Local Pulse', line: 'your locked month beside your Local Group' },
          { name: 'Sources', line: 'the register of every source a figure cites' },
        ],
      },
      {
        heading: 'Production',
        purpose: 'Turn orders into a real production schedule.',
        modules: [
          { name: 'Recipes', line: 'every input line costed, from the ingredients up' },
          { name: 'Time studies', line: 'labor standards from timed observations, not guesses' },
          { name: 'Production planning, schedule, calendar', line: 'plan one run, one delivery day or a whole period; the day on the clock, the labor it demands, and the month on a calendar' },
          { name: 'Forecasts', line: 'save as many as you need; one is the plan of record, and a saved forecast can be forked' },
          { name: 'Compare', line: 'one day under two forecasts in both apps; two recipes side by side in Muse Kitchen, in cost, labor, resources, footprint and management figures' },
          { name: 'Recipe assistant', line: 'type or dictate a change; a proposal card to approve; costed and saved to the library on click' },
          { name: 'Capacity, equipment, packaging', line: 'what the room can hold, and where a plan runs out of space' },
          { name: 'Floor', line: 'the operator’s surface: punch clock, stage records, closing a batch' },
        ],
      },
      {
        heading: 'Restaurant mode',
        purpose: 'Covers and plates, from the menu to the line.',
        modules: [
          { name: 'Menu', line: 'every dish at its price, with plate economics by channel' },
          { name: 'Beverages and resale items', line: 'their own libraries and count sheets' },
          { name: 'Par and count sheets', line: 'only a full count trues the books' },
          { name: 'Prep list and order guide', line: 'set par once; the prep list and order guide follow the count' },
          { name: 'Line checks', line: 'a reading outside its limit shows as a finding' },
          { name: 'Sales and labor imports', line: "covers and sales by channel from the POS's daily summary; labor from the staff schedule" },
        ],
      },
      {
        heading: 'Financials and accounting',
        purpose: 'Books a CPA would sign.',
        modules: [
          { name: 'Unit economics', line: 'cost per unit and cost to serve, line by line' },
          { name: 'Profit & loss, balance sheet, cash flow', line: 'statements from the ledger, never from a separate spreadsheet' },
          { name: 'Ledger', line: 'double-entry, with perpetual inventory at actual cost under US GAAP (ASC 330)' },
          { name: 'Plan v actual, actuals', line: 'what was planned against what happened' },
          { name: 'Receivables, payables', line: 'who owes, who is owed' },
          { name: 'Receipts, bills and payables', line: 'captured by camera, reviewed, approved into the books; the bill register' },
          { name: 'Locations', line: 'each location its own books, one consolidated ledger, a go-live date per location' },
          { name: 'Capital & financing', line: 'equipment, loans and the money that built the place' },
        ],
      },
      {
        heading: 'Inventory and safety',
        purpose: 'Know every lot, from receipt to the plate or flat.',
        modules: [
          { name: 'Inventory', line: 'FIFO lots at the price paid' },
          { name: 'Food safety', line: 'HACCP and critical control points; line checks in Restaurant mode' },
        ],
      },
      {
        heading: 'Supply chain',
        purpose: 'Buy well and know who you buy from.',
        modules: [
          { name: 'Procurement', line: "purchase orders at each supplier's published price" },
          { name: 'Suppliers', line: 'the directory of 700 certified organic and school-ready suppliers: who they are, what they supply, and at what price' },
          { name: 'Supplier portal', line: 'suppliers sign in to their own space' },
        ],
      },
      {
        heading: 'Sustainability',
        purpose: 'Measure the footprint beside the work that made it.',
        modules: [
          { name: 'Inventory & audit', line: 'the emissions inventory and its audit trail' },
          { name: 'Facility, energy, refrigerants', line: 'Scope 1 and 2, from the bills and service records' },
          { name: 'Equipment & rebates', line: 'efficiency upgrades and the rebates they earn' },
          { name: 'Ingredients and inputs', line: 'Scope 3, from what you buy' },
          { name: 'Supplier LCA data', line: 'life-cycle data from the suppliers that publish it' },
          { name: 'Logistics, waste, water', line: 'delivery miles, end of life and effluent' },
        ],
      },
      {
        heading: 'People',
        purpose: 'Cover the floor. Connects to CompTable for complete staff management.',
        modules: [
          { name: 'Staffing', line: 'roster, roles, wages, punches and station coverage' },
          { name: 'Schedule', line: 'the roster against the labor the plan demands, with gaps shown' },
          { name: 'SOPs & training', line: 'the procedures and who is trained on them' },
        ],
      },
      {
        heading: 'Sales and clients',
        purpose: 'From first conversation to standing order.',
        modules: [
          { name: 'Sales portal', line: "the seller's own space" },
          { name: 'Sales CRM', line: 'prospects, customers and orders on one sales surface' },
          { name: 'Prospects', line: 'the pipeline, mapped' },
          { name: 'Customers', line: 'every account with its pickup points or delivery sites' },
          { name: 'Orders', line: 'confirmed and delivered, ready for production' },
        ],
      },
      {
        heading: 'Portals',
        purpose: 'Each person gets their own door.',
        modules: [
          { name: 'Customer portal and order builder' },
          { name: 'Parent portal', line: 'families see what their children are served' },
          { name: 'Supplier portal' },
        ],
      },
      {
        heading: 'Distribution',
        modules: [{ name: 'Off-site service', line: 'track your logistics when food is on the road' }],
      },
      {
        heading: 'Billing and payments',
        modules: [{ name: 'Invoicing and receivables', line: 'every order invoiced from the ledger' }],
      },
      {
        heading: 'Workspaces',
        modules: [
          { name: 'Multi-tenant from the ground up', line: 'each business is its own workspace, isolated in the database, with its own members and roles' },
          { name: 'Onboarding wizard', line: 'your business, locations, software and modules, by voice or by form' },
        ],
      },
    ],
  },

  spotlight: {
    heading: 'Every number shows its work',
    body: 'Open any figure in Ember OS and it tells you where it came from. An ingredient price carries its supplier and the bill it was paid on. A labor minute carries the schedule or time study it came from. A number still waiting on real data says so, in a different color, until the real one replaces it.',
    recordLabel: 'Menu item · Brisket plate, dine-in',
    exampleNote: 'Example values, not a live record.',
    rows: [
      { label: 'Brisket, whole packer', value: '$5.89', unit: '/ lb', tag: 'SOURCED', source: 'Supplier bill, captured 12 Nov 2026 · bill #2207' },
      { label: 'Plate labor', value: '4.2', unit: 'min / plate', tag: 'DERIVED', source: 'Staff schedule import, week of 9 Nov, against covers from the POS' },
      { label: 'Smoker gas', value: '$0.98', unit: '/ therm', tag: 'PLACEHOLDER', source: 'Awaiting the first utility bill' },
    ],
    legend: PROVENANCE_LEGEND,
  },

  /** Muse Kitchen screens from library/screenshots (the dashboard copy is shared with the Services page). */
  screens: {
    heading: 'Inside the system',
    items: [
      { caption: "Dashboard — every section's key figures, one page", src: '/images/consulting/software/muse-kitchen-admin-dashboard.webp', width: 1200, height: 640, alt: 'Muse Kitchen admin dashboard: one card per section with its key figures' },
      { caption: 'Sales — prospects, customers and orders in one pipeline', src: '/images/ember-os/muse-kitchen-sales.jpg', width: 1600, height: 989, alt: 'Muse Kitchen sales: prospects, customers and orders in one pipeline' },
    ],
  },

  missionTeaser: {
    quote: 'This is for the chefs, farmers, cooks, bakers, caterers and community kitchens who believe food can heal people and the places we call home.',
    link: { label: 'Read why I built this', href: '/mission' },
  },
};
