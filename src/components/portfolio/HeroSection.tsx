import { useEffect, useState } from "react";
import { personalInfo, socialLinks, navLinks } from "@/data/portfolioData";
import { Github, Linkedin, Twitter, Mail, FileText, Code, Menu, X } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const tagline = personalInfo.taglines[currentTagline];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayText === tagline) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentTagline((prev) => (prev + 1) % personalInfo.taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? tagline.substring(0, displayText.length - 1)
          : tagline.substring(0, displayText.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTagline]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold text-gray-900">
            {personalInfo.name}
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.resumeUrl}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href={personalInfo.sourceUrl}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                Source
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-dashed border-gray-300 animate-spin-slow p-2">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-coral-400 to-coral-600 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl text-white font-bold">
                    {personalInfo.name.charAt(0)}
                  </span>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-dashed border-gray-300"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-dashed border-gray-300"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-dashed border-gray-300"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-dashed border-gray-300"></div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                {personalInfo.name}
              </h1>
              <div className="h-10 md:h-12 mb-6">
                <span className="text-xl md:text-2xl text-coral-500 font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-900">4+</span>
                  <p className="text-sm text-gray-500">Years Exp</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-900">20+</span>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
                {/* <div className="text-center">
                  <span className="text-2xl font-bold text-gray-900">5+</span>
                  <p className="text-sm text-gray-500">Talks</p>
                </div> */}
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-200 text-gray-600 hover:text-coral-500 hover:border-coral-500 transition-all duration-300 hover:scale-110"
                    title={link.name}
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
