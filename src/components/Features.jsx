import React from 'react';

const Features = () => {
  return (
    // Clean light background with subtle overflow handling for the ambient shades
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      
      {/* Very faint background shades to match the theme without making it dark */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d98ba]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DC2626]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">
        
        {/* Institute Card (Skyblue/Blue Theme to match Hero) */}
        {/* Changed: shadow-lg to shadow-xl shadow-[#0d98ba]/10 and border-gray-100 to border-gray-200 */}
        <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-[#0d98ba]/10 border border-gray-200 hover:shadow-2xl hover:shadow-[#0d98ba]/20 hover:border-[#0d98ba]/30 hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-16 h-16 bg-sky-50 text-[#0d98ba] flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Apogee Institute</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Join our comprehensive programs led by industry experts. We focus on practical skills, modern curriculum, and career-oriented growth.
          </p>
          <a href="#institute" className="text-[#0d98ba] font-bold text-lg hover:text-sky-900 flex items-center transition-colors">
            View Programs 
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Library Card (Red Theme) */}
        {/* Changed: shadow-lg to shadow-xl shadow-[#DC2626]/10 and border-gray-100 to border-gray-200 */}
        <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-[#DC2626]/10 border border-gray-200 hover:shadow-2xl hover:shadow-[#DC2626]/20 hover:border-[#DC2626]/30 hover:-translate-y-2 transition-all duration-300 group">
          <div className="w-16 h-16 bg-red-50 text-[#DC2626] flex items-center justify-center rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">Apogee Library</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Access thousands of physical books, digital journals, and research papers. A quiet space designed for deep focus and exploration.
          </p>
          <a href="#library" className="text-[#DC2626] font-bold text-lg hover:text-red-900 flex items-center transition-colors">
            Search Catalog
            <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Features;