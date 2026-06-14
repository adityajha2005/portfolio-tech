"use server";

import createSupabaseServerClient from "./server";

export default async function getUserSession() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    return { data: { session: null }, error: null };
  }

  return supabase.auth.getSession();
}
