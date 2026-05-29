import type { ComponentType } from "react";
import { ChartIcon, MapPinIcon, MessageIcon, ShieldIcon } from "./value-icons";

export type ValueItem = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
};

export const VALUE_CARDS: ValueItem[] = [
  {
    title: "Local Sarajevo expertise",
    description:
      "We know the neighborhoods, guest expectations, and seasonal demand patterns that affect short-term rentals here.",
    Icon: MapPinIcon,
  },
  {
    title: "One point of contact",
    description:
      "Instead of juggling cleaners, guests, and platforms yourself, you work with one local team that coordinates everything.",
    Icon: MessageIcon,
  },
  {
    title: "Revenue-focused management",
    description:
      "We manage pricing, availability, and listing quality with occupancy and income in mind — not just day-to-day tasks.",
    Icon: ChartIcon,
  },
  {
    title: "Complete operational coverage",
    description:
      "From guest messages and check-ins to cleaning coordination and platform management — the operational load stays with us.",
    Icon: ShieldIcon,
  },
];
