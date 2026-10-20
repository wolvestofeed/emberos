import Link from 'next/link';
import { LOCATION, SITE_NAME } from '@/config/site';

const YEAR = 2026;

/** The consulting footer (style sheet §6.9): the wordmark left; the location and the copyright line right. No name and no email. */
export function SiteFooter() {
  return (
    <footer className="on-dark bg-ground text-mist">
      <div className="container-wide flex flex-wrap items-start justify-between gap-4 py-8 text-[13px]">
        <Link href="/" className="rounded-sm font-serif text-[22px] font-semibold leading-[1.2] text-cream">
          {SITE_NAME}
        </Link>
        <div className="flex flex-col gap-1 pt-1.5 sm:items-end">
          <p>{LOCATION}</p>
          <p>© {YEAR} Food Is My Muse, Wolves To Feed Publishing</p>
        </div>
      </div>
    </footer>
  );
}
