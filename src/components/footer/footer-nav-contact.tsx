import { FOOTER_CONTACT, FOOTER_NAV, FOOTER_TRUST } from "./footer-data";
import { FooterLink } from "./footer-link";

export function FooterNavigation() {
  return (
    <nav aria-label="Footer navigation">
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-gold/85">
        Navigation
      </p>
      <ul className="mt-5 space-y-4">
        {FOOTER_NAV.map((item) => (
          <li key={item.href} className="leading-relaxed">
            <FooterLink href={item.href}>{item.label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function FooterContact() {
  return (
    <div>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-urban-gold/85">
        Contact
      </p>
      <ul className="mt-4 space-y-3 text-sm">
        <li>
          <FooterLink href={FOOTER_CONTACT.phoneHref} external>
            {FOOTER_CONTACT.phone}
          </FooterLink>
        </li>
        <li>
          <FooterLink href={FOOTER_CONTACT.emailHref} external>
            {FOOTER_CONTACT.email}
          </FooterLink>
        </li>
        <li className="text-white/75">{FOOTER_CONTACT.location}</li>
      </ul>

      <ul className="mt-6 space-y-2">
        {FOOTER_TRUST.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-[0.8125rem] text-white/55"
          >
            <span
              className="size-1 shrink-0 rounded-full bg-urban-gold/60"
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
