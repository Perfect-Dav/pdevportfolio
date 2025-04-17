
import { Hero } from "@/components/HeroSection/Hero";
import { AboutSection } from "@/components/AboutSection/About";
import { Services } from "@/components/Services/Services";

export default function Home() {
  return (
   <main>
      <Hero />
      <AboutSection />
      <Services />
   </main>
  );
}