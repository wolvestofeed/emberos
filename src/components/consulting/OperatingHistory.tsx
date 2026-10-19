import Image from 'next/image';

export interface HistoryRow {
  label: string;
  fact: string;
}

export interface HistoryContent {
  eyebrow: string;
  heading: string;
  /** Web-sized copy in public/images/consulting/. Without it the slot is a labeled placeholder. */
  photo?: { src: string; alt: string; width: number; height: number };
  photoPlaceholder: string;
  /** Rob-confirmed facts only (CLAUDE.md rule 3). */
  rows: HistoryRow[];
}

/** The dark band (style sheet §6.6): eyebrow, heading and the photo slot left; a <dl> of facts right. */
export function OperatingHistory({ content, headingId = 'history-heading' }: { content: HistoryContent; headingId?: string }) {
  const { eyebrow, heading, photo, photoPlaceholder, rows } = content;
  return (
    <section aria-labelledby={headingId} className="on-dark bg-ground text-cream">
      <div className="container-wide flex flex-wrap gap-10 py-16 sm:gap-14 sm:py-[88px]">
        <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
          <p className="eyebrow text-copper-light">{eyebrow}</p>
          <h2 id={headingId} className="font-serif text-[clamp(2rem,4.5vw,2.625rem)] font-medium leading-[1.1] tracking-[-0.01em]">
            {heading}
          </h2>
          {photo ? (
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="aspect-[4/3] w-full rounded-tile object-cover"
              sizes="(min-width: 1024px) 26rem, 100vw"
            />
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-tile border border-dashed border-ground-line bg-ground-raised p-6 text-center text-sm text-mist">
              {photoPlaceholder}
            </div>
          )}
        </div>
        <dl className="min-w-0 flex-[1_1_520px]">
          {rows.map((r) => (
            <div key={`${r.label}-${r.fact}`} className="flex flex-wrap gap-x-6 gap-y-2 border-b border-ground-line py-[22px] last:border-b-0">
              <dt className="flex-[0_0_180px] pt-1.5 font-label text-[11px] uppercase tracking-[0.24em] text-copper-light">{r.label}</dt>
              <dd className="flex-[1_1_260px] font-serif text-[22px] leading-snug">{r.fact}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
