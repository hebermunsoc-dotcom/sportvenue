"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/auth";

export default function ProfilePage() {
  const [userEmail, setUserEmail] =
    useState("");

  useEffect(() => {
    async function loadUser() {
      const user =
        await getCurrentUser();

      setUserEmail(user?.email || "");
    }

    loadUser();
  }, []);

  return (
    <main className="p-12">
      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <p className="mt-4">
        Logged in as:
      </p>

      <p className="font-semibold">
        {userEmail}
      </p>
    </main>
  );
}