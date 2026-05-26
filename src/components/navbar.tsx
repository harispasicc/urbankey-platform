"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { siteContainer } from "@/lib/layout";

const NAV_LINKS = [
  { href: "#services", label: "Services", id: "services" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

function NavLink({
  href,
  label,
  isActive,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`group relative inline-flex items-center py-1 text-sm font-medium transition-colors duration-300 ${isActive ? "text-urban-gold" : "text-urban-navy/75 hover:text-urban-gold"} ${className}`}
      aria-current={isActive ? "true" : undefined}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-urban-gold/80 transition-all duration-300 ease-out ${isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"}`}
        aria-hidden
      />
    </Link>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
      <span
        className={`absolute left-0 top-0 h-px w-5 bg-urban-navy transition-all duration-300 ${open ? "top-[6px] rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-[6px] h-px w-5 bg-urban-navy transition-all duration-300 ${open ? "opacity-0" : ""}`}
      />
      <span
        className={`absolute left-0 top-3 h-px w-5 bg-urban-navy transition-all duration-300 ${open ? "top-[6px] -rotate-45" : ""}`}
      />
    </span>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActive = () => {
      const offset = window.innerHeight * 0.35;
      let current: string | null = null;

      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-urban-gold/10 bg-urban-cream/72 shadow-[0_2px_16px_rgba(20,24,32,0.04)] backdrop-blur-xl"
          : "border-b border-urban-navy/[0.06] bg-urban-cream/90 backdrop-blur-sm"
      }`}
    >
      <div
        className={`${siteContainer} flex items-center justify-between py-3 sm:py-3.5`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3.5 sm:gap-4"
          onClick={closeMenu}
        >
          <Image
            src="/urbankey-logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
            aria-hidden
          />
          <span className="flex flex-col justify-center gap-1.5 border-l border-urban-gold/25 py-0.5 pl-3.5 sm:gap-2 sm:pl-4">
            <span className="font-sans text-[0.9375rem] font-bold leading-tight tracking-[0.13em] text-urban-navy sm:text-base">
              URBAN <span className="text-urban-gold">KEY</span>
            </span>
            <span className="text-[0.625rem] font-medium uppercase leading-none tracking-[0.22em] text-urban-brass sm:text-[0.6875rem]">
              Sarajevo
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-9 sm:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.id}
            />
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-urban-navy transition-colors hover:bg-urban-sand/50 sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-urban-gold/10 bg-urban-cream/98 backdrop-blur-sm transition-[max-height,opacity] duration-300 ease-out sm:hidden ${menuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className={`${siteContainer} flex flex-col gap-0.5 py-3`}
          aria-label="Mobile primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.id}
              onNavigate={closeMenu}
              className="min-h-11 w-full text-[0.9375rem]"
            />
          ))}
        </nav>
      </div>
    </header>
  );
}
