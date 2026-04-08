import Link from "next/link";
import { priceTiers, priceListNote, priceListDate } from "@/lib/price-list";

export function PriceList() {
  return (
    <section
      aria-labelledby="price-list-heading"
      className="border-t border-ink/[0.06] bg-canvas"
    >
      <div className="section-shell section-rhythm-tight">
        <p className="eyebrow-label">Pricing</p>
        <h2
          id="price-list-heading"
          className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl"
        >
          Price List
        </h2>
        <p className="mt-1 font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {priceListDate}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {priceTiers.map((tier) => (
            <div key={tier.size} className="surface-card p-7 sm:p-8 space-y-5">
              <h3 className="font-display text-2xl font-semibold tracking-[0.04em] text-ink">
                {tier.size}
              </h3>

              <ul className="space-y-2 border-b border-ink/[0.07] pb-5">
                {tier.subjects.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-baseline justify-between gap-3 font-sans text-sm text-ink"
                  >
                    <span>{s.label}</span>
                    <span className="font-medium tabular-nums">{s.price}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {tier.addons.map((a) => (
                  <li
                    key={a.label}
                    className="flex items-baseline justify-between gap-3 font-sans text-xs text-muted"
                  >
                    <span>{a.label}</span>
                    <span className="font-medium tabular-nums">{a.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-5 font-sans text-sm text-muted">{priceListNote}</p>

        <div className="mt-8 text-center">
          <Link href="/contact" className="button-primary">
            Order now
          </Link>
        </div>
      </div>
    </section>
  );
}
