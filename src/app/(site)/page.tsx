import { hero, audiences, servicesIntro, history, toolKit, closing } from '@/content/consulting-home';
import { services } from '@/content/services';
import { Hero } from '@/components/consulting/Hero';
import { AudienceStrip } from '@/components/consulting/AudienceStrip';
import { ServicesSection } from '@/components/consulting/Services';
import { OperatingHistory } from '@/components/consulting/OperatingHistory';
import { ToolKitTeaser } from '@/components/consulting/ToolKitTeaser';
import { ClosingCTA } from '@/components/consulting/ClosingCTA';

/**
 * The front page of Food Is My Muse Consulting, top to bottom as the mock-up has it
 * (design/mockups/consulting-home.html). Bands: paper, cream, paper, ground, paper, cream, footer.
 */
export default function HomePage() {
  return (
    <>
      <Hero content={hero} />
      <AudienceStrip label={audiences.label} audiences={audiences.items} />
      <ServicesSection intro={servicesIntro} services={services} />
      <OperatingHistory content={history} />
      <ToolKitTeaser content={toolKit} />
      <ClosingCTA content={closing} />
    </>
  );
}
