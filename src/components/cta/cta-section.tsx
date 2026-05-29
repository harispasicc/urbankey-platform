"use client";

import { useTranslations } from "@/i18n/language-context";
import { siteContainer, sectionEyebrow } from "@/lib/layout";
import { ContactPanel } from "./contact-panel";
import { CtaSecondaryButton } from "./cta-buttons";

export function CtaSection() {
  const t = useTranslations();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="grain relative overflow-hidden bg-urban-navy"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_0%_50%,rgba(154,130,86,0.10),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_100%_30%,rgba(154,130,86,0.065),transparent_50%)]"
        aria-hidden
      />

      <div
        className={`${siteContainer} relative h-px bg-gradient-to-r from-transparent via-urban-gold/30 to-transparent`}
        aria-hidden
      />

      <div className={`${siteContainer} relative pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-24 xl:pb-32`}>
        <div className="grid min-w-0 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16 2xl:gap-20">
          <div className="max-w-xl lg:py-2">
            <p className={`${sectionEyebrow} text-urban-gold/90`}>
              {t.contact.eyebrow}
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-sans text-[clamp(1.625rem,4.5vw,2.125rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white"
            >
              {t.contact.title}
            </h2>
            <div className="mt-5 h-px w-12 bg-urban-gold/50" aria-hidden />
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/85 sm:text-lg">
              {t.contact.lead}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
              {t.contact.sub}
            </p>

            <div className="mt-8">
              <CtaSecondaryButton href="#services">
                {t.contact.viewServices}
              </CtaSecondaryButton>
            </div>
          </div>
          <ContactPanel />
        </div>
      </div>
    </section>
  );
}
