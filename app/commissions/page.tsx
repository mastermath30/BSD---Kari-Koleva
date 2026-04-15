import type { Metadata } from "next";
import { PageTitleBand } from "@/components/page-title-band";
import { CommissionsHowToOrder } from "@/components/commissions-how-to-order";
import { PriceList } from "@/components/price-list";
import { CustomizationOptions } from "@/components/customization-options";
import { PhotoTips } from "@/components/photo-tips";
import { ContactForm } from "@/components/contact-form";
import { DirectContactPanel } from "@/components/direct-contact-panel";
import { CommissionsReviewsSectionServer } from "@/components/commissions-reviews-section-server";
import { commissionsCopy } from "@/lib/commissions-copy";

export const revalidate = 300; // re-fetch reviews at most every 5 minutes

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Custom pet portrait commissions by Kari Koleva — pricing, process, and how to order.",
};

export default function CommissionsPage() {
  return (
    <>
      <PageTitleBand
        title="Pet & Animal Portraits by Kari Koleva"
        subtitle={commissionsCopy.titleBandSubtitle}
      />

      <section className="section-shell py-8 text-center sm:py-10 lg:py-12">
        <p className="mx-auto max-w-2xl font-sans text-sm leading-relaxed text-muted sm:text-base">
          {commissionsCopy.intro}
        </p>
      </section>

      <CommissionsHowToOrder />

      <PriceList />

      <CustomizationOptions />

      <PhotoTips />

      <section className="border-t border-ink/[0.06] bg-canvas">
        <div className="section-shell section-rhythm">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14 2xl:gap-16 lg:items-start">
            <ContactForm introText={commissionsCopy.formIntro} />
            <DirectContactPanel />
          </div>
        </div>
      </section>

      <CommissionsReviewsSectionServer />
    </>
  );
}
