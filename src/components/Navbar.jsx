import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Layout shift scroll block karne ke liye ref
  const blockScrollEffect = useRef(false);

  // Jab menu open ho raha ho, toh 350ms ke liye scroll auto-hide ko disable kar do
  useEffect(() => {
    if (isOpen) {
      blockScrollEffect.current = true;
      const timer = setTimeout(() => {
        blockScrollEffect.current = false;
      }, 350); // 300ms transition + 50ms buffer
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      // Agar menu open ho raha hai (animation chal rahi hai), toh scroll events ko ignore karo
      if (blockScrollEffect.current) {
        lastScroll = window.scrollY;
        return;
      }

      const currentScroll = window.scrollY;

      // Minor jitter ignore karne ke liye 10px limit
      if (Math.abs(currentScroll - lastScroll) < 10) return;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // Niche scroll karne par hide
        setIsVisible(false);
        setIsOpen(false);
      } else {
        // Upar scroll karne par show
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0d98ba]/10 to-[#DC2626]/10 border-b border-white/20 shadow-sm rounded-b-3xl overflow-hidden transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-extrabold text-[#0d98ba] tracking-tight cursor-pointer drop-shadow-sm">
              APOGEE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Home</Link>
            <a href="#institute" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Institute</a>
            <a href="#library" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Library</a>
            <a href="#contact" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Contact</a>
            
            <Link 
              to="/auth" 
              className="bg-[#DC2626] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#B91C1C] shadow-md transition-all"
            >
              Student Portal
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`block w-6 h-0.5 bg-[#0d98ba] transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
              <span className={`block w-6 h-0.5 bg-[#0d98ba] transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-[#0d98ba] transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out backdrop-blur-md bg-white/80 ${
          isOpen ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Home</Link>
          <a href="#institute" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Institute</a>
          <a href="#library" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Library</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Contact</a>
          
          <div className="pt-2">
            <Link 
              to="/auth" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-3 py-2.5 rounded-md text-base font-medium text-white bg-[#DC2626] hover:bg-[#B91C1C] shadow-sm transition-colors"
            >
              Student Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;