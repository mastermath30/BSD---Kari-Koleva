"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutPageCopy, aboutPageImage } from "@/lib/about-page-copy";

export function AboutPageBody() {
  return (
    <section className="section-shell section-rhythm">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-1 max-w-xl space-y-7 lg:order-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <p className="eyebrow-label">About the Artist</p>
          <h2 className="font-display text-3xl font-semibold tracking-[0.04em] text-ink sm:text-4xl">
            {aboutPageCopy.heading}
          </h2>
          <p className="copy-readable sm:text-lg">
            {aboutPageCopy.body}
          </p>
          <div className="border-t border-ink/10 pt-7">
            <Link
              href="/contact"
              className="button-primary"
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
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-[0_18px_40px_-22px_rgba(17,24,39,0.32)] ring-1 ring-ink/12">
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
