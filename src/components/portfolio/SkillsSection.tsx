import { skills } from "@/data/portfolioData";

const categoryLabels: Record<string, { title: string; icon: string }> = {
	backend: { title: "Backend", icon: "⚙️" },
	frontend: { title: "Frontend", icon: "🎨" },
	devops: { title: "DevOps / Cloud", icon: "☁️" },
	tools: { title: "Tools & Others", icon: "🔧" },
};

export function SkillsSection() {
	return (
		<section
			id="skills"
			className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-sm border border-white/50"
		>
			<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8">
				Technical Arsenal
			</h2>

			<div className="grid md:grid-cols-2 gap-8">
				{Object.entries(skills).map(([category, skillList]) => (
					<div key={category} className="space-y-4">
						<div className="flex items-center gap-3 mb-2">
							<span className="text-xl md:text-2xl p-2 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm">
								{categoryLabels[category]?.icon}
							</span>
							<h3 className="font-bold text-gray-900 text-base md:text-lg">
								{categoryLabels[category]?.title || category}
							</h3>
						</div>
						<div className="flex flex-wrap gap-2">
							{skillList.map((skill) => (
								<span
									key={skill}
									className="px-4 py-2 bg-white/80 backdrop-blur-sm text-foreground text-sm font-medium rounded-xl border border-white/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default shadow-sm"
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
