import { siteContainer, sectionEyebrow, sectionHeading, sectionProse } from "@/lib/layout";
import { TrustReason } from "./trust-reason";
import { TrustStatsRow } from "./trust-stats-row";
import { VALUE_CARDS } from "./values-data";

function WhyUrbanKeyIntro() {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className={sectionEyebrow}>Why UrbanKey</p>
      <h2 id="why-urban-key-heading" className={`mt-3 ${sectionHeading}`}>
        Why apartment owners choose UrbanKey
      </h2>
      <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
      <p className={`mt-4 ${sectionProse}`}>
        Managing an Airbnb or Booking apartment yourself means constant messages,
        coordination, and pressure. UrbanKey exists so owners in Sarajevo can step
        back — without losing control or visibility.
      </p>
      <TrustStatsRow className="mt-8 sm:mt-9" />
    </div>
  );
}

function WhyUrbanKeyReasons() {
  return (
    <div className="rounded-2xl border border-urban-gold/22 bg-[#faf6f0]/95 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_8px_32px_rgba(100,75,40,0.06)] sm:p-6 lg:p-7">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-urban-brass">
        Why owners switch to us
      </p>
      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
        {VALUE_CARDS.map((item) => (
          <li key={item.title}>
            <TrustReason {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhyUrbanKeySection() {
  return (
    <section
      id="why-urban-key"
      aria-labelledby="why-urban-key-heading"
      className="relative overflow-hidden bg-gradient-to-br from-[#ebe3d6] via-[#f0e9de] to-[#e8dfd1]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_0%_0%,rgba(154,130,86,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(154,130,86,0.06),transparent_50%)]"
        aria-hidden
      />

      <div
        className={`${siteContainer} relative py-12 sm:py-14 lg:py-16 xl:py-20`}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12 xl:gap-14">
          <WhyUrbanKeyIntro />
          <WhyUrbanKeyReasons />
        </div>
      </div>
    </section>
  );
}
