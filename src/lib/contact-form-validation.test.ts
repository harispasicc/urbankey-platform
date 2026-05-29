import { describe, expect, it } from "vitest";
import { en } from "@/i18n/translations/en";
import {
  isValidEmail,
  isValidPhone,
  validateContactForm,
} from "./contact-form-validation";

const errors = en.contact.form.errors;

const validValues = {
  name: "Haris Pasic",
  apartmentLocation: "Baščaršija, Sarajevo",
  email: "haris@example.com",
  phone: "+38762123456",
  message: "I have a two-bedroom apartment available for short-term rental.",
};

describe("isValidEmail", () => {
  it("accepts a standard email", () => {
    expect(isValidEmail("owner@urbankey.ba")).toBe(true);
  });

  it("rejects invalid email formats", () => {
    expect(isValidEmail("not-an-email")).toBe(false);
    expect(isValidEmail("missing@domain")).toBe(false);
  });
});

describe("isValidPhone", () => {
  it("accepts phone numbers with 8–15 digits", () => {
    expect(isValidPhone("+387 62 566 150")).toBe(true);
  });

  it("rejects too few digits", () => {
    expect(isValidPhone("12345")).toBe(false);
  });
});

describe("validateContactForm", () => {
  it("returns no errors for valid input", () => {
    expect(validateContactForm(validValues, errors)).toEqual({});
  });

  it("requires core fields", () => {
    const result = validateContactForm(
      {
        name: "",
        apartmentLocation: "",
        email: "",
        phone: "",
        message: "",
      },
      errors,
    );

    expect(result.name).toBe(errors.nameRequired);
    expect(result.apartmentLocation).toBe(errors.locationRequired);
    expect(result.email).toBe(errors.emailRequired);
    expect(result.message).toBe(errors.messageRequired);
  });

  it("validates optional phone when provided", () => {
    const result = validateContactForm(
      { ...validValues, phone: "123" },
      errors,
    );
    expect(result.phone).toBe(errors.phoneInvalid);
  });

  it("allows empty optional phone", () => {
    const result = validateContactForm({ ...validValues, phone: "" }, errors);
    expect(result.phone).toBeUndefined();
  });

  it("enforces minimum name and message length", () => {
    const result = validateContactForm(
      { ...validValues, name: "A", message: "short" },
      errors,
    );
    expect(result.name).toBe(errors.nameShort);
    expect(result.message).toBe(errors.messageShort);
  });
});
