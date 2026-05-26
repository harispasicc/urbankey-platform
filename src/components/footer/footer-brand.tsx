import Image from "next/image";
import Link from "next/link";

export function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link href="/" className="inline-flex items-center gap-3.5">
        <Image
          src="/urbankey-logo.png"
          alt=""
          width={52}
          height={52}
          className="h-11 w-11 object-contain opacity-90 sm:h-12 sm:w-12"
          aria-hidden
        />
        <span className="flex flex-col gap-1.5 border-l border-urban-gold/25 py-0.5 pl-4">
          <span className="font-sans text-[1.0625rem] font-bold leading-none tracking-[0.12em] text-white sm:text-lg">
            URBAN <span className="text-urban-gold">KEY</span>
          </span>
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-gold/85">
            Sarajevo
          </span>
        </span>
      </Link>

      <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/75">
        Professional Airbnb &amp; Booking apartment management for property
        owners in Sarajevo.
      </p>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-white/55">
        Built around stress-free hosting, operational reliability, and premium
        guest experience.
      </p>
    </div>
  );
}
