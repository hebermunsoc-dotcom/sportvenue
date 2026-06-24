import { supabase } from "./supabase";

export async function getVenues() {
  const { data, error } = await supabase
    .from("venues")
    .select("*")
    .order("id");

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getVenue(id: string) {
  const result = await supabase
    .from("venues")
    .select("*");

  console.log("RESULT:", result);

  return result.data?.[0] ?? null;
}