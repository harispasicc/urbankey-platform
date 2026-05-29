import { footerContainer } from "@/lib/layout";
import { FooterBrand } from "./footer-brand";
import { FooterContact, FooterNavigation } from "./footer-nav-contact";

function FooterBottomBar() {
  return (
    <div className="flex flex-col gap-3 border-t border-urban-gold/12 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-left">
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
        <div className="grid gap-10 py-12 sm:gap-12 sm:py-14 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[2fr_1.25fr_1.75fr] lg:gap-x-10 lg:py-16 xl:py-20">
          <div className="md:col-span-2 lg:col-span-1">
            <FooterBrand />
          </div>
          <FooterNavigation />
          <FooterContact />
        </div>
        <FooterBottomBar />
      </div>
    </footer>
  );
}
