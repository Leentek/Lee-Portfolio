import { Navigation } from '@/components/portfolio/navigation'
import { HeroSection } from '@/components/portfolio/hero-section'
import { StatsMarquee } from '@/components/portfolio/stats-marquee'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { ToolsSection } from '@/components/portfolio/tools-section'
import { AutomationSection } from '@/components/portfolio/automation-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { FooterSection } from '@/components/portfolio/footer-section'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      <HeroSection />
      <StatsMarquee />
      <ExperienceSection />
      <ProjectsSection />
      <ToolsSection />
      <AutomationSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
