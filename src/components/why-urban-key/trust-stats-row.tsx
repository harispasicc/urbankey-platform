const STATS = [
  { value: "Sarajevo", label: "Local operations" },
  { value: "Responsive", label: "Owner support" },
  { value: "Airbnb & Booking", label: "Platform focus" },
] as const;

export function TrustStatsRow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-1 divide-y divide-urban-gold/15 rounded-lg border border-urban-gold/18 bg-[#f5f0e8]/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${className}`}
      role="list"
    >
      {STATS.map((item) => (
        <div
          key={item.label}
          className="px-4 py-3.5 text-center sm:px-4 sm:py-4"
          role="listitem"
        >
          <p className="font-display text-lg font-semibold text-balance text-urban-navy sm:text-xl">
            {item.value}
          </p>
          <p className="mt-1 text-[0.75rem] leading-snug text-urban-charcoal/85 sm:text-[0.8125rem]">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
