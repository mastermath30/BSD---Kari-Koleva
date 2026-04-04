"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutPageCopy, aboutPageImage } from "@/lib/about-page-copy";

export function AboutPageBody() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          className="order-1 max-w-xl space-y-8 lg:order-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-wide text-ink sm:text-4xl">
            {aboutPageCopy.heading}
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted sm:text-lg">
            {aboutPageCopy.body}
          </p>
          <div className="border-t border-ink/10 pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-sage bg-sage px-8 py-3 font-sans text-sm font-medium tracking-wide text-canvas transition-colors duration-300 hover:border-sage-deep hover:bg-sage-deep"
            >
              {aboutPageCopy.contactButtonLabel}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="order-2 lg:order-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-md ring-1 ring-ink/10">
            <Image
              src={aboutPageImage.src}
              alt={aboutPageImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
