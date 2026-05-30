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
export const metadata = {
  title: "Arc3D – Official Platform for 3D Architectural Visualization",
  description:
    "Arc3D (arc3d.in) is a next-generation architectural visualization platform for 3D rendering, AI floor planning, and immersive architectural design workflows.",
  keywords: [
    "Arc3D",
    "arc3d",
    "3D architecture",
    "architectural visualization",
    "AI floor planning",
  ],
};
export default function HomePage() {
  return (
    <main className="bg-[#f3f1eb] min-h-screen">
      <Hero />
      <IntroSection />
      <Showbg />
      <Showcase />
      <Services />
      {/*   <Viewport /> */}
      <Workflow />
      <Reviews />
      <MorphingParticles />

      <ContactSection />
    </main>
  );
}
