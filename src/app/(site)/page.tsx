import { hero, audiences, symptoms, wholeSystems, diagnostic, howItWorks, toolKit, closing } from '@/content/consulting-home';
import { Hero } from '@/components/consulting/Hero';
import { AudienceStrip } from '@/components/consulting/AudienceStrip';
import { Symptoms } from '@/components/consulting/Symptoms';
import { WholeSystems } from '@/components/consulting/WholeSystems';
import { DiagnosticBlock } from '@/components/consulting/DiagnosticBlock';
import { HowItWorks } from '@/components/consulting/HowItWorks';
import { ToolKitTeaser } from '@/components/consulting/ToolKitTeaser';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';

/**
 * The front page of Food Is My Muse Consulting, in the brief's order (§6): hero, the owners it is
 * for, the symptoms, whole systems, the Diagnostic, how it works, the Tool Kit, the closing. The
 * offer cards left Home on 2026-10-20 (they repeated /services); the operating-history band moved to
 * the Work page on 2026-10-21. Bands: paper, cream, paper, ground, cream, paper, paper, cream.
 */
export default function HomePage() {
  return (
    <>
      <Hero content={hero} />
      <AudienceStrip label={audiences.label} audiences={audiences.items} />
      <Symptoms content={symptoms} />
      <WholeSystems content={wholeSystems} />
      <DiagnosticBlock content={diagnostic} />
      <HowItWorks content={howItWorks} />
      <ToolKitTeaser content={toolKit} />
      <ClosingCTA content={closing} />
    </>
  );
}
