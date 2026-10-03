import { APPS, type AppKey } from '@/config/apps';

const LIGHT: Record<AppKey, string> = {
  muse: 'bg-muse-emerald/15 text-muse-emerald ring-muse-emerald/30',
  cotyledon: 'bg-coty-sky/15 text-coty-forest ring-coty-sky/40',
};

/** On the dark bands every tag is a white chip, so it reads against the ground. */
const DARK = 'bg-white text-ink ring-white';

/** A small tag naming the app that runs something. `tone` matches the band it sits on. */
export function AppTag({ app, tone = 'light' }: { app: AppKey; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-2 py-0.5 font-label text-[0.65rem] font-medium uppercase tracking-[0.14em] ring-1 ${tone === 'dark' ? DARK : LIGHT[app]}`}
    >
      {APPS[app].name}
    </span>
  );
}
