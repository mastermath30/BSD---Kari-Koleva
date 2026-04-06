import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-items";

export function PortfolioGallery() {
  return (
    <section
      aria-label="Portfolio gallery"
      className="section-shell section-rhythm-tight"
    >
      <div className="columns-1 gap-4 sm:gap-5 md:gap-5 lg:columns-2 xl:columns-3 [&>*]:mb-4 sm:[&>*]:mb-5 md:[&>*]:mb-5 lg:[&>*]:mb-6">
        {portfolioItems.map((item) => (
          <figure key={item.id} className="group break-inside-avoid">
            <div
              className={`relative w-full overflow-hidden rounded-sm ring-1 ring-ink/10 shadow-[0_10px_24px_-16px_rgba(17,24,39,0.28)] transition-all duration-500 ease-out group-hover:-translate-y-0.5 group-hover:shadow-[0_16px_36px_-20px_rgba(17,24,39,0.3)] group-hover:ring-ink/20 ${item.frameClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.025]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={90}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
