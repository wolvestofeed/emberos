/**
 * About page copy. Source of truth: content/about.md. Edit the deck, then this file.
 *
 * The story is Rob's Mission note, the same text as the Tool Kit's /mission page, imported from
 * `src/content/mission.ts` so the two never drift. Operating history has its own page, /work.
 */
import { BOOKING_URL, BOOK_LABEL } from '@/config/site';
import { header as mission, note, signature } from '@/content/mission';

export const header = {
  eyebrow: 'About',
  headline: 'Rob Bogatin',
  lede: `${mission.headline}. ${mission.sub}`,
};

/** The first paragraph is set large, as on the Mission page; the rest are body text. */
export const story: string[] = note;

export { signature };

export const contact = {
  heading: 'Get in touch',
  body: "Feel free to reach me via phone  970-844-3145, email  lonewolf@wolvestofeed.com, or schedule a 30 minute call.",
  button: { label: BOOK_LABEL, href: BOOKING_URL },
};
