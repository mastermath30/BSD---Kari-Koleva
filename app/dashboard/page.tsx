import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/login/actions";
import { redirect } from "next/navigation";
import type { Order } from "@/lib/supabase/types";

const STATUS_LABELS: Record<Order["status"], string> = {
  inquiry: "Inquiry received",
  confirmed: "Confirmed",
  in_progress: "In progress",
  completed: "Completed",
  cancelled: "Cancelled",
};

const STATUS_COLORS: Record<Order["status"], string> = {
  inquiry: "bg-ink/8 text-muted",
  confirmed: "bg-sage/10 text-sage-deep",
  in_progress: "bg-amber-50 text-amber-700",
  completed: "bg-emerald-50 text-emerald-700",
  cancelled: "bg-red-50 text-red-600",
};

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { review?: string };
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [{ data: profile }, { data: orders }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", user.id).single(),
    supabase
      .from("orders")
      .select("*, reviews(id)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false }),
  ]);

  return (
    <main className="min-h-screen bg-canvas">
      <div className="section-shell py-12 sm:py-16">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow-label">My account</p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-wide text-ink">
              {profile?.display_name ?? profile?.username ?? "Dashboard"}
            </h1>
            <p className="mt-1 font-sans text-sm text-muted">@{profile?.username}</p>
          </div>
          <form action={logout}>
            <button type="submit" className="font-sans text-sm text-muted hover:text-ink transition-colors duration-200">
              Sign out
            </button>
          </form>
        </div>

        {/* Review submitted banner */}
        {searchParams.review === "submitted" && (
          <div className="mt-8 rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3 font-sans text-sm text-emerald-700">
            Review submitted — it will appear publicly once approved.
          </div>
        )}

        {/* Orders */}
        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold tracking-wide text-ink">
            Your orders
          </h2>

          {!orders?.length ? (
            <p className="mt-6 font-sans text-sm text-muted">
              No orders yet. Reach out via the{" "}
              <a href="/commissions" className="text-sage underline underline-offset-2">
                commissions page
              </a>{" "}
              to get started.
            </p>
          ) : (
            <ul className="mt-6 space-y-4">
              {orders.map((order) => {
                const hasReview = (order as any).reviews?.length > 0;
                const canReview = order.status === "completed" && !hasReview;

                return (
                  <li
                    key={order.id}
                    className="surface-card p-5 sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-sans text-sm font-medium capitalize text-ink">
                          {order.product_type}
                        </p>
                        {order.product_description && (
                          <p className="mt-1 font-sans text-sm text-muted">
                            {order.product_description}
                          </p>
                        )}
                        <p className="mt-1 font-sans text-xs text-muted/70">
                          {new Date(order.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 font-sans text-xs font-medium ${STATUS_COLORS[order.status]}`}
                      >
                        {STATUS_LABELS[order.status]}
                      </span>
                    </div>

                    {canReview && (
                      <div className="mt-4 border-t border-ink/[0.06] pt-4">
                        <a
                          href={`/dashboard/review/${order.id}`}
                          className="font-sans text-sm text-sage hover:text-sage-deep underline underline-offset-2 transition-colors duration-200"
                        >
                          Leave a review →
                        </a>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
