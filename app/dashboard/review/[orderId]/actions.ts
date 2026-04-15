"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function submitReview(formData: FormData) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const orderId = formData.get("order_id") as string;
  const rating = parseInt(formData.get("rating") as string, 10);
  const body = (formData.get("body") as string).trim();

  if (!rating || rating < 1 || rating > 5) {
    redirect(`/dashboard/review/${orderId}?error=${encodeURIComponent("Please select a rating.")}`);
  }

  if (!body || body.length < 10) {
    redirect(`/dashboard/review/${orderId}?error=${encodeURIComponent("Review must be at least 10 characters.")}`);
  }

  const { error } = await supabase.from("reviews").insert({
    order_id: orderId,
    user_id: user.id,
    rating,
    body,
    approved: false,
  });

  if (error) {
    redirect(`/dashboard/review/${orderId}?error=${encodeURIComponent("Could not submit review. " + error.message)}`);
  }

  redirect("/dashboard?review=submitted");
}
