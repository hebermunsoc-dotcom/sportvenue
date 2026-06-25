import { supabase } from "./supabase";

export async function getUserRole() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("email", user.email)
    .single();

  return data?.role ?? null;
}