import { projects } from "@/data/portfolioData";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-8">
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-3xl font-bold font-serif text-gray-900">
          My Projects
        </h2>
        {/* Optional: 'View All' link could go here */}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-900 rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            {/* Dark Card Content */}
            <div className="p-8 h-full flex flex-col min-h-[320px] relative z-10">
              <div className="flex justify-between items-start mb-6">
                 {/* Tech Badge */}
                 <div className="flex flex-wrap gap-2">
                   {project.techStack.slice(0, 3).map(tech => (
                     <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/10">
                       {tech}
                     </span>
                   ))}
                 </div>
                 
                 {/* Links */}
                 <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-all">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                 </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-bold text-white mb-3 leading-tight group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Subtle hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
            
            {/* Background Image / Decoration - Low opacity */}
             <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
               {project.image ? (
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale" />
               ) : (
                 <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black pattern-grid-lg" />
               )}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
