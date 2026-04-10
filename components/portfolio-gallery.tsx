"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/portfolio-items";

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function PortfolioGallery() {
  return (
    <section
      aria-label="Portfolio gallery"
      className="section-shell section-rhythm-tight"
    >
      <div className="columns-1 gap-5 sm:gap-6 lg:columns-2 xl:columns-3 [&>*]:mb-5 sm:[&>*]:mb-6">
        {portfolioItems.map((item, i) => (
          <motion.figure
            key={item.id}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: Math.min(i * 0.05, 0.3) }}
            className="group break-inside-avoid"
          >
            <div
              className={`relative w-full overflow-hidden rounded-sm artwork-frame artwork-frame-hover transition-all duration-500 ease-out group-hover:-translate-y-1 ${item.frameClass}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
