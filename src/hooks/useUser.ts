"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadUser() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("AUTH USER:", user);

    setUser(user);

    if (!user) {
      setRole(null);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("email", user.email)
      .single();

    console.log("PROFILE:", data);
    console.log("PROFILE ERROR:", error);

    if (data) {
      setRole(data.role);
    } else {
      setRole(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    user,
    role,
    loading,
  };
}