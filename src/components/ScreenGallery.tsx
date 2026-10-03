import Image from 'next/image';
import { screens } from '@/content/home';
import { SectionHeading } from '@/components/Section';

/**
 * Real product screens with captions. A screen without a `src` renders as a captioned frame,
 * so the page lays out before the Muse Kitchen and Cotyledon screens are shot.
 */
export function ScreenGallery() {
  return (
    <>
      <SectionHeading id="screens-heading" eyebrow="Inside the apps" title={screens.heading} align="center" />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {screens.items.map((s) => (
          <li key={s.caption}>
            <figure>
              <div className="overflow-hidden rounded-tile border border-ground-line bg-ground-raised shadow-card">
                {s.src ? (
                  <Image src={s.src} alt={s.alt} width={s.width ?? 1600} height={s.height ?? 1000} className="h-auto w-full" sizes="(min-width: 640px) 50vw, 100vw" />
                ) : (
                  <div role="img" aria-label={`${s.alt} (screen to come)`} className="aspect-[16/10] w-full">
                    <div className="flex h-full flex-col">
                      <div className="flex h-7 items-center gap-1.5 border-b border-ground-line px-3">
                        <span className="h-2 w-2 rounded-full bg-ground-line" />
                        <span className="h-2 w-2 rounded-full bg-ground-line" />
                        <span className="h-2 w-2 rounded-full bg-ground-line" />
                      </div>
                      <div className="grid flex-1 grid-cols-[1fr_3fr] gap-3 p-3">
                        <div className="rounded-md bg-ground/70" />
                        <div className="grid grid-rows-[auto_1fr] gap-3">
                          <div className="h-8 rounded-md bg-ground/70" />
                          <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-md bg-ground/70" />
                            <div className="rounded-md bg-ground/70" />
                            <div className="rounded-md bg-ground/70" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <figcaption className="mt-3 text-sm text-mist">{s.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
