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
    src: "https://assets.karikoleva.com/IMG_1280.webp",
  },
  {
    id: "2",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1282.webp",
  },
  {
    id: "3",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1284.webp",
  },
  {
    id: "4",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1285.webp",
  },
  {
    id: "5",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1288.webp",
  },
  {
    id: "6",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1291.webp",
  },
  {
    id: "7",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1295.webp",
  },
];
