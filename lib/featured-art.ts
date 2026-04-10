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
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1280.jpeg",
  },
  {
    id: "2",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1282.jpeg",
  },
  {
    id: "3",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1284.jpeg",
  },
  {
    id: "4",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1285.jpeg",
  },
  {
    id: "5",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1288.jpeg",
  },
  {
    id: "6",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1291.jpeg",
  },
  {
    id: "7",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1295.jpeg",
  },
];
