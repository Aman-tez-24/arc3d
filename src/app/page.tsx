import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import Showcase from "@/components/home/Showcase";
import Showbg from "@/components/home/Showbg";
import Services from "@/components/home/Services";
import Viewport from "@/components/home/Viewport";
import Workflow from "@/components/home/Workflow";
import MorphingParticles from "@/components/home/MorphingParticles";
import ContactSection from "@/components/home/ContactSection";
import Reviews from "@/components/home/Reviews";
export default function HomePage() {
  return (
    <main className="bg-[#f3f1eb] min-h-screen">
      <Hero />
      <IntroSection />
      <Showbg />
      <Showcase />
      <Services />
      <Viewport />
      <Workflow />
      <Reviews />
      <MorphingParticles />

      <ContactSection />
    </main>
  );
}
