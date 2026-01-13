import { education, achievements } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100/50">
      <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">
        Education
      </h2>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black transition-colors"
          >
            {/* Icon */}
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                <GraduationCap className="w-7 h-7 text-gray-900" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 font-medium">{edu.field}</p>
                </div>
                <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-100">{edu.duration}</span>
              </div>
              <p className="text-gray-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                {edu.institution}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white text-gray-600 text-xs font-medium rounded-lg border border-gray-100"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-bold font-serif text-gray-900 mb-6 flex items-center gap-3">
            <Award className="w-6 h-6" />
            Achievements & Community
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl border border-gray-100 p-4 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                <span className="text-sm font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
