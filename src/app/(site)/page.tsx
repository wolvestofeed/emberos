import { hero, audiences, symptoms, diagnostic, howItWorks, servicesIntro, history, toolKit, closing } from '@/content/consulting-home';
import { services } from '@/content/services';
import { Hero } from '@/components/consulting/Hero';
import { AudienceStrip } from '@/components/consulting/AudienceStrip';
import { Symptoms } from '@/components/consulting/Symptoms';
import { DiagnosticBlock } from '@/components/consulting/DiagnosticBlock';
import { HowItWorks } from '@/components/consulting/HowItWorks';
import { ServicesSection } from '@/components/consulting/Services';
import { OperatingHistory } from '@/components/consulting/OperatingHistory';
import { ToolKitTeaser } from '@/components/consulting/ToolKitTeaser';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';

/**
 * The front page of Food Is My Muse Consulting, in the order of roadmap Update 1: hero, the owners it
 * is for, the symptoms, the Diagnostic, how it works, Rob and the four offers, operating history,
 * the Tool Kit, the closing. Bands: paper, cream, paper, cream, paper, paper, ground, paper, cream.
 */
export default function HomePage() {
  return (
    <>
      <Hero content={hero} />
      <AudienceStrip label={audiences.label} audiences={audiences.items} />
      <Symptoms content={symptoms} />
      <DiagnosticBlock content={diagnostic} />
      <HowItWorks content={howItWorks} />
      <div className="border-t border-cream-line">
        <ServicesSection intro={servicesIntro} services={services} />
      </div>
      <OperatingHistory content={history} />
      <ToolKitTeaser content={toolKit} />
      <ClosingCTA content={closing} />
    </>
  );
}
