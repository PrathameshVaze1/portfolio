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
    <section id="projects" className="bg-gradient-to-br from-white via-red-50/15 to-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-red-100/30">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          My Projects
        </h2>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-shrink-0 border border-gray-100"
            style={{ width: '400px', minWidth: '400px' }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden rounded-t-[2rem]">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100" />
              )}
              {/* External Link Icon - Top Right */}
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-red-700 hover:bg-red-800 rounded-lg text-white transition-all shadow-md"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col h-full min-h-[280px]">
              <div className="flex-1 mb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
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
