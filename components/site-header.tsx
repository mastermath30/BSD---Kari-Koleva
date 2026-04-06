"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

function navLinkClassName(active: boolean) {
  const base =
    "relative rounded-sm px-0.5 py-1 text-[0.8rem] font-medium uppercase tracking-[0.09em] transition-all duration-300 ease-out after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-sage after:transition-all after:duration-300 after:ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";
  if (active) {
    return `${base} text-ink after:scale-x-100`;
  }
  return `${base} text-ink/80 after:scale-x-0 hover:text-ink hover:after:scale-x-100`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const linkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-canvas/90 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between gap-4 py-3 sm:py-4 lg:py-5">
        <Link
          href="/"
          className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-ink transition-all duration-300 ease-out hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:text-xl md:text-2xl lg:text-3xl"
        >
          {siteConfig.artistName}
        </Link>

        <nav
          className="hidden items-center gap-4 lg:gap-6 xl:gap-7 md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkClassName(linkActive(item.href))}
              aria-current={linkActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink transition-all duration-300 ease-out hover:bg-ink/[0.04] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-6 w-6 transition-transform duration-300" strokeWidth={1.5} /> : <Menu className="h-6 w-6 transition-transform duration-300" strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-ink/5 bg-canvas md:hidden"
          >
            <nav
              className="section-shell mx-auto flex max-w-6xl flex-col gap-1 py-2 sm:py-3 md:py-4 lg:py-5"
              aria-label="Mobile primary"
            >
              {siteConfig.nav.map((item, i) => {
                const active = linkActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-3 text-base font-medium transition-all duration-300 ease-out hover:bg-ink/[0.04] hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
                        active ? "text-sage" : "text-ink/90 hover:text-ink"
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
