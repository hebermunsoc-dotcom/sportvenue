"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function OwnerDashboardPage() {
  const [venueCount, setVenueCount] = useState(0);
  const [venues, setVenues] = useState<any[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const { data } = await supabase
      .from("owner_venues")
      .select("*")
      .eq("owner_email", user.email);

    if (data) {
      setVenues(data);
      setVenueCount(data.length);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 p-12">
      <h1 className="mb-8 text-4xl font-bold">
        Owner Dashboard
      </h1>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-slate-600">
            Total Venues
          </h2>

          <p className="mt-3 text-3xl font-bold">
            {venueCount}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-slate-600">
            Active Venues
          </h2>

          <p className="mt-3 text-3xl font-bold">
            {venueCount}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-slate-600">
            Venue Listings
          </h2>

          <p className="mt-3 text-3xl font-bold">
            {venueCount}
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">
          My Venues
        </h2>

        <div className="space-y-4">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="rounded-xl border border-slate-200 p-4"
            >
              <h3 className="font-semibold">
                {venue.name}
              </h3>

              <p className="text-slate-600">
                {venue.location}
              </p>

              <p className="font-medium text-emerald-600">
                {venue.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}