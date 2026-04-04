import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="scroll-mt-28 bg-sage-footer text-canvas/95"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-2">
            <p className="font-display text-lg font-medium tracking-wide text-canvas">
              {siteConfig.artistName}
            </p>
            <p className="font-sans text-sm text-canvas/70">
              © {siteConfig.copyrightYear} {siteConfig.artistName}. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-10 gap-y-4 font-sans text-sm"
            aria-label="Footer"
          >
            <Link
              href="/about"
              className="text-canvas/85 transition-colors duration-300 hover:text-canvas"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-canvas/85 transition-colors duration-300 hover:text-canvas"
            >
              Contact
            </Link>
            <a
              href="#"
              className="text-canvas/85 transition-colors duration-300 hover:text-canvas"
            >
              Privacy Policy
            </a>
          </nav>

          <div className="lg:text-right">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-canvas/70">
              Follow me
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-md border border-canvas/25 px-3 py-2 text-sm text-canvas/90 transition-colors duration-300 hover:border-canvas/50 hover:bg-canvas/10"
            >
              <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
