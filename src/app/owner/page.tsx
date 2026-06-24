"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { getCurrentUser } from "@/lib/auth";
import { useEffect } from "react";

export default function OwnerPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [venues, setVenues] = useState<any[]>([]);

  async function loadVenues() {
  const user = await getCurrentUser();

  if (!user) return;

  const { data } = await supabase
    .from("owner_venues")
    .select("*")
    .eq("owner_email", user.email)
    .order("created_at", {
      ascending: false,
    });

  if (data) {
    setVenues(data);
  }
}

useEffect(() => {
  loadVenues();
}, []);

  async function handleSubmit() {
    const user = await getCurrentUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    const { error } = await supabase
      .from("owner_venues")
      .insert([
        {
          owner_email: user.email,
          name,
          location,
          price,
          description,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Venue added successfully");
    loadVenues();

    setName("");
    setLocation("");
    setPrice("");
    setDescription("");
  }

  return (
    <main className="max-w-2xl p-12">
      <h1 className="mb-8 text-4xl font-bold">
        Owner Portal
      </h1>

      <div className="space-y-4">
        <input
          placeholder="Venue Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="h-32 w-full rounded-xl border p-3"
        />

        <button
          onClick={handleSubmit}
          className="rounded-xl bg-emerald-500 px-6 py-3 text-white"
        >
          Add Venue
        </button>
      </div>
      <div className="mt-12">
  <h2 className="mb-4 text-2xl font-bold">
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