import { contactInfo } from "@/lib/contact-info";
import { contactPageCopy } from "@/lib/contact-page-copy";

export function DirectContactPanel({ className = "" }: { className?: string }) {
  return (
    <aside className={`pt-2 ${className}`.trim()}>
      <p className="eyebrow-label">Direct Details</p>
      <h2 className="mt-2 font-display text-xl font-medium tracking-[0.04em] text-ink">
        {contactPageCopy.directHeading}
      </h2>
      <ul className="mt-5 space-y-4 font-sans text-sm text-muted">
        <li>
          <span className="mb-0.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted/70">
            Email
          </span>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-ink transition-all duration-300 ease-out hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {contactInfo.email}
          </a>
        </li>
        <li>
          <span className="mb-0.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted/70">
            Phone
          </span>
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="text-ink transition-all duration-300 ease-out hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {contactInfo.phoneDisplay}
          </a>
        </li>
        <li>
          <span className="mb-0.5 block text-xs font-medium uppercase tracking-[0.16em] text-muted/70">
            Instagram
          </span>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink transition-all duration-300 ease-out hover:text-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {contactInfo.instagramHandle}
          </a>
        </li>
      </ul>
    </aside>
  );
}
