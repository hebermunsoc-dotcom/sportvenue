import { turfs } from "@/data/turfs";

export default async function VenuePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const venue = turfs.find(
    (turf) => String(turf.id) === id
  );

  if (!venue) {
    return (
      <main className="p-12">
        <h1 className="text-3xl font-bold">
          Venue Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white p-12">
      <h1 className="mb-4 text-4xl font-bold">
        {venue.name}
      </h1>

      <p className="mb-2 text-slate-600">
        📍 {venue.location}
      </p>

      <p className="mb-6 text-slate-600">
        ⭐ {venue.rating}
      </p>

      <p className="mb-6 font-semibold text-emerald-600">
        {venue.price}
      </p>

      <p className="mb-8 max-w-2xl text-slate-700">
        {venue.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {venue.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}