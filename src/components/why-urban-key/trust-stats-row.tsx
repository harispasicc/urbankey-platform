const STATS = [
  { value: "Sarajevo", label: "Local operations" },
  { value: "Responsive", label: "Owner support" },
  { value: "Airbnb & Booking", label: "Platform focus" },
] as const;

export function TrustStatsRow() {
  return (
    <div
      className="mt-8 grid grid-cols-1 divide-y divide-urban-gold/12 rounded-xl border border-urban-gold/15 bg-urban-sand/50 sm:mt-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      role="list"
    >
      {STATS.map((item) => (
        <div
          key={item.label}
          className="px-5 py-5 text-center sm:px-6"
          role="listitem"
        >
          <p className="font-display text-xl font-semibold text-urban-navy sm:text-2xl">
            {item.value}
          </p>
          <p className="mt-1.5 text-[0.8125rem] leading-snug text-urban-charcoal/85">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
