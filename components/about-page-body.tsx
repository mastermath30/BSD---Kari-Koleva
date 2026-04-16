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
          <h2 className="font-display text-3xl font-medium tracking-[0.07em] text-ink sm:text-4xl lg:text-[2.35rem]">
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
          <div className="w-full overflow-hidden rounded-sm artwork-frame">
            <Image
              src={aboutPageImage.src}
              alt={aboutPageImage.alt}
              width={0}
              height={0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              priority
              className="w-full h-auto transition-transform duration-700 ease-out hover:scale-[1.02]"
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
        <h3 className="font-display text-2xl font-medium tracking-[0.06em] text-ink sm:text-3xl">
          {aboutPageCopy.howItStartedTitle}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-5 lg:col-span-3">
            {aboutPageCopy.howItStarted.map((para, i) => (
              <p key={i} className="font-sans text-base leading-[1.85] text-muted">
                {para}
              </p>
            ))}
          </div>

          {aboutPageSubPhotos.alexPainting.src ? (
            <div className="w-full overflow-hidden rounded-sm artwork-frame lg:col-span-2">
              <Image
                src={aboutPageSubPhotos.alexPainting.src}
                alt={aboutPageSubPhotos.alexPainting.alt}
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="w-full rounded-sm bg-ink/[0.04] flex items-center justify-center p-10 lg:col-span-2">
              <span className="font-sans text-xs text-muted/70 text-center">
                {aboutPageSubPhotos.alexPainting.alt}
              </span>
            </div>
          )}
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
        <h3 className="font-display text-2xl font-medium tracking-[0.06em] text-ink sm:text-3xl">
          {aboutPageCopy.lifeWithAnimalsTitle}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          {aboutPageSubPhotos.babyPhoto.src ? (
            <div className="w-full overflow-hidden rounded-sm artwork-frame lg:col-span-2">
              <Image
                src={aboutPageSubPhotos.babyPhoto.src}
                alt={aboutPageSubPhotos.babyPhoto.alt}
                width={0}
                height={0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                className="w-full h-auto"
              />
            </div>
          ) : (
            <div className="w-full rounded-sm bg-ink/[0.04] flex items-center justify-center p-10 lg:col-span-2">
              <span className="font-sans text-xs text-muted/70 text-center">
                {aboutPageSubPhotos.babyPhoto.alt}
              </span>
            </div>
          )}

          <div className="space-y-5 lg:col-span-3">
            {aboutPageCopy.lifeWithAnimals.map((para, i) => (
              <p key={i} className="font-sans text-base leading-[1.85] text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>

        {aboutPageSubPhotos.meAndAlex.src ? (
          <div className="mt-10 w-full overflow-hidden rounded-sm artwork-frame">
            <Image
              src={aboutPageSubPhotos.meAndAlex.src}
              alt={aboutPageSubPhotos.meAndAlex.alt}
              width={0}
              height={0}
              sizes="100vw"
              unoptimized
              className="w-full h-auto"
            />
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
