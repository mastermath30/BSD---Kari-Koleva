"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  reviewPlaceholders,
  reviewsSummary,
} from "@/lib/commissions-reviews-data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function StarRow({ filled }: { filled: boolean }) {
  return (
    <Star
      className={`h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] ${
        filled ? "fill-sage/90 text-sage" : "fill-sage/20 text-sage/30"
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow-label">Client Reviews</p>
          <h2
            id="reviews-heading"
            className="mt-3 font-display text-3xl font-semibold tracking-[0.06em] text-ink sm:text-4xl"
          >
            What clients say
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-14"
        >
          {/* Rating summary card */}
          <motion.div
            variants={itemVariant}
            className="surface-card p-6 sm:p-7 lg:p-8 space-y-6"
          >
            <div className="flex items-end gap-3">
              <span className="font-display text-5xl font-semibold tracking-[-0.02em] text-ink">
                {reviewsSummary.averageLabel}
              </span>
              <span className="pb-1.5 font-sans text-sm text-muted">/ 5</span>
            </div>
            <RatingStars value={4.9} />
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.18em] text-muted/70">
              Overall rating
            </p>

            <div className="space-y-3 border-t border-ink/[0.06] pt-6" aria-label="Sample star distribution">
              {reviewsSummary.distribution.map((row) => (
                <div
                  key={row.stars}
                  className="grid grid-cols-[2.5rem_1fr] items-center gap-3"
                >
                  <span className="font-sans text-xs tabular-nums text-muted">
                    {row.stars}★
                  </span>
                  <div className="h-1 overflow-hidden rounded-full bg-ink/[0.06]">
                    <div
                      className="h-full rounded-full bg-sage/50 transition-all duration-700"
                      style={{ width: `${row.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Review cards */}
          <motion.ul
            variants={containerVariants}
            className="surface-card divide-y divide-ink/[0.05] p-6 sm:p-7 lg:p-8"
          >
            {reviewPlaceholders.map((rev) => (
              <motion.li
                key={rev.id}
                variants={itemVariant}
                className="py-9 first:pt-0 last:pb-0"
              >
                {/* Pull-quote in display font */}
                <blockquote className="font-display text-lg font-medium italic leading-[1.7] tracking-[0.02em] text-ink/85 sm:text-xl">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted/70">
                  {rev.attribution}
                </p>
                {rev.imageSlots > 0 ? (
                  <div className="mt-5 flex gap-2">
                    {Array.from({ length: rev.imageSlots }).map((_, i) => (
                      <div
                        key={i}
                        className="h-14 w-14 shrink-0 rounded-sm bg-ink/[0.04] ring-1 ring-ink/[0.06]"
                        aria-hidden
                      />
                    ))}
                  </div>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
