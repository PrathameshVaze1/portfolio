import { personalInfo } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 border-t border-dashed border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-semibold text-coral-500 tracking-widest uppercase mb-8">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Bio Text */}
          <div className="md:col-span-2">
            <p 
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: personalInfo.bio }}
            />
            
            {/* Highlights */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-gray-600">Available for work</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-600">📍 {personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 p-6 flex flex-col justify-center items-center">
                <div className="text-4xl mb-3">💻</div>
                <p className="text-sm text-gray-500 text-center">
                  Crafting digital experiences with passion
                </p>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-coral-200"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
