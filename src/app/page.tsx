import Image from 'next/image';
import Link from 'next/link';
import { hero, values, modules, missionTeaser } from '@/content/home';
import { Section, SectionHeading } from '@/components/Section';
import { PortalCard } from '@/components/PortalCard';
import { EcosystemStrip } from '@/components/EcosystemStrip';
import { ValueTile } from '@/components/ValueTile';
import { ModuleTile } from '@/components/ModuleTile';
import { ProvenanceSpotlight } from '@/components/ProvenanceSpotlight';
import { ScreenGallery } from '@/components/ScreenGallery';

export default function HomePage() {
  return (
    <>
      {/* 2. Hero + 3. Portal cards, in one dark band so the cards sit above the fold on desktop. */}
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
          <h2 className="sr-only">Sign in to an application</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <PortalCard app="muse" />
            <PortalCard app="cotyledon" />
          </div>
        </div>
      </section>

      {/* 4. The food ecosystem strip */}
      <Section band="light" ariaLabelledBy="ecosystem-heading">
        <EcosystemStrip />
      </Section>

      {/* 5. What we stand for */}
      <Section band="dark" ariaLabelledBy="values-heading">
        <SectionHeading id="values-heading" eyebrow="What we stand for" title={values.heading} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.items.map((v, i) => (
            <ValueTile key={v.title} index={i + 1} title={v.title} body={v.body} />
          ))}
        </div>
      </Section>

      {/* 6. Engines and modules */}
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
            <span aria-hidden="true">→</span>
          </Link>
        </p>
      </Section>

      {/* 7. Transparency spotlight */}
      <Section band="light" ariaLabelledBy="spotlight-heading">
        <ProvenanceSpotlight />
      </Section>

      {/* 8. Product glimpses */}
      <Section band="dark" ariaLabelledBy="screens-heading">
        <ScreenGallery />
      </Section>

      {/* 9. Mission teaser */}
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
