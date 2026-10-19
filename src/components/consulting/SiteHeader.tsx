import Link from 'next/link';
import { BOOKING_URL, NAV, SITE_NAME } from '@/config/site';
import { PrimaryButton } from '@/components/consulting/Buttons';

/**
 * The consulting header (style sheet §6.1): the wordmark set in type, the only wordmark on the page;
 * Services, Work, Tool Kit, About; Book a call. Under 768 px the four links fold into a <details>
 * menu, as the Tool Kit header does with Sign in, and the button stays visible.
 */
export function SiteHeader() {
  return (
    <header className="border-b border-cream-line bg-paper">
      <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-5">
        <Link
          href="/"
          className="rounded-md font-serif text-[clamp(1.375rem,3.2vw,2rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-ink"
        >
          {SITE_NAME}
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-sm font-sans text-sm font-medium text-ink hover:underline">
                {item.label}
              </Link>
            ))}
          </nav>
          <PrimaryButton href={BOOKING_URL} size="sm">
            Book a call
          </PrimaryButton>
          <details className="relative md:hidden">
            <summary
              className="flex cursor-pointer list-none items-center rounded-pill border-[1.5px] border-ink px-4 py-3 font-sans text-sm font-semibold text-ink hover:bg-cream"
              aria-label="Open the menu"
            >
              Menu
            </summary>
            <nav aria-label="Main" className="absolute right-0 z-50 mt-2 w-56 rounded-tile border border-cream-line bg-white p-1.5 shadow-card-light">
              <ul>
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-lg px-3 py-3 font-sans text-sm font-medium text-ink hover:bg-cream">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
