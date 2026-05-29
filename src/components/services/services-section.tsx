import { siteContainer, sectionEyebrow, sectionHeading, sectionProse } from "@/lib/layout";
import { FeaturedServiceCard, ServiceCard } from "./service-card";
import { FEATURED_SERVICE, GRID_SERVICES } from "./services-data";

function ServicesHeader() {
  return (
    <header className="max-w-2xl">
      <p className={sectionEyebrow}>Services</p>
      <h2 id="services-heading" className={`mt-3 ${sectionHeading}`}>
        What we manage for your apartment
      </h2>
      <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
      <p className={`mt-4 ${sectionProse}`}>
        Hands-on Airbnb and Booking operations — the tasks owners usually handle
        themselves, covered by one local team.
      </p>
    </header>
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

      <div className={`${siteContainer} relative py-12 sm:py-14 lg:py-16 xl:py-[4.5rem]`}>
        <ServicesHeader />

        <ul className="mt-11 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          <li className="sm:col-span-2 lg:col-span-3">
            <FeaturedServiceCard {...FEATURED_SERVICE} />
          </li>

          {GRID_SERVICES.map((service) => (
            <li key={service.title} className="min-w-0">
              <ServiceCard {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
