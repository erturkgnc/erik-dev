import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProjectsSection from "@/components/ProjectsSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import SkillsSection from "@/components/SkillsSection";
import ApproachSection from "@/components/ApproachSection";
import SystemNote from "@/components/SystemNote";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsStrip />
      <ProjectsSection />
      <WhatIBuildSection />
      <SkillsSection />
      <ApproachSection />
      <SystemNote />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
