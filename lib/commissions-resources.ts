/**
 * Resource panels on /commissions — set `href` to a PDF or page when available.
 */
export type CommissionResource = {
  id: string;
  title: string;
  description: string;
  /** Replace with `/files/price-sheet.pdf` or similar when ready. */
  href: string;
};

export const commissionResources: CommissionResource[] = [
  {
    id: "price-sheet",
    title: "Price Sheet",
    description: "Overview of commission tiers and what to expect.",
    href: "#",
  },
  {
    id: "photo-guide",
    title: "Photo Guide",
    description: "Tips for clear reference photos that support the best portrait.",
    href: "#",
  },
];
