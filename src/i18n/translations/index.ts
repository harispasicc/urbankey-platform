import { bs } from "./bs";
import { en } from "./en";
import type { Locale } from "../types";

export const translations = {
  en,
  bs,
} as const;

export type { TranslationCopy } from "../types";

export function getTranslations(locale: Locale) {
  return translations[locale];
}
