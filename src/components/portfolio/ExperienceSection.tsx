import { experience } from "@/data/portfolioData";
import { Briefcase, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-coral-500 tracking-widest uppercase mb-8">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={job.id}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-coral-400 flex items-center justify-center">
                {job.current && (
                  <div className="w-2 h-2 rounded-full bg-coral-400 animate-pulse"></div>
                )}
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {job.role}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {job.company}
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">{job.type}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">{job.duration}</span>
                    {job.current && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 text-sm">
                      <span className="text-coral-400 mt-1">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
