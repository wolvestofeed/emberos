import Link from 'next/link';
import { LOCATION, SITE_NAME } from '@/config/site';

/** The consulting footer (style sheet §6.9): the wordmark left, the location right. Per Rob (2026-10-20), no name and no email. */
export function SiteFooter() {
  return (
    <footer className="on-dark bg-ground text-mist">
      <div className="container-wide flex flex-wrap items-start justify-between gap-4 py-8 text-[13px]">
        <Link href="/" className="rounded-sm font-serif text-[22px] font-semibold leading-[1.2] text-cream">
          {SITE_NAME}
        </Link>
        <p className="pt-1.5">{LOCATION}</p>
      </div>
    </footer>
  );
}
