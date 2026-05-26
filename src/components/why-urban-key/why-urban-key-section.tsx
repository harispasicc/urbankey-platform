import { siteContainer } from "@/lib/layout";
import { TrustStatsRow } from "./trust-stats-row";
import { ValueCard } from "./value-card";
import { VALUE_CARDS } from "./values-data";

function WhyUrbanKeyHeader() {
  return (
    <header className="max-w-2xl">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.26em] text-urban-brass">
        Why UrbanKey
      </p>
      <h2
        id="why-urban-key-heading"
        className="mt-3 font-sans text-[1.75rem] font-bold leading-[1.12] tracking-[-0.02em] text-urban-navy sm:text-[2rem] lg:text-[2.125rem]"
      >
        Trusted local apartment management built around owners.
      </h2>
      <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
      <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-urban-charcoal sm:text-lg">
        We help Sarajevo owners enjoy peace of mind — while we handle guests,
        cleaning, check-ins, and the day-to-day work behind the scenes.
      </p>
    </header>
  );
}

export function WhyUrbanKeySection() {
  return (
    <section
      id="why-urban-key"
      aria-labelledby="why-urban-key-heading"
      className="grain relative overflow-hidden border-t border-urban-gold/10 bg-[#f5f0e8]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(154,130,86,0.08),transparent_60%)]"
        aria-hidden
      />

      <div className={`${siteContainer} relative py-12 sm:py-14 lg:py-16`}>
        <WhyUrbanKeyHeader />
        <TrustStatsRow />

        <ul className="mt-10 grid gap-5 sm:mt-11 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:gap-6">
          {VALUE_CARDS.map((item) => (
            <li key={item.title}>
              <ValueCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
