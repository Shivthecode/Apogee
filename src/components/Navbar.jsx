import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate(); 
  
  const [tapCount, setTapCount] = useState(0);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 2) {
        navigate('/auth');
        return 0;
      }
      setTimeout(() => {
        setTapCount(0);
      }, 400);
      
      navigate('/');
      return newCount;
    });
  };

  const blockScrollEffect = useRef(false);

  useEffect(() => {
    if (isOpen) {
      blockScrollEffect.current = true;
      const timer = setTimeout(() => {
        blockScrollEffect.current = false;
      }, 350); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      if (blockScrollEffect.current) {
        lastScroll = window.scrollY;
        return;
      }

      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - lastScroll) < 10) return;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-[#0d98ba]/10 to-[#DC2626]/10 border-b border-white/20 shadow-sm rounded-b-3xl transition-all duration-300 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-extrabold text-[#0d98ba] tracking-tight cursor-pointer drop-shadow-sm bg-transparent border-none p-0 focus:outline-none"
            >
              APOGEE
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center pr-8">
            <Link to="/" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Home</Link>
            <Link to="/institute" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Institute</Link>
            <Link to="/library" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Library</Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#0d98ba] font-medium transition-colors">Contact</Link>
          </div>

          {/* Mobile Hamburger Button (Background removed, clean & transparent) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 flex flex-col justify-center items-center focus:outline-none bg-transparent rounded-lg"
              aria-label="Toggle Menu"
            >
              <span className={`block w-6 h-0.5 bg-[#0d98ba] transition-all duration-300 ease-out rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
              <span className={`block w-6 h-0.5 bg-[#0d98ba] transition-all duration-300 ease-out rounded-sm my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-[#0d98ba] transition-all duration-300 ease-out rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/95 border-t border-gray-100 shadow-xl transition-all duration-300">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Home</Link>
            <Link to="/institute" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Institute</Link>
            <Link to="/library" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Library</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#0d98ba] hover:bg-blue-50/50 transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;