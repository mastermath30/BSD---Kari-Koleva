"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeCopy } from "@/lib/copy";
import { aboutPageImage } from "@/lib/about-page-copy";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-28 border-t border-ink/[0.06] bg-canvas"
    >
      <div className="section-shell section-rhythm">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-[0_18px_40px_-22px_rgba(17,24,39,0.28)] ring-1 ring-ink/10">
              <Image
                src={aboutPageImage.src}
                alt={aboutPageImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="order-1 space-y-6 lg:order-2"
          >
            <p className="eyebrow-label">The Artist</p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold tracking-[0.06em] text-ink sm:text-4xl"
            >
              {homeCopy.meetTitle}
            </h2>
            <div className="space-y-4">
              {homeCopy.meetBody.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base leading-relaxed text-muted sm:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="pt-2">
              <Link href={homeCopy.meetCTAHref} className="button-primary">
                {homeCopy.meetCTALabel}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
