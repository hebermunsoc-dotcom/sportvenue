import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BenefitCard from "@/components/ui/BenefitCard";

import {
  Search,
  Calendar,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Building2,
} from "lucide-react";

const playerBenefits = [
  {
    title: "Easy Venue Discovery",
    description:
      "Find nearby sports venues quickly with powerful search and filtering.",
    icon: Search,
  },
  {
    title: "Instant Availability",
    description:
      "View available slots in real time and book without phone calls.",
    icon: Calendar,
  },
  {
    title: "Verified Venues",
    description:
      "Book trusted and verified sports facilities with confidence.",
    icon: ShieldCheck,
  },
];

const ownerBenefits = [
  {
    title: "More Bookings",
    description:
      "Reach new customers and increase venue utilization.",
    icon: TrendingUp,
  },
  {
    title: "Revenue Insights",
    description:
      "Track bookings and revenue through a centralized dashboard.",
    icon: BarChart3,
  },
  {
    title: "Venue Management",
    description:
      "Manage slots, bookings, and venue information easily.",
    icon: Building2,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeading
          title="Why Choose SportVenue?"
          description="Built for both players and venue owners."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              For Players
            </h3>

            <div className="grid gap-6">
              {playerBenefits.map((benefit) => (
                <BenefitCard
                  key={benefit.title}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              For Venue Owners
            </h3>

            <div className="grid gap-6">
              {ownerBenefits.map((benefit) => (
                <BenefitCard
                  key={benefit.title}
                  title={benefit.title}
                  description={benefit.description}
                  icon={benefit.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}