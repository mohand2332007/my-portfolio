import { Navigation } from "./components/Navigation"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { ProjectSection } from "./components/ProjectSection"
import { ExperienceSection } from "./components/ExperienceSection"
import { AchievementsSection } from "./components/AchievementsSection"
import { GallerySection } from "./components/GallerySection"
import { ContactSection } from "./components/ContactSection"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <AchievementsSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}

export default App
