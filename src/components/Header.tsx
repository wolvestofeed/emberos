import Image from 'next/image';
import Link from 'next/link';
import { APP_LIST } from '@/config/apps';

const NAV = [
  { label: 'Platform', href: '/platform' },
  { label: 'Mission', href: '/mission' },
  { label: 'Consulting', href: '/' },
];

/** The Tool Kit pages' sticky dark header: Ember OS mark and wordmark, Platform, Mission, the way back to the consulting site, and the Sign in menu. */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ground-line bg-ground/95 text-cream backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-3">
        <Link href="/tool-kit" className="flex shrink-0 items-center gap-2.5 rounded-md" aria-label="Ember OS Tool Kit">
          <Image src="/brand/ember/ember-mark-64.png" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" priority />
          <Image src="/brand/ember/ember-os-wordmark-white.png" alt="Ember OS" width={586} height={99} className="hidden h-[18px] w-auto sm:block" priority />
          <span className="sr-only sm:hidden">Ember OS</span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 font-sans text-sm font-medium text-mist transition-colors hover:text-cream sm:px-3"
            >
              {item.label}
            </Link>
          ))}
          <SignInMenu />
        </nav>
      </div>
    </header>
  );
}

/**
 * The Sign in menu lists the same two direct links as the home cards.
 * Built on <details> so it needs no JavaScript and is keyboard operable by default.
 */
function SignInMenu() {
  return (
    <details className="group relative">
      <summary
        className="flex cursor-pointer list-none items-center gap-1.5 rounded-pill bg-amber px-3.5 py-2 font-sans text-sm font-semibold text-ink transition-colors hover:bg-[#ffb94d] sm:px-4"
        aria-haspopup="menu"
      >
        Sign in
        <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-open:rotate-180">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <ul
        role="menu"
        className="absolute right-0 mt-2 w-60 overflow-hidden rounded-tile border border-ground-line bg-ground-raised p-1.5 shadow-card"
      >
        {APP_LIST.map((app) => (
          <li key={app.key} role="none">
            <a
              role="menuitem"
              href={app.url}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-sans text-sm text-cream transition-colors hover:bg-white/10"
            >
              <Image
                src={app.key === 'muse' ? '/brand/muse-kitchen/muse-kitchen-icon-128.png' : '/brand/cotyledon/cotyledon-icon-128.png'}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 rounded-md"
              />
              <span>
                <span className="block font-semibold">{app.name}</span>
                <span className="block text-xs text-mist">{app.audience}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
