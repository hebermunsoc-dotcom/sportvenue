import { supabase } from "./supabase";

export async function getUserRole() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log("USER:", user);

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", user.email)
    .single();

  console.log("PROFILE:", data);
  console.log("ERROR:", error);

  return data?.role ?? null;
}