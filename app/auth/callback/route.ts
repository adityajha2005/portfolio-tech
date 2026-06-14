import { NextResponse } from "next/server";
import { isSupabaseEnabled } from "@/app/lib/supabase/config";

export async function GET(request: Request) {
  if (!isSupabaseEnabled()) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/community-wall?show=true";

  if (!code) {
    return NextResponse.redirect(`${origin}/community-wall`);
  }

  // Auth callback requires Supabase env vars, handled when enabled
  return NextResponse.redirect(`${origin}${next}`);
}
