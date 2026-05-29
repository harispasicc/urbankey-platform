import Image from "next/image";
import Link from "next/link";

export function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link
        href="/"
        className="inline-flex rounded-lg bg-[#faf7f2] px-3 py-2 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
      >
        <Image
          src="/urbankey-logo.png"
          alt="UrbanKey Sarajevo"
          width={180}
          height={56}
          loading="lazy"
          sizes="(max-width: 640px) 11rem, 12.5rem"
          className="h-10 w-auto max-w-[11rem] object-contain object-left sm:h-11 sm:max-w-[12.5rem]"
        />
      </Link>
      <p className="mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-gold/85">
        Sarajevo
      </p>

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
