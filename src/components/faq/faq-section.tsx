"use client";

import {
  siteContainer,
  sectionEyebrow,
  sectionHeading,
  sectionProse,
} from "@/lib/layout";
import { useLanguage, useTranslations } from "@/i18n/language-context";
import { FaqAccordion } from "./faq-accordion";
import { FaqJsonLd } from "./faq-json-ld";

export function FaqSection() {
  const { locale } = useLanguage();
  const t = useTranslations();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden border-t border-urban-gold/10 bg-gradient-to-b from-urban-cream to-[#f5f0e8]"
    >
      <div className={`${siteContainer} relative py-12 sm:py-14 lg:py-16`}>
        <header className="max-w-2xl">
          <p className={sectionEyebrow}>{t.faq.eyebrow}</p>
          <h2 id="faq-heading" className={`mt-3 ${sectionHeading}`}>
            {t.faq.title}
          </h2>
          <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
          <p className={`mt-4 ${sectionProse}`}>{t.faq.description}</p>
        </header>
        <div className="mt-8 max-w-3xl sm:mt-9">
          <FaqAccordion key={locale} items={t.faq.items} />
        </div>
        <FaqJsonLd />
      </div>
    </section>
  );
}
