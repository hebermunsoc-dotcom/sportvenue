"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { useUser } from "@/hooks/useUser";

export default function CallToActionSection() {
  const { user, loading } = useUser();

  if (loading) return null;

  if (user) return null;

  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-emerald-600 px-8 py-16 text-center text-white md:px-16">
          <h2 className="mb-4 text-4xl font-bold">
            Own a Sports Venue?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-emerald-50">
            Join TurfSlots as a venue owner and start accepting bookings
            from players across your city.
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