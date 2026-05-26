import { siteContainer } from "@/lib/layout";
import { ProcessStepCard, ProcessStepTimeline } from "./process-step";
import { PROCESS_STEPS } from "./steps-data";

const ROW_ONE = PROCESS_STEPS.slice(0, 3);
const ROW_TWO = PROCESS_STEPS.slice(3);

function HowItWorksHeader() {
  return (
    <header className="max-w-2xl">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.26em] text-urban-brass">
        How it works
      </p>
      <h2
        id="how-it-works-heading"
        className="mt-3 font-sans text-[1.75rem] font-bold leading-[1.12] tracking-[-0.02em] text-urban-navy sm:text-[2rem] lg:text-[2.125rem]"
      >
        A simple path to stress-free apartment ownership.
      </h2>
      <div className="mt-4 h-px w-12 bg-urban-gold/45" aria-hidden />
      <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-urban-charcoal sm:text-lg">
        We take over guests, operations, and coordination — so you can earn from
        your apartment without the daily pressure.
      </p>
    </header>
  );
}

function ProcessTimelineMobile() {
  return (
    <ol className="mt-10 space-y-0 sm:mt-12 lg:hidden">
      {PROCESS_STEPS.map((item, index) => (
        <ProcessStepTimeline
          key={item.step}
          {...item}
          isLast={index === PROCESS_STEPS.length - 1}
        />
      ))}
    </ol>
  );
}

function ProcessFlowDesktop() {
  return (
    <div className="relative mt-14 hidden space-y-8 lg:block">
      <ol className="grid grid-cols-3 gap-6">
        {ROW_ONE.map((item, index) => (
          <ProcessStepCard
            key={item.step}
            {...item}
            emphasizeNumber={index === 0}
          />
        ))}
      </ol>

      <ol className="mx-auto grid max-w-3xl grid-cols-2 gap-6">
        {ROW_TWO.map((item, index) => (
          <ProcessStepCard
            key={item.step}
            {...item}
            emphasizeNumber={index === ROW_TWO.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="grain relative overflow-hidden bg-gradient-to-b from-urban-cream via-[#f7f3ec] to-[#f0ebe3]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_15%,rgba(154,130,86,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_75%,rgba(154,130,86,0.06),transparent_50%)]"
        aria-hidden
      />
      <div
        className={`${siteContainer} relative h-px bg-gradient-to-r from-transparent via-urban-gold/22 to-transparent`}
        aria-hidden
      />

      <div className={`${siteContainer} relative py-12 sm:py-14 lg:py-16`}>
        <HowItWorksHeader />
        <ProcessTimelineMobile />
        <ProcessFlowDesktop />
      </div>
    </section>
  );
}
