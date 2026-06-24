"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { supabase } from "@/lib/supabase";
import { getCurrentUser } from "@/lib/auth";

interface BookingFormProps {
  venue: {
    id: string | number;
    name: string;
  };
}

export default function BookingForm({
  venue,
}: BookingFormProps) {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [players, setPlayers] = useState(10);
  const [confirmed, setConfirmed] = useState(false);
 async function handleBooking() {
  if (!date || !slot) {
    alert("Please select a date and time slot.");
    return;
  }

  const user = await getCurrentUser();

  if (!user) {
    alert("Please login first.");
    return;
  }

  const { error } = await supabase
  .from("bookings")
  .insert([
    {
      user_email: user.email,
      venue_id: String(venue.id),
      venue_name: venue.name,
      booking_date: date,
      time_slot: slot,
      players: players,
      status: "Confirmed",
    },
  ]);

  if (error) {
    alert(error.message);
    return;
  }

  setConfirmed(true);
}
if (confirmed) {
  return (
    <div className="mt-8 max-w-xl rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h2 className="mb-4 text-2xl font-bold text-emerald-700">
        Booking Confirmed 🎉
      </h2>

      <div className="space-y-2 text-slate-700">
        <p>
          <strong>Date:</strong> {date}
        </p>

        <p>
          <strong>Time Slot:</strong> {slot}
        </p>

        <p>
          <strong>Players:</strong> {players}
        </p>
      </div>
    </div>
  );
}
  return (
    <div className="mt-8 max-w-xl rounded-2xl border border-slate-200 p-6">
      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium">
          Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-sm font-medium">
          Time Slot
        </label>

        <select
          value={slot}
          onChange={(e) => setSlot(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        >
          <option value="">Select Slot</option>
          <option>6:00 AM - 7:00 AM</option>
          <option>7:00 AM - 8:00 AM</option>
          <option>5:00 PM - 6:00 PM</option>
          <option>6:00 PM - 7:00 PM</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Number of Players
        </label>

        <input
          type="number"
          min="1"
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <Button
  className="w-full"
  onClick={handleBooking}
>
  Confirm Booking
</Button>
    </div>
  );
}