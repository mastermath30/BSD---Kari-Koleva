import { createClient } from "@/lib/supabase/server";
import { CommissionsReviewsSection } from "./commissions-reviews-section";

export async function CommissionsReviewsSectionServer() {
  const supabase = await createClient();

  const { data: reviews } = await supabase
    .from("reviews")
    .select("id, rating, body, user_id, profiles(username, display_name)")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(10);

  return <CommissionsReviewsSection liveReviews={reviews ?? []} />;
}
