import Link from "next/link";
import type { ReactNode } from "react";

export function CtaSecondaryButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex w-full items-center justify-center rounded-full border border-urban-gold/40 bg-[#f5f0e8]/20 px-6 py-3.5 text-sm font-semibold tracking-[0.01em] text-[#faf7f2] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-[background-color,border-color] duration-300 ease-out hover:border-urban-gold/55 hover:bg-[#f5f0e8]/32 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold sm:w-auto sm:py-3"
    >
      {children}
    </Link>
  );
}
