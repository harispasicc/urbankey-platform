"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n/language-context";
import { CTA_CONTACT } from "./cta-data";
import { ContactForm } from "./contact-form";

export function ContactPanel() {
  const t = useTranslations();

  return (
    <aside className="w-full min-w-0 rounded-xl border border-urban-navy/[0.08] bg-[#faf7f2] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
      <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-brass">
        {t.contact.formTitle}
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-urban-charcoal/90">
        {t.contact.formIntro}
      </p>
      <div className="mt-4 h-px w-10 bg-urban-gold/45" aria-hidden />

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8 border-t border-urban-navy/[0.06] pt-6">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-urban-brass">
          {t.contact.directTitle}
        </p>
        <ul className="mt-3 space-y-2 text-[0.9375rem]">
          <li>
            <Link
              href={CTA_CONTACT.phoneHref}
              className="font-medium text-urban-navy transition-colors hover:text-urban-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold"
            >
              {CTA_CONTACT.phone}
            </Link>
          </li>
          <li>
            <Link
              href={CTA_CONTACT.emailHref}
              className="break-all font-medium text-urban-navy transition-colors hover:text-urban-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold sm:break-normal"
            >
              {CTA_CONTACT.email}
            </Link>
          </li>
        </ul>
        <p className="mt-3 text-[0.8125rem] text-urban-charcoal/75">
          {t.contact.location}
        </p>
      </div>
    </aside>
  );
}
