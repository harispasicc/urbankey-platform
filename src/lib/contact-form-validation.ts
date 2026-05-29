import type { TranslationCopy } from "@/i18n/types";

export type ContactFormValues = {
  name: string;
  apartmentLocation: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormField = keyof ContactFormValues | "form";

export type ContactFormErrors = Partial<
  Record<ContactFormField, string>
>;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export function validateContactForm(
  values: ContactFormValues,
  errors: TranslationCopy["contact"]["form"]["errors"],
): ContactFormErrors {
  const result: ContactFormErrors = {};

  if (!values.name.trim()) {
    result.name = errors.nameRequired;
  } else if (values.name.trim().length < 2) {
    result.name = errors.nameShort;
  }

  if (!values.apartmentLocation.trim()) {
    result.apartmentLocation = errors.locationRequired;
  }

  if (!values.email.trim()) {
    result.email = errors.emailRequired;
  } else if (!isValidEmail(values.email)) {
    result.email = errors.emailInvalid;
  }

  if (values.phone.trim() && !isValidPhone(values.phone)) {
    result.phone = errors.phoneInvalid;
  }

  if (!values.message.trim()) {
    result.message = errors.messageRequired;
  } else if (values.message.trim().length < 10) {
    result.message = errors.messageShort;
  }

  return result;
}
