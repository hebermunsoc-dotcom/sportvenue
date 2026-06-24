import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { Search, Calendar, Trophy } from "lucide-react";

const steps = [
  {
    title: "Discover Venues",
    description:
      "Browse football turfs, cricket grounds, badminton courts, and more.",
    icon: Search,
  },
  {
    title: "Select Your Slot",
    description:
      "View availability and choose the time that works for you.",
    icon: Calendar,
  },
  {
    title: "Book & Play",
    description:
      "Confirm your booking and enjoy your game without hassle.",
    icon: Trophy,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="How It Works"
          description="Book your favorite sports venue in just a few simple steps."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mb-5 flex justify-center">
                  <Icon className="h-12 w-12 text-emerald-600" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}