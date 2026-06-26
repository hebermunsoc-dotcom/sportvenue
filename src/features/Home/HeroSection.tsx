"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import StatItem from "@/components/ui/StatItem";
import VenuePreviewCard from "@/components/ui/VenuePreviewCard";
import { useUser } from "@/hooks/useUser";

export default function HeroSection() {
  const { user, role, loading } = useUser();
  console.log("USER:", user);
console.log("ROLE:", role);

  return (
    <Container>
      <section className="py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              TurfSlots MVP
            </span>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
              Discover and Book Sports Venues Near You
            </h1>

            <p className="mb-8 text-lg text-slate-700">
              Explore football turfs, cricket grounds, badminton courts,
              tennis arenas and more — all in one place.
            </p>

            {!loading && (
              <div className="mb-12 flex flex-wrap gap-4">

                {/* Public */}
                {!user && (
                  <>
                    <Link href="/explore">
                      <Button>
                        Explore Venues
                      </Button>
                    </Link>

                    <Link href="/signup">
                      <Button variant="outline">
                        List Your Venue
                      </Button>
                    </Link>
                  </>
                )}

                {/* Customer */}
                {user && role === "customer" && (
                  <Link href="/explore">
                    <Button>
                      Explore Venues
                    </Button>
                  </Link>
                )}

                {/* Owner */}
                {user && role === "owner" && (
                  <Link href="/owner">
                    <Button>
                      Manage Venues
                    </Button>
                  </Link>
                )}

              </div>
            )}

            <div className="flex gap-10">
              <StatItem value="500+" label="Venues" />
              <StatItem value="10K+" label="Players" />
              <StatItem value="50+" label="Cities" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <VenuePreviewCard />
          </div>
        </div>
      </section>
    </Container>
  );
}