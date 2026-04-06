import Link from "next/link";
import { commissionResources } from "@/lib/commissions-resources";

export function CommissionsResourceCards() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
      {commissionResources.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="surface-card surface-card-hover group block p-8 sm:p-10 lg:p-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          title={
            item.href === "#"
              ? `${item.title} — link not configured yet`
              : undefined
          }
        >
          <p className="eyebrow-label">Commission Resource</p>
          <h2 className="mt-2.5 font-display text-xl font-semibold tracking-[0.04em] text-ink sm:text-2xl">
            {item.title}
          </h2>
          <p className="copy-readable mt-4">
            {item.description}
          </p>
          <span className="mt-7 inline-block font-sans text-xs font-medium uppercase tracking-[0.16em] text-sage transition-all duration-300 ease-out group-hover:text-sage-deep group-hover:translate-x-1">
            View resource
          </span>
        </Link>
      ))}
    </div>
  );
}
