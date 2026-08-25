import React from 'react';

const About = () => {
  return (
    // Padding py-24 se py-16 kar di hai compact look ke liye
    <section className="py-16 px-6 bg-white relative overflow-hidden" id="about">
      
      {/* Faded Background Watermark - Size slightly reduced */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[90px] md:text-[140px] font-black text-gray-50 opacity-60 pointer-events-none select-none z-0">
        ABOUT
      </div>

      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-[#0d98ba]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section (Margin reduced) */}
        <div className="text-center mb-10 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            About Apogee
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#0d98ba] to-[#3db2ce] mx-auto rounded-full"></div>
        </div>

        {/* Highlighted Main Description (Compact Padding & Margin) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-sky-50/50 via-white to-red-50/50 p-8 md:p-10 rounded-[2rem] shadow-xl shadow-[#0d98ba]/10 border border-gray-100 relative overflow-hidden">
             
             {/* Decorative Quote Mark */}
             <div className="absolute -top-6 -left-1 text-[120px] text-[#0d98ba]/10 font-serif leading-none select-none">
               "
             </div>
             
             <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium text-center relative z-10">
              <span className="font-extrabold text-[#0d98ba] tracking-wide">Apogee Library</span> is a premium self-study space located in <span className="text-[#DC2626] font-extrabold">Mankapur</span>. It is thoughtfully designed for students and aspirants who demand a peaceful, highly disciplined, and exceptionally comfortable environment to study and achieve their goals.
            </p>
          </div>
        </div>

        {/* The 3 Core Pillars (Compact Grid & Cards) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* 1. Peaceful Environment */}
          <div className="bg-white p-8 rounded-[1.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0d98ba]/30 hover:border-[#0d98ba]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-bl-[100%] -z-0 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#0d98ba] to-[#3db2ce] text-white flex items-center justify-center rounded-xl mb-6 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">Peaceful Environment</h3>
            <p className="relative z-10 text-gray-600 leading-relaxed font-medium text-sm">
              A quiet, distraction-free zone where you can immerse yourself entirely in your studies without any interruptions.
            </p>
          </div>

          {/* 2. Better Focus */}
          <div className="bg-white p-8 rounded-[1.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#DC2626]/30 hover:border-[#DC2626]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-100 rounded-bl-[100%] -z-0 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#ef4444] text-white flex items-center justify-center rounded-xl mb-6 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">Better Focus</h3>
            <p className="relative z-10 text-gray-600 leading-relaxed font-medium text-sm">
              An atmosphere strictly designed to enhance concentration, helping you crack competitive exams with sheer dedication.
            </p>
          </div>

          {/* 3. Comfortable Study */}
          <div className="bg-white p-8 rounded-[1.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0d98ba]/30 hover:border-[#0d98ba]/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100 rounded-bl-[100%] -z-0 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-[#0d98ba] to-[#3db2ce] text-white flex items-center justify-center rounded-xl mb-6 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🪑</span>
            </div>
            <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3">Comfortable Study</h3>
            <p className="relative z-10 text-gray-600 leading-relaxed font-medium text-sm">
              Premium ergonomic seating, spacious desks, and perfect lighting to support long hours of highly productive learning.
            </p>
          </div>

        </div>

        {/* --- OWNER DETAILS SECTION (Compact) --- */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-gray-900">Meet the Founder</h3>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-[1.5rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8 hover:shadow-2xl hover:border-[#0d98ba]/20 transition-all duration-500">
            
            {/* Profile Picture Placeholder - Size reduced */}
            <div className="flex-shrink-0 relative">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#0d98ba] to-[#DC2626] p-1 shadow-lg">
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white">
                  <img 
                    src="https://api.dicebear.com/7.x/initials/svg?seed=Shivansh&backgroundColor=f3f4f6&textColor=0d98ba" 
                    alt="Shivansh Dwivedi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative Badge */}
              <div className="absolute bottom-1 right-1 bg-white p-1.5 rounded-full shadow-md text-lg">
                👨‍💻
              </div>
            </div>

            {/* Details & Message */}
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-extrabold text-gray-900 mb-1">Shivansh Dwivedi</h4>
              <p className="text-[#DC2626] font-bold tracking-wider uppercase text-xs mb-3">Owner & Founder</p>
              
              <p className="text-gray-600 leading-relaxed text-base font-medium italic relative">
                <span className="text-3xl text-[#0d98ba]/20 absolute -top-3 -left-3">"</span>
                My vision was to build a sanctuary in Mankapur where true aspirants can escape the noise. At Apogee, we provide the perfect ecosystem for your focus, because your success is our ultimate goal.
                <span className="text-3xl text-[#0d98ba]/20 absolute -bottom-4 -right-3">"</span>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;