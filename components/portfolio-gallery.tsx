import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-items";

export function PortfolioGallery() {
  return (
    <section
      aria-label="Portfolio gallery"
      className="mx-auto max-w-6xl px-3 py-8 sm:px-4 sm:py-10 md:px-5 md:py-12 lg:px-8 lg:py-14 xl:px-10 xl:py-16"
    >
      <div className="columns-1 gap-3 sm:gap-4 md:gap-5 lg:columns-2 xl:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4 md:[&>*]:mb-5 lg:[&>*]:mb-6">
        {portfolioItems.map((item) => (
          <figure key={item.id} className="group break-inside-avoid">
            <div
              className={`relative w-full overflow-hidden rounded-sm ring-1 ring-ink/[0.08] transition-all duration-500 ease-out group-hover:shadow-lg group-hover:ring-ink/15 group-hover:-translate-y-1 ${item.frameClass}`}
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
