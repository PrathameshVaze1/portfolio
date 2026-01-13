import { useEffect, useState } from "react";
import { personalInfo, socialLinks, navLinks } from "@/data/portfolioData";
import { Github, Linkedin, Twitter, Mail, FileText, Menu, X } from "lucide-react";

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
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-orange-50 -z-10" />
      
      {/* Animated mesh gradient overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `radial-gradient(at 40% 20%, rgba(244, 67, 54, 0.15) 0px, transparent 50%),
                           radial-gradient(at 80% 0%, rgba(255, 112, 112, 0.1) 0px, transparent 50%),
                           radial-gradient(at 0% 50%, rgba(229, 57, 53, 0.1) 0px, transparent 50%),
                           radial-gradient(at 80% 50%, rgba(255, 163, 163, 0.15) 0px, transparent 50%),
                           radial-gradient(at 0% 100%, rgba(211, 47, 47, 0.1) 0px, transparent 50%)`
        }}
      />
      
      {/* Floating animated shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden pointer-events-none">
        {/* Large floating circle */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-coral-200/20 to-coral-400/10 blur-3xl animate-pulse"
          style={{ top: '10%', right: '-10%', animationDuration: '4s' }}
        />
        {/* Small floating circle */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-orange-200/20 to-coral-300/10 blur-2xl animate-pulse"
          style={{ bottom: '20%', left: '-5%', animationDuration: '6s', animationDelay: '1s' }}
        />
        {/* Medium floating circle */}
        <div 
          className="absolute w-48 h-48 rounded-full bg-gradient-to-bl from-coral-100/30 to-coral-200/20 blur-2xl animate-pulse"
          style={{ top: '50%', right: '20%', animationDuration: '5s', animationDelay: '2s' }}
        />
        
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-4 h-4 bg-coral-300/40 rounded-full"
          style={{ top: '15%', left: '10%', animation: 'float 6s ease-in-out infinite' }}
        />
        <div 
          className="absolute w-3 h-3 bg-coral-400/30 rounded-full"
          style={{ top: '70%', right: '15%', animation: 'float 8s ease-in-out infinite reverse' }}
        />
        <div 
          className="absolute w-2 h-2 bg-coral-500/40 rounded-full"
          style={{ top: '40%', left: '5%', animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div 
          className="absolute w-5 h-5 bg-orange-300/30 rounded-full"
          style={{ bottom: '30%', right: '25%', animation: 'float 7s ease-in-out infinite', animationDelay: '0.5s' }}
        />
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-5 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-coral-600 hover:to-coral-500 transition-all duration-300">
            {personalInfo.name}
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <span className="w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-5">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium flex items-center gap-1.5 group"
              >
                <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Resume
              </a>
              <a
                href={personalInfo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium flex items-center gap-1.5 group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Source
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-coral-500 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100/50 bg-white/90 backdrop-blur-xl px-6 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-coral-500 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-6 pt-2 border-t border-gray-100">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  Resume
                </a>
                <a
                  href={personalInfo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-coral-500 transition-colors text-sm font-medium flex items-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Photo */}
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-coral-400/50 via-coral-500/30 to-orange-400/50 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Rotating gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral-400 via-coral-500 to-coral-600 p-1 shadow-xl shadow-coral-500/30 animate-spin-slow" style={{ animationDuration: '10s' }} />
              
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="/prathamesh.jpg"
                  alt={personalInfo.name}
                  width={224}
                  height={224}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-coral-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Decorative corners with animation */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-coral-400 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-top-5 group-hover:-left-5" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-coral-400 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-top-5 group-hover:-right-5" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-coral-400 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-bottom-5 group-hover:-left-5" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-coral-400 transition-all duration-300 group-hover:w-10 group-hover:h-10 group-hover:-bottom-5 group-hover:-right-5" />
              
              {/* Floating particles around photo */}
              <div className="absolute -top-2 left-1/2 w-2 h-2 bg-coral-400 rounded-full opacity-60" style={{ animation: 'float 4s ease-in-out infinite' }} />
              <div className="absolute top-1/2 -right-3 w-1.5 h-1.5 bg-coral-500 rounded-full opacity-50" style={{ animation: 'float 5s ease-in-out infinite reverse' }} />
              <div className="absolute -bottom-1 left-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }} />
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Greeting text */}
              <p className="text-gray-500 text-lg mb-2 font-medium tracking-wide">
                <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>👋</span> Hello, I'm
              </p>
              
              {/* Name with gradient */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">{personalInfo.name.split(' ')[0]}</span>
                <span className="bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent"> {personalInfo.name.split(' ')[1]}</span>
              </h1>
              
              {/* Typing animation with enhanced styling */}
              <div className="h-10 md:h-12 mb-6">
                <span className="text-xl md:text-2xl font-medium bg-gradient-to-r from-coral-500 to-orange-500 bg-clip-text text-transparent">
                  {displayText}
                  <span className="text-coral-500 animate-pulse">|</span>
                </span>
              </div>
              
              {/* Quick Stats with enhanced design */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                <div className="text-center group">
                  <span className="text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-coral-500 group-hover:to-coral-600 transition-all duration-300">4+</span>
                  <p className="text-sm text-gray-500 font-medium">Years Exp</p>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden lg:block" />
                <div className="text-center group">
                  <span className="text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-coral-500 group-hover:to-coral-600 transition-all duration-300">20+</span>
                  <p className="text-sm text-gray-500 font-medium">Projects</p>
                </div>
              </div>

              {/* Social Links with enhanced hover effects */}
              <div className="flex justify-center lg:justify-start gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-full border border-gray-200 text-gray-600 hover:text-white hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-coral-500/25 overflow-hidden"
                    title={link.name}
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-coral-500 to-coral-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full" />
                    <span className="relative z-10">{iconMap[link.icon]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-coral-500 transition-colors group">
          <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">Scroll</span>
          <div className="relative">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>
      
      {/* CSS keyframes for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
