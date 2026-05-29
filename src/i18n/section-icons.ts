import {
  CalendarIcon,
  CameraIcon,
  ChartIcon,
  KeyIcon,
  MessageIcon,
  ReportIcon,
  SparklesIcon,
} from "@/components/services/service-icons";
import {
  ChartIcon as ValueChartIcon,
  MapPinIcon,
  MessageIcon as ValueMessageIcon,
  ShieldIcon,
} from "@/components/why-urban-key/value-icons";

export const SERVICE_ICONS = [
  MessageIcon,
  CalendarIcon,
  SparklesIcon,
  KeyIcon,
  ChartIcon,
  CameraIcon,
  ReportIcon,
] as const;

export const VALUE_ICONS = [
  MapPinIcon,
  ValueMessageIcon,
  ValueChartIcon,
  ShieldIcon,
] as const;
