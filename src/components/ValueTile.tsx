export interface ValueTileProps {
  index: number;
  title: string;
  body: string;
  /** 'dark' on the ground (the default); 'light' on cream, styled like the departments strip's blocks. */
  tone?: 'dark' | 'light';
}

/** A numbered title and one line of proof from the product. */
export function ValueTile({ index, title, body, tone = 'dark' }: ValueTileProps) {
  if (tone === 'light') {
    return (
      <div className="rounded-tile border border-cream-line bg-paper p-7 shadow-card-light">
        <span className="font-display text-4xl leading-none text-copper">{String(index).padStart(2, '0')}</span>
        <h3 className="mt-4 font-display text-2xl leading-tight text-copper">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">{body}</p>
      </div>
    );
  }
  return (
    <div className="rounded-card border border-ground-line bg-ground-raised p-7 shadow-card">
      <span className="font-display text-4xl leading-none text-amber">{String(index).padStart(2, '0')}</span>
      <h3 className="mt-4 font-display text-2xl leading-tight text-copper-light">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">{body}</p>
    </div>
  );
}
