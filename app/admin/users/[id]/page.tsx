import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import type { OrderStatus } from "@/lib/supabase/types";
import { updateOrder, createOrder } from "./actions";

const STATUS_OPTIONS: OrderStatus[] = [
  "inquiry",
  "confirmed",
  "in_progress",
  "completed",
  "cancelled",
];

const STATUS_COLORS: Record<OrderStatus, string> = {
  inquiry: "bg-ink/8 text-muted",
  confirmed: "bg-sage/10 text-sage-deep",
  in_progress: "bg-amber-50 text-amber-700",
  completed: "bg-emerald-50 text-emerald-700",
  cancelled: "bg-red-50 text-red-600",
};

export default async function AdminUserPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { success?: string; error?: string };
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const [{ data: profile }, { data: orders }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", params.id).single(),
    supabase
      .from("orders")
      .select("*, reviews(id, rating, approved)")
      .eq("user_id", params.id)
      .order("created_at", { ascending: false }),
  ]);

  if (!profile) notFound();

  return (
    <main className="min-h-screen bg-canvas">
      <div className="section-shell py-12 sm:py-16">
        {/* Header */}
        <div className="flex items-start gap-4">
          <a
            href="/admin"
            className="mt-1 font-sans text-sm text-muted hover:text-ink transition-colors duration-200"
          >
            ← Admin
          </a>
          <div>
            <p className="eyebrow-label">Customer profile</p>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-wide text-ink">
              @{profile.username}
            </h1>
            {profile.display_name && (
              <p className="mt-1 font-sans text-sm text-muted">
                {profile.display_name}
              </p>
            )}
            <p className="mt-1 font-sans text-xs text-muted/70">
              Joined {new Date(profile.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Feedback banner */}
        {searchParams.success && (
          <div className="mt-6 rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3 font-sans text-sm text-emerald-700">
            {searchParams.success}
          </div>
        )}
        {searchParams.error && (
          <div className="mt-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 font-sans text-sm text-red-600">
            {searchParams.error}
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px]">
          {/* Left — order list */}
          <section>
            <h2 className="font-display text-xl font-semibold tracking-wide text-ink">
              Orders
              {!!orders?.length && (
                <span className="ml-2 font-sans text-sm font-normal text-muted">
                  ({orders.length})
                </span>
              )}
            </h2>

            {!orders?.length ? (
              <p className="mt-6 font-sans text-sm text-muted">No orders yet.</p>
            ) : (
              <ul className="mt-6 space-y-6">
                {orders.map((order) => (
                  <li key={order.id} className="surface-card p-5 sm:p-6">
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
                          Created{" "}
                          {new Date(order.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        {(order as any).reviews?.length > 0 && (
                          <p className="mt-1 font-sans text-xs text-sage">
                            {"★".repeat((order as any).reviews[0].rating)} review{" "}
                            {(order as any).reviews[0].approved ? "(approved)" : "(pending)"}
                          </p>
                        )}
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 font-sans text-xs font-medium ${STATUS_COLORS[order.status as OrderStatus]}`}
                      >
                        {order.status.replace("_", " ")}
                      </span>
                    </div>

                    {/* Edit form */}
                    <form action={updateOrder} className="mt-5 border-t border-ink/[0.06] pt-5 space-y-4">
                      <input type="hidden" name="order_id" value={order.id} />
                      <input type="hidden" name="user_id" value={params.id} />

                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {/* Status */}
                        <div className="col-span-2 sm:col-span-2">
                          <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                            Status
                          </label>
                          <select
                            name="status"
                            defaultValue={order.status}
                            className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                          >
                            {STATUS_OPTIONS.map((s) => (
                              <option key={s} value={s}>
                                {s.replace("_", " ")}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Payment amount */}
                        <div>
                          <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                            Amount ($)
                          </label>
                          <input
                            type="number"
                            name="payment_amount"
                            step="0.01"
                            defaultValue={order.payment_amount ?? ""}
                            placeholder="0.00"
                            className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                          />
                        </div>

                        {/* Payment ref */}
                        <div>
                          <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                            Payment ref
                          </label>
                          <input
                            type="text"
                            name="payment_reference"
                            defaultValue={order.payment_reference ?? ""}
                            placeholder="PayPal txn ID…"
                            className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                          />
                        </div>
                      </div>

                      {/* Admin notes */}
                      <div>
                        <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                          Admin notes (not visible to customer)
                        </label>
                        <textarea
                          name="admin_notes"
                          defaultValue={order.admin_notes ?? ""}
                          rows={3}
                          placeholder="Internal notes…"
                          className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="button-primary px-5 py-2 text-sm"
                      >
                        Save changes
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Right — create new order */}
          <section>
            <h2 className="font-display text-xl font-semibold tracking-wide text-ink">
              New order
            </h2>
            <form
              action={createOrder}
              className="mt-5 surface-card p-5 space-y-4"
            >
              <input type="hidden" name="user_id" value={params.id} />

              <div>
                <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                  Type
                </label>
                <select
                  name="product_type"
                  className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                >
                  <option value="commission">Commission</option>
                  <option value="print">Print</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                  Description
                </label>
                <textarea
                  name="product_description"
                  rows={3}
                  placeholder="e.g. 8×10 pet portrait of golden retriever…"
                  className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20 resize-none"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                  Initial status
                </label>
                <select
                  name="status"
                  className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                >
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s.replace("_", " ")}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                    Amount ($)
                  </label>
                  <input
                    type="number"
                    name="payment_amount"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs font-medium text-muted mb-1.5">
                    Payment ref
                  </label>
                  <input
                    type="text"
                    name="payment_reference"
                    placeholder="PayPal ID…"
                    className="w-full rounded-sm border border-ink/15 bg-white px-3 py-2 font-sans text-sm text-ink placeholder:text-muted/40 focus:border-sage/50 focus:outline-none focus:ring-2 focus:ring-sage/20"
                  />
                </div>
              </div>

              <button type="submit" className="button-primary w-full py-2.5 text-sm">
                Create order
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
