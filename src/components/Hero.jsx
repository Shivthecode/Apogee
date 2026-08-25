import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#e6f7fa] text-gray-900 py-24 lg:py-32 px-6 relative overflow-hidden">
      
      {/* Background Orbs for the Theme */}
      <div className="absolute top-[-10%] left-[-5%] w-[450px] h-[450px] bg-sky-300/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[450px] h-[450px] bg-[#0d98ba]/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#DC2626]/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Dotted Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #0d98ba 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Call to Actions */}
        <div className="text-center lg:text-left">
          
          {/* Small Top Badge */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/60 border border-[#0d98ba]/30 backdrop-blur-sm shadow-sm">
            <span className="text-sm font-bold text-[#0d98ba] uppercase tracking-wider">
              📚 Welcome to the Future of Learning
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
            Elevate Your <br className="hidden lg:block" />
            Potential at <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d98ba] to-[#DC2626] drop-shadow-sm">
              Apogee
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-700 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            A premier institution for advanced learning, paired with a world-class library. Discover courses, access thousands of resources, and shape your future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12">
            <button className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-bold shadow-[0_4px_14px_0_rgba(220,38,38,0.25)] hover:bg-[#B91C1C] hover:-translate-y-1 transition-all duration-300">
              Explore Programs
            </button>
            <button className="border-2 border-[#0d98ba] text-[#0d98ba] px-8 py-3.5 rounded-lg font-bold hover:bg-[#0d98ba] hover:text-white hover:-translate-y-1 hover:shadow-[0_4px_14px_0_rgba(13,152,186,0.25)] transition-all duration-300 bg-white/40 backdrop-blur-md">
              Library Catalog
            </button>
          </div>

          {/* Educational Stats Row */}
          <div className="grid grid-cols-3 gap-4 border-t border-[#0d98ba]/20 pt-8 max-w-lg mx-auto lg:mx-0">
            <div>
              <h3 className="text-3xl font-black text-[#0d98ba]">50+</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">Expert Faculty</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#0d98ba]">10k+</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">Library Books</p>
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#0d98ba]">100%</h3>
              <p className="text-sm font-medium text-gray-600 mt-1">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals & Floating Cards */}
        <div className="relative mt-12 lg:mt-0 hidden md:block">
          
          {/* Main Image Container */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 z-10 aspect-[4/5] lg:aspect-[3/4] max-w-md mx-auto">
            {/* Demo Unsplash Image of a modern student/library - replace with your own later */}
            <img 
              src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Apogee Institute Students" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
          </div>

          {/* Floating Badge 1: Admissions */}
          <div className="absolute top-10 -left-10 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#DC2626]/10 rounded-full flex items-center justify-center text-[#DC2626] text-xl">
                📅
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">2026-27 Session</p>
                <p className="text-sm font-extrabold text-gray-900">Admissions Open</p>
              </div>
            </div>
          </div>

          {/* Floating Badge 2: Library */}
          <div className="absolute bottom-16 -right-8 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-100 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0d98ba]/10 rounded-full flex items-center justify-center text-[#0d98ba] text-xl">
                📖
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Digital Library</p>
                <p className="text-sm font-extrabold text-gray-900">24/7 Access</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;