import { education, achievements } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
	return (
		<section
			id="education"
			className="bg-gradient-to-br from-white via-red-50/15 to-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-red-100/30"
		>
			<h2 className="text-2xl sm:text-3xl font-bold font-serif text-gray-900 mb-6 md:mb-8">
				Education
			</h2>

			<div className="space-y-6">
				{[...education].reverse().map((edu) => (
					<div
						key={edu.id}
						className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-red-50/30 border border-red-100/50 hover:border-red-200 hover:shadow-md transition-all"
					>
						{/* Icon */}
						<div className="shrink-0">
							<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center border border-red-100 shadow-sm">
								<GraduationCap className="w-7 h-7 text-red-700" />
							</div>
						</div>

						{/* Content */}
						<div className="flex-1">
							<div className="flex flex-wrap items-start justify-between gap-4 mb-2">
								<div>
									<h3 className="text-lg md:text-xl font-bold text-gray-900">
										{edu.degree}
									</h3>
									<p className="text-sm md:text-base text-gray-600 font-medium">
										{edu.field}
									</p>
								</div>
								<span className="text-xs md:text-sm font-medium text-red-700 bg-red-50/50 px-2 md:px-3 py-1 rounded-full border border-red-100/50">
									{edu.duration}
								</span>
							</div>
							<p className="text-sm md:text-base text-gray-500 mb-3 md:mb-4 flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
								{edu.institution}
							</p>

							{edu.achievements && edu.achievements.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{edu.achievements.map((achievement, i) => (
										<span
											key={i}
											className="px-3 py-1 bg-white text-red-700 text-xs font-medium rounded-lg border border-red-100 hover:bg-red-50 transition-colors"
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
				<div className="mt-8 md:mt-12">
					<h3 className="text-base md:text-lg font-bold font-serif text-gray-900 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
						<Award className="w-5 h-5 md:w-6 md:h-6" />
						Achievements & Community
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{achievements.map((achievement, i) => (
							<div
								key={i}
								className="bg-red-50/50 rounded-xl border border-red-100/50 p-4 hover:bg-red-700 hover:text-white transition-all duration-300 cursor-default"
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
