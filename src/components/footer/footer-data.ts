import { CTA_CONTACT } from "../cta/cta-data";

export const FOOTER_NAV = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-urban-key", label: "Why UrbanKey" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const FOOTER_TRUST = [
  "Local Sarajevo-based team",
  "Airbnb & Booking focused",
  "Responsive owner support",
] as const;

export const FOOTER_CONTACT = CTA_CONTACT;
