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
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-ink/[0.08] bg-titleBand"
    >
      <div className="section-shell py-9 text-center xs:py-11 sm:py-12 lg:py-14 2xl:py-16">
        <h1 className="font-display text-2xl font-semibold tracking-[0.07em] text-ink xs:text-2.5xl sm:text-3xl lg:text-[2.2rem] 2xl:text-[2.45rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3.5 max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
