"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import { logout } from "@/lib/auth";
import { useUser } from "@/hooks/useUser";

export default function AuthButtons() {
  const { user, loading } = useUser();

  async function handleLogout() {
    await logout();
    window.location.reload();
  }

  if (loading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-700">
          {user.email}
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
