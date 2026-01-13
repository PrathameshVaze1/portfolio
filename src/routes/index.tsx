import { createFileRoute } from '@tanstack/react-router'
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
  Header,
} from '@/components/portfolio'

export const Route = createFileRoute('/')({ component: Portfolio })

function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 scroll-smooth">
      <Header />
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>
    </main>
  )
}
