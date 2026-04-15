"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { priceTiers, priceListNote, priceListDate } from "@/lib/price-list";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PriceList() {
  return (
    <section
      aria-labelledby="price-list-heading"
      className="border-t border-ink/[0.06] bg-canvas"
    >
      <div className="section-shell section-rhythm-tight">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow-label">Pricing</p>
          <h2
            id="price-list-heading"
            className="mt-3 font-display text-3xl font-medium tracking-[0.06em] text-ink sm:text-4xl"
          >
            Price List
          </h2>
          <p className="mt-1.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted/60">
            {priceListDate}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {priceTiers.map((tier) => (
            <motion.div
              key={tier.size}
              variants={cardVariant}
              className="surface-card surface-card-hover p-7 sm:p-8 space-y-5"
            >
              <h3 className="font-display text-2xl font-medium tracking-[0.05em] text-ink">
                {tier.size}
              </h3>

              <ul className="space-y-2.5 border-b border-ink/[0.07] pb-5">
                {tier.subjects.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-baseline justify-between gap-3 font-sans text-sm text-ink"
                  >
                    <span>{s.label}</span>
                    <span className="font-semibold tabular-nums">{s.price}</span>
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
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 font-sans text-sm text-muted/80">{priceListNote}</p>

        <div className="mt-10 text-center">
          <Link href="/contact" className="button-primary">
            Order now
          </Link>
        </div>
      </div>
    </section>
  );
}
