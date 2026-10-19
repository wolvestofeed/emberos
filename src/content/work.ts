/**
 * Work page copy. Source of truth: content/work.md. Edit the deck, then this file.
 * Case studies come from Rob's confirmed history only: no invented clients, testimonials or
 * metrics (CLAUDE.md rule 3). Bracketed text is a slot Rob fills.
 *
 * Images: web-sized WebP in public/images/consulting/work/, originals in library/photos/work/.
 * Logos and brand examples supplied by Rob, 2026-10-19.
 */
export interface WorkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudy {
  label: string;
  title: string;
  /** The business, what Rob did, what changed. */
  body: string;
  /** The business's logo, or a strip of the brands it makes. */
  logo?: WorkImage;
  /** Brand examples: the products on the shelf. */
  photos?: WorkImage[];
}

export const header = {
  eyebrow: 'Work',
  headline: 'Businesses Rob has run, built or fixed.',
  lede: '[One line on what these have in common and what they show about how he works.]',
};

const WORK = '/images/consulting/work';

export const cases: CaseStudy[] = [
  { label: 'Co-owner', title: 'A Philadelphia pizzeria', body: '[What the business was, what Rob did there, what changed.]' },
  { label: 'Co-owner', title: 'A 150-seat bar and grill in Boulder', body: '[What the business was, what Rob did there, what changed.]' },
  { label: 'Co-owner', title: 'A cheesesteak fusion food trailer', body: '[What the business was, what Rob did there, what changed.]' },
  {
    label: 'Co-packer',
    title: "SW Colorado's kettle co-packer",
    body: '[Prepared foods, SOPs and COGS: what Rob built and what it fixed.]',
    logo: {
      src: `${WORK}/durango-artisan-foods-brand-strip.webp`,
      alt: 'The Durango Artisan Foods brands: Durango Salsa Company, O’Hara’s Jams & Jellies, San Juan Mountain Mustard, Durango Tea Company, Casey’s Own BBQ and Durango Spice Company',
      width: 1740,
      height: 343,
    },
    photos: [
      { src: `${WORK}/durango-artisan-foods-hot-sauces.webp`, alt: 'Hot sauces, teas and candies on the shop shelves', width: 750, height: 1000 },
      { src: `${WORK}/durango-artisan-foods-salsa-jams.webp`, alt: 'O’Hara’s jams, salsas, mustards and honey on the shop shelves', width: 750, height: 1000 },
      { src: `${WORK}/durango-artisan-foods-spices.webp`, alt: 'Durango Spice Company blends, taco seasonings and jerky on the shop shelves', width: 750, height: 1000 },
    ],
  },
  {
    label: 'Social enterprise',
    title: 'Good Food Collective',
    body: '[The farm-to-shelf production and financial model for heritage orchards: the problem, the model, the result.]',
    logo: { src: `${WORK}/good-food-collective-logo.webp`, alt: 'The Good Food Collective', width: 282, height: 282 },
    photos: [{ src: `${WORK}/good-food-collective-apple-chips.webp`, alt: 'Good Food Collective apple chips, bagged and on a market counter', width: 1200, height: 829 }],
  },
];
