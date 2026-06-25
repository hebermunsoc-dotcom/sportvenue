"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserRole } from "@/lib/profile";

export default function RoleNav() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function loadRole() {
      const userRole = await getUserRole();
      setRole(userRole);
    }

    loadRole();
  }, []);

  return (
    <>
      <Link
        href="/explore"
        className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
      >
        Explore
      </Link>

      <Link
        href="/leagues"
        className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
      >
        Leagues
      </Link>

      {role === "owner" ? (
        <>
          <Link
            href="/owner-dashboard"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Dashboard
          </Link>

          <Link
            href="/owner"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Owner Portal
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            Dashboard
          </Link>

          <Link
            href="/my-bookings"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            My Bookings
          </Link>
        </>
      )}

      <Link
        href="/contact"
        className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
      >
        Contact
      </Link>
    </>
  );
}