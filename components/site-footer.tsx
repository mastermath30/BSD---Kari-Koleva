import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="scroll-mt-28 bg-sage-footer text-canvas/95"
    >
      <div className="section-shell py-16 sm:py-18 lg:py-20">
        <div className="border-t border-canvas/[0.12] pt-10 sm:pt-12 lg:pt-14">
          <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-start lg:gap-12">
            <div className="space-y-2.5">
              <p className="font-display text-lg font-medium tracking-[0.06em] text-canvas sm:text-xl">
                {siteConfig.artistName}
              </p>
              <p className="font-sans text-xs text-canvas/70 sm:text-sm">
                © {siteConfig.copyrightYear} {siteConfig.artistName}. All rights reserved.
              </p>
            </div>

            <nav
              className="flex flex-wrap items-center gap-x-6 gap-y-3 font-sans text-xs uppercase tracking-[0.08em] text-canvas/85 sm:gap-x-8 sm:text-sm lg:justify-center"
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

            <div className="lg:justify-self-end lg:text-right">
              <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] text-canvas/70 sm:text-xs">
                Follow me
              </p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3.5 inline-flex min-h-[42px] items-center gap-2 rounded-sm border border-canvas/30 px-4 py-2.5 text-sm text-canvas/90 transition-all duration-300 ease-out hover:border-canvas/55 hover:bg-canvas/10 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-canvas/50 focus-visible:ring-offset-2 focus-visible:ring-offset-sage-footer"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
