import {
  siteContainer,
  sectionEyebrow,
  sectionHeading,
  sectionProse,
} from "@/lib/layout";
import { FaqAccordion } from "./faq-accordion";
import { FAQ_ITEMS } from "./faq-data";
import { FaqJsonLd } from "./faq-json-ld";

function FaqHeader() {
  return (
    <header className="max-w-2xl">
      <p className={sectionEyebrow}>FAQ</p>
      <h2 id="faq-heading" className={`mt-3 ${sectionHeading}`}>
        Frequently asked questions from apartment owners
      </h2>
      <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
      <p className={`mt-4 ${sectionProse}`}>
        Everything you need to know before handing over the day-to-day
        management of your apartment.
      </p>
    </header>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden border-t border-urban-gold/10 bg-gradient-to-b from-urban-cream to-[#f5f0e8]"
    >
      <div
        className={`${siteContainer} relative py-12 sm:py-14 lg:py-16`}
      >
        <FaqHeader />
        <div className="mt-8 max-w-3xl sm:mt-9">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
        <FaqJsonLd />
      </div>
    </section>
  );
}
