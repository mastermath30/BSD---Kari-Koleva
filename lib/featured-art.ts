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
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=900&q=80",
  },
  {
    id: "2",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=960&q=80",
  },
  {
    id: "3",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900&q=80",
  },
  {
    id: "4",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&q=80",
  },
  {
    id: "5",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=900&q=80",
  },
  {
    id: "6",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=900&q=80",
  },
  {
    id: "7",
    alt: "Animal portrait artwork",
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&q=80",
  },
];
