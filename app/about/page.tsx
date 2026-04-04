import type { Metadata } from "next";
import { PageTitleBand } from "@/components/page-title-band";
import { AboutPageBody } from "@/components/about-page-body";

export const metadata: Metadata = {
  title: "About",
  description: "About Kari Koleva and her animal portraiture practice.",
};

export default function AboutPage() {
  return (
    <>
      <PageTitleBand title="About" />
      <AboutPageBody />
    </>
  );
}
