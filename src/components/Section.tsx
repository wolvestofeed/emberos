import type { ReactNode } from 'react';

type Band = 'dark' | 'deep' | 'light';

const BANDS: Record<Band, string> = {
  dark: 'bg-ground text-cream',
  deep: 'bg-ground-deep text-cream',
  light: 'bg-cream text-ink',
};

export interface SectionProps {
  band: Band;
  id?: string;
  children: ReactNode;
  className?: string;
  /** Accessible name for the landmark; pass the heading's id with `aria-labelledby` instead when there is a heading. */
  ariaLabelledBy?: string;
}

/** A full-width band. Bands alternate dark and light down the page. */
export function Section({ band, id, children, className = '', ariaLabelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={ariaLabelledBy} className={`${BANDS[band]} py-16 sm:py-24 ${className}`}>
      <div className="container-site">{children}</div>
    </section>
  );
}

export interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  tone?: 'dark' | 'light';
  align?: 'left' | 'center';
}

export function SectionHeading({ id, eyebrow, title, sub, tone = 'dark', align = 'left' }: SectionHeadingProps) {
  const eyebrowColor = tone === 'dark' ? 'text-amber' : 'text-copper';
  const titleColor = tone === 'dark' ? 'text-copper-light' : 'text-copper';
  const subColor = tone === 'dark' ? 'text-mist' : 'text-ink-soft';
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? <p className={`eyebrow mb-3 ${eyebrowColor}`}>{eyebrow}</p> : null}
      <h2 id={id} className={`font-display text-4xl leading-tight sm:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {sub ? <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{sub}</p> : null}
    </div>
  );
}
