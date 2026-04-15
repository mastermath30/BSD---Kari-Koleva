"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { howToOrderSteps } from "@/lib/commissions-how-to-order";

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

export function CommissionsHowToOrder() {
  return (
    <section aria-labelledby="how-to-order-heading" className="section-shell section-rhythm-tight">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          id="how-to-order-heading"
          className="font-display text-3xl font-semibold tracking-[0.06em] text-ink sm:text-4xl"
        >
          How to order your pet portrait
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
      >
        {howToOrderSteps.map((step) => (
          <motion.div
            key={step.number}
            variants={cardVariant}
            className="surface-card surface-card-hover p-7 sm:p-8 lg:p-9 space-y-4"
          >
            <span className="font-display text-5xl font-semibold leading-none text-sage/35 tracking-[-0.02em]">
              {String(step.number).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl font-semibold tracking-[0.04em] text-ink sm:text-2xl">
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
              <p className="border-t border-ink/[0.06] pt-4 font-sans text-xs leading-relaxed text-ink/60 sm:text-sm italic">
                {step.note}
              </p>
            ) : null}
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 text-center">
        <Link href="/contact" className="button-primary">
          Order now
        </Link>
      </div>
    </section>
  );
}
