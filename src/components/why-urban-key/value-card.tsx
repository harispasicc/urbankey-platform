import type { ValueItem } from "./values-data";

const CARD_BASE =
  "group relative flex h-full flex-col overflow-hidden rounded-xl border border-urban-navy/[0.06] bg-[#faf7f2] p-5 shadow-[0_2px_10px_rgba(20,24,32,0.035)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-urban-gold/22 hover:shadow-[0_10px_32px_rgba(100,75,40,0.09)] sm:p-6";

const CARD_TOP_ACCENT =
  "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-urban-gold/0 to-transparent transition-all duration-300 group-hover:via-urban-gold/50";

export function ValueCard({ title, description, Icon }: ValueItem) {
  return (
    <article className={CARD_BASE}>
      <span className={CARD_TOP_ACCENT} aria-hidden />
      <div
        className="flex size-11 items-center justify-center rounded-lg border border-urban-gold/20 bg-gradient-to-b from-urban-sand/80 to-[#ebe4d8] text-urban-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] transition-[border-color,color] duration-300 group-hover:border-urban-gold/35 group-hover:text-[#8a7048]"
        aria-hidden
      >
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 font-sans text-base font-semibold leading-snug text-urban-navy sm:text-[1.0625rem]">
        {title}
      </h3>
      <div
        className="mt-2.5 h-px w-8 bg-urban-gold/40 transition-all duration-300 group-hover:w-10"
        aria-hidden
      />
      <p className="mt-2.5 text-[0.875rem] leading-relaxed text-urban-charcoal">
        {description}
      </p>
    </article>
  );
}
