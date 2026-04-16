/**
 * Customization options for commissions page.
 * TBD: frame photos and detailed frame pricing.
 * TBD: background option photos (plain + detailed background examples).
 */

export const whatsIncluded = [
  "Plain color background of your choosing",
  "Free US shipping",
];

export type AdjustmentOption = {
  title: string;
  description: string;
};

export const adjustmentOptions: AdjustmentOption[] = [
  {
    title: "Appearance adjustments",
    description:
      "Remove small scratches, wounds, or marks, and make eyes more visible if fur covers them.",
  },
  {
    title: "Objects & accessories",
    description:
      "Remove collars, harnesses, or objects that cover your pet, such as toys, pillows, or blankets.",
  },
  {
    title: "Special requests",
    description:
      "Have something specific in mind? Many adjustments are possible. If something involves extra work or costs, I'll always discuss this with you first.",
  },
];

export const adjustmentsNote =
  "Small adjustments can be included in your commission at no extra cost, as long as they are visible in the reference photo. Let me know in the commission form if you'd like any of these applied.";

/**
 * Frame options — TBD.
 * Replace this placeholder once frame photos and pricing are confirmed.
 */
export const frameOptionsNote =
  "Frame options and pricing are coming soon. Please inquire when placing your order.";

export const backgroundOptionsDescription =
  "Each portrait includes a plain background color of your choice to keep the focus on your pet. If you'd like to add accessories or a more detailed background — such as a landscape or specific setting — this can be included for an additional cost.";

export const backgroundPhotos = {
  plain: [
    {
      src: "https://assets.karikoleva.com/image8.webp",
      alt: "Portrait with plain background",
      aspectRatio: 0.793,
    },
    {
      src: "https://assets.karikoleva.com/IMG_2566.webp",
      alt: "Portrait with plain background",
      aspectRatio: 0.711,
    },
  ],
  detailed: [
    {
      src: "https://assets.karikoleva.com/image6.webp",
      alt: "Portrait with detailed background",
      aspectRatio: 0.762,
    },
    {
      // landscape — trimmed ~5% each side, effective ratio 1.305 * 0.90 = 1.175
      src: "https://assets.karikoleva.com/image7.webp",
      alt: "Portrait with detailed background",
      aspectRatio: 1.175,
      objectPosition: "center",
    },
  ],
};
