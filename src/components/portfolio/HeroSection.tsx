import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolioData";

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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
    <section id="hero" className="bg-gradient-to-br from-white via-red-50/20 to-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-red-100/30">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Profile Photo - Large Card Style */}
        <div className="relative shrink-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden bg-gray-100 shadow-inner">
            <img
              src="https://pub-b90e26930c594e45a2ab4ae2d9976c3b.r2.dev/img/prathamesh.jpg"
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top transition-all duration-700"
              width={320}
              height={320}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          {/* Simple decoration */}
          <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-[2rem] bg-gray-50 border border-gray-100"></div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-gray-900 leading-tight">
            {personalInfo.name}
          </h1>
          
          <div className="space-y-3 md:space-y-4 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
            <p>
              I'm a <span className="font-medium text-red-700">{displayText}</span>
              <span className="animate-pulse ml-0.5 text-red-700">|</span>
            </p>
            <p className="font-light text-sm md:text-base">
              Professional Laravel Backend Developer with 3+ years of experience building secure, scalable applications and APIs. 
              I specialize in performance tuning, codebase modernization, server migration, and seamless third-party integrations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
             {/* Simple tags instead of big stats */}
             <div className="px-4 py-2 bg-red-50/50 rounded-full border border-red-100/50 text-sm font-medium text-red-700 hover:bg-red-100/70 transition-all">
               3+ Years Experience
             </div>
             <div className="px-4 py-2 bg-red-50/50 rounded-full border border-red-100/50 text-sm font-medium text-red-700 hover:bg-red-100/70 transition-all">
               20+ Projects
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
