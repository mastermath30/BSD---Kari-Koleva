import Link from "next/link";
import { commissionResources } from "@/lib/commissions-resources";

export function CommissionsResourceCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
      {commissionResources.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="group block rounded-sm border border-ink/10 bg-canvas p-8 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-sage/35 hover:shadow-md sm:p-10"
        >
          <h2 className="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
            {item.title}
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted sm:text-base">
            {item.description}
          </p>
          <span className="mt-6 inline-block font-sans text-xs font-medium uppercase tracking-[0.18em] text-sage transition-colors group-hover:text-sage-deep">
            View resource
          </span>
        </Link>
      ))}
    </div>
  );
}
