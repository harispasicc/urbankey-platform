import Image from "next/image";

const LOGO_SRC = "/logo.png";

function BrandLogoMark({
  priority = false,
  onDark = false,
}: {
  priority?: boolean;
  onDark?: boolean;
}) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Urban Key"
      width={589}
      height={848}
      priority={priority}
      sizes="80px"
      className={`h-20 w-auto shrink-0 translate-y-px ${onDark ? "bg-urban-cream" : "mix-blend-multiply"}`}
    />
  );
}

function BrandLogoText({ onDark = false }: { onDark?: boolean }) {
  const titleClass = onDark ? "text-white" : "text-urban-navy";
  const subClass = onDark ? "text-urban-gold/85" : "text-urban-brass";

  return (
    <span className="flex flex-col justify-center gap-1.5 sm:gap-[0.4375rem]">
      <span
        className={`font-sans text-[0.9375rem] font-bold leading-tight tracking-[0.13em] sm:text-base ${titleClass}`}
      >
        URBAN <span className="text-urban-gold">KEY</span>
      </span>
      <span
        className={`text-[0.625rem] font-medium uppercase leading-none tracking-[0.26em] sm:text-[0.6875rem] sm:tracking-[0.28em] ${subClass}`}
      >
        Sarajevo
      </span>
    </span>
  );
}

export function BrandLogoLockup({
  priority = false,
  onDark = false,
}: {
  priority?: boolean;
  onDark?: boolean;
}) {
  const dividerClass = onDark ? "bg-urban-gold/30" : "bg-urban-gold/25";

  return (
    <span className="flex items-center gap-3.5 sm:gap-4">
      <BrandLogoMark priority={priority} onDark={onDark} />
      <span className="relative flex items-center pl-3 sm:pl-3.5">
        <span
          className={`absolute left-0 top-1/2 h-[82%] w-px -translate-y-1/2 ${dividerClass}`}
          aria-hidden
        />
        <BrandLogoText onDark={onDark} />
      </span>
    </span>
  );
}
