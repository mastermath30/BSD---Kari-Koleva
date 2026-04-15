import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/login/actions";
import { redirect } from "next/navigation";
import { ReviewModerationButtons } from "@/components/review-moderation-buttons";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const query = searchParams.q?.trim() ?? "";

  // Fetch matching profiles
  const profileQuery = supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });

  if (query) {
    profileQuery.ilike("username", `%${query}%`);
  }

  // Fetch pending reviews and recent orders in parallel
  const [{ data: profiles }, { data: pendingReviews }, { data: recentOrders }] =
    await Promise.all([
      profileQuery.limit(20),
      supabase
        .from("reviews")
        .select("*, profiles(username), orders(product_type, product_description)")
        .eq("approved", false)
        .order("created_at", { ascending: false }),
      supabase
        .from("orders")
        .select("*, profiles(username)")
        .order("created_at", { ascending: false })
        .limit(10),
    ]);

  return (
    <main className="min-h-screen bg-canvas">
      <div className="section-shell py-12 sm:py-16">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow-label">Admin portal</p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-wide text-ink">
              Manage
            </h1>
          </div>
          <form action={logout}>
            <button type="submit" className="font-sans text-sm text-muted hover:text-ink transition-colors duration-200">
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          {/* Left — user search + orders */}
          <div className="space-y-10">
            {/* User search */}
            <section>
              <h2 className="font-display text-xl font-semibold tracking-wide text-ink">
                Users
              </h2>
              <form method="GET" className="mt-4 flex gap-3">
                <input
                  name="q"
                  defaultValue={query}
                  placeholder="Search by username…"
                  className="flex-1 rounded-sm border border-ink/15 bg-white px-3.5 py-2.5 font-sans text-sm text-ink placeholder:text-muted/50 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                />
                <button type="submit" className="button-primary px-5">
                  Search
                </button>
              </form>

              <ul className="mt-5 divide-y divide-ink/[0.06] rounded-sm border border-ink/[0.08]">
                {!profiles?.length ? (
                  <li className="px-5 py-4 font-sans text-sm text-muted">
                    No users found.
                  </li>
                ) : (
                  profiles.map((profile) => (
                    <li key={profile.id}>
                      <a
                        href={`/admin/users/${profile.id}`}
                        className="flex items-center justify-between px-5 py-4 transition-colors duration-150 hover:bg-sage/5"
                      >
                        <div>
                          <p className="font-sans text-sm font-medium text-ink">
                            @{profile.username}
                          </p>
                          {profile.display_name && (
                            <p className="font-sans text-xs text-muted">
                              {profile.display_name}
                            </p>
                          )}
                        </div>
                        <span className="font-sans text-xs text-muted">
                          {new Date(profile.created_at).toLocaleDateString()}
                        </span>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </section>

            {/* Recent orders */}
            <section>
              <h2 className="font-display text-xl font-semibold tracking-wide text-ink">
                Recent orders
              </h2>
              <ul className="mt-5 divide-y divide-ink/[0.06] rounded-sm border border-ink/[0.08]">
                {!recentOrders?.length ? (
                  <li className="px-5 py-4 font-sans text-sm text-muted">
                    No orders yet.
                  </li>
                ) : (
                  recentOrders.map((order) => (
                    <li key={order.id}>
                      <a
                        href={`/admin/users/${order.user_id}`}
                        className="flex items-center justify-between px-5 py-4 transition-colors duration-150 hover:bg-sage/5"
                      >
                        <div>
                          <p className="font-sans text-sm font-medium text-ink capitalize">
                            {order.product_type}
                            {order.product_description && (
                              <span className="ml-2 font-normal text-muted">
                                — {order.product_description}
                              </span>
                            )}
                          </p>
                          <p className="font-sans text-xs text-muted">
                            @{(order as any).profiles?.username}
                          </p>
                        </div>
                        <span className="rounded-full bg-ink/5 px-2.5 py-1 font-sans text-xs capitalize text-muted">
                          {order.status.replace("_", " ")}
                        </span>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </section>
          </div>

          {/* Right — pending reviews */}
          <section>
            <h2 className="font-display text-xl font-semibold tracking-wide text-ink">
              Pending reviews
              {!!pendingReviews?.length && (
                <span className="ml-2 rounded-full bg-sage/15 px-2 py-0.5 font-sans text-sm font-normal text-sage-deep">
                  {pendingReviews.length}
                </span>
              )}
            </h2>
            <ul className="mt-5 space-y-4">
              {!pendingReviews?.length ? (
                <li className="font-sans text-sm text-muted">
                  No reviews pending approval.
                </li>
              ) : (
                pendingReviews.map((review) => (
                  <li key={review.id} className="surface-card p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-xs text-muted">
                        @{(review as any).profiles?.username}
                      </p>
                      <p className="font-sans text-xs text-muted">
                        {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                      </p>
                    </div>
                    <p className="mt-2 font-sans text-sm text-ink">{review.body}</p>
                    <div className="mt-3">
                      <ReviewModerationButtons reviewId={review.id} />
                    </div>
                  </li>
                ))
              )}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
