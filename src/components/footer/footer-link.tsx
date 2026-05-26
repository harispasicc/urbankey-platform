import Link from "next/link";
import type { ReactNode } from "react";

export function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className =
    "group relative inline-block text-sm text-white/75 transition-colors duration-300 ease-out hover:text-urban-gold-light";

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {children}
        <span
          className="absolute -bottom-0.5 left-0 h-px w-0 bg-urban-gold/80 opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100"
          aria-hidden
        />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      <span
        className="absolute -bottom-0.5 left-0 h-px w-0 bg-urban-gold/80 opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}
