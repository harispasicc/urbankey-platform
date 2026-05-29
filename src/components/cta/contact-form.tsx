"use client";

import {
  useCallback,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useTranslations } from "@/i18n/language-context";
import {
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contact-form-validation";
import { TextAreaField, TextField } from "./form-field";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  apartmentLocation: "",
  email: "",
  phone: "",
  message: "",
};

function SubmitArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactForm() {
  const t = useTranslations();
  const f = t.contact.form;

  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  const updateField = useCallback(
    (field: keyof ContactFormValues) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((prev) => ({ ...prev, [field]: e.target.value }));
        setErrors((prev) => {
          if (!prev[field]) return prev;
          const next = { ...prev };
          delete next[field];
          return next;
        });
      },
    [],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactForm(values, f.errors);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setErrors({ form: f.errors.notConfigured });
      return;
    }

    setStatus("submitting");
    setErrors({});

    const body = new FormData();
    body.append("name", values.name.trim());
    body.append("apartment_location", values.apartmentLocation.trim());
    body.append("email", values.email.trim());
    if (values.phone.trim()) {
      body.append("phone", values.phone.trim());
    }
    body.append("message", values.message.trim());
    body.append(
      "_subject",
      `UrbanKey consultation, ${values.apartmentLocation.trim()}`,
    );

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
    } catch {
      setStatus("error");
      setErrors({ form: f.errors.submitFailed });
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-urban-gold/25 bg-urban-sand/40 px-5 py-8 text-center sm:px-6"
        role="status"
      >
        <p className="font-sans text-lg font-semibold text-urban-navy">
          {f.successTitle}
        </p>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-urban-charcoal">
          {f.successBody}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 min-h-11 text-sm font-medium text-urban-gold transition-colors hover:text-[#8a7048] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold"
        >
          {f.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-describedby={errors.form ? "contact-form-error" : undefined}
    >
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <TextField
        id="contact-name"
        name="name"
        label={f.name}
        autoComplete="name"
        placeholder={f.namePlaceholder}
        value={values.name}
        onChange={updateField("name")}
        error={errors.name}
        disabled={status === "submitting"}
        required
      />

      <TextField
        id="contact-location"
        name="apartment_location"
        label={f.location}
        autoComplete="street-address"
        placeholder={f.locationPlaceholder}
        value={values.apartmentLocation}
        onChange={updateField("apartmentLocation")}
        error={errors.apartmentLocation}
        disabled={status === "submitting"}
        required
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
        <TextField
          id="contact-email"
          name="email"
          type="email"
          label={f.email}
          autoComplete="email"
          placeholder={f.emailPlaceholder}
          value={values.email}
          onChange={updateField("email")}
          error={errors.email}
          disabled={status === "submitting"}
          required
        />
        <TextField
          id="contact-phone"
          name="phone"
          type="tel"
          label={f.phone}
          autoComplete="tel"
          placeholder={f.phonePlaceholder}
          value={values.phone}
          onChange={updateField("phone")}
          error={errors.phone}
          disabled={status === "submitting"}
        />
      </div>

      <TextAreaField
        id="contact-message"
        name="message"
        label={f.message}
        placeholder={f.messagePlaceholder}
        value={values.message}
        onChange={updateField("message")}
        error={errors.message}
        disabled={status === "submitting"}
        required
      />

      {errors.form && (
        <p id="contact-form-error" className="text-[0.8125rem] text-[#8b4a42]" role="alert">
          {errors.form}
        </p>
      )}

      <button
        type="submit"
        data-testid="contact-form-submit"
        disabled={status === "submitting"}
        className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-urban-gold px-6 py-3.5 text-sm font-semibold tracking-[0.02em] text-urban-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_16px_rgba(154,130,86,0.25)] transition-[background-color,box-shadow,opacity] duration-300 ease-out hover:bg-urban-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? f.sending : f.submit}
        <SubmitArrow className="opacity-85 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
