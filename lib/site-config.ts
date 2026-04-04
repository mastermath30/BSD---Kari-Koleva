import { contactInfo } from "@/lib/contact-info";

/** Site-wide strings and URLs — edit here for easy updates. */
export const siteConfig = {
  artistName: "Kari Koleva",
  nav: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Commissions", href: "/commissions" },
    { label: "About the Artist", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] as const,
  instagramUrl: contactInfo.instagramUrl,
  copyrightYear: 2026,
} as const;
