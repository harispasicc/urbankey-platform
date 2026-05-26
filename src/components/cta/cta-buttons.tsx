import Link from "next/link";
import type { ReactNode } from "react";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
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

export function CtaPrimaryButton({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  const styles =
    variant === "light"
      ? "bg-urban-gold text-urban-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_4px_18px_rgba(0,0,0,0.2)] hover:bg-urban-gold-light"
      : "bg-urban-gold text-urban-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(154,130,86,0.25)] hover:bg-urban-gold-light";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-[background-color,box-shadow] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold ${styles}`}
    >
      {children}
      <ArrowIcon className="opacity-85 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function CtaSecondaryButton({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  const styles =
    variant === "light"
      ? "border border-urban-gold/40 bg-[#f5f0e8]/20 text-[#faf7f2] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] hover:border-urban-gold/55 hover:bg-[#f5f0e8]/32"
      : "border border-urban-navy/14 bg-[#f3ede4] text-urban-navy hover:border-urban-gold/30 hover:bg-[#faf6f0]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.01em] transition-[background-color,border-color] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold ${styles}`}
    >
      {children}
    </Link>
  );
}
