import { createFileRoute } from '@tanstack/react-router'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
} from '@/components/portfolio'

export const Route = createFileRoute('/')({ component: Portfolio })

function Portfolio() {
  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </main>
  )
}
