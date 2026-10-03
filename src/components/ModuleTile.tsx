import type { AppKey } from '@/config/apps';
import { AppTag } from '@/components/AppTag';

export interface ModuleTileProps {
  name: string;
  line?: string;
  apps?: AppKey[];
  /** 'dark' on the ground, 'light' on cream. */
  tone?: 'dark' | 'light';
}

/** A module: name, one line, and which app has it when it is not both. */
export function ModuleTile({ name, line, apps, tone = 'dark' }: ModuleTileProps) {
  const shell =
    tone === 'dark'
      ? 'border-ground-line bg-ground-raised shadow-card'
      : 'border-cream-line bg-paper shadow-card-light';
  const lineColor = tone === 'dark' ? 'text-mist' : 'text-ink-soft';
  const nameColor = tone === 'dark' ? 'text-copper-light' : 'text-copper';
  return (
    <div className={`flex flex-col rounded-tile border p-5 ${shell}`}>
      <h3 className={`font-sans text-base font-semibold leading-snug ${nameColor}`}>{name}</h3>
      {line ? <p className={`mt-2 flex-1 text-sm leading-relaxed ${lineColor}`}>{line}</p> : null}
      {apps && apps.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {apps.map((app) => (
            <AppTag key={app} app={app} tone={tone} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
