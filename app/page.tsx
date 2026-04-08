import { FeaturedGallery } from "@/components/featured-gallery";
import { CommissionsReviewsSection } from "@/components/commissions-reviews-section";
import { AboutSection } from "@/components/about-section";

export default function HomePage() {
  return (
    <>
      <FeaturedGallery />
      <CommissionsReviewsSection />
      <AboutSection />
    </>
  );
}
