import Hero from "@/components/sections/Hero";
import TestimonialStrip from "@/components/sections/TestimonialStrip"; // <-- Import Strip
import StatsCounter from "@/components/sections/StatsCounter";
import BrandTicker from "@/components/sections/BrandTicker";
import ServicesList from "@/components/sections/ServicesList";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import ExperienceProcess from "@/components/sections/ExperienceProcess";
import TrustLogos from "@/components/sections/TrustLogos";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="bg-dark-bg min-h-screen antialiased selection:bg-accent/30 selection:text-white">
      <Hero />
      <TestimonialStrip /> {/* <-- Layered right below the Hero area */}
      <StatsCounter />
      <BrandTicker />
      <ServicesList />
      <FeaturedProjects />
      <Skills />
      <ExperienceProcess />
      <TrustLogos />
      <FAQ />
      <CallToAction />
    </main>
  );
}