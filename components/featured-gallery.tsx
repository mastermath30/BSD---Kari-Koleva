"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredArtworks } from "@/lib/featured-art";

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
      className="scroll-mt-28 w-full pb-16 pt-10 sm:pb-20 sm:pt-12"
    >
      <h2 id="featured-heading" className="sr-only">
        Featured artwork
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <div
          ref={scrollerRef}
          tabIndex={0}
          role="region"
          aria-label="Featured artwork gallery. Scroll horizontally."
          className="featured-scroll flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        >
          <div
            className="shrink-0"
            style={{
              width: "max(1rem, min(12vw, calc(50vw - 11rem)))",
            }}
            aria-hidden
          />
          {featuredArtworks.map((artwork, i) => (
            <div
              key={artwork.id}
              ref={(node) => {
                itemElsRef.current[i] = node;
              }}
              className="snap-center shrink-0 px-2 sm:px-3"
            >
              <article
                className={`group relative origin-center transition-all duration-500 ease-out ${
                  focusedIndex === i
                    ? "scale-[1.045] opacity-100"
                    : "scale-100 opacity-[0.88]"
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-sm ring-1 transition-[box-shadow] duration-500 ease-out ${
                    focusedIndex === i
                      ? "shadow-[0_22px_55px_-14px_rgba(0,0,0,0.22)] ring-sage/25"
                      : "shadow-[0_12px_36px_-14px_rgba(0,0,0,0.14)] ring-ink/[0.08]"
                  }`}
                >
                  <div className="relative aspect-[4/5] w-[min(88vw,420px)] md:aspect-[3/4] md:w-[min(38vw,400px)] lg:w-[min(32vw,380px)]">
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 88vw, 34vw"
                      priority={i < 3}
                    />
                  </div>
                </div>
              </article>
            </div>
          ))}
          <div
            className="shrink-0"
            style={{
              width: "max(1rem, min(12vw, calc(50vw - 11rem)))",
            }}
            aria-hidden
          />
        </div>
      </motion.div>
    </section>
  );
}
