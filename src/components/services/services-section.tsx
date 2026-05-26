import { siteContainer } from "@/lib/layout";
import { FeaturedServiceCard, ServiceCard } from "./service-card";
import {
  FEATURED_SERVICE,
  GRID_SERVICES,
  TRUST_PROOF,
} from "./services-data";

function ServicesHeader() {
  return (
    <header className="max-w-2xl">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.26em] text-urban-brass">
        Services
      </p>
      <h2
        id="services-heading"
        className="mt-3 font-sans text-[1.75rem] font-bold leading-[1.12] tracking-[-0.02em] text-urban-navy sm:text-[2rem] lg:text-[2.125rem]"
      >
        Everything needed to run your apartment professionally.
      </h2>
      <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
      <p className="mt-4 text-[1.0625rem] leading-relaxed text-urban-charcoal sm:text-lg">
        We manage day-to-day apartment operations, guest experience, and booking
        performance so owners can earn passively without handling logistics.
      </p>
    </header>
  );
}

function ServicesTrustProof() {
  return (
    <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
      {TRUST_PROOF.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 text-[0.8125rem] text-urban-charcoal/88"
        >
          <span
            className="size-1 shrink-0 rounded-full bg-urban-gold/75"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="grain relative overflow-hidden bg-gradient-to-b from-[#eee6dc] via-[#f3ede4] to-urban-cream"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(154,130,86,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_60%,rgba(154,130,86,0.05),transparent_50%)]"
        aria-hidden
      />

      <div
        className={`${siteContainer} relative h-px bg-gradient-to-r from-transparent via-urban-gold/25 to-transparent`}
        aria-hidden
      />

      <div className={`${siteContainer} relative py-14 sm:py-16 lg:py-20`}>
        <ServicesHeader />
        <ServicesTrustProof />

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5">
          <li className="sm:col-span-2 lg:col-span-3">
            <FeaturedServiceCard {...FEATURED_SERVICE} />
          </li>

          {GRID_SERVICES.map((service) => (
            <li key={service.title}>
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
