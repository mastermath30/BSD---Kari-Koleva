"use client";

import { motion } from "framer-motion";

export function PageTitleBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-ink/[0.06] bg-titleBand"
    >
      <div className="mx-auto max-w-6xl px-5 py-9 text-center sm:px-8 sm:py-11 lg:px-10">
        <h1 className="font-display text-3xl font-semibold tracking-[0.08em] text-ink sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
