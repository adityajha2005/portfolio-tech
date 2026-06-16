import { redirect } from "next/navigation";
import createSupabaseServerClient from "../lib/supabase/server";
import { CreateCommunityNoteBuilder } from "./CreateCommunityNoteBuilder";

async function handleCreateCommunityNote(formData: FormData) {
  "use server";

  const supabase = await createSupabaseServerClient();
  if (!supabase) return;

  const message = formData.get("message") as string;
  const name = (formData.get("name") as string)?.trim() || "Anonymous";
  const patternIndex = parseInt(formData.get("patternIndex") as string);
  const rotation = parseInt(formData.get("rotation") as string);
  const avatarUrl = `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}&backgroundColor=6366f1&textColor=ffffff`;

  const newNote = {
    message,
    patternindex: patternIndex,
    rotation,
    creator_name: name,
    creator_avatar_url: avatarUrl,
  };

  const { error } = await supabase.from("messages").insert(newNote).select();

  if (!error) {
    redirect("/community-wall");
  }
}

export async function CommunityWallModal() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/community-wall");
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70">
      <div className="flex min-h-screen items-center justify-center">
        <CreateCommunityNoteBuilder onSubmit={handleCreateCommunityNote} />
      </div>
    </div>
  );
}
