import type { Metadata } from "next";
import { PageTitleBand } from "@/components/page-title-band";
import { PortfolioGallery } from "@/components/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Selected animal portraiture by Kari Koleva.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageTitleBand title="Portfolio" />
      <PortfolioGallery />
    </>
  );
}
