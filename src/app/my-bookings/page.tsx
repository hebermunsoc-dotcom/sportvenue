"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getCurrentUser } from "@/lib/auth";

interface Booking {
  id: number;
  user_email: string;
  venue_name: string;
  booking_date: string;
  time_slot: string;
  players: number;
  status: string;
  created_at: string;
}

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      const user = await getCurrentUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .eq("user_email", user.email)
        .order("created_at", {
          ascending: false,
        });

      if (!error && data) {
        setBookings(data);
      }

      setLoading(false);
    }

    loadBookings();
  }, []);

  if (loading) {
    return (
      <main className="p-12">
        Loading bookings...
      </main>
    );
  }

  async function cancelBooking(id: number) {
  const { data, error } = await supabase
  .from("bookings")
  .update({
    status: "Cancelled",
  })
  .eq("id", id)
  .select("*");

  console.log("Updated rows:", data);
  console.log("Update Error:", error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Booking cancelled successfully");

  setBookings((current) =>
    current.map((booking) =>
      booking.id === id
        ? {
            ...booking,
            status: "Cancelled",
          }
        : booking
    )
  );
}

  return (
    <main className="p-12">
      <h1 className="mb-8 text-4xl font-bold">
        My Bookings
      </h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-2xl border border-slate-200 p-6"
            >
              <h2 className="text-xl font-semibold">
  {booking.venue_name}
</h2>

<div className="mt-3 space-y-2 text-slate-600">
  <p>
    <strong>Date:</strong> {booking.booking_date}
  </p>

  <p>
    <strong>Time Slot:</strong> {booking.time_slot}
  </p>

  <p>
    <strong>Players:</strong> {booking.players}
  </p>

  <p>
    <strong>Status:</strong> {booking.status}
  </p>
</div>

<p className="mt-3 text-sm text-slate-500">
  Booking ID: {booking.id}
</p>
<button
  className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-sm text-red-600"
  onClick={() =>
    cancelBooking(booking.id)
  }
>
  Cancel Booking
</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}