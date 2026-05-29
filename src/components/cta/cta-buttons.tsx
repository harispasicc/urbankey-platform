import Link from "next/link";
import type { ReactNode } from "react";

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
      className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold tracking-[0.01em] transition-[background-color,border-color] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold sm:w-auto sm:py-3 ${styles}`}
    >
      {children}
    </Link>
  );
}
