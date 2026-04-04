/**
 * Portfolio grid items — swap `src` and `alt` when adding final artwork.
 * `frameClass` sets aspect ratio / min height for a curated, uneven gallery rhythm.
 */
export type PortfolioItem = {
  id: string;
  alt: string;
  src: string;
  frameClass: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=80",
    frameClass: "aspect-[3/5]",
  },
  {
    id: "p2",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80",
    frameClass: "aspect-square",
  },
  {
    id: "p3",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p4",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80",
    frameClass: "aspect-[5/6]",
  },
  {
    id: "p5",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=80",
    frameClass: "aspect-[2/3]",
  },
  {
    id: "p6",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p7",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
    frameClass: "aspect-[4/6]",
  },
  {
    id: "p8",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80",
    frameClass: "aspect-square",
  },
  {
    id: "p9",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=800&q=80",
    frameClass: "aspect-[3/5]",
  },
];
