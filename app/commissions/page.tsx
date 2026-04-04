import type { Metadata } from "next";
import { PageTitleBand } from "@/components/page-title-band";
import { ContactForm } from "@/components/contact-form";
import { DirectContactPanel } from "@/components/direct-contact-panel";
import { CommissionsResourceCards } from "@/components/commissions-resource-cards";
import { CommissionsReviewsSection } from "@/components/commissions-reviews-section";
import { commissionsCopy } from "@/lib/commissions-copy";

export const metadata: Metadata = {
  title: "Commissions",
  description: "Commission guides, pricing resources, and inquiry form for Kari Koleva.",
};

export default function CommissionsPage() {
  return (
    <>
      <PageTitleBand
        title="Commissions"
        subtitle={commissionsCopy.titleBandSubtitle}
      />

      <section className="mx-auto max-w-6xl px-5 py-12 text-center sm:px-8 sm:py-14 lg:px-10">
        <p className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
          {commissionsCopy.intro}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:px-10 lg:pb-20">
        <CommissionsResourceCards />
      </section>

      <section className="border-t border-ink/[0.06] bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
            <ContactForm introText={commissionsCopy.formIntro} />
            <DirectContactPanel />
          </div>
        </div>
      </section>

      <CommissionsReviewsSection />
    </>
  );
}
