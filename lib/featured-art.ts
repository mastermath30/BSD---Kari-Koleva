/**
 * Homepage horizontal gallery — swap `src` and `alt` when you have final art assets.
 * Use paths under `/public` or full HTTPS URLs.
 */
export type FeaturedArtwork = {
  id: string;
  alt: string;
  src: string;
};

export const featuredArtworks: FeaturedArtwork[] = [
  {
    id: "1",
    alt: "Detailed dog portrait with soft natural lighting",
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "2",
    alt: "Cat portrait with expressive green eyes",
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "3",
    alt: "Horse portrait in golden afternoon light",
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "4",
    alt: "Bird portrait with detailed feather texture",
    src: "https://images.unsplash.com/photo-1552728089-a57bdd40f9c2?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "5",
    alt: "Rabbit portrait with soft fur and gentle expression",
    src: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "6",
    alt: "Dog portrait with loyal and gentle eyes",
    src: "https://images.unsplash.com/photo-1601758228041-f3b2793765d5?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: "7",
    alt: "Fox portrait in natural forest setting",
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=900&q=85&auto=format&fit=crop",
  },
];
