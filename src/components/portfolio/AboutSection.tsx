import { personalInfo } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-br from-white via-red-50/15 to-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-red-100/30">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">
            My Story
          </h2>
          <div 
            className="text-lg text-gray-600 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: personalInfo.bio }}
          />
        </div>
        
        {/* Right side stats or highlights */}
        <div className="w-full md:w-1/3 space-y-4">
           <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
             <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Location</h3>
             <p className="text-gray-600">📍 {personalInfo.location}</p>
           </div>
           
           <div className="p-6 bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl border border-red-700 shadow-lg">
             <h3 className="font-serif text-xl font-bold mb-2">Status</h3>
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-300 animate-pulse"></span>
                <span className="text-red-100">Available for work</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
