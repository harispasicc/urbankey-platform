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
    "We handle guest messages and issues so you stay out of day-to-day stress — warm, professional communication from first inquiry to checkout.",
  Icon: MessageIcon,
};

export const GRID_SERVICES: ServiceItem[] = [
  {
    title: "Airbnb & Booking management",
    description:
      "We manage listings, reservations, calendars, and booking platforms for maximum visibility.",
    Icon: CalendarIcon,
  },
  {
    title: "Cleaning coordination",
    description:
      "Organized cleaning workflows and apartment readiness between reservations.",
    Icon: SparklesIcon,
  },
  {
    title: "Check-in / Check-out",
    description:
      "Smooth guest arrival and departure management without owner involvement.",
    Icon: KeyIcon,
  },
  {
    title: "Pricing optimization",
    description:
      "Seasonal and event-based pricing adjustments to improve occupancy and revenue.",
    Icon: ChartIcon,
  },
  {
    title: "Photography & promotion",
    description:
      "Professional apartment presentation and social media promotion.",
    Icon: CameraIcon,
  },
  {
    title: "Owner reporting",
    description:
      "Clear updates and operational transparency for apartment owners.",
    Icon: ReportIcon,
  },
];

export const TRUST_PROOF = [
  "Local Sarajevo-based team",
  "Fast guest response",
  "Airbnb & Booking support",
  "Operational transparency",
] as const;
