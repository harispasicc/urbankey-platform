import type { ComponentType } from "react";
import {
  CalendarIcon,
  CameraIcon,
  ChartIcon,
  KeyIcon,
  MessageIcon,
  ReportIcon,
  SparklesIcon,
} from "./service-icons";

export type ServiceItem = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
};

export const FEATURED_SERVICE: ServiceItem = {
  title: "Guest communication",
  description:
    "Inquiries, booking questions, check-in details, and issue handling — managed professionally on your behalf.",
  Icon: MessageIcon,
};

export const GRID_SERVICES: ServiceItem[] = [
  {
    title: "Airbnb & Booking management",
    description:
      "Listing setup, calendar sync, reservations, and platform updates across Airbnb and Booking.com.",
    Icon: CalendarIcon,
  },
  {
    title: "Cleaning coordination",
    description:
      "Turnovers scheduled and tracked so every guest arrives to a prepared apartment.",
    Icon: SparklesIcon,
  },
  {
    title: "Check-in / Check-out",
    description:
      "Arrival instructions, access coordination, and departure handling without owner involvement.",
    Icon: KeyIcon,
  },
  {
    title: "Pricing optimization",
    description:
      "Seasonal and event-based rate adjustments aligned with Sarajevo demand patterns.",
    Icon: ChartIcon,
  },
  {
    title: "Photography & promotion",
    description:
      "Listing visuals and promotional support so your apartment presents competitively online.",
    Icon: CameraIcon,
  },
  {
    title: "Owner reporting",
    description:
      "Clear operational updates so you always know what is happening with your apartment.",
    Icon: ReportIcon,
  },
];
