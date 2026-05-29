import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

const LABEL_CLASS =
  "text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-urban-brass";

const FIELD_CLASS =
  "min-h-12 w-full rounded-lg border border-urban-navy/[0.08] bg-white/90 px-4 py-3 text-[0.9375rem] text-urban-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-[border-color,box-shadow] duration-200 placeholder:text-urban-charcoal/45 focus:border-urban-gold/45 focus:outline-none focus:ring-2 focus:ring-urban-gold/15 disabled:cursor-not-allowed disabled:opacity-60";

const ERROR_CLASS = "mt-1.5 text-[0.8125rem] text-[#8b4a42]";

type FieldWrapperProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

function FieldWrapper({ id, label, error, hint, children }: FieldWrapperProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <div>
      <label htmlFor={id} className={LABEL_CLASS}>
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-[0.8125rem] text-urban-charcoal/65">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className={ERROR_CLASS} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ id, label, error, hint, className = "", ...props }: TextFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={[errorId, hintId].filter(Boolean).join(" ") || undefined}
        className={`${FIELD_CLASS} ${className}`}
        {...props}
      />
    </FieldWrapper>
  );
}

type TextAreaFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaField({
  id,
  label,
  error,
  hint,
  className = "",
  ...props
}: TextAreaFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  return (
    <FieldWrapper id={id} label={label} error={error} hint={hint}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={[errorId, hintId].filter(Boolean).join(" ") || undefined}
        className={`${FIELD_CLASS} min-h-[7.5rem] resize-y ${className}`}
        {...props}
      />
    </FieldWrapper>
  );
}
