import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();

  await supabase.from("reviews").delete().eq("id", params.id);

  redirect("/admin");
}
