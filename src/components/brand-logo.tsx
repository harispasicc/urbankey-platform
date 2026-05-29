import Image from "next/image";

const LOGO_SRC = "/urbankey-logo.png";

const MARK_SIZE = "h-[5.5rem] w-[5.5rem] sm:h-24 sm:w-24";

export function BrandLogoMark({
  className,
  priority = false,
  onDark = false,
}: {
  className?: string;
  priority?: boolean;
  onDark?: boolean;
}) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden ${
        onDark ? "bg-urban-cream" : ""
      } ${className ?? MARK_SIZE}`}
      aria-hidden
    >
      <Image
        src={LOGO_SRC}
        alt=""
        width={128}
        height={128}
        priority={priority}
        sizes="96px"
        className="absolute left-1/2 top-0 h-[132%] w-[132%] max-w-none -translate-x-1/2 object-cover object-top mix-blend-multiply"
      />
    </span>
  );
}

export function BrandLogoText({ onDark = false }: { onDark?: boolean }) {
  const titleClass = onDark ? "text-white" : "text-urban-navy";
  const subClass = onDark ? "text-urban-gold/85" : "text-urban-brass";

  return (
    <span className="flex flex-col justify-center gap-1.5 sm:gap-2">
      <span
        className={`font-sans text-[0.9375rem] font-bold leading-tight tracking-[0.13em] sm:text-base ${titleClass}`}
      >
        URBAN <span className="text-urban-gold">KEY</span>
      </span>
      <span
        className={`text-[0.625rem] font-medium uppercase leading-none tracking-[0.22em] sm:text-[0.6875rem] ${subClass}`}
      >
        Sarajevo
      </span>
    </span>
  );
}

export function BrandLogoLockup({
  priority = false,
  markClassName,
  onDark = false,
}: {
  priority?: boolean;
  markClassName?: string;
  onDark?: boolean;
}) {
  const dividerClass = onDark ? "border-urban-gold/30" : "border-urban-gold/25";

  return (
    <span className="flex items-center gap-4 sm:gap-[1.125rem]">
      <BrandLogoMark
        priority={priority}
        onDark={onDark}
        className={markClassName ?? MARK_SIZE}
      />
      <span
        className={`flex flex-col justify-center border-l py-0.5 pl-3.5 sm:pl-4 ${dividerClass}`}
      >
        <BrandLogoText onDark={onDark} />
      </span>
    </span>
  );
}
