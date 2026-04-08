/**
 * Reviews — TBD: replace quotes, attributions, imageSlots, and rating distribution
 * with real client review data when available.
 */
export const reviewsSummary = {
  averageLabel: "4.9",
  maxStars: 5,
  /** TBD: update distribution once real review data is available. */
  distribution: [
    { stars: 5, percent: 86 },
    { stars: 4, percent: 10 },
    { stars: 3, percent: 3 },
    { stars: 2, percent: 1 },
    { stars: 1, percent: 0 },
  ] as const,
} as const;

/** TBD: replace with real client review quotes, names, and portrait photo slots. */
export const reviewPlaceholders = [
  {
    id: "r1",
    quote: "Beautiful work and a thoughtful process from start to finish.",
    attribution: "Client — TBD",
    imageSlots: 0 as const,
  },
  {
    id: "r2",
    quote: "A meaningful portrait with great attention to detail.",
    attribution: "Client — TBD",
    imageSlots: 3 as const,
  },
] as const;
