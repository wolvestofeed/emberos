/**
 * Work page copy. The page is its intro and the operating-history band (moved here from Home on
 * 2026-10-21, per Rob); the band's rows come from `cases`, one line each. `title` and `body` are
 * kept on the record for a fuller Work page later.
 */
import type { HistoryContent } from '@/components/consulting/OperatingHistory';

export interface CaseStudy {
  label: string;
  title: string;
  /** The one line under the title. */
  fact: string;
  /** Replaces `fact` on the operating-history row when Rob wants the row worded differently (2026-10-21). */
  historyFact?: string;
  /** An optional longer note for the Work page only. */
  body?: string;
}

export const header = {
  eyebrow: 'Work',
  headline: 'Businesses I have run, built or improved.',
  lede: 'Full Service and Fast Casual Restaurants, Food Trucks, Catering, Full Bar service, CPG foods, Co-packing and Social Food Enterprises',
};

export const cases: CaseStudy[] = [
  { label: 'Co-owner', title: 'High-volume pizzeria and sandwich shop', fact: 'Award-winning Philadelphia pizzeria, hoagie and cheesesteak shop' },
  { label: 'Co-owner', title: 'Full service bar and grill', fact: 'A 150-seat restaurant and bar in Boulder serving breakfast, lunch and dinner' },
  { label: 'Co-owner', title: 'Cheesesteak fusion food trailer', fact: 'Corporate catering and festivals', historyFact: 'Fusion food trailer for corporate catering and festivals' },
  {
    label: 'Co-packer',
    title: "SW Colorado's kettle co-packer",
    fact: "SW Colorado's kettle co-packer: six in-house brands, HACCP, COGS, spice blends",
  },
  {
    label: 'Social enterprise',
    title: 'Good Food Collective',
    fact: 'Gleaning-to-shelf production and financial model for heritage apple orchards',
  },
];

/**
 * The operating-history band: the body of the Work page below its intro (Rob, 2026-10-21; it was the
 * home page's seventh section until then). Each case is one row; the San Juan Mountains Association
 * row is finance, not food, and stays a row here as it was on Home.
 */
export const history: HistoryContent = {
  eyebrow: 'Operating history',
  heading: 'On the line and in the books.',
  photo: {
    src: '/images/consulting/history/rob-with-client.webp',
    alt: 'Rob Bogatin at a cafe table with an owner, going through the numbers on a laptop',
    width: 1200,
    height: 900,
  },
  photoPlaceholder: '[Photo: Rob at work in a kitchen]',
  rows: [
    ...cases.map((c) => ({ label: c.label, fact: c.historyFact ?? c.fact })),
    { label: 'Finance', fact: 'Director of Operations and Finance, San Juan Mountains Association' },
  ],
};
