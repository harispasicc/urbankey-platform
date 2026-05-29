import { siteConfig, absoluteUrl } from "@/lib/site";

export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}#organization`,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sarajevo",
      addressCountry: "BA",
    },
    areaServed: {
      "@type": "City",
      name: "Sarajevo",
    },
    priceRange: "$$",
    knowsAbout: [
      "Airbnb property management",
      "Booking.com apartment management",
      "Short-term rental operations",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusiness, website]),
      }}
    />
  );
}
