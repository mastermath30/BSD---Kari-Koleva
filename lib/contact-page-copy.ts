/** Contact page (/contact) — form intro and headings. */
export const contactPageCopy = {
  formHeading: "Contact Kari Koleva",
  formIntro:
    "Share a few details about your commission, timeline, and reference images. Kari will follow up by email.",
  directHeading: "Direct Contact",
  fields: {
    name: "Your name",
    email: "Your email",
    images: "Images",
    message: "Your message",
  },
  uploadHint: "Drag and drop images here, or click to browse",
  submitLabel: "Send message",
  /** Shown only after valid submit while no API/server handler exists. */
  noBackendNotice:
    "This form does not send messages yet — no email endpoint is configured. Please use the direct contact details instead.",
} as const;
