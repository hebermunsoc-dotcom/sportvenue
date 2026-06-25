"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { getCurrentUser } from "@/lib/auth";

export default function OwnerPage() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [venues, setVenues] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

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

    setName("");
    setLocation("");
    setPrice("");
    setDescription("");

    loadVenues();
  }

  async function handleDelete(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this venue?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("owner_venues")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Venue deleted successfully");

    loadVenues();
  }

  function handleEdit(venue: any) {
    setEditingId(venue.id);

    setName(venue.name);
    setLocation(venue.location);
    setPrice(venue.price);
    setDescription(venue.description);
  }

  async function handleUpdate() {
    if (!editingId) return;

    const { error } = await supabase
      .from("owner_venues")
      .update({
        name,
        location,
        price,
        description,
      })
      .eq("id", editingId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Venue updated successfully");

    setEditingId(null);

    setName("");
    setLocation("");
    setPrice("");
    setDescription("");

    loadVenues();
  }

  function handleCancelEdit() {
    setEditingId(null);

    setName("");
    setLocation("");
    setPrice("");
    setDescription("");
  }

  return (
    <main className="max-w-4xl p-12">
      <h1 className="mb-8 text-4xl font-bold">
        Owner Portal
      </h1>

      <div className="rounded-2xl border border-slate-200 p-6">
        <h2 className="mb-6 text-2xl font-semibold">
          {editingId ? "Edit Venue" : "Add Venue"}
        </h2>

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

          {editingId ? (
            <div className="flex gap-3">
              <button
                onClick={handleUpdate}
                className="rounded-xl bg-blue-600 px-6 py-3 text-white"
              >
                Save Changes
              </button>

              <button
                onClick={handleCancelEdit}
                className="rounded-xl bg-slate-300 px-6 py-3"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmit}
              className="rounded-xl bg-emerald-500 px-6 py-3 text-white"
            >
              Add Venue
            </button>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-2xl font-bold">
          My Venues
        </h2>

        <div className="space-y-4">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="rounded-xl border border-slate-200 p-5"
            >
              <h3 className="text-lg font-semibold">
                {venue.name}
              </h3>

              <p className="text-slate-600">
                {venue.location}
              </p>

              <p className="font-medium text-emerald-600">
                {venue.price}
              </p>

              {venue.description && (
                <p className="mt-2 text-slate-600">
                  {venue.description}
                </p>
              )}

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleEdit(venue)}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(venue.id)}
                  className="rounded-lg bg-red-600 px-4 py-2 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}