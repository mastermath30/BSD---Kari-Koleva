"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function updateOrder(formData: FormData) {
  const supabase = await createClient();
  const orderId = formData.get("order_id") as string;
  const userId = formData.get("user_id") as string;

  const status = formData.get("status") as string;
  const adminNotes = formData.get("admin_notes") as string;
  const paymentReference = formData.get("payment_reference") as string;
  const paymentAmountRaw = formData.get("payment_amount") as string;
  const paymentAmount = paymentAmountRaw ? parseFloat(paymentAmountRaw) : null;

  const { error } = await supabase
    .from("orders")
    .update({
      status: status as any,
      admin_notes: adminNotes || null,
      payment_reference: paymentReference || null,
      payment_amount: paymentAmount,
    })
    .eq("id", orderId);

  if (error) {
    redirect(`/admin/users/${userId}?error=${encodeURIComponent("Failed to update order: " + error.message)}`);
  }

  redirect(`/admin/users/${userId}?success=${encodeURIComponent("Order updated.")}`);
}

export async function createOrder(formData: FormData) {
  const supabase = await createClient();
  const userId = formData.get("user_id") as string;

  const productType = formData.get("product_type") as string;
  const productDescription = formData.get("product_description") as string;
  const status = formData.get("status") as string;
  const paymentReference = formData.get("payment_reference") as string;
  const paymentAmountRaw = formData.get("payment_amount") as string;
  const paymentAmount = paymentAmountRaw ? parseFloat(paymentAmountRaw) : null;

  const { error } = await supabase.from("orders").insert({
    user_id: userId,
    product_type: productType as any,
    product_description: productDescription || null,
    status: status as any,
    payment_reference: paymentReference || null,
    payment_amount: paymentAmount,
  });

  if (error) {
    redirect(`/admin/users/${userId}?error=${encodeURIComponent("Failed to create order: " + error.message)}`);
  }

  redirect(`/admin/users/${userId}?success=${encodeURIComponent("Order created.")}`);
}
