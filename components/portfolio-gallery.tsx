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
          <figure key={item.id} className="group break-inside-avoid">
            <div
              className={`relative w-full overflow-hidden rounded-sm ring-1 ring-ink/[0.08] transition-[box-shadow,ring-color] duration-300 group-hover:shadow-md group-hover:ring-ink/12 ${item.frameClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
