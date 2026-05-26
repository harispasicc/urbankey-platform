import type { ComponentType } from "react";
import {
  ChartIcon,
  MapPinIcon,
  MessageIcon,
  ShieldIcon,
  StarIcon,
  SupportIcon,
} from "./value-icons";

export type ValueItem = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
};

export const VALUE_CARDS: ValueItem[] = [
  {
    title: "Local Sarajevo team",
    description:
      "We understand the Sarajevo rental market, guest expectations, and seasonal booking dynamics.",
    Icon: MapPinIcon,
  },
  {
    title: "Transparent communication",
    description:
      "Owners stay informed with clear updates, operational visibility, and responsive support.",
    Icon: MessageIcon,
  },
  {
    title: "Stress-free management",
    description:
      "We handle reservations, guests, check-ins, and coordination so owners avoid daily operational pressure.",
    Icon: ShieldIcon,
  },
  {
    title: "Premium guest experience",
    description:
      "Professional communication and organized operations help create better stays and stronger reviews.",
    Icon: StarIcon,
  },
  {
    title: "Booking performance focus",
    description:
      "We continuously improve listings, pricing, and operational quality to support occupancy and revenue growth.",
    Icon: ChartIcon,
  },
  {
    title: "Reliable operational support",
    description:
      "From cleaning coordination to guest issues, we manage the operational workload consistently.",
    Icon: SupportIcon,
  },
];
