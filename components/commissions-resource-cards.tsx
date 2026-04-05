import Link from "next/link";
import { commissionResources } from "@/lib/commissions-resources";

export function CommissionsResourceCards() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:gap-12">
      {commissionResources.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group block rounded-sm border border-ink/10 bg-canvas p-8 shadow-sm transition-all duration-300 ease-out hover:border-sage/35 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:p-10 lg:p-12"
          title={
            item.href === "#"
              ? `${item.title} — link not configured yet`
              : undefined
          }
        >
          <h2 className="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
            {item.title}
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
            {item.description}
          </p>
          <span className="mt-8 inline-block font-sans text-xs font-medium uppercase tracking-[0.18em] text-sage transition-all duration-300 ease-out group-hover:text-sage-deep group-hover:translate-x-1">
            View resource
          </span>
        </Link>
      ))}
    </div>
  );
}
