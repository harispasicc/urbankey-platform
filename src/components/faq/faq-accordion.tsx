"use client";

import { useCallback, useId, useState } from "react";
import type { FaqItem } from "./faq-data";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 shrink-0 text-urban-gold transition-transform duration-300 ease-out motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqAccordionItem({
  item,
  open,
  onToggle,
  panelId,
  buttonId,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
}) {
  return (
    <div className="border-b border-urban-navy/[0.06] last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex min-h-12 w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-urban-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-urban-gold sm:min-h-[3.25rem] sm:py-4"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="font-sans text-[0.9375rem] font-semibold leading-snug text-urban-navy sm:text-base">
            {item.question}
          </span>
          <ChevronIcon open={open} />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 pr-2 text-[0.875rem] leading-relaxed text-urban-charcoal sm:pb-5 sm:text-[0.9375rem]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const handleToggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return (
    <div className="rounded-xl border border-urban-navy/[0.06] bg-[#faf7f2] px-4 shadow-[0_2px_10px_rgba(20,24,32,0.035)] sm:px-5">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `${baseId}-panel-${item.id}`;
        const buttonId = `${baseId}-button-${item.id}`;

        return (
          <FaqAccordionItem
            key={item.id}
            item={item}
            open={open}
            onToggle={() => handleToggle(item.id)}
            panelId={panelId}
            buttonId={buttonId}
          />
        );
      })}
    </div>
  );
}
