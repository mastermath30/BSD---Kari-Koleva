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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm artwork-frame">
              <Image
                src={aboutPageImage.src}
                alt={aboutPageImage.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-1 space-y-7 lg:order-2"
          >
            <p className="eyebrow-label">The Artist</p>
            <h2
              id="about-heading"
              className="font-display text-3xl font-medium tracking-[0.07em] text-ink sm:text-4xl lg:text-[2.35rem]"
            >
              {homeCopy.meetTitle}
            </h2>
            <div className="space-y-5">
              {homeCopy.meetBody.split("\n\n").map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-base leading-[1.85] text-muted sm:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="pt-1">
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
