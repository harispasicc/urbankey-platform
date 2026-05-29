export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "pricing",
    question: "How much does apartment management cost?",
    answer:
      "We discuss pricing after understanding your apartment, occupancy potential, and operational requirements. Every property is different, so we provide tailored management proposals.",
  },
  {
    id: "account-control",
    question: "Do I keep control of my Airbnb account?",
    answer:
      "Yes. Owners maintain visibility and control while UrbanKey handles the daily operational workload, guest communication, and coordination.",
  },
  {
    id: "booking-com",
    question: "Do you manage Booking.com as well?",
    answer:
      "Yes. We support both Airbnb and Booking.com operations, including listing management, reservations, guest communication, and platform coordination.",
  },
  {
    id: "cleaning",
    question: "Do you provide cleaning coordination?",
    answer:
      "Yes. Cleaning coordination is included as part of our operational management process to ensure every guest arrives to a prepared apartment.",
  },
];
