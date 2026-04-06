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

      <section className="section-shell py-8 text-center sm:py-10 lg:py-12">
        <p className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
          {commissionsCopy.intro}
        </p>
      </section>

      <section className="section-shell pb-10 sm:pb-12 lg:pb-16 2xl:pb-20">
        <CommissionsResourceCards />
      </section>

      <section className="border-t border-ink/[0.06] bg-canvas">
        <div className="section-shell section-rhythm">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 2xl:gap-16">
            <ContactForm introText={commissionsCopy.formIntro} />
            <DirectContactPanel />
          </div>
        </div>
      </section>

      <CommissionsReviewsSection />
    </>
  );
}
