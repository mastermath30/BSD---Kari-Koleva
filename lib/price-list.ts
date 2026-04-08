/**
 * Commission price list — April 2026.
 * Update prices and tiers here; rendered by PriceList component.
 */
export type PriceTier = {
  size: string;
  subjects: { label: string; price: string }[];
  addons: { label: string; price: string }[];
};

export const priceTiers: PriceTier[] = [
  {
    size: '5" × 7"',
    subjects: [{ label: "1 Subject", price: "$200" }],
    addons: [
      { label: "Detailed Background / Accessories", price: "+$30" },
      { label: "Frame", price: "+$15" },
    ],
  },
  {
    size: '8" × 10"',
    subjects: [
      { label: "1 Subject", price: "$300" },
      { label: "2 Subjects", price: "$390" },
    ],
    addons: [
      { label: "Detailed Background / Accessories", price: "+$70" },
      { label: "Frame", price: "+$20" },
    ],
  },
  {
    size: '13" × 19"',
    subjects: [
      { label: "1 Subject", price: "$450" },
      { label: "2 Subjects", price: "$580" },
      { label: "3 Subjects", price: "$650" },
    ],
    addons: [
      { label: "Detailed Background / Accessories", price: "+$100" },
      { label: "Frame", price: "+$40" },
    ],
  },
];

export const priceListNote =
  "Other sizes available on request.";

export const priceListDate = "April 2026";
