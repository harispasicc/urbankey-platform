"use client";

import Link from "next/link";
import { BrandLogoLockup } from "@/components/brand-logo";
import { useTranslations } from "@/i18n/language-context";

export function FooterBrand() {
  const t = useTranslations();

  return (
    <div className="max-w-sm">
      <Link href="/" className="inline-flex" aria-label="UrbanKey Sarajevo">
        <BrandLogoLockup onDark />
      </Link>

      <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/75">
        {t.footer.tagline}
      </p>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-white/55">
        {t.footer.subline}
      </p>
    </div>
  );
}
