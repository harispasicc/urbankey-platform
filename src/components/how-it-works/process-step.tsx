import type { ProcessStep } from "./steps-data";

function StepNumber({ step, emphasized = false }: { step: string; emphasized?: boolean }) {
  return (
    <span
      className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-sans text-sm font-semibold tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_8px_rgba(100,75,40,0.06)] transition-colors duration-300 ${
        emphasized
          ? "border-urban-gold/35 bg-gradient-to-b from-[#f5edd8] to-urban-sand text-[#8a7048]"
          : "border-urban-gold/25 bg-gradient-to-b from-[#faf6f0] to-urban-sand text-urban-gold group-hover:border-urban-gold/35"
      }`}
    >
      {step}
    </span>
  );
}

const CARD_BASE =
  "group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-urban-navy/[0.06] bg-[#faf7f2]/90 px-5 py-5 shadow-[0_2px_10px_rgba(20,24,32,0.035)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-urban-gold/22 hover:shadow-[0_10px_32px_rgba(100,75,40,0.09)] sm:px-6 sm:py-6";

const CARD_TOP_ACCENT =
  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-urban-gold/0 to-transparent transition-all duration-300 group-hover:via-urban-gold/50";

function StepContent({ title, description }: Pick<ProcessStep, "title" | "description">) {
  return (
    <div className="min-w-0 flex-1">
      <h3 className="font-sans text-base font-semibold leading-snug text-urban-navy sm:text-[1.0625rem]">
        {title}
      </h3>
      <div className="mt-2 h-px w-8 bg-urban-gold/40" aria-hidden />
      <p className="mt-2.5 text-[0.875rem] leading-relaxed text-urban-charcoal">
        {description}
      </p>
    </div>
  );
}

export function ProcessStepTimeline({
  step,
  title,
  description,
  isLast,
}: ProcessStep & { isLast: boolean }) {
  return (
    <li className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <StepNumber step={step} />
        {!isLast && (
          <div
            className="mt-2 w-px min-h-[2.5rem] flex-1 bg-gradient-to-b from-urban-gold/30 to-urban-gold/10"
            aria-hidden
          />
        )}
      </div>
      <article className={`${CARD_BASE} mb-8 flex-1 last:mb-0`}>
        <span className={CARD_TOP_ACCENT} aria-hidden />
        <StepContent title={title} description={description} />
      </article>
    </li>
  );
}

export function ProcessStepCard({
  step,
  title,
  description,
  emphasizeNumber = false,
  className = "",
}: ProcessStep & {
  emphasizeNumber?: boolean;
  className?: string;
}) {
  return (
    <li className={className}>
      <article className={`${CARD_BASE} items-start`}>
        <span className={CARD_TOP_ACCENT} aria-hidden />
        <StepNumber step={step} emphasized={emphasizeNumber} />
        <div className="mt-4 w-full">
          <StepContent title={title} description={description} />
        </div>
      </article>
    </li>
  );
}
