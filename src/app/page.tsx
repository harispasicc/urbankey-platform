import { CtaSection } from "@/components/cta/cta-section";
import { FooterSection } from "@/components/footer/footer-section";
import { Hero } from "@/components/hero";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services/services-section";
import { WhyUrbanKeySection } from "@/components/why-urban-key/why-urban-key-section";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUrbanKeySection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
