import { contactInfo } from "@/lib/contact-info";
import { contactPageCopy } from "@/lib/contact-page-copy";

export function DirectContactPanel({ className = "" }: { className?: string }) {
  return (
    <aside className={`lg:pt-2 ${className}`.trim()}>
      <h2 className="font-display text-2xl font-semibold tracking-wide text-ink sm:text-3xl">
        {contactPageCopy.directHeading}
      </h2>
      <div className="mt-4 border-t border-ink/15" />
      <ul className="mt-8 space-y-6 font-sans text-sm text-muted sm:text-base">
        <li>
          <span className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Email
          </span>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-ink transition-all duration-300 ease-out hover:text-sage hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {contactInfo.email}
          </a>
        </li>
        <li>
          <span className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Phone
          </span>
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="text-ink transition-all duration-300 ease-out hover:text-sage hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {contactInfo.phoneDisplay}
          </a>
        </li>
        <li>
          <span className="mb-1 block text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Instagram
          </span>
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink transition-all duration-300 ease-out hover:text-sage hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            {contactInfo.instagramHandle}
          </a>
        </li>
      </ul>
    </aside>
  );
}
