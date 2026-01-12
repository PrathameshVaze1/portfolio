import { skills } from "@/data/portfolioData";

const categoryLabels: Record<string, { title: string; icon: string }> = {
  backend: { title: "Backend", icon: "⚙️" },
  frontend: { title: "Frontend", icon: "🎨" },
  devops: { title: "DevOps / Cloud", icon: "☁️" },
  tools: { title: "Tools & Others", icon: "🔧" },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50/50 border-t border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-coral-500 tracking-widest uppercase mb-8">
          Stack Inventory
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{categoryLabels[category]?.icon}</span>
                <h3 className="font-semibold text-gray-900">
                  {categoryLabels[category]?.title || category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-lg border border-gray-100 hover:border-coral-300 hover:bg-coral-50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
