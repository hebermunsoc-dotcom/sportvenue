import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CallToActionSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-emerald-600 px-8 py-16 text-center text-white md:px-16">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Play?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-emerald-50">
            Discover sports venues, find available slots,
            and book your next game in minutes.
          </p>

          <div className="flex justify-center gap-4">
            <Button
  className="border border-white bg-transparent text-white hover:bg-white hover:text-emerald-700"
>
  Explore Venue
</Button>

            <Button
  className="border border-white bg-transparent text-white hover:bg-white hover:text-emerald-700"
>
  List Your Venue
</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}