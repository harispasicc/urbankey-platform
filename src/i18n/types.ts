export type Locale = "en" | "bs";

export type NavLinkKey =
  | "services"
  | "howItWorks"
  | "whyUrbanKey"
  | "faq"
  | "contact";

export type TranslationCopy = {
  nav: Record<NavLinkKey, string> & {
    openMenu: string;
    closeMenu: string;
    primaryAria: string;
    mobileAria: string;
  };
  lang: {
    label: string;
    english: string;
    bosnian: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    lead: string;
    body: string;
    ctaConsultation: string;
    ctaServices: string;
    trust: [string, string, string];
    floatingCards: [string, string, string, string];
    imageAlt: string;
  };
  trustStrip: {
    title: string;
    items: [string, string, string, string];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    coreLabel: string;
    featured: { title: string; description: string };
    items: { title: string; description: string }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  whyUrbanKey: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
    panelTitle: string;
    reasons: { title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { id: string; question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    sub: string;
    viewServices: string;
    formTitle: string;
    formIntro: string;
    directTitle: string;
    location: string;
    form: {
      name: string;
      namePlaceholder: string;
      location: string;
      locationPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successBody: string;
      sendAnother: string;
      errors: {
        nameRequired: string;
        nameShort: string;
        locationRequired: string;
        emailRequired: string;
        emailInvalid: string;
        phoneInvalid: string;
        messageRequired: string;
        messageShort: string;
        notConfigured: string;
        submitFailed: string;
      };
    };
  };
  footer: {
    tagline: string;
    subline: string;
    navigation: string;
    contact: string;
    copyright: string;
    motto: string;
    trust: [string, string, string];
  };
};
