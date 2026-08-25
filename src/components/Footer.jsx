import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 relative overflow-hidden">
      
      {/* Subtle Ambient Glow for the footer background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0d98ba]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center md:text-left relative z-10">
        
        {/* Brand Section */}
        <div>
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d98ba] to-[#3db2ce] font-extrabold text-3xl mb-4 tracking-tight drop-shadow-sm">
            APOGEE
          </h3>
          <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            A premium self-study space in Mankapur, elevating potential through a peaceful environment and comprehensive resources.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-white font-bold text-lg mb-2">Quick Links</h4>
          <a href="#about" className="hover:text-[#0d98ba] hover:translate-x-1 transition-all duration-300 w-fit mx-auto md:mx-0">About Us</a>
          <a href="#facilities" className="hover:text-[#0d98ba] hover:translate-x-1 transition-all duration-300 w-fit mx-auto md:mx-0">Facilities & Rules</a>
          <a href="#gallery" className="hover:text-[#0d98ba] hover:translate-x-1 transition-all duration-300 w-fit mx-auto md:mx-0">Gallery</a>
          <a href="#admissions" className="hover:text-[#0d98ba] hover:translate-x-1 transition-all duration-300 w-fit mx-auto md:mx-0">Membership</a>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Connect With Us</h4>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-sm">
            <span className="text-[#0d98ba]">📍</span>
            <p>Mankapur, Uttar Pradesh</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-sm">
            <span className="text-[#0d98ba]">📞</span>
            <p>+91 98765 43210</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
            <span className="text-[#0d98ba]">✉️</span>
            <p>contact@apogeelibrary.com</p>
          </div>
        </div>

      </div>

      {/* Copyright & Credits Section */}
      <div className="mt-12 pt-8 border-t border-gray-800/60 relative z-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2">
          
          {/* Copyright Text */}
          <p className="text-sm text-gray-500 text-center">
            &copy; 2026 Apogee Library, Mankapur. All Rights Reserved.
          </p>
          
          {/* Developer Credits (Centered as requested in your history) */}
          <p className="text-sm font-medium tracking-wide text-gray-600 text-center flex items-center justify-center gap-1">
            designed by <span className="text-[#0d98ba] font-bold">Shivansh Dwivedi</span>
          </p>
          
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;