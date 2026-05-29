import { siteContainer } from "@/lib/layout";

const TRUST_ITEMS = [
  "Local Sarajevo-based team",
  "Airbnb & Booking focused",
  "Responsive owner support",
  "Transparent communication",
] as const;

function CheckIcon() {
  return (
    <svg
      className="size-3.5 shrink-0 text-urban-gold"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 6.2 4.8 8.5 9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TrustStrip() {
  return (
    <section
      aria-labelledby="trust-strip-heading"
      className="border-y border-urban-gold/12 bg-[#f3ede4]/80"
    >
      <div className={`${siteContainer} py-8 sm:py-9`}>
        <h2
          id="trust-strip-heading"
          className="text-center font-sans text-[0.9375rem] font-semibold tracking-[0.02em] text-urban-navy sm:text-base"
        >
          Built for Sarajevo apartment owners
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 min-[375px]:grid-cols-2 sm:mt-6 sm:gap-x-8 sm:gap-y-3 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item}
              className="flex min-h-[2.75rem] items-center gap-2.5 text-[0.8125rem] leading-snug text-urban-charcoal sm:text-[0.875rem]"
            >
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
