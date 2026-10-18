import Image from 'next/image';
import Link from 'next/link';
import { APP_LIST } from '@/config/apps';

const YEAR = 2026;

/** Footer: Ember OS mark, the two apps, site pages, sign-in links, copyright. The domain is never shown as a brand. */
export function Footer() {
  return (
    <footer className="border-t border-ground-line bg-ground-deep text-cream">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 rounded-md" aria-label="Ember OS home">
            <Image src="/brand/ember/ember-mark-64.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
            <Image src="/brand/ember/ember-os-wordmark-white.png" alt="Ember OS" width={586} height={99} className="h-5 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            A sustainable food business operating system that feeds people, farmers, our soil and the planet.
          </p>
        </div>

        <FooterList title="Applications" items={APP_LIST.map((a) => ({ label: a.name, href: a.url, external: true }))} />
        <FooterList
          title="Site"
          items={[
            { label: 'Platform', href: '/platform' },
            { label: 'Mission', href: '/mission' },
          ]}
        />
        <FooterList title="Sign in" items={APP_LIST.map((a) => ({ label: a.name, href: a.url, external: true }))} />
      </div>
      <div className="border-t border-ground-line">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Ember OS - Axiom Delta Venture Studio, Wolves to Feed Publishing. All rights reserved.</p>
          <p>Muse Kitchen and Cotyledon are powered by Ember OS.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string; external?: boolean }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="eyebrow text-amber">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={`${title}-${item.label}`}>
            {item.external ? (
              <a href={item.href} className="text-sm text-cream hover:text-amber">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="text-sm text-cream hover:text-amber">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
