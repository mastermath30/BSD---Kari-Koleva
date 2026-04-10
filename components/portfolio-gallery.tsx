import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-items";

export function PortfolioGallery() {
  return (
    <section
      aria-label="Portfolio gallery"
      className="section-shell section-rhythm-tight"
    >
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
        {portfolioItems.map((item) => (
          <figure
            key={item.id}
            className="group relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-ink/10 shadow-[0_10px_24px_-16px_rgba(17,24,39,0.28)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-20px_rgba(17,24,39,0.3)] hover:ring-ink/20"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.025]"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={90}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
