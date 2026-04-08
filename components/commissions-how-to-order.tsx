import Link from "next/link";
import { howToOrderSteps } from "@/lib/commissions-how-to-order";

export function CommissionsHowToOrder() {
  return (
    <section aria-labelledby="how-to-order-heading" className="section-shell section-rhythm-tight">
      <p className="eyebrow-label">The Process</p>
      <h2
        id="how-to-order-heading"
        className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl"
      >
        How to order your pet portrait
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {howToOrderSteps.map((step) => (
          <div key={step.number} className="surface-card p-7 sm:p-8 lg:p-9 space-y-4">
            <span className="font-display text-4xl font-semibold text-sage/50 leading-none">
              {String(step.number).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-semibold tracking-[0.03em] text-ink sm:text-2xl">
              {step.title}
            </h3>
            <div className="space-y-3">
              {step.body.map((para, i) => (
                <p key={i} className="font-sans text-sm leading-relaxed text-muted sm:text-base">
                  {para}
                </p>
              ))}
            </div>
            {step.note ? (
              <p className="border-t border-ink/[0.06] pt-4 font-sans text-xs leading-relaxed text-ink/70 sm:text-sm italic">
                {step.note}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/contact" className="button-primary">
          Order now
        </Link>
      </div>
    </section>
  );
}
