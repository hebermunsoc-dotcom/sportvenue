import { turfs } from "@/data/turfs";
import BookingForm from "@/components/booking/BookingForm";

export default async function BookingPage({
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
        Book {venue.name}
      </h1>

      <BookingForm venue={venue} />
    </main>
  );
}