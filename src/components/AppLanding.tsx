import Image from 'next/image';
import Link from 'next/link';
import type { AppPageContent } from '@/content/app-page';
import { Section, SectionHeading } from '@/components/Section';
import { PortalCard } from '@/components/PortalCard';
import { AppStrip } from '@/components/AppStrip';
import { ValueTile } from '@/components/ValueTile';
import { ModuleTile } from '@/components/ModuleTile';
import { ProvenanceSpotlight } from '@/components/ProvenanceSpotlight';
import { ScreenGallery } from '@/components/ScreenGallery';
import { SeatAtTheTable } from '@/components/SeatAtTheTable';

/**
 * One application page in the Ember OS section (`/muse-kitchen`, `/cotyledon`): the old Tool Kit page's
 * sections with the old Platform page's rules and module list folded in (2026-11-10). Every word comes
 * from the page's content file.
 */
export function AppLanding({ content }: { content: AppPageContent }) {
  const { app, hero, strip, values, modules, planning, rules, groups, spotlight, screens, missionTeaser } = content;
  return (
    <>
      {/* 1. Hero and the application's sign-in card */}
      <section aria-labelledby="hero-heading" className="bg-ground text-cream">
        <div className="container-site grid items-center gap-8 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <p className="eyebrow text-amber">{hero.eyebrow}</p>
            <h1 id="hero-heading" className="mt-4 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">{hero.support}</p>
          </div>
          <div className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-md">
            <Image
              src="/brand/ember/ember-os-illustration-1024.png"
              alt="The Ember OS mark: three leaves around a flame, with the Ember OS wordmark"
              width={1024}
              height={1024}
              priority
              className="hero-fade h-auto w-full"
              sizes="(min-width: 1024px) 28rem, 24rem"
            />
          </div>
        </div>
        <div className="container-site pb-16 pt-6 sm:pb-24 sm:pt-10">
          <h2 className="sr-only">Sign in</h2>
          <div className="mx-auto max-w-2xl">
            <PortalCard app={app} />
          </div>
        </div>
      </section>

      {/* 2. Departments (Muse Kitchen) or the food ecosystem (Cotyledon) */}
      <Section band="light" ariaLabelledBy="ecosystem-heading">
        <AppStrip strip={strip} />
      </Section>

      {/* 3. What we stand for */}
      <Section band="dark" ariaLabelledBy="values-heading">
        <SectionHeading id="values-heading" eyebrow="What we stand for" title={values.heading} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((v, i) => (
            <ValueTile key={v.title} index={i + 1} title={v.title} body={v.body} />
          ))}
        </div>
      </Section>

      {/* 4. Engines and modules, in summary */}
      <Section band="deep" ariaLabelledBy="modules-heading">
        <SectionHeading id="modules-heading" eyebrow="Engines and modules" title={modules.heading} sub={modules.sub} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {modules.tiles.map((t) => (
            <ModuleTile key={t.name} name={t.name} line={t.line} />
          ))}
        </div>
        <p className="mt-10">
          <Link href={modules.link.href} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-amber hover:underline">
            {modules.link.label}
            <span aria-hidden="true">↓</span>
          </Link>
        </p>
      </Section>

      {/* 5. Plan it before you run it */}
      <Section band="dark" ariaLabelledBy="planning-heading">
        <SectionHeading id="planning-heading" eyebrow="Before you commit" title={planning.heading} />
        <div className={`mt-12 grid gap-5 ${planning.items.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {planning.items.map((p, i) => (
            <ValueTile key={p.title} index={i + 1} title={p.title} body={p.body} />
          ))}
        </div>
      </Section>

      {/* 6. How the engine thinks */}
      <Section band="light" ariaLabelledBy="rules-heading">
        <SectionHeading id="rules-heading" eyebrow="How the engine thinks" title={rules.heading} tone="light" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2">
          {rules.items.map((r, i) => (
            <li
              key={r.title}
              className={`rounded-card border border-cream-line bg-paper p-7 shadow-card-light${
                i === rules.items.length - 1 && rules.items.length % 2 === 1 ? ' sm:col-span-2' : ''
              }`}
            >
              <span className="font-display text-4xl leading-none text-copper">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-2xl leading-tight text-copper">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 7. Every module, by section */}
      <Section band="dark" id="every-module" ariaLabelledBy="every-module-heading" className="scroll-mt-16">
        <SectionHeading id="every-module-heading" eyebrow="Modules" title={groups.heading} />
        <div className="mt-12 space-y-14">
          {groups.items.map((g) => (
            <div key={g.heading} className="grid gap-6 lg:grid-cols-[16rem_1fr]">
              <div>
                <h3 className="font-display text-3xl leading-tight text-copper-light">{g.heading}</h3>
                {g.purpose ? <p className="mt-2 text-sm leading-relaxed text-mist">{g.purpose}</p> : null}
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {g.modules.map((m) => (
                  <li key={m.name} className="contents">
                    <ModuleTile name={m.name} line={m.line} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Transparency spotlight */}
      <Section band="light" ariaLabelledBy="spotlight-heading">
        <ProvenanceSpotlight spotlight={spotlight} />
      </Section>

      {/* 9. Inside the system */}
      <Section band="dark" ariaLabelledBy="screens-heading">
        <ScreenGallery screens={screens} />
      </Section>

      {/* 10. Have a seat at the table: The Local Pulse and the peer network */}
      <Section band="deep" ariaLabelledBy="seat-heading">
        <SeatAtTheTable />
      </Section>

      {/* 11. Mission teaser */}
      <Section band="light" ariaLabelledBy="mission-teaser-heading">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="mission-teaser-heading" className="eyebrow text-copper">
            Mission
          </h2>
          <blockquote className="mt-6 font-display text-3xl italic leading-snug sm:text-4xl lg:text-5xl">
            &ldquo;{missionTeaser.quote}&rdquo;
          </blockquote>
          <p className="mt-8">
            <Link href={missionTeaser.link.href} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ink hover:underline">
              {missionTeaser.link.label}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
