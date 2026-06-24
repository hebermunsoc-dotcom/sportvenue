import TurfCard from "@/components/ui/TurfCard";
import { turfs } from "@/data/turfs";

interface ExploreTurfsGridProps {
  selectedSport: string;
  searchQuery: string;
}

export default function ExploreTurfsGrid({
  selectedSport,
  searchQuery,
}: ExploreTurfsGridProps){
  const filteredTurfs = turfs.filter((turf) => {
  const matchesSport =
    selectedSport === "All" ||
    turf.tags.includes(selectedSport);

  const query = searchQuery.toLowerCase();

  const matchesSearch =
    turf.name.toLowerCase().includes(query) ||
    turf.location.toLowerCase().includes(query) ||
    turf.tags.some((tag) =>
      tag.toLowerCase().includes(query)
    );
    

  return matchesSport && matchesSearch;
});

if (filteredTurfs.length === 0) {
  return (
    <div className="rounded-2xl border border-slate-200 p-12 text-center">
      <h3 className="mb-2 text-xl font-semibold text-slate-900">
        No venues found
      </h3>

      <p className="text-slate-600">
        Try changing your search or filter selection.
      </p>
    </div>
  );
}

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredTurfs.map((turf) => (
        <TurfCard
          key={turf.id}
          id={turf.id}
          name={turf.name}
          location={turf.location}
          price={turf.price}
          rating={turf.rating}
          image={turf.image}
          tags={turf.tags}
        />
      ))}
    </div>
  );
}