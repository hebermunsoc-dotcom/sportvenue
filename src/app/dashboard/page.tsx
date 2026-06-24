"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getCurrentUser } from "@/lib/auth";

interface Booking {
  id: number;
  status: string;
  venue_name: string;
  booking_date: string;
}

export default function DashboardPage() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      const user = await getCurrentUser();

      if (!user) {
        setLoading(false);
        return;
      }

      setEmail(user.email || "");

      const { data } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_email", user.email)
        .order("created_at", { ascending: false });

      if (data) {
        setBookings(data);
      }

      setLoading(false);
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <main className="p-12">
        Loading Dashboard...
      </main>
    );
  }

  const totalBookings = bookings.length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  return (
    <main className="min-h-screen bg-slate-50 p-12">
      <h1 className="mb-2 text-4xl font-bold">
        Dashboard
      </h1>

      <p className="mb-8 text-slate-600">
        Welcome, {email}
      </p>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-slate-500">
            Total Bookings
          </h3>

          <p className="mt-2 text-4xl font-bold">
            {totalBookings}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-slate-500">
            Confirmed
          </h3>

          <p className="mt-2 text-4xl font-bold">
            {confirmedBookings}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-slate-500">
            Cancelled
          </h3>

          <p className="mt-2 text-4xl font-bold">
            {cancelledBookings}
          </p>
        </div>
      </div>

      <h2 className="mb-4 text-2xl font-bold">
        Recent Bookings
      </h2>

      <div className="space-y-4">
        {bookings.slice(0, 5).map((booking) => (
          <div
            key={booking.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <h3 className="font-semibold">
              {booking.venue_name}
            </h3>

            <p className="text-slate-600">
              {booking.booking_date}
            </p>

            <p className="text-sm">
              Status: {booking.status}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}