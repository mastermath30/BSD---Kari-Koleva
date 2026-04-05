import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="scroll-mt-28 bg-sage-footer text-canvas/95"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 xs:px-5 sm:px-6 lg:px-8 2xl:px-10 sm:py-14 lg:py-16 2xl:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between xs:gap-12">
          <div className="space-y-2">
            <p className="font-display text-lg font-medium tracking-wide text-canvas">
              {siteConfig.artistName}
            </p>
            <p className="font-sans text-sm text-canvas/70 xs:text-xs">
              © {siteConfig.copyrightYear} {siteConfig.artistName}. All rights reserved.
            </p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs sm:gap-x-8 sm:gap-y-3 sm:text-sm"
            aria-label="Footer"
          >
            <Link
              href="/about"
              className="rounded-sm text-canvas/85 transition-all duration-300 ease-out hover:text-canvas hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-footer"
            >
              About
            </Link>
            <Link
              href="/commissions"
              className="rounded-sm text-canvas/85 transition-all duration-300 ease-out hover:text-canvas hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-footer"
            >
              Commissions
            </Link>
            <Link
              href="/contact"
              className="rounded-sm text-canvas/85 transition-all duration-300 ease-out hover:text-canvas hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-footer"
            >
              Contact
            </Link>
            <a
              href="#"
              className="rounded-sm text-canvas/85 transition-all duration-300 ease-out hover:text-canvas hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-footer"
              title="Privacy policy link not configured"
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
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-canvas/25 px-4 py-2.5 text-sm text-canvas/90 transition-all duration-300 ease-out hover:border-canvas/50 hover:bg-canvas/10 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-footer"
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
