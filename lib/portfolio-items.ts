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
    alt: "Detailed dog portrait with soft lighting",
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[3/5]",
  },
  {
    id: "p2",
    alt: "Cat portrait with expressive eyes",
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-square",
  },
  {
    id: "p3",
    alt: "Horse portrait in natural light",
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p4",
    alt: "Bird portrait with detailed feathers",
    src: "https://images.unsplash.com/photo-1552728089-a57bdd40f9c2?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[5/6]",
  },
  {
    id: "p5",
    alt: "Rabbit portrait with soft fur texture",
    src: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[2/3]",
  },
  {
    id: "p6",
    alt: "Dog portrait with loyal expression",
    src: "https://images.unsplash.com/photo-1601758228041-f3b2793765d5?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p7",
    alt: "Fox portrait in natural setting",
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[4/6]",
  },
  {
    id: "p8",
    alt: "Cat portrait with elegant pose",
    src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-square",
  },
  {
    id: "p9",
    alt: "Dog portrait with gentle expression",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&q=85&auto=format&fit=crop",
    frameClass: "aspect-[3/5]",
  },
];
