"use client";

import { motion } from "framer-motion";
import { homeCopy } from "@/lib/copy";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 border-t border-ink/[0.06] bg-canvas"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-copy px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10"
      >
        <p className="eyebrow-label">Studio Practice</p>
        <h2
          id="about-heading"
          className="mt-2 font-display text-4xl font-semibold uppercase tracking-[0.14em] text-ink sm:text-5xl"
        >
          {homeCopy.sectionTitle}
        </h2>
        <p className="mt-7 font-sans text-base leading-relaxed text-muted sm:text-lg">
          {homeCopy.sectionBody}
        </p>
      </motion.div>
    </section>
  );
}
