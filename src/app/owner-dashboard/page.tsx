export default function OwnerDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-12">
      <h1 className="mb-8 text-4xl font-bold">
        Owner Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            Total Venues
          </h2>

          <p className="mt-3 text-3xl font-bold">
            --
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            Total Bookings
          </h2>

          <p className="mt-3 text-3xl font-bold">
            --
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <h2 className="text-lg font-semibold">
            Active Venues
          </h2>

          <p className="mt-3 text-3xl font-bold">
            --
          </p>
        </div>
      </div>
    </main>
  );
}