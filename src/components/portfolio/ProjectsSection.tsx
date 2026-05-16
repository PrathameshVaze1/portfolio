import { projects } from "@/data/portfolioData";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

export function ProjectsSection() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	return (
		<section
			id="projects"
			className="bg-white/60 backdrop-blur-xl rounded-[2rem] p-4 sm:p-6 md:p-12 shadow-sm border border-white/50"
		>
			<div className="flex items-center justify-between mb-4 md:mb-8">
				<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
					My Projects
				</h2>
			</div>

			<div
				ref={scrollContainerRef}
				className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible scrollbar-hide pb-4 scroll-smooth snap-x snap-mandatory md:snap-none -mx-4 sm:-mx-6 md:mx-0 px-4 sm:px-6 md:px-0"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					WebkitOverflowScrolling: "touch",
				}}
			>
				{[...projects].reverse().map((project) => (
					<div
						key={project.id}
						className="group relative bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex-shrink-0 md:flex-shrink border border-white/60 snap-center w-[calc(100vw-4rem)] sm:w-[calc(100vw-6rem)] md:w-full max-w-full"
					>
						{/* Project Image */}
						<div className="relative h-40 sm:h-48 overflow-hidden rounded-t-[2rem]">
							{project.image ? (
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
									width={400}
									height={192}
									loading="lazy"
									decoding="async"
								/>
							) : (
								<div className="w-full h-full bg-secondary/50" />
							)}
							{/* External Link Icon - Top Right */}
							{project.liveUrl && (
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-primary hover:bg-primary/90 rounded-lg text-primary-foreground transition-all shadow-sm"
									onClick={(e) => e.stopPropagation()}
								>
									<ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
								</a>
							)}
						</div>

						{/* Card Content */}
						<div className="p-4 sm:p-5 md:p-6 flex flex-col h-full min-h-[200px] sm:min-h-[240px] md:min-h-[280px]">
							<div className="flex-1 mb-3 md:mb-4">
								<h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors tracking-tight">
									{project.title}
								</h3>
								<p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
									{project.description}
								</p>
							</div>

							{/* Tech Stack Tags - Bottom */}
							<div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
								{project.techStack.map((tech) => (
									<span
										key={tech}
										className="px-2 md:px-3 py-0.5 md:py-1 bg-white/60 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium rounded-full border border-white/60 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default shadow-sm"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
