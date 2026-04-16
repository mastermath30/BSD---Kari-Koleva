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
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1280.webp",
    frameClass: "aspect-[3/5]",
  },
  {
    id: "p2",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1281.webp",
    frameClass: "aspect-square",
  },
  {
    id: "p3",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1282.webp",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p4",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1283.webp",
    frameClass: "aspect-[5/6]",
  },
  {
    id: "p5",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1284.webp",
    frameClass: "aspect-[2/3]",
  },
  {
    id: "p6",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1285.webp",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p7",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1288.webp",
    frameClass: "aspect-[4/6]",
  },
  {
    id: "p8",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1289.webp",
    frameClass: "aspect-square",
  },
  {
    id: "p9",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1290.webp",
    frameClass: "aspect-[3/5]",
  },
  {
    id: "p10",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1291.webp",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p11",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1294.webp",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p12",
    alt: "Animal portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/IMG_1295.webp",
    frameClass: "aspect-[2/3]",
  },
  {
    id: "p13",
    alt: "Dog portrait with Seattle skyline background by Kari Koleva",
    src: "https://assets.karikoleva.com/image6.webp",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p14",
    alt: "Dog portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/image7.webp",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p15",
    alt: "Dog portrait by Kari Koleva",
    src: "https://assets.karikoleva.com/image8.webp",
    frameClass: "aspect-[4/5]",
  },
];
