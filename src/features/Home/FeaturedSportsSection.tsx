import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SportsCard from "@/components/ui/SportsCard";

import {
  Trophy,
  Circle,
  Dumbbell,
  Medal,
  Volleyball,
  Target,
  Zap,
  FootprintsIcon,
  SportShoeIcon,
} from "lucide-react";

const sports = [
  {
    name: "Football",
    icon: SportShoeIcon,
  },
  {
    name: "Cricket",
    icon: Trophy,
  },
  {
    name: "Badminton",
    icon: Zap,
  },
  {
    name: "Tennis",
    icon: Dumbbell,
  },
  {
    name: "Basketball",
    icon: Medal,
  },
  {
    name: "Volleyball",
    icon: Volleyball,
  },
];

export default function FeaturedSportsSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Featured Sports"
          description="Discover venues across multiple sports and find your next game."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport) => (
            <SportsCard
              key={sport.name}
              name={sport.name}
              icon={sport.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}