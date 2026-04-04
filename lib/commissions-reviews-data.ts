/**
 * Static placeholder reviews UI — replace with real content or a reviews widget later.
 */
export const reviewsSummary = {
  averageLabel: "4.9",
  maxStars: 5,
  /** Placeholder distribution (percent of reviews per star level, 5 → 1). */
  distribution: [
    { stars: 5, percent: 86 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ] as const,
} as const;

export const reviewPlaceholders = [
  {
    id: "r1",
    quote: "Beautiful work and a thoughtful process from start to finish.",
    attribution: "Client",
    imageSlots: 0 as const,
  },
  {
    id: "r2",
    quote: "A meaningful portrait with great attention to detail.",
    attribution: "Collector",
    imageSlots: 3 as const,
  },
] as const;
