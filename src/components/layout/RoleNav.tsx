"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserRole } from "@/lib/profile";
import { getCurrentUser } from "@/lib/auth";

export default function RoleNav() {
  const [role, setRole] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function loadData() {
      const user = await getCurrentUser();

      if (!user) {
        setLoggedIn(false);
        return;
      }

      setLoggedIn(true);

      const userRole = await getUserRole();
      setRole(userRole);
    }

    loadData();
  }, []);

  // PUBLIC USER
  if (!loggedIn) {
    return (
      <>
        <Link
          href="/explore"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Explore
        </Link>

        <Link
          href="/leagues"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Leagues
        </Link>

        <Link
          href="/contact"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Contact
        </Link>
      </>
    );
  }

  // OWNER
  if (role === "owner") {
    return (
      <>
        <Link
          href="/owner-dashboard"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Dashboard
        </Link>

        <Link
          href="/owner"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Owner Portal
        </Link>

        <Link
          href="/leagues"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Leagues
        </Link>

        <Link
          href="/contact"
          className="text-sm font-medium text-slate-700 hover:text-emerald-600"
        >
          Contact
        </Link>
      </>
    );
  }

  // CUSTOMER
  return (
    <>
      <Link
        href="/explore"
        className="text-sm font-medium text-slate-700 hover:text-emerald-600"
      >
        Explore
      </Link>

      <Link
        href="/dashboard"
        className="text-sm font-medium text-slate-700 hover:text-emerald-600"
      >
        Dashboard
      </Link>

      <Link
        href="/my-bookings"
        className="text-sm font-medium text-slate-700 hover:text-emerald-600"
      >
        My Bookings
      </Link>

      <Link
        href="/leagues"
        className="text-sm font-medium text-slate-700 hover:text-emerald-600"
      >
        Leagues
      </Link>

      <Link
        href="/contact"
        className="text-sm font-medium text-slate-700 hover:text-emerald-600"
      >
        Contact
      </Link>
    </>
  );
}