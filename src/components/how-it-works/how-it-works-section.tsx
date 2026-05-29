"use client";

import { useMemo } from "react";
import { useTranslations } from "@/i18n/language-context";
import {
  siteContainer,
  sectionEyebrow,
  sectionHeading,
  sectionProse,
} from "@/lib/layout";
import { ProcessStepFlow, ProcessStepTimeline } from "./process-step";

export function HowItWorksSection() {
  const t = useTranslations();

  const steps = useMemo(
    () =>
      t.howItWorks.steps.map((step, index) => ({
        step: String(index + 1).padStart(2, "0"),
        title: step.title,
        description: step.description,
      })),
    [t],
  );

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden border-y border-urban-navy/[0.04] bg-[#faf9f6]"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-urban-gold/25 via-urban-gold/10 to-transparent"
        aria-hidden
      />

      <div
        className={`${siteContainer} relative py-12 sm:py-14 lg:py-16 xl:py-20`}
      >
        <header className="max-w-2xl lg:max-w-xl">
          <p className={sectionEyebrow}>{t.howItWorks.eyebrow}</p>
          <h2 id="how-it-works-heading" className={`mt-3 ${sectionHeading}`}>
            {t.howItWorks.title}
          </h2>
          <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
          <p className={`mt-4 ${sectionProse}`}>{t.howItWorks.description}</p>
        </header>

        <ol className="mt-10 sm:mt-12 lg:hidden">
          {steps.map((item, index) => (
            <ProcessStepTimeline
              key={item.step}
              {...item}
              isLast={index === steps.length - 1}
            />
          ))}
        </ol>

        <div className="relative mt-12 hidden lg:block xl:mt-14">
          <div
            className="pointer-events-none absolute inset-x-[8%] top-5 h-px bg-gradient-to-r from-transparent via-urban-gold/30 to-transparent"
            aria-hidden
          />
          <ol className="flex w-full items-start justify-between gap-0">
            {steps.map((item) => (
              <ProcessStepFlow key={item.step} {...item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
