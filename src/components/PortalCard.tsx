import Image from 'next/image';
import { APPS, type AppKey } from '@/config/apps';
import { Button } from '@/components/Button';

const STYLE: Record<
  AppKey,
  { card: string; lockup: string; lockupW: number; lockupH: number; lockupClass: string; audience: string; tone: 'muse' | 'cotyledon' }
> = {
  muse: {
    card: 'bg-muse-deep border-muse-emerald',
    lockup: '/brand/muse-kitchen/muse-kitchen-stacked-on-dark.png',
    lockupW: 1638,
    lockupH: 1020,
    lockupClass: 'h-36 w-auto',
    audience: 'text-muse-mint',
    tone: 'muse',
  },
  cotyledon: {
    card: 'bg-coty-forest border-coty-sky',
    lockup: '/brand/cotyledon/cotyledon-stacked-on-dark.png',
    lockupW: 1008,
    lockupH: 1084,
    lockupClass: 'h-40 w-auto',
    audience: 'text-coty-mint',
    tone: 'cotyledon',
  },
};

/** A portal entry: the app's lockup, who it is for, what it runs, and the button that signs straight into it. */
export function PortalCard({ app }: { app: AppKey }) {
  const entry = APPS[app];
  const s = STYLE[app];
  return (
    <article className={`flex flex-col items-center rounded-card border p-8 text-center shadow-card sm:p-10 ${s.card}`}>
      <Image src={s.lockup} alt={`${entry.name}, powered by Ember OS`} width={s.lockupW} height={s.lockupH} className={s.lockupClass} />
      <h3 className={`mt-6 font-sans text-sm font-semibold uppercase tracking-[0.18em] ${s.audience}`}>{entry.audience}</h3>
      <p className="mt-3 max-w-sm text-base leading-relaxed text-cream-ink/90">{entry.runs}</p>
      <Button href={entry.url} tone={s.tone} external className="mt-8 w-full sm:w-auto">
        {entry.signInLabel}
      </Button>
    </article>
  );
}
