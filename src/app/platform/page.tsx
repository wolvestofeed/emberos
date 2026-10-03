import type { Metadata } from 'next';
import Image from 'next/image';
import { header, rules, groups, close } from '@/content/platform';
import { APP_LIST } from '@/config/apps';
import { Section, SectionHeading } from '@/components/Section';
import { ModuleTile } from '@/components/ModuleTile';
import { AppTag } from '@/components/AppTag';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Platform',
  description: header.intro,
};

export default function PlatformPage() {
  return (
    <>
      <section aria-labelledby="platform-heading" className="bg-ground text-cream">
        <div className="container-site py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-amber">{header.eyebrow}</p>
            <h1 id="platform-heading" className="mt-4 font-display text-5xl leading-[1.02] sm:text-6xl">
              {header.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-mist sm:text-xl">{header.intro}</p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {APP_LIST.map((app) => (
              <li key={app.key}>
                <a
                  href={app.url}
                  className="inline-flex items-center gap-3 rounded-pill border border-ground-line bg-ground-raised py-2 pl-2 pr-5 text-sm font-medium text-cream transition-colors hover:border-mist"
                >
                  <Image
                    src={app.key === 'muse' ? '/brand/muse-kitchen/muse-kitchen-icon-128.png' : '/brand/cotyledon/cotyledon-icon-128.png'}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-md"
                  />
                  {app.signInLabel}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section band="light" ariaLabelledBy="rules-heading">
        <SectionHeading id="rules-heading" eyebrow="How the engine thinks" title={rules.heading} tone="light" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {rules.items.map((r, i) => (
            <li key={r.title} className="rounded-card border border-cream-line bg-paper p-7 shadow-card-light">
              <span className="font-display text-4xl leading-none text-copper">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-copper">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section band="dark" ariaLabelledBy="modules-heading">
        <SectionHeading id="modules-heading" eyebrow="Modules" title="Every module, by section" />
        <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-mist">
          <span>A tag marks a module one app has.</span>
          <span className="inline-flex gap-1.5">
            <AppTag app="muse" tone="dark" />
            <AppTag app="cotyledon" tone="dark" />
          </span>
          <span>No tag means both.</span>
        </p>
        <div className="mt-12 space-y-14">
          {groups.map((g) => (
            <div key={g.heading} className="grid gap-6 lg:grid-cols-[16rem_1fr]">
              <div>
                <h3 className="font-display text-3xl leading-tight text-copper-light">{g.heading}</h3>
                {g.purpose ? <p className="mt-2 text-sm leading-relaxed text-mist">{g.purpose}</p> : null}
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {g.modules.map((m) => (
                  <li key={m.name} className="contents">
                    <ModuleTile name={m.name} line={m.line} apps={m.apps} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section band="deep" ariaLabelledBy="cta-heading">
        <CTA heading={close.heading} body={close.body} />
      </Section>
    </>
  );
}
