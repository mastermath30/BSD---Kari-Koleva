import Image from "next/image";
import { portfolioItems } from "@/lib/portfolio-items";

export function PortfolioGallery() {
  return (
    <section
      aria-label="Portfolio gallery"
      className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10"
    >
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {portfolioItems.map((item) => (
          <figure key={item.id} className="break-inside-avoid">
            <div
              className={`relative w-full overflow-hidden rounded-sm shadow-sm ring-1 ring-ink/10 ${item.frameClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
