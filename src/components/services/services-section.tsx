"use client";

import { useTranslations } from "@/i18n/language-context";
import { SERVICE_ICONS } from "@/i18n/section-icons";
import {
  siteContainer,
  sectionEyebrow,
  sectionHeading,
  sectionProse,
} from "@/lib/layout";
import { FeaturedServiceCard, ServiceCard } from "./service-card";

export function ServicesSection() {
  const t = useTranslations();

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
        <header className="max-w-2xl">
          <p className={sectionEyebrow}>{t.services.eyebrow}</p>
          <h2 id="services-heading" className={`mt-3 ${sectionHeading}`}>
            {t.services.title}
          </h2>
          <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
          <p className={`mt-4 ${sectionProse}`}>{t.services.description}</p>
        </header>

        <ul className="mt-11 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          <li className="sm:col-span-2 lg:col-span-3">
            <FeaturedServiceCard
              coreLabel={t.services.coreLabel}
              title={t.services.featured.title}
              description={t.services.featured.description}
              Icon={SERVICE_ICONS[0]}
            />
          </li>

          {t.services.items.map((service, index) => (
            <li key={service.title} className="min-w-0">
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={SERVICE_ICONS[index + 1]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
