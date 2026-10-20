/**
 * Work page copy, and the single source for the home page's operating history: each case's `fact`
 * is the one line shown under its title on Work and as its row on Home. `body` is an optional
 * longer note for the Work page only. The San Juan Mountains Association role stays off this page.
 */
export interface CaseStudy {
  label: string;
  title: string;
  /** The one line shown on Home's operating history and under the title on Work. */
  fact: string;
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
  { label: 'Co-owner', title: 'Cheesesteak fusion food trailer', fact: 'Corporate catering and festivals' },
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
