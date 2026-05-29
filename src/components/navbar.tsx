"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { BrandLogoLockup } from "@/components/brand-logo";
import { NAV_SECTIONS } from "@/i18n/nav-sections";
import { useTranslations } from "@/i18n/language-context";
import { siteContainer } from "@/lib/layout";
import { LanguageSwitcher } from "./navbar/language-switcher";

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
  const t = useTranslations();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = useMemo(
    () =>
      NAV_SECTIONS.map(({ id, key }) => ({
        id,
        href: `#${id}`,
        label: t.nav[key],
      })),
    [t],
  );

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

      for (const { id } of navLinks) {
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
  }, [navLinks]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
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
          className="flex shrink-0 items-center"
          onClick={closeMenu}
          aria-label="UrbanKey Sarajevo"
        >
          <BrandLogoLockup priority />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="hidden items-center gap-6 lg:flex lg:gap-8 xl:gap-9"
            aria-label={t.nav.primaryAria}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                label={link.label}
                isActive={activeSection === link.id}
              />
            ))}
          </nav>

          <LanguageSwitcher />

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md text-urban-navy transition-colors hover:bg-urban-sand/50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-urban-gold/10 bg-urban-cream/98 backdrop-blur-sm transition-[max-height,opacity] duration-300 ease-out lg:hidden ${menuOpen ? "max-h-[22rem] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!menuOpen}
      >
        <nav
          className={`${siteContainer} flex flex-col gap-0.5 py-3`}
          aria-label={t.nav.mobileAria}
        >
          {navLinks.map((link) => (
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
