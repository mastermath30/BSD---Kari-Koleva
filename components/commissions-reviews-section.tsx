import { Star } from "lucide-react";
import {
  reviewPlaceholders,
  reviewsSummary,
} from "@/lib/commissions-reviews-data";

function StarRow({ filled }: { filled: boolean }) {
  return (
    <Star
      className={`h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] ${
        filled
          ? "fill-sage/90 text-sage"
          : "fill-sage/25 text-sage/35"
      }`}
      strokeWidth={1.25}
      aria-hidden
    />
  );
}

function RatingStars({ value }: { value: number }) {
  const full = Math.floor(value);
  const partial = value - full >= 0.5;
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: reviewsSummary.maxStars }, (_, i) => (
        <StarRow key={i} filled={i < full || (i === full && partial)} />
      ))}
    </div>
  );
}

export function CommissionsReviewsSection() {
  return (
    <section
      className="border-t border-ink/[0.06] bg-canvas"
      aria-labelledby="reviews-heading"
    >
      <div className="section-shell section-rhythm">
        <p className="eyebrow-label">Social Proof</p>
        <h2
          id="reviews-heading"
          className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl"
        >
          Reviews
        </h2>
        <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-muted">
          Sample layout — replace with real reviews when available.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-14">
          <div className="surface-card p-6 sm:p-7 lg:p-8 space-y-6">
            <div className="flex items-end gap-3">
              <span className="font-display text-4xl font-semibold text-ink">
                {reviewsSummary.averageLabel}
              </span>
              <span className="pb-1 font-sans text-sm text-muted">/ 5</span>
            </div>
            <RatingStars value={4.9} />
            <p className="font-sans text-xs text-muted">Overall rating (sample)</p>

            <div
              className="space-y-3 pt-6"
              aria-label="Sample star distribution"
            >
              {reviewsSummary.distribution.map((row) => (
                <div
                  key={row.stars}
                  className="grid grid-cols-[2.5rem_1fr] items-center gap-3"
                >
                  <span className="font-sans text-xs tabular-nums text-muted">
                    {row.stars}★
                  </span>
                  <div className="h-1.5 overflow-hidden rounded-full bg-ink/[0.06]">
                    <div
                      className="h-full rounded-full bg-sage/45 transition-all"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="surface-card divide-y divide-ink/[0.06] p-6 sm:p-7 lg:p-8">
            {reviewPlaceholders.map((rev) => (
              <li
                key={rev.id}
                className="py-8 first:pt-0 last:pb-0"
              >
                <blockquote className="font-sans text-base leading-relaxed text-ink/90">
                  “{rev.quote}”
                </blockquote>
                <p className="mt-4 font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {rev.attribution}
                </p>
                {rev.imageSlots > 0 ? (
                  <div className="mt-5 flex gap-2">
                    {Array.from({ length: rev.imageSlots }).map((_, i) => (
                      <div
                        key={i}
                        className="h-14 w-14 shrink-0 rounded-sm bg-ink/[0.05] ring-1 ring-ink/[0.06]"
                        aria-hidden
                      />
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
