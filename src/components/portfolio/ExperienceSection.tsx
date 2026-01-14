import { experience } from "@/data/portfolioData";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-gradient-to-br from-white via-red-50/15 to-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-red-100/30">
      <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">
        Work Experience
      </h2>

      <div className="relative space-y-12">
        {/* Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-red-200 via-red-300 to-red-200 hidden md:block"></div>

        {experience.map((job) => (
          <div key={job.id} className="relative md:pl-12 group">
             {/* Timeline Dot */}
             <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white border-2 border-red-200 flex items-center justify-center z-10 hidden md:flex group-hover:border-red-500 transition-colors shadow-md">
               <div className={`w-2 h-2 rounded-full ${job.current ? 'bg-red-500 animate-pulse' : 'bg-red-300 group-hover:bg-red-600 transition-colors'}`}></div>
             </div>

             <div className="flex flex-col sm:flex-row gap-4 sm:items-start justify-between mb-4">
                <div>
                   <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                   <div className="flex items-center gap-2 text-gray-600 mt-1">
                     <Briefcase className="w-4 h-4 text-red-600" />
                     <span className="font-medium">{job.company}</span>
                     <span>•</span>
                     <span className="text-sm bg-red-50/50 px-2 py-0.5 rounded text-red-700 border border-red-100/50">{job.type}</span>
                   </div>
                </div>
                <div className="text-sm font-medium text-red-700 whitespace-nowrap bg-red-50/50 px-3 py-1 rounded-full w-fit border border-red-100/50">
                   {job.duration}
                </div>
             </div>

             <ul className="space-y-3">
               {job.description.map((point, i) => (
                 <li key={i} className="text-gray-600 leading-relaxed flex items-start gap-3">
                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                   {point}
                 </li>
               ))}
             </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
