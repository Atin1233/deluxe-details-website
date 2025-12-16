import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FooterSection } from "@/components/sections/footer-section";
import { CurtainRevealLayout } from "@/components/curtain-reveal-layout";
import { KineticMarquee } from "@/components/ui/kinetic-marquee";

export default function Home() {
  const navItems = [
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Process", link: "#process" },
    { name: "Features", link: "#features" },
  ];

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      <CurtainRevealLayout footer={<FooterSection />}>
        {/* Hero Section - The Hook */}
        <HeroSection />

        {/* Kinetic Marquee - Breaking the grid */}
        <div className="relative -my-8 md:-my-12 z-0">
          <KineticMarquee 
            text="PREMIUM MOBILE DETailing — CENTRAL NEW JERSEY — WE BRING THE SHINE TO YOU — "
            baseVelocity={0.5}
            skewFactor={0.8}
          />
        </div>

        {/* About Section - The Pitch */}
        <AboutSection />

        {/* Service Packages - The Core */}
        <WorksSection />

        {/* Kinetic Marquee - Second instance */}
        <div className="relative -my-8 md:-my-12 z-0">
          <KineticMarquee 
            text="BOOK NOW — (732) 677-0331 — SATISFACTION GUARANTEED — "
            baseVelocity={-0.4}
            skewFactor={0.6}
          />
        </div>

        {/* Process Section - Timeline */}
        <ProcessSection />

        {/* Features & Services - Bento Grid */}
        <SkillsSection />
      </CurtainRevealLayout>
    </>
  );
}
