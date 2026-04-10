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
    src: "/IMG_1280.jpeg",
    frameClass: "aspect-[3/5]",
  },
  {
    id: "p2",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1281.jpeg",
    frameClass: "aspect-square",
  },
  {
    id: "p3",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1282.jpeg",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p4",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1283.jpeg",
    frameClass: "aspect-[5/6]",
  },
  {
    id: "p5",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1284.jpeg",
    frameClass: "aspect-[2/3]",
  },
  {
    id: "p6",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1285.jpeg",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p7",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1288.jpeg",
    frameClass: "aspect-[4/6]",
  },
  {
    id: "p8",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1289.jpeg",
    frameClass: "aspect-square",
  },
  {
    id: "p9",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1290.jpeg",
    frameClass: "aspect-[3/5]",
  },
  {
    id: "p10",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1291.jpeg",
    frameClass: "aspect-[4/5]",
  },
  {
    id: "p11",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1294.jpeg",
    frameClass: "aspect-[3/4]",
  },
  {
    id: "p12",
    alt: "Animal portrait by Kari Koleva",
    src: "/IMG_1295.jpeg",
    frameClass: "aspect-[2/3]",
  },
];
