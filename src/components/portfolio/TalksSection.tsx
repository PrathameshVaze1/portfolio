import { talks } from "@/data/portfolioData";
import { Github, Youtube, MapPin } from "lucide-react";

export function TalksSection() {
  return (
    <section id="talks" className="py-20 px-6 border-t border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-coral-500 tracking-widest uppercase mb-2">
          Talks & Speaking
        </h2>
        <p className="text-gray-500 mb-8">
          Sharing knowledge and experiences with the developer community.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {talks.map((talk) => (
            <div
              key={talk.id}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              {/* Location Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {talk.locations.map((location) => (
                  <span
                    key={location}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100"
                  >
                    <MapPin className="w-3 h-3 text-coral-400" />
                    {location}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {talk.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {talk.description}
              </p>

              {/* Links */}
              <div className="flex gap-3">
                {talk.githubUrl && (
                  <a
                    href={talk.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="View Slides/Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {talk.videoUrl && (
                  <a
                    href={talk.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Watch Video"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <span className="font-mono">// Interested in having me speak at your event?</span>{" "}
          <a href="#contact" className="font-mono text-coral-500 hover:underline">
            Initialize_Contact()
          </a>
        </div>
      </div>
    </section>
  );
}
