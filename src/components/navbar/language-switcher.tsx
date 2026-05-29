"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import type { Locale } from "@/i18n/types";
import { FlagBs, FlagEn } from "./language-flags";

const OPTIONS: { locale: Locale; labelKey: "english" | "bosnian" }[] = [
  { locale: "en", labelKey: "english" },
  { locale: "bs", labelKey: "bosnian" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const currentLabel =
    locale === "en" ? t.lang.english : t.lang.bosnian;

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function select(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        data-testid="language-switcher-trigger"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-urban-gold/15 bg-urban-cream/90 text-urban-navy shadow-sm transition hover:border-urban-gold/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold"
        aria-label={`${t.lang.label}: ${currentLabel}`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {locale === "en" ? <FlagEn size={22} /> : <FlagBs size={22} />}
      </button>

      {open ? (
        <div
          role="listbox"
          data-testid="language-switcher-menu"
          aria-label={t.lang.label}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[9.5rem] overflow-hidden rounded-xl border border-urban-gold/15 bg-white py-1 shadow-lg"
        >
          {OPTIONS.map(({ locale: opt, labelKey }) => {
            const selected = locale === opt;
            return (
              <button
                key={opt}
                type="button"
                role="option"
                data-testid={`language-option-${opt}`}
                aria-selected={selected}
                onClick={() => select(opt)}
                className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-left text-sm transition ${
                  selected
                    ? "bg-urban-sand/50 font-medium text-urban-navy"
                    : "text-urban-charcoal hover:bg-urban-sand/40"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  {opt === "en" ? <FlagEn size={16} /> : <FlagBs size={16} />}
                  {t.lang[labelKey]}
                </span>
                {selected ? (
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-urban-gold"
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
