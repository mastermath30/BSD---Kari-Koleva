import { FeaturedGallery } from "@/components/featured-gallery";
import { CommissionsReviewsSectionServer } from "@/components/commissions-reviews-section-server";
import { AboutSection } from "@/components/about-section";

export const revalidate = 300; // re-fetch reviews at most every 5 minutes

export default function HomePage() {
  return (
    <>
      <FeaturedGallery />
      <CommissionsReviewsSectionServer />
      <AboutSection />
    </>
  );
}
