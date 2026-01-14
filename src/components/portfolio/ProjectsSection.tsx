import { projects } from "@/data/portfolioData";
import { ExternalLink, ChevronRight } from "lucide-react";
import { useRef } from "react";

export function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-8">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          My Projects
        </h2>
        <button
          onClick={scrollRight}
          className="p-3 bg-red-700 hover:bg-red-800 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gradient-to-br from-red-900 via-red-800 to-black rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-shrink-0"
            style={{ width: '400px', minWidth: '400px' }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-black" />
              )}
              {/* External Link Icon - Top Right */}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-red-700/80 hover:bg-red-600 rounded-lg text-white transition-all backdrop-blur-sm"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col h-full min-h-[280px]">
              <div className="flex-1 mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-red-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Stack Tags - Bottom */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tech => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-red-50/50 text-red-700 text-xs font-medium rounded-full border border-red-100/50 hover:bg-red-700 hover:text-white hover:border-red-600 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
