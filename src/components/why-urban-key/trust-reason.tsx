import type { ComponentType } from "react";

export function TrustReason({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <article className="flex gap-3.5 rounded-lg border border-urban-gold/12 bg-white/50 px-4 py-4 sm:gap-4 sm:px-4 sm:py-4">
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-md border border-urban-gold/18 bg-urban-sand/60 text-urban-gold"
        aria-hidden
      >
        <Icon className="block size-[1.125rem] shrink-0" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-sans text-[0.9375rem] font-semibold leading-snug text-urban-navy">
          {title}
        </h3>
        <p className="mt-1 text-[0.8125rem] leading-relaxed text-urban-charcoal/88">
          {description}
        </p>
      </div>
    </article>
  );
}
