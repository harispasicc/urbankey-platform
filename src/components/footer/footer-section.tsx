import { footerContainer } from "@/lib/layout";
import { FooterBrand } from "./footer-brand";
import { FooterContact, FooterNavigation } from "./footer-nav-contact";

function FooterBottomBar() {
  return (
    <div className="flex flex-col gap-3 border-t border-urban-gold/12 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <p className="text-[0.8125rem] text-white/50">
        © 2026 UrbanKey Sarajevo. All rights reserved.
      </p>
      <p className="text-[0.8125rem] text-white/50">
        Built for stress-free apartment hosting.
      </p>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="relative border-t border-urban-gold/20 bg-[#0f1218] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-urban-gold/40 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#141820]/80 to-transparent"
        aria-hidden
      />

      <div className={`${footerContainer} pt-4`}>
        <div className="grid gap-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-[2fr_1.25fr_1.75fr] lg:gap-x-10 lg:gap-y-0 lg:py-16">
          <FooterBrand />
          <FooterNavigation />
          <FooterContact />
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
}
