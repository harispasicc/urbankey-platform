import { CtaSection } from "@/components/cta/cta-section";
import { FooterSection } from "@/components/footer/footer-section";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services/services-section";
import { TrustStrip } from "@/components/trust/trust-strip";
import { FaqSection } from "@/components/faq/faq-section";
import { WhyUrbanKeySection } from "@/components/why-urban-key/why-urban-key-section";

export default function HomePage() {
  return (
    <main className="min-w-0 overflow-x-clip">
      <Navbar />
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUrbanKeySection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
