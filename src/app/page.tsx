import CallToActionSection from "@/features/Home/CallToActionSection";
import BenefitsSection from "@/features/Home/BenefitsSection";
import HowItWorksSection from "@/features/Home/HowItWorksSection";
import FeaturedTurfsSection from "@/features/Home/FeaturedTurfsSection";
import FeaturedSportsSection from "@/features/Home/FeaturedSportsSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/features/Home/HeroSection";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedSportsSection />
      <FeaturedTurfsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}