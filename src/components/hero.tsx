import Image from "next/image";
import Link from "next/link";
import { siteContainer } from "@/lib/layout";

const TRUST_SIGNALS = [
  "Local Sarajevo-based management team",
  "Airbnb & Booking optimized",
  "Guest communication handled 24/7",
  "Professional hosting support",
] as const;

const FLOATING_CARDS = [
  { title: "24/7 guest support", placement: "col-start-1 row-start-1" },
  { title: "Check-in managed", placement: "col-start-2 row-start-1" },
  { title: "Cleaning organized", placement: "col-start-1 row-start-2" },
  { title: "Booking optimized", placement: "col-start-2 row-start-2" },
] as const;

const FLOATING_CARD_CLASS =
  "flex min-h-[2rem] w-max max-w-[10rem] items-center justify-center rounded-sm border border-urban-gold/12 bg-[#faf6f0]/50 px-3 py-2 shadow-[0_1px_8px_rgba(100,75,40,0.05)] backdrop-blur-[2px]";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroHeadline() {
  return (
    <h1
      id="hero-heading"
      className="max-w-[21rem] sm:max-w-[23rem] lg:max-w-[24rem]"
    >
      <span className="block font-sans text-[1.875rem] font-bold leading-[1.08] tracking-[-0.02em] text-urban-navy sm:text-[2.125rem] lg:text-[2.375rem]">
        We manage your apartment.
      </span>
      <span className="mt-1 block font-display text-[1.875rem] font-semibold leading-[1.06] tracking-[-0.01em] text-urban-brass sm:mt-1.5 sm:text-[2.125rem] lg:text-[2.375rem]">
        You earn stress-free.
      </span>
    </h1>
  );
}

function HeroCopy() {
  return (
    <div className="max-w-[28rem] space-y-2.5">
      <p className="text-[1.0625rem] font-semibold leading-snug text-urban-navy/90 sm:text-lg">
        Professional Airbnb &amp; Booking management in Sarajevo — for owners
        who want calm, not constant coordination.
      </p>
      <p className="text-[0.9375rem] leading-[1.6] text-urban-charcoal">
        We handle guests, cleaning, and daily operations so you can earn from
        your apartment with less stress — whether you live here or abroad.
      </p>
    </div>
  );
}

function TrustIcon() {
  return (
    <svg
      className="size-3 shrink-0 text-urban-gold/70"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
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

function HeroTrustRow() {
  return (
    <div className="border-t border-urban-navy/[0.07] pt-3">
      <ul className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-x-5 sm:gap-y-2 lg:flex lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-2">
        {TRUST_SIGNALS.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <TrustIcon />
            <span className="text-[0.75rem] leading-snug text-urban-charcoal/85">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroCtaGroup() {
  return (
    <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
      <Link
        href="#contact"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#ad8f5e] to-urban-gold px-6 py-3 text-sm font-semibold tracking-[0.02em] text-urban-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_2px_4px_rgba(20,24,32,0.06),0_8px_24px_rgba(154,130,86,0.28)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:from-[#b89a6e] hover:to-[#c4a87a] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_8px_rgba(20,24,32,0.08),0_12px_32px_rgba(154,130,86,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold"
      >
        Schedule a consultation
        <ArrowIcon className="opacity-85 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5" />
      </Link>
      <Link
        href="#services"
        className="inline-flex items-center justify-center rounded-full border border-urban-navy/10 bg-[#f3ede4] px-6 py-3 text-sm font-semibold tracking-[0.01em] text-urban-navy/90 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-urban-gold/30 hover:bg-[#faf6f0] hover:text-urban-navy hover:shadow-[0_2px_16px_rgba(154,130,86,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-navy"
      >
        Explore services
      </Link>
    </div>
  );
}

function FloatingInfoCard({
  title,
  placement,
}: {
  title: string;
  placement: string;
}) {
  const align =
    placement.includes("col-start-2") ? "justify-self-end" : "justify-self-start";
  const vertical =
    placement.includes("row-start-2") ? "self-end" : "self-start";

  return (
    <div className={`${FLOATING_CARD_CLASS} ${placement} ${align} ${vertical}`}>
      <p className="whitespace-nowrap text-[0.6875rem] font-medium leading-none text-urban-navy/72">
        {title}
      </p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-md sm:max-w-xl lg:-mt-1 lg:max-w-[28.5rem] xl:max-w-[29.5rem]">
      <div
        className="pointer-events-none absolute -inset-3 rounded-[1.5rem] bg-[radial-gradient(ellipse_at_55%_45%,rgba(154,130,86,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.125rem] bg-urban-sand shadow-[0_16px_40px_rgba(100,75,40,0.14),0_3px_8px_rgba(20,24,32,0.05)] sm:aspect-[4/3]">
        <Image
          src="/hero-apartment-living.jpg"
          alt="Comfortable furnished apartment living space with warm, welcoming details"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 30rem"
          className="object-cover object-center brightness-[0.97] contrast-[1.08] saturate-[1.05]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-urban-navy/[0.08] via-transparent to-transparent"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-4 sm:gap-4 sm:p-5"
          aria-hidden="true"
        >
          {FLOATING_CARDS.map((card) => (
            <FloatingInfoCard
              key={card.title}
              title={card.title}
              placement={card.placement}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="lg:max-w-[36rem] lg:pt-2 lg:pr-2">
      <div className="space-y-4 sm:space-y-[1.125rem]">
        <div className="space-y-2.5">
          <HeroHeadline />
          <div
            className="h-px w-10 bg-urban-gold/45"
            aria-hidden="true"
          />
        </div>

        <HeroCopy />

        <div className="space-y-3.5">
          <HeroCtaGroup />
          <HeroTrustRow />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="grain relative overflow-hidden bg-gradient-to-b from-urban-cream via-[#f7f3ec] to-[#eee6dc]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_78%_42%,rgba(154,130,86,0.04),transparent_60%)]"
        aria-hidden="true"
      />

      <div className={`${siteContainer} relative pb-7 pt-5 sm:pb-8 sm:pt-6 lg:pb-9 lg:pt-8`}>
        <div className="grid items-center gap-7 sm:gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-x-8 xl:gap-x-10">
          <HeroContent />
          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-[#eee6dc]"
        aria-hidden="true"
      />
      <div
        className={`${siteContainer} relative h-px bg-gradient-to-r from-transparent via-urban-gold/20 to-transparent`}
        aria-hidden="true"
      />
    </section>
  );
}
