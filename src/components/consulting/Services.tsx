import Link from 'next/link';

export interface Service {
  /** URL fragment on /services, e.g. `business-setup`. */
  slug: string;
  numeral: string;
  /** Fixed names, reused on proposals and invoices (CLAUDE.md, decisions in force). */
  name: string;
  /** One line on the card. */
  line: string;
  /** "[Starting at $___]" until Rob sets prices or decides to show none. */
  price: string;
}

export interface ServicesIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

/** A service card (style sheet §6.5): numeral, title, one line, the price pinned to the bottom. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col gap-3.5 rounded-tile border border-cream-line bg-white p-7">
      <span className="figures font-serif text-[15px] text-copper-ink">{service.numeral}</span>
      <h3 className="font-serif text-[26px] font-semibold leading-[1.15] text-ink">
        <Link href={`/services#${service.slug}`} className="rounded-sm hover:underline">
          {service.name}
        </Link>
      </h3>
      <p className="text-[15px] leading-relaxed text-ink-soft">{service.line}</p>
      <span className="figures mt-auto border-t border-cream-deep pt-3 text-[13px] font-semibold text-ink">{service.price}</span>
    </article>
  );
}

/** The Services section: Rob's name as the heading, his description, then the four cards. */
export function ServicesSection({ intro, services }: { intro: ServicesIntro; services: Service[] }) {
  return (
    <section aria-labelledby="services-heading" className="container-wide py-16 sm:py-[88px]">
      <div className="mb-10 flex flex-col gap-3">
        <p className="eyebrow text-copper-ink">{intro.eyebrow}</p>
        <h2 id="services-heading" className="font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em] text-ink">
          {intro.heading}
        </h2>
        <p className="max-w-[40em] text-[17px] leading-relaxed text-ink-soft">{intro.description}</p>
      </div>
      <ul className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
        {services.map((s) => (
          <li key={s.slug}>
            <ServiceCard service={s} />
          </li>
        ))}
      </ul>
    </section>
  );
}
