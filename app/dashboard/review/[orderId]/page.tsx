import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { submitReview } from "./actions";

export default async function ReviewPage({
  params,
  searchParams,
}: {
  params: { orderId: string };
  searchParams: { error?: string };
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Verify the order exists, belongs to this user, and is completed
  const { data: order } = await supabase
    .from("orders")
    .select("*, reviews(id)")
    .eq("id", params.orderId)
    .eq("user_id", user.id)
    .eq("status", "completed")
    .single();

  if (!order) notFound();

  // Already reviewed → back to dashboard
  if ((order as any).reviews?.length > 0) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-canvas">
      <div className="section-shell py-12 sm:py-16 max-w-xl">
        <a
          href="/dashboard"
          className="font-sans text-sm text-muted hover:text-ink transition-colors duration-200"
        >
          ← Dashboard
        </a>

        <div className="mt-6">
          <p className="eyebrow-label">Leave a review</p>
          <h1 className="mt-2 font-display text-3xl font-medium tracking-wide text-ink">
            How did it go?
          </h1>
          {order.product_description && (
            <p className="mt-2 font-sans text-sm text-muted capitalize">
              {order.product_type} — {order.product_description}
            </p>
          )}
        </div>

        {searchParams.error && (
          <div className="mt-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-600">
            {searchParams.error}
          </div>
        )}

        <form action={submitReview} className="mt-8 space-y-6">
          <input type="hidden" name="order_id" value={params.orderId} />

          {/* Star rating */}
          <fieldset>
            <legend className="font-sans text-sm font-medium text-ink mb-3">
              Rating
            </legend>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <label key={n} className="flex flex-col items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={n}
                    required
                    className="sr-only peer"
                  />
                  <span className="text-2xl text-muted/30 peer-checked:text-amber-400 hover:text-amber-300 transition-colors duration-150 select-none">
                    ★
                  </span>
                  <span className="font-sans text-xs text-muted">{n}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {/* Review body */}
          <div>
            <label
              htmlFor="body"
              className="block font-sans text-sm font-medium text-ink mb-2"
            >
              Your review
            </label>
            <textarea
              id="body"
              name="body"
              rows={5}
              required
              minLength={10}
              placeholder="Tell Kari what you thought of your commission…"
              className="w-full rounded-sm border border-ink/15 bg-white px-3.5 py-3 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20 resize-none"
            />
          </div>

          <button type="submit" className="button-primary w-full py-3 text-sm">
            Submit review
          </button>
        </form>
      </div>
    </main>
  );
}
