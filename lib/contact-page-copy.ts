/** Contact page (/contact) — form intro and headings. */
export const contactPageCopy = {
  formHeading: "Contact Kari Koleva",
  formIntro:
    "I'd love to hear from you! If you'd like a custom pet portrait or have a question, please use the form below. I'll get back to you soon.",
  /** Note shown below intro on the contact page (with link to /commissions rendered in component). */
  commissionsNote:
    "For commissions, please share details about your pet and any specific requests that are important for the portrait. More info is on the commissions page.",
  directHeading: "Direct Contact",
  fields: {
    name: "Your name",
    email: "Your email",
    reason: "Reason for contact",
    reasonOptions: [
      { value: "", label: "Select a reason" },
      { value: "commission", label: "Commission request" },
      { value: "other", label: "Other" },
    ],
    images: "Images",
    message: "Your message",
  },
  uploadHint: "Drag and drop images here, or click to browse",
  submitLabel: "Send message",
  /** Shown only after valid submit while no API/server handler exists. */
  noBackendNotice:
    "This form does not send messages yet — no email endpoint is configured. Please use the direct contact details instead.",
} as const;
