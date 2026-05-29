export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Initial consultation",
    description:
      "We review your apartment, current setup, and goals — then outline how management would work for you.",
  },
  {
    step: "02",
    title: "Apartment onboarding",
    description:
      "We align listings, calendars, access, cleaning partners, and operational details before guests arrive.",
  },
  {
    step: "03",
    title: "Live guest operations",
    description:
      "UrbanKey runs reservations, guest communication, check-ins, and cleaning coordination day to day.",
  },
  {
    step: "04",
    title: "Performance review",
    description:
      "We adjust pricing, availability, and listing quality based on seasonality and booking performance.",
  },
  {
    step: "05",
    title: "Owner updates",
    description:
      "You receive clear communication and visibility — without handling guest messages or logistics yourself.",
  },
];
