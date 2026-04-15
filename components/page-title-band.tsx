"use client";

import { motion } from "framer-motion";

const titleVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const titleItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PageTitleBand({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-ink/[0.07] bg-titleBand">
      {/* Ambient depth gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 180% at 50% 120%, rgba(90,99,85,0.06) 0%, transparent 65%)",
        }}
      />

      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="section-shell relative py-12 text-center xs:py-14 sm:py-16 lg:py-20 2xl:py-24"
      >
        <motion.h1
          variants={titleItem}
          className="font-display text-2xl font-medium tracking-[0.1em] text-ink xs:text-3xl sm:text-[2rem] lg:text-[2.5rem] 2xl:text-[2.75rem]"
        >
          {title}
        </motion.h1>

        {subtitle ? (
          <motion.p
            variants={titleItem}
            className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-[1.85] text-muted sm:text-base"
          >
            {subtitle}
          </motion.p>
        ) : null}
      </motion.div>

      {/* Gradient sweep into page — blends title band into canvas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />
    </div>
  );
}
