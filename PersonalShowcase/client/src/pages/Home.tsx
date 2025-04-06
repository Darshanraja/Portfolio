import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar 
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          education: () => scrollToSection(educationRef),
          experience: () => scrollToSection(experienceRef),
          projects: () => scrollToSection(projectsRef),
          skills: () => scrollToSection(skillsRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
      <HeroSection 
        onContactClick={() => scrollToSection(contactRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
      />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={educationRef}>
        <EducationSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <CertificationsSection />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer 
        onNavigate={{
          home: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
          about: () => scrollToSection(aboutRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
    </div>
  );
}
