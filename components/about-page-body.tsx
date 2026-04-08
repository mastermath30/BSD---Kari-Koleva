"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutPageCopy, aboutPageImage, aboutPageSubPhotos } from "@/lib/about-page-copy";

export function AboutPageBody() {
  return (
    <div className="section-shell section-rhythm space-y-16 sm:space-y-20 lg:space-y-24">
      {/* ── Main bio ── */}
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="order-1 max-w-xl space-y-6 lg:order-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <p className="eyebrow-label">About the Artist</p>
          <h2 className="font-display text-3xl font-semibold tracking-[0.04em] text-ink sm:text-4xl">
            {aboutPageCopy.heading}
          </h2>
          <div className="space-y-4">
            {aboutPageCopy.bio.map((para, i) => (
              <p key={i} className="copy-readable sm:text-lg">
                {para}
              </p>
            ))}
          </div>
          <div className="border-t border-ink/10 pt-6">
            <Link href="/contact" className="button-primary">
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

      {/* ── How it all started ── */}
      <motion.div
        className="border-t border-ink/[0.07] pt-12 sm:pt-16 lg:pt-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow-label">Origin Story</p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl">
          {aboutPageCopy.howItStartedTitle}
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-4">
            {aboutPageCopy.howItStarted.map((para, i) => (
              <p key={i} className="copy-readable">
                {para}
              </p>
            ))}
          </div>

          {/* TBD: original Alex painting(s) photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink/[0.04] ring-1 ring-ink/10 flex items-center justify-center">
            {aboutPageSubPhotos.alexPainting.src ? (
              <Image
                src={aboutPageSubPhotos.alexPainting.src}
                alt={aboutPageSubPhotos.alexPainting.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <span className="font-sans text-xs text-muted/70 px-6 text-center">
                {aboutPageSubPhotos.alexPainting.alt}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── Life with animals ── */}
      <motion.div
        className="border-t border-ink/[0.07] pt-12 sm:pt-16 lg:pt-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow-label">Animals &amp; Life</p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-[0.04em] text-ink sm:text-3xl">
          {aboutPageCopy.lifeWithAnimalsTitle}
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* TBD: baby/childhood photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink/[0.04] ring-1 ring-ink/10 flex items-center justify-center">
            {aboutPageSubPhotos.babyPhoto.src ? (
              <Image
                src={aboutPageSubPhotos.babyPhoto.src}
                alt={aboutPageSubPhotos.babyPhoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <span className="font-sans text-xs text-muted/70 px-6 text-center">
                {aboutPageSubPhotos.babyPhoto.alt}
              </span>
            )}
          </div>

          <div className="space-y-4">
            {aboutPageCopy.lifeWithAnimals.map((para, i) => (
              <p key={i} className="copy-readable">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* TBD: me and Alex photo */}
        <div className="mt-8 relative aspect-[16/7] w-full overflow-hidden rounded-sm bg-ink/[0.04] ring-1 ring-ink/10 flex items-center justify-center">
          {aboutPageSubPhotos.meAndAlex.src ? (
            <Image
              src={aboutPageSubPhotos.meAndAlex.src}
              alt={aboutPageSubPhotos.meAndAlex.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <span className="font-sans text-xs text-muted/70 px-6 text-center">
              {aboutPageSubPhotos.meAndAlex.alt}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
