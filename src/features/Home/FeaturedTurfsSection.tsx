import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import TurfCard from "@/components/ui/TurfCard";

const turfs = [
  {
    id: 1,
    name: "Elite Football Arena",
    location: "Chennai",
    price: "₹1200/hr",
    rating: 4.8,
    image: "/images/public/turfs/football-turf.jpg",
    tags: ["Football", "5v5", "Floodlights"],
  },
  {
    id: 2,
    name: "Green Field Cricket Ground",
    location: "Coimbatore",
    price: "₹1500/hr",
    rating: 4.7,
    image: "/images/public/turfs/cricket-ground.jpg",
    tags: ["Cricket", "Parking", "Night Matches"],
  },
  {
    id: 3,
    name: "Smash Badminton Club",
    location: "Bangalore",
    price: "₹800/hr",
    rating: 4.9,
    image: "/images/public/turfs/badminton-court.jpg",
    tags: ["Badminton", "AC Court", "Indoor"],
  },
];

export default function FeaturedTurfsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <Container>
        <SectionHeading
          title="Featured Turfs"
          description="Explore some of the most popular sports venues."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {turfs.map((turf) => (
  <TurfCard
  key={turf.name}
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
      </Container>
    </section>
  );
}