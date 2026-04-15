"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredArtworks } from "@/lib/featured-art";
import { homeCopy } from "@/lib/copy";

// Triple the items so we can silently reposition to the middle set for seamless looping
const n = featuredArtworks.length;
const extendedArtworks = [
  ...featuredArtworks,
  ...featuredArtworks,
  ...featuredArtworks,
];

const heroVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const galleryVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
};

const galleryItemVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function FeaturedGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemElsRef = useRef<(HTMLDivElement | null)[]>([]);
  // Start focused on the first item of the middle set
  const [focusedIndex, setFocusedIndex] = useState(n);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const repositionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Logical index (0 to n-1) used for visual state and dots
  const activeIndex = (hoveredIndex ?? focusedIndex) % n;

  const scrollToIndex = useCallback((i: number, behavior: ScrollBehavior = "smooth") => {
    const el = itemElsRef.current[i];
    if (!el) return;
    el.scrollIntoView({ behavior, block: "nearest", inline: "center" });
  }, []);

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

    // After scroll settles, silently jump to the middle-set equivalent so
    // there's always room to scroll in both directions
    if (repositionTimer.current) clearTimeout(repositionTimer.current);
    repositionTimer.current = setTimeout(() => {
      if (best < n) {
        const target = best + n;
        itemElsRef.current[target]?.scrollIntoView({ behavior: "instant", block: "nearest", inline: "center" });
        setFocusedIndex(target);
      } else if (best >= 2 * n) {
        const target = best - n;
        itemElsRef.current[target]?.scrollIntoView({ behavior: "instant", block: "nearest", inline: "center" });
        setFocusedIndex(target);
      }
    }, 150);
  }, []);

  // Initialize scroll position to the middle set on mount
  useEffect(() => {
    scrollToIndex(n, "instant");
  }, [scrollToIndex]);

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

  // Dynamically set paddingInline so every item can snap to center
  useEffect(() => {
    const root = scrollerRef.current;
    const firstItem = itemElsRef.current[0];
    if (!root || !firstItem) return;
    const update = () => {
      const pad = Math.max(0, (root.clientWidth - firstItem.clientWidth) / 2);
      root.style.paddingInline = `${pad}px`;
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(root);
    return () => ro.disconnect();
  }, []);

  // No wrap-around logic needed — we just step ±1 and the reposition
  // timer handles restoring the middle-set position seamlessly
  const scrollPrev = useCallback(() => {
    scrollToIndex(focusedIndex - 1);
  }, [focusedIndex, scrollToIndex]);

  const scrollNext = useCallback(() => {
    scrollToIndex(focusedIndex + 1);
  }, [focusedIndex, scrollToIndex]);

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-heading"
      className="scroll-mt-28 border-b border-ink/[0.05] bg-canvas"
    >
      {/* Subtle ambient depth behind hero copy */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(90,99,85,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="section-shell section-rhythm-tight">
          {/* ── Hero copy block ── */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="mb-10 text-center sm:mb-14"
          >
            <motion.p variants={heroItem} className="eyebrow-label">
              Animal Portraits
            </motion.p>

            <motion.h1
              id="featured-heading"
              variants={heroItem}
              className="mt-4 font-display text-4xl font-semibold tracking-[0.07em] text-ink sm:text-5xl lg:text-[3.75rem] 2xl:text-[4.25rem]"
            >
              {homeCopy.heroTitle}
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-6 max-w-xl font-sans text-sm leading-[1.85] text-muted sm:text-base"
            >
              {homeCopy.heroSubtitle}
            </motion.p>

            <motion.div variants={heroItem} className="mt-8">
              <Link href={homeCopy.heroCTAHref} className="button-primary">
                {homeCopy.heroCTALabel}
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Gallery strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative left-1/2 w-screen -translate-x-1/2"
          >
            {/* Prev / Next buttons */}
            <button
              onClick={scrollPrev}
              aria-label="Previous artwork"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/80 shadow-md ring-1 ring-ink/10 backdrop-blur-sm transition-all duration-200 hover:bg-canvas hover:shadow-lg hover:ring-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 sm:left-5 sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-4 w-4 text-ink sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next artwork"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-canvas/80 shadow-md ring-1 ring-ink/10 backdrop-blur-sm transition-all duration-200 hover:bg-canvas hover:shadow-lg hover:ring-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 sm:right-5 sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-4 w-4 text-ink sm:h-5 sm:w-5" />
            </button>

            {/* Edge-fade affordance */}
            <div className="gallery-edge-fade">
              <motion.div
                variants={galleryVariants}
                initial="hidden"
                animate="visible"
                ref={scrollerRef as React.RefObject<HTMLDivElement>}
                tabIndex={0}
                role="region"
                aria-label="Featured artwork gallery. Scroll horizontally."
                className="featured-scroll flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth pb-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {extendedArtworks.map((artwork, i) => (
                  <motion.div
                    key={`${artwork.id}-${Math.floor(i / n)}`}
                    variants={galleryItemVariant}
                    ref={(node) => {
                      itemElsRef.current[i] = node;
                    }}
                    className="snap-center shrink-0 px-1.5 xs:px-2 sm:px-2.5 lg:px-3"
                    onMouseEnter={() => setHoveredIndex(i % n)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <article
                      className={`group relative origin-center transition-all duration-700 ease-out ${
                        activeIndex === i % n
                          ? "scale-[1.045] opacity-100"
                          : "scale-[0.96] opacity-[0.72]"
                      }`}
                    >
                      <div
                        className={`relative overflow-hidden rounded-sm transition-all duration-700 ease-out ${
                          activeIndex === i % n
                            ? "shadow-[0_30px_70px_-18px_rgba(0,0,0,0.32),0_4px_16px_-6px_rgba(0,0,0,0.12)] ring-1 ring-sage/35"
                            : "shadow-[0_12px_32px_-10px_rgba(0,0,0,0.14)] ring-1 ring-ink/[0.05]"
                        }`}
                      >
                        <div className="relative aspect-[4/5] w-[min(86vw,400px)] xs:w-[min(84vw,400px)] md:aspect-[3/4] md:w-[min(42vw,380px)] lg:w-[min(32vw,360px)] 2xl:w-[min(30vw,345px)]">
                          <Image
                            src={artwork.src}
                            alt={artwork.alt}
                            fill
                            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                            sizes="(max-width: 768px) 88vw, 36vw"
                            priority={i >= n && i < n + 3}
                            unoptimized
                          />
                        </div>
                      </div>
                    </article>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Scroll indicator dots — always n dots, keyed to logical index */}
            <div
              role="tablist"
              aria-label="Gallery position"
              className="mt-5 flex items-center justify-center gap-2 pb-2"
            >
              {featuredArtworks.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-label={`View artwork ${i + 1}`}
                  onClick={() => scrollToIndex(n + i)}
                  className={`rounded-full transition-all duration-400 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                    activeIndex === i
                      ? "h-1.5 w-6 bg-sage"
                      : "h-1.5 w-1.5 bg-ink/20 hover:bg-ink/35"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
