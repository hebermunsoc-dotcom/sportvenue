"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getCurrentUser, logout } from "@/lib/auth";

export default function AuthButtons() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadUser() {
      const user = await getCurrentUser();

      if (user) {
        setEmail(user.email || "");
      }
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await logout();
    window.location.reload();
  }

  if (email) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-600">
          {email}
        </span>

        <Button
          variant="outline"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <Link href="/login">
        <Button variant="outline">
          Login
        </Button>
      </Link>

      <Link href="/signup">
        <Button>
          Get Started
        </Button>
      </Link>
    </div>
  );
}