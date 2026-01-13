import { skills } from "@/data/portfolioData";

const categoryLabels: Record<string, { title: string; icon: string }> = {
  backend: { title: "Backend", icon: "⚙️" },
  frontend: { title: "Frontend", icon: "🎨" },
  devops: { title: "DevOps / Cloud", icon: "☁️" },
  tools: { title: "Tools & Others", icon: "🔧" },
};

export function SkillsSection() {
  return (
    <section id="skills" className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100/50">
      <h2 className="text-3xl font-bold font-serif text-gray-900 mb-8">
        Technical Arsenal
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl p-2 bg-gray-50 rounded-xl border border-gray-100">{categoryLabels[category]?.icon}</span>
              <h3 className="font-bold text-gray-900 text-lg">
                {categoryLabels[category]?.title || category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-xl border border-gray-100 hover:bg-gray-900 hover:text-white hover:border-black transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
