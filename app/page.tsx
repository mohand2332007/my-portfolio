import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { ProjectSection } from "@/components/project-section"
import { ExperienceSection } from "@/components/experience-section"
import { AchievementsSection } from "@/components/achievements-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectSection />
      <ExperienceSection />
      <AchievementsSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}
