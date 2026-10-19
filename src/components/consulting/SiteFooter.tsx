import Link from 'next/link';
import { CONTACT_EMAIL, LOCATION, OWNER, SITE_NAME } from '@/config/site';

/** The consulting footer (style sheet §6.9): wordmark and Rob's name left, location and email right. */
export function SiteFooter() {
  return (
    <footer className="on-dark bg-ground text-mist">
      <div className="container-wide flex flex-wrap items-start justify-between gap-4 py-8 text-[13px]">
        <div className="flex flex-col gap-1">
          <Link href="/" className="rounded-sm font-serif text-[22px] font-semibold leading-[1.2] text-cream">
            {SITE_NAME}
          </Link>
          <span>{OWNER}</span>
        </div>
        <p>
          {LOCATION} ·{' '}
          {CONTACT_EMAIL ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-sm text-cream underline underline-offset-4 hover:text-copper-light">
              {CONTACT_EMAIL}
            </a>
          ) : (
            '[email]'
          )}
        </p>
      </div>
    </footer>
  );
}
