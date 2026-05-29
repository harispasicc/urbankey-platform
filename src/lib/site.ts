export const siteConfig = {
  name: "UrbanKey Sarajevo",
  shortName: "UrbanKey",
  title: "UrbanKey Sarajevo | Airbnb & Booking Apartment Management",
  description:
    "Professional Airbnb and Booking apartment management in Sarajevo. Guest communication, cleaning coordination, check-ins, pricing optimization, and owner support.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://urbankeysarajevo.com",
  locale: "en_BA",
  email: "urbankeysarajevo@gmail.com",
  phone: "+38762566150",
  location: "Sarajevo, Bosnia and Herzegovina",
  ogImage: "/hero-apartment-living.jpg",
  ogImageAlt:
    "Professionally managed apartment living space in Sarajevo",
  keywords: [
    "Airbnb management Sarajevo",
    "apartment management Sarajevo",
    "Booking apartment management Sarajevo",
    "stress-free Airbnb hosting Sarajevo",
    "upravljanje apartmanima Sarajevo",
  ],
} as const;

export function absoluteUrl(path = ""): string {
  const base = siteConfig.url;
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
