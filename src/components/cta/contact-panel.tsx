import Link from "next/link";
import { CTA_CONTACT } from "./cta-data";
import { ContactForm } from "./contact-form";

export function ContactPanel() {
  return (
    <aside className="w-full min-w-0 rounded-xl border border-urban-navy/[0.08] bg-[#faf7f2] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18),0_2px_8px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8">
      <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-brass">
        Request a consultation
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-urban-charcoal/90">
        Share a few details about your Sarajevo apartment — we will respond with
        clear next steps.
      </p>
      <div className="mt-4 h-px w-10 bg-urban-gold/45" aria-hidden />

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8 border-t border-urban-navy/[0.06] pt-6">
        <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-urban-brass">
          Prefer direct contact?
        </p>
        <ul className="mt-3 space-y-2 text-[0.9375rem]">
          <li>
            <Link
              href={CTA_CONTACT.phoneHref}
              className="font-medium text-urban-navy transition-colors hover:text-urban-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold"
            >
              {CTA_CONTACT.phone}
            </Link>
          </li>
          <li>
            <Link
              href={CTA_CONTACT.emailHref}
              className="break-all font-medium text-urban-navy transition-colors hover:text-urban-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold sm:break-normal"
            >
              {CTA_CONTACT.email}
            </Link>
          </li>
        </ul>
        <p className="mt-3 text-[0.8125rem] text-urban-charcoal/75">
          {CTA_CONTACT.location}
        </p>
      </div>
    </aside>
  );
}
