import { CTA_CONTACT } from "../cta/cta-data";

export const FOOTER_NAV = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-urban-key", label: "Why UrbanKey" },
  { href: "#contact", label: "Contact" },
] as const;

export const FOOTER_TRUST = [
  "Usually responds within 24h",
  "Local Sarajevo-based team",
  "Airbnb & Booking focused",
] as const;

export const FOOTER_CONTACT = CTA_CONTACT;
