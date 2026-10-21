import type { Metadata } from 'next';
import { header, history } from '@/content/work';
import { closing } from '@/content/consulting-home';
import { PageIntro } from '@/components/consulting/PageIntro';
import { OperatingHistory } from '@/components/consulting/OperatingHistory';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';

export const metadata: Metadata = {
  title: 'Work',
  description: header.headline,
};

/** The Work page: its intro, then the operating-history band that was the home page's (Rob, 2026-10-21). */
export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow={header.eyebrow} heading={header.headline} lede={header.lede} />
      <OperatingHistory content={history} />
      <ClosingCTA content={closing} />
    </>
  );
}
