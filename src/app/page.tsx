import Script from "next/script";
import { AboutSection } from "@/components/sections/about";
import { AchievementsSection } from "@/components/sections/achievements";
import { ArchitectureSection } from "@/components/sections/architecture";
import { ExperienceSection } from "@/components/sections/experience";
import { GitHubSection } from "@/components/sections/github-section";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ResumeContactSection } from "@/components/sections/resume-contact";
import { SkillsSection } from "@/components/sections/skills";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { profile, projects, skills } from "@/data/portfolio";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.displayName,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK"
  },
  url: profile.website,
  sameAs: [profile.github, profile.linkedin, profile.website],
  knowsAbout: skills.flatMap((group) => group.skills),
  hasOccupation: {
    "@type": "Occupation",
    name: "Backend and AI Engineer",
    skills: ["Backend Engineering", "AI Engineering", "System Design", "RAG", "Agentic AI", "API Design"]
  },
  makesOffer: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.description
  }))
};

export default function Home() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="noise" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <GitHubSection />
        <AchievementsSection />
        <ResumeContactSection />
      </main>
      <Footer />
    </>
  );
}
