/**
 * Photo Tips content for the commissions page.
 * Photo examples (do's and don'ts) are TBD — placeholders shown in component.
 */

export const photoTipsIntro = [
  "I always ask for multiple photos. This helps me get a better overall impression of your pet. If certain details aren't clearly visible in the main reference photo, or if the coat colors look different due to lighting, I can compare them with other images to get a more accurate result.",
  "Once you send your photos, I'll look at them and explain which ones work best and why. I'll point out things like expression, lighting, angles, and visibility of details — and I'll give you honest advice.",
  "In the end, the final choice is always yours. My role is simply to help you figure out which photos will work best for the painting!",
];

export type PhotoTip = {
  label: string;
  /** TBD: replace empty string with a real photo src when available. */
  photoSrc: string;
  photoAlt: string;
};

export const photoTipsDos: PhotoTip[] = [
  { label: "Show your pet's face clearly", photoSrc: "", photoAlt: "Example: face clearly visible (photo TBD)" },
  { label: "Make eyes visible, unless pet is sleeping", photoSrc: "", photoAlt: "Example: eyes visible (photo TBD)" },
  { label: "Send multiple photos", photoSrc: "", photoAlt: "Example: multiple angles (photo TBD)" },
  { label: "Include interesting poses or expressions", photoSrc: "", photoAlt: "Example: interesting pose (photo TBD)" },
  { label: "Give your camera lens a clean!", photoSrc: "", photoAlt: "Example: clean lens result (photo TBD)" },
  { label: "Sharp image (not blurry)", photoSrc: "", photoAlt: "Example: sharp image (photo TBD)" },
  { label: "Natural lighting works best", photoSrc: "", photoAlt: "Example: natural lighting (photo TBD)" },
];

export const photoTipsDonts: PhotoTip[] = [
  { label: "Blurry photos", photoSrc: "", photoAlt: "Example: blurry photo (photo TBD)" },
  { label: "Face or important details covered (face, paws, etc.)", photoSrc: "", photoAlt: "Example: covered face (photo TBD)" },
  { label: "Very dark or overly edited photos", photoSrc: "", photoAlt: "Example: too dark / edited (photo TBD)" },
  { label: "Strong flash reflections", photoSrc: "", photoAlt: "Example: flash reflection (photo TBD)" },
  { label: "Extreme high angles", photoSrc: "", photoAlt: "Example: extreme angle (photo TBD)" },
];
