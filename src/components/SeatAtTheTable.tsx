import Image from 'next/image';
import { seatAtTheTable } from '@/content/app-page';
import { Button } from '@/components/Button';

export interface SeatAtTheTableProps {
  /** An optional photo beside the text (the CompTable page uses the team photo). */
  photo?: { src: string; alt: string; width: number; height: number };
  /** Hide the "About CompTable" button on the CompTable page itself. */
  hideSecondary?: boolean;
}

/**
 * The closing band on every Ember OS page: The Local Pulse and the peer-to-peer intelligence network,
 * with the way into The Local Pulse on getcomptable.com. Replaced "Two trades today" on 2026-11-10.
 */
export function SeatAtTheTable({ photo, hideSecondary = false }: SeatAtTheTableProps) {
  const s = seatAtTheTable;
  const text = (
    <div className={photo ? '' : 'mx-auto max-w-3xl text-center'}>
      <p className="eyebrow text-amber">{s.eyebrow}</p>
      <h2 id="seat-heading" className="mt-3 font-display text-4xl leading-tight text-copper-light sm:text-5xl">
        {s.heading}
      </h2>
      {s.paragraphs.map((p) => (
        <p key={p.slice(0, 32)} className="mt-5 text-lg leading-relaxed text-mist">
          {p}
        </p>
      ))}
      <div className={`mt-8 flex flex-col gap-3 sm:flex-row ${photo ? '' : 'justify-center'}`}>
        <Button href={s.primary.href} external>
          {s.primary.label}
        </Button>
        {hideSecondary ? null : (
          <Button href={s.secondary.href} tone="ghost-dark">
            {s.secondary.label}
          </Button>
        )}
      </div>
    </div>
  );

  if (!photo) return text;
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
      {text}
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        className="h-auto w-full rounded-card border border-ground-line shadow-card"
        sizes="(min-width: 1024px) 28rem, 100vw"
      />
    </div>
  );
}
