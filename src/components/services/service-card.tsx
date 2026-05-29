import type { ComponentType } from "react";

type ServiceItem = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
};

const CARD_BASE =
  "group relative flex h-full overflow-hidden rounded-xl border border-urban-navy/[0.06] bg-[#faf7f2] shadow-[0_2px_10px_rgba(20,24,32,0.035)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-urban-gold/22 hover:shadow-[0_10px_32px_rgba(100,75,40,0.09)]";

const CARD_TOP_ACCENT =
  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-urban-gold/0 to-transparent transition-all duration-300 group-hover:via-urban-gold/55";

function ServiceIcon({
  Icon,
  large = false,
}: {
  Icon: ComponentType<{ className?: string }>;
  large?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-lg border border-urban-gold/20 bg-gradient-to-b from-urban-sand/80 to-[#ebe4d8] text-urban-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-[border-color,background-color,color] duration-300 group-hover:border-urban-gold/35 group-hover:text-[#8a7048] ${large ? "size-12 sm:size-14" : "size-11"}`}
      aria-hidden
    >
      <Icon className={`block shrink-0 ${large ? "size-6" : "size-5"}`} />
    </div>
  );
}

export function FeaturedServiceCard({
  title,
  description,
  Icon,
  coreLabel,
}: ServiceItem & { coreLabel: string }) {
  return (
    <article className={`${CARD_BASE} p-5 sm:p-6`}>
      <span className={CARD_TOP_ACCENT} aria-hidden />
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:gap-6 lg:mx-auto lg:max-w-3xl">
        <ServiceIcon Icon={Icon} large />
        <div className="min-w-0 flex-1 sm:pt-1">
          <p className="text-[0.625rem] font-medium uppercase tracking-[0.2em] text-urban-brass">
            {coreLabel}
          </p>
          <h3 className="mt-1 font-sans text-xl font-semibold leading-snug text-urban-navy sm:text-[1.375rem]">
            {title}
          </h3>
          <div className="mt-2.5 h-px w-10 bg-urban-gold/45" aria-hidden />
          <p className="mt-2.5 max-w-prose text-[0.9375rem] leading-relaxed text-urban-charcoal">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ServiceCard({ title, description, Icon }: ServiceItem) {
  return (
    <article className={`${CARD_BASE} flex-col p-5`}>
      <span className={CARD_TOP_ACCENT} aria-hidden />
      <ServiceIcon Icon={Icon} />
      <h3 className="mt-3.5 font-sans text-base font-semibold leading-snug text-urban-navy">
        {title}
      </h3>
      <div
        className="mt-2 h-px w-7 bg-urban-gold/35 transition-all duration-300 group-hover:w-9"
        aria-hidden
      />
      <p className="mt-2 text-[0.875rem] leading-relaxed text-urban-charcoal/95">
        {description}
      </p>
    </article>
  );
}
