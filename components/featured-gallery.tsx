"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredArtworks } from "@/lib/featured-art";
import { homeCopy } from "@/lib/copy";

export function FeaturedGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemElsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const updateFocused = useCallback(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const r = root.getBoundingClientRect();
    const mid = r.left + r.width / 2;
    let best = 0;
    let bestDist = Infinity;
    itemElsRef.current.forEach((el, i) => {
      if (!el) return;
      const er = el.getBoundingClientRect();
      const c = er.left + er.width / 2;
      const d = Math.abs(c - mid);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setFocusedIndex(best);
  }, []);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    updateFocused();
    root.addEventListener("scroll", updateFocused, { passive: true });
    window.addEventListener("resize", updateFocused);
    return () => {
      root.removeEventListener("scroll", updateFocused);
      window.removeEventListener("resize", updateFocused);
    };
  }, [updateFocused]);

  /** Vertical wheel → horizontal scroll; must be non-passive so preventDefault works. */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-heading"
      className="scroll-mt-28 border-b border-ink/[0.05] bg-canvas"
    >
      <div className="section-shell section-rhythm-tight">
        <div className="mb-6 text-center sm:mb-10">
          <p className="eyebrow-label">Animal Portraits</p>
          <h1
            id="featured-heading"
            className="mt-3 font-display text-4xl font-semibold tracking-[0.06em] text-ink sm:text-5xl lg:text-6xl"
          >
            {homeCopy.heroTitle}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
            {homeCopy.heroSubtitle}
          </p>
          <div className="mt-7">
            <Link
              href={homeCopy.heroCTAHref}
              className="button-primary"
            >
              {homeCopy.heroCTALabel}
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative left-1/2 w-screen -translate-x-1/2"
        >
          <div
            ref={scrollerRef}
            tabIndex={0}
            role="region"
            aria-label="Featured artwork gallery. Scroll horizontally."
            className="featured-scroll flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth px-1 pb-4 xs:px-1.5 sm:px-2 lg:px-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {featuredArtworks.map((artwork, i) => (
              <div
                key={artwork.id}
                ref={(node) => {
                  itemElsRef.current[i] = node;
                }}
                className="snap-center shrink-0 px-1 xs:px-1.5 sm:px-2 lg:px-2.5"
              >
                <article
                  className={`group relative origin-center transition-all duration-700 ease-out ${
                    focusedIndex === i
                      ? "scale-[1.035] opacity-100"
                      : "scale-[0.99] opacity-[0.88]"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-sm ring-1 transition-all duration-700 ease-out ${
                      focusedIndex === i
                        ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] ring-sage/30"
                        : "shadow-[0_15px_40px_-12px_rgba(0,0,0,0.12)] ring-ink/[0.06]"
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/5] w-[min(90vw,420px)] xs:w-[min(88vw,420px)] md:aspect-[3/4] md:w-[min(42vw,400px)] lg:w-[min(33vw,380px)] 2xl:w-[min(31vw,360px)]`}
                    >
                      <Image
                        src={artwork.src}
                        alt={artwork.alt}
                        fill
                        className="object-cover transition-all duration-800 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 92vw, 35vw"
                        priority={i < 3}
                        quality={95}
                      />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
