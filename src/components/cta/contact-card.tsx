import Link from "next/link";
import { CTA_CONTACT } from "./cta-data";
import { EmailIcon, LocationIcon, PhoneIcon } from "./contact-icons";
import { CtaPrimaryButton, CtaSecondaryButton } from "./cta-buttons";

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof PhoneIcon;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <li className="flex gap-3.5">
      <div
        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-urban-gold/18 bg-urban-sand/50 text-urban-gold"
        aria-hidden
      >
        <Icon className="size-[1.125rem]" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-urban-brass">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-0.5 block text-[0.9375rem] font-medium text-urban-navy transition-colors hover:text-urban-gold"
          >
            {value}
          </a>
        ) : (
          <p className="mt-0.5 text-[0.9375rem] font-medium text-urban-navy">
            {value}
          </p>
        )}
      </div>
    </li>
  );
}

export function ContactCard() {
  return (
    <aside className="rounded-xl border border-urban-navy/[0.08] bg-[#faf7f2] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-brass">
        Contact UrbanKey
      </p>
      <div className="mt-3 h-px w-10 bg-urban-gold/45" aria-hidden />

      <ul className="mt-6 space-y-5">
        <ContactRow
          icon={PhoneIcon}
          label="Phone"
          value={CTA_CONTACT.phone}
          href={CTA_CONTACT.phoneHref}
        />
        <ContactRow
          icon={EmailIcon}
          label="Email"
          value={CTA_CONTACT.email}
          href={CTA_CONTACT.emailHref}
        />
        <ContactRow
          icon={LocationIcon}
          label="Location"
          value={CTA_CONTACT.location}
        />
      </ul>

      <p className="mt-6 text-[0.8125rem] text-urban-charcoal/80">
        Usually responds within 24 hours.
      </p>

      <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
        <CtaPrimaryButton href={CTA_CONTACT.phoneHref} variant="dark">
          Call now
        </CtaPrimaryButton>
        <CtaSecondaryButton href={CTA_CONTACT.emailHref} variant="dark">
          Send email
        </CtaSecondaryButton>
      </div>
    </aside>
  );
}
