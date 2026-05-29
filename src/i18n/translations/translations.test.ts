import { describe, expect, it } from "vitest";
import { NAV_SECTIONS } from "@/i18n/nav-sections";
import { collectTranslationPaths } from "@/test/translation-structure";
import { getTranslations, translations } from "./index";

describe("translations", () => {
  it("exposes English and Bosnian locales", () => {
    expect(Object.keys(translations).sort()).toEqual(["bs", "en"]);
  });

  it("returns the correct locale via getTranslations", () => {
    expect(getTranslations("en").hero.titleLine1).toContain("We manage");
    expect(getTranslations("bs").hero.titleLine1).toContain("upravljamo");
  });

  it("keeps the same translation structure for en and bs", () => {
    const enPaths = collectTranslationPaths(translations.en).sort();
    const bsPaths = collectTranslationPaths(translations.bs).sort();
    expect(bsPaths).toEqual(enPaths);
  });

  it("has no empty string leaves", () => {
    for (const locale of ["en", "bs"] as const) {
      const t = getTranslations(locale);
      const paths = collectTranslationPaths(t);
      for (const path of paths) {
        const value = path
          .replace(/\[(\d+)\]/g, ".$1")
          .split(".")
          .reduce<unknown>((acc, key) => {
            if (acc == null || typeof acc !== "object") return undefined;
            return (acc as Record<string, unknown>)[key];
          }, t);
        expect(typeof value).toBe("string");
        expect((value as string).trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("aligns FAQ ids across locales", () => {
    const enIds = translations.en.faq.items.map((item) => item.id);
    const bsIds = translations.bs.faq.items.map((item) => item.id);
    expect(bsIds).toEqual(enIds);
  });

  it("provides nav labels for every section id", () => {
    for (const locale of ["en", "bs"] as const) {
      const nav = getTranslations(locale).nav;
      for (const { key } of NAV_SECTIONS) {
        expect(nav[key].trim().length).toBeGreaterThan(0);
      }
    }
  });
});
