"use client";

import Link from "next/link";
import { useUser } from "@/hooks/useUser";

export default function RoleNav() {
  const { user, role, loading } = useUser();

  if (loading) return null;

  // Public
  if (!user) {
    return (
      <>
        <Link href="/explore" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Explore
        </Link>

        <Link href="/leagues" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Leagues
        </Link>

        <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Contact
        </Link>
      </>
    );
  }

  // Owner
  if (role === "owner") {
    return (
      <>
        <Link href="/owner-dashboard" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Dashboard
        </Link>

        <Link href="/owner" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Owner Portal
        </Link>

        <Link href="/leagues" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Leagues
        </Link>

        <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
          Contact
        </Link>
      </>
    );
  }

  // Customer
  return (
    <>
      <Link href="/explore" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
        Explore
      </Link>

      <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
        Dashboard
      </Link>

      <Link href="/my-bookings" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
        My Bookings
      </Link>

      <Link href="/leagues" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
        Leagues
      </Link>

      <Link href="/contact" className="text-sm font-medium text-slate-700 hover:text-emerald-600">
        Contact
      </Link>
    </>
  );
}