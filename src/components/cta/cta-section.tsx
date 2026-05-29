import { siteContainer, sectionEyebrow } from "@/lib/layout";
import { ContactPanel } from "./contact-panel";
import { CtaSecondaryButton } from "./cta-buttons";

function CtaCopy() {
  return (
    <div className="max-w-xl lg:py-2">
      <p className={`${sectionEyebrow} text-urban-gold/90`}>
        Start with UrbanKey
      </p>
      <h2
        id="contact-heading"
        className="mt-3 font-sans text-[clamp(1.625rem,4.5vw,2.125rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white"
      >
        Own the apartment. Let us handle the operations.
      </h2>
      <div className="mt-5 h-px w-12 bg-urban-gold/50" aria-hidden />
      <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/85 sm:text-lg">
        Own an apartment in Sarajevo? We can run the hosting side for you — so
        you keep the income without carrying the daily weight.
      </p>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/70">
        Local team. Clear communication. Stress-free management.
      </p>

      <div className="mt-8">
        <CtaSecondaryButton href="#services" variant="light">
          View services
        </CtaSecondaryButton>
      </div>
    </div>
  );
}

export function CtaSection() {
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
          <CtaCopy />
          <ContactPanel />
        </div>
      </div>
    </section>
  );
}
