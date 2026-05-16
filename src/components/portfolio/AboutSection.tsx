import { personalInfo } from "@/data/portfolioData";

export function AboutSection() {
	return (
		<section
			id="about"
			className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 shadow-sm border border-white/50"
		>
			<div className="flex flex-col md:flex-row gap-8 items-start">
				<div className="flex-1">
					<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
						My Story
					</h2>
					<div
						className="text-base md:text-lg text-gray-600 leading-relaxed space-y-3 md:space-y-4"
						dangerouslySetInnerHTML={{ __html: personalInfo.bio }}
					/>
				</div>

				{/* Right side stats or highlights */}
				<div className="w-full md:w-1/3 space-y-4">
					<div className="p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/50 shadow-sm">
						<h3 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 mb-2">
							Location
						</h3>
						<p className="text-sm md:text-base text-gray-600">
							📍 {personalInfo.location}
						</p>
					</div>

					<div className="p-4 md:p-6 bg-primary text-primary-foreground rounded-3xl shadow-sm">
						<h3 className="text-lg md:text-xl font-bold tracking-tight mb-2">
							Status
						</h3>
						<div className="flex items-center gap-2">
							<span className="w-2 h-2 rounded-full bg-white/50 animate-pulse"></span>
							<span className="text-sm md:text-base font-medium">
								Available for work
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
