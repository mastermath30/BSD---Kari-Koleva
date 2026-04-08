/** How to Order steps for the commissions page. */
export type OrderStep = {
  number: number;
  title: string;
  body: string[];
  /** Optional inline note rendered as a smaller paragraph inside the step card. */
  note?: string;
};

export const howToOrderSteps: OrderStep[] = [
  {
    number: 1,
    title: "Request your commission",
    body: [
      "Fill in the contact form with all the photos you'd like me to consider. I'll get in touch to discuss details: confirm the best photo for the painting, the price, and the expected timeframe.",
      "Need help picking the right photo? Check the Photo Tips guide below.",
    ],
    note: "If your portrait is for a birthday or special occasion, please let me know in advance so I can do my best to meet your timeline.",
  },
  {
    number: 2,
    title: "Painting process",
    body: [
      "When it's time to start your commission, I'll contact you with the expected start and completion dates. I will begin your painting and you'll receive a photo for approval once it's finished. Adjustments can be made at this stage if needed.",
      "The full process can take weeks to months to complete.",
    ],
    note: "Once we agree, a non-refundable deposit of $40 secures your spot on my commission list.",
  },
  {
    number: 3,
    title: "Final payment & shipping",
    body: [
      "After the final payment, I will carefully pack your painting for its new home. Shipping is free, and you'll receive track & trace details so you know exactly when it's on its way.",
      "If you're located in the greater Seattle area, please let me know — I'd be happy to arrange a meeting location or offer free delivery.",
    ],
    // TBD: International shipping and payment methods (PayPal? Bank transfer?) — not confirmed yet.
  },
];
