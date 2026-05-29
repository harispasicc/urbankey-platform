"use client";

import { useMemo } from "react";
import { NAV_SECTIONS } from "@/i18n/nav-sections";
import { useTranslations } from "@/i18n/language-context";
import { CTA_CONTACT } from "../cta/cta-data";
import { FooterLink } from "./footer-link";

export function FooterNavigation() {
  const t = useTranslations();

  const links = useMemo(
    () =>
      NAV_SECTIONS.map(({ id, key }) => ({
        href: `#${id}`,
        label: t.nav[key],
      })),
    [t],
  );

  return (
    <nav aria-label={t.footer.navigation}>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-gold/85">
        {t.footer.navigation}
      </p>
      <ul className="mt-5 space-y-4">
        {links.map((item) => (
          <li key={item.href} className="leading-relaxed">
            <FooterLink href={item.href}>{item.label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function FooterContact() {
  const t = useTranslations();

  return (
    <div>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-gold/85">
        {t.footer.contact}
      </p>
      <ul className="mt-4 space-y-3 text-sm">
        <li>
          <FooterLink href={CTA_CONTACT.phoneHref} external>
            {CTA_CONTACT.phone}
          </FooterLink>
        </li>
        <li>
          <FooterLink href={CTA_CONTACT.emailHref} external>
            {CTA_CONTACT.email}
          </FooterLink>
        </li>
        <li className="text-white/75">{t.contact.location}</li>
      </ul>

      <ul className="mt-6 space-y-2">
        {t.footer.trust.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[0.8125rem] text-white/55"
          >
            <span
              className="size-1 shrink-0 rounded-full bg-urban-gold/60"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
