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
      "We learn about your apartment, goals, and current rental setup.",
  },
  {
    step: "02",
    title: "Apartment onboarding",
    description:
      "We prepare listings, organize operational details, and align the management process.",
  },
  {
    step: "03",
    title: "Guest-ready operations",
    description:
      "We manage reservations, guest communication, check-ins, and cleaning coordination.",
  },
  {
    step: "04",
    title: "Ongoing optimization",
    description:
      "We continuously improve booking performance, pricing, and guest experience.",
  },
  {
    step: "05",
    title: "Transparent owner support",
    description:
      "You stay informed while we handle the operational workload.",
  },
];
