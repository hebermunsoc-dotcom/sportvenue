"use client";
import { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import Container from "@/components/layout/Container";
import SportFilterBar from "@/components/ui/SportFilterBar";
import ExploreTurfsGrid from "@/features/explore/ExploreTurfsGrid";

export default function ExplorePage() {
  const [selectedSport, setSelectedSport] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <section className="py-16">
  <h1 className="mb-4 text-4xl font-bold text-slate-900">
    Explore Sports Venues
  </h1>

  <p className="mb-8 text-slate-600">
    Discover and book sports venues across multiple sports.
  </p>
  <SearchBar
  value={searchQuery}
  onChange={setSearchQuery}
/>
  <div className="mt-6">
  <SportFilterBar
  selected={selectedSport}
  onSelect={setSelectedSport}
/>
</div>
<p className="mt-4 text-sm text-slate-600">
</p>
<p className="text-sm text-slate-600">
</p>
<div className="mt-10">
<ExploreTurfsGrid
  selectedSport={selectedSport}
  searchQuery={searchQuery}
/>
</div>
</section>
      </Container>
    </main>
  );
}