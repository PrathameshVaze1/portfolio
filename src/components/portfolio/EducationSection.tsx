import { education, achievements } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-50/50 border-t border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-coral-500 tracking-widest uppercase mb-8">
          Education
        </h2>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-xl border border-gray-100 p-6 flex gap-6"
            >
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-xl bg-coral-50 flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-coral-500" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600">{edu.field}</p>
                  </div>
                  <span className="text-sm text-gray-500">{edu.duration}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">{edu.institution}</p>

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded border border-gray-100"
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
            <h3 className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-6">
              Achievements & Community
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3"
                >
                  <Award className="w-5 h-5 text-coral-400 shrink-0" />
                  <span className="text-sm text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
