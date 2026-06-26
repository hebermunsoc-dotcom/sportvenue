import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CallToActionSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-emerald-600 px-8 py-16 text-center text-white md:px-16">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Own a Sports Venue?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-emerald-50">
            Join TurfSlots as a venue owner and start accepting bookings from
            thousands of players looking for sports venues near them.
          </p>

          <Link href="/signup">
            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-emerald-700">
              List Your Venue
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}