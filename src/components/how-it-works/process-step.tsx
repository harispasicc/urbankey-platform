type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

function StepNumber({
  step,
  emphasized = false,
}: {
  step: string;
  emphasized?: boolean;
}) {
  return (
    <span
      className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border font-sans text-sm font-semibold tracking-wide ${
        emphasized
          ? "border-urban-gold/40 bg-[#f5edd8] text-[#8a7048]"
          : "border-urban-gold/28 bg-urban-cream text-urban-gold"
      }`}
    >
      {step}
    </span>
  );
}

function StepContent({
  title,
  description,
  align = "left",
}: Pick<ProcessStep, "title" | "description"> & {
  align?: "left" | "center";
}) {
  return (
    <div
      className={`min-w-0 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h3 className="font-sans text-[0.9375rem] font-semibold leading-snug text-urban-navy sm:text-base">
        {title}
      </h3>
      <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-urban-charcoal/90 sm:text-[0.875rem]">
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
    <li className="relative flex gap-4 pb-10 last:pb-0 sm:gap-5 sm:pb-12">
      <div className="flex w-10 shrink-0 flex-col items-center">
        <StepNumber step={step} emphasized={step === "01"} />
        {!isLast && (
          <div
            className="mt-3 w-px flex-1 min-h-[2.5rem] bg-gradient-to-b from-urban-gold/40 to-urban-gold/10"
            aria-hidden
          />
        )}
      </div>
      <div className="min-w-0 flex-1 border-l border-urban-gold/20 pl-4 sm:pl-5">
        <StepContent title={title} description={description} />
      </div>
    </li>
  );
}

export function ProcessStepFlow({
  step,
  title,
  description,
}: ProcessStep) {
  return (
    <li className="relative flex min-w-0 flex-1 flex-col items-center px-1 sm:px-2">
      <div className="flex w-full flex-col items-center">
        <StepNumber step={step} emphasized={step === "01" || step === "05"} />
      </div>
      <div className="mt-5 w-full border-t border-urban-gold/18 pt-4">
        <StepContent title={title} description={description} align="center" />
      </div>
    </li>
  );
}
