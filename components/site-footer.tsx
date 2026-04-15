import Link from "next/link";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { contactInfo } from "@/lib/contact-info";

const linkClass =
  "font-sans text-sm text-canvas/70 transition-colors duration-200 hover:text-canvas";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="scroll-mt-28 bg-sage-footer text-canvas/95"
    >
      <div className="section-shell pt-14 pb-0 sm:pt-16">
        {/* Top section — columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:gap-20 pb-10 sm:pb-12 lg:pb-14">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-display text-lg font-medium tracking-[0.06em] text-canvas sm:text-xl">
              {siteConfig.artistName}
            </p>
            <p className="font-sans text-sm leading-relaxed text-canvas/60 max-w-xs">
              Custom pet portrait commissions. Each piece handcrafted with care.
            </p>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 text-canvas/60 transition-colors duration-200 hover:text-canvas pt-1"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
              <span className="font-sans text-sm">Instagram</span>
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-canvas/40 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/portfolio" className={linkClass}>Portfolio</Link></li>
              <li><Link href="/commissions" className={linkClass}>Commissions</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-canvas/40 mb-4">
              Get in Touch
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${contactInfo.email}`} className={linkClass}>
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phoneTel}`} className={linkClass}>
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {contactInfo.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-canvas/[0.1] py-5 flex flex-wrap items-center justify-between gap-4">
          <p className="font-sans text-xs text-canvas/40">
            © {siteConfig.copyrightYear} {siteConfig.artistName}. All rights reserved.
          </p>
          <a
            href="#"
            className="font-sans text-xs text-canvas/40 hover:text-canvas/70 transition-colors duration-200"
            title="Privacy policy link not configured"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
