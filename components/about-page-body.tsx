"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { aboutPageCopy, aboutPageImage, aboutPageSubPhotos } from "@/lib/about-page-copy";

export function AboutPageBody() {
  return (
    <div className="section-shell section-rhythm space-y-16 sm:space-y-20 lg:space-y-28">
      {/* ── Main bio ── */}
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          className="order-1 max-w-xl space-y-7 lg:order-none"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        >
          <p className="eyebrow-label">About the Artist</p>
          <h2 className="font-display text-3xl font-semibold tracking-[0.07em] text-ink sm:text-4xl lg:text-[2.35rem]">
            {aboutPageCopy.heading}
          </h2>
          <div className="space-y-5">
            {aboutPageCopy.bio.map((para, i) => (
              <p key={i} className="font-sans text-base leading-[1.85] text-muted sm:text-lg">
                {para}
              </p>
            ))}
          </div>
          <div className="border-t border-ink/[0.07] pt-7">
            <Link href="/contact" className="button-primary">
              {aboutPageCopy.contactButtonLabel}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="order-2 lg:order-none"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm artwork-frame">
            <Image
              src={aboutPageImage.src}
              alt={aboutPageImage.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* ── How it all started ── */}
      <motion.div
        className="border-t border-ink/[0.07] pt-14 sm:pt-16 lg:pt-20"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-display text-2xl font-semibold tracking-[0.06em] text-ink sm:text-3xl">
          {aboutPageCopy.howItStartedTitle}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            {aboutPageCopy.howItStarted.map((para, i) => (
              <p key={i} className="font-sans text-base leading-[1.85] text-muted">
                {para}
              </p>
            ))}
          </div>

          {/* TBD: original Alex painting(s) photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink/[0.04] artwork-frame flex items-center justify-center">
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
        className="border-t border-ink/[0.07] pt-14 sm:pt-16 lg:pt-20"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <h3 className="font-display text-2xl font-semibold tracking-[0.06em] text-ink sm:text-3xl">
          {aboutPageCopy.lifeWithAnimalsTitle}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* TBD: baby/childhood photo */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-ink/[0.04] artwork-frame flex items-center justify-center">
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

          <div className="space-y-5">
            {aboutPageCopy.lifeWithAnimals.map((para, i) => (
              <p key={i} className="font-sans text-base leading-[1.85] text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* TBD: me and Alex photo */}
        <div className="mt-10 relative aspect-[16/7] w-full overflow-hidden rounded-sm bg-ink/[0.04] artwork-frame flex items-center justify-center">
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
