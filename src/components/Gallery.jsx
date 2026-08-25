import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // High-quality library and study images
  const images = [
    {
      src: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2000&auto=format&fit=crop",
      title: "Peaceful Study Zones",
      desc: "Distraction-free environment for deep focus."
    },
    {
      src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop",
      title: "Vast Resources",
      desc: "Access to premium journals, modules, and physical books."
    },
    {
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop",
      title: "Digital Infrastructure",
      desc: "High-speed Wi-Fi and power backups available 24/7."
    },
    {
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop",
      title: "Comfortable Seating",
      desc: "Premium ergonomic desks to support long hours of learning."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // PC pe auto-slide (interval) chalega, Mobile pe nahi
  useEffect(() => {
    let interval;
    
    const checkAndSetInterval = () => {
      // 768px se upar (PC/Tablet) par auto-slide on
      if (window.innerWidth >= 768) {
        if (!interval) {
          interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 3500); // Har 3.5 second mein slide change
        }
      } else {
        // Mobile par auto-slide off (User khud manually karega)
        if (interval) {
          clearInterval(interval);
          interval = null;
        }
      }
    };

    checkAndSetInterval();
    window.addEventListener('resize', checkAndSetInterval);

    return () => {
      window.removeEventListener('resize', checkAndSetInterval);
      if (interval) clearInterval(interval);
    };
  }, [currentIndex]); // currentIndex change hone par timer reset ho jayega

  return (
    <section className="py-24 px-6 bg-gray-50 relative overflow-hidden" id="gallery">
      
      {/* Faded Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] md:text-[140px] font-black text-gray-200/40 opacity-60 pointer-events-none select-none z-0">
        GALLERY
      </div>

      {/* Subtle Ambient Glows */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-[#0d98ba]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Library Gallery
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#0d98ba] to-[#DC2626] mx-auto rounded-full"></div>
        </div>

        {/* Slider Container */}
        <div className="relative w-full h-[400px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group">
          
          {/* Images loop */}
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-[10s] ease-out scale-105 group-hover:scale-100"
              />
              
              {/* Overlay Gradient for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
              
              {/* Text Content inside Slide */}
              <div className="absolute bottom-12 left-8 md:bottom-16 md:left-12 max-w-2xl pr-8">
                <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 md:mb-3 drop-shadow-lg">
                  {img.title}
                </h3>
                <p className="text-sm md:text-lg text-gray-200 font-medium drop-shadow-md">
                  {img.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation Controls (Left / Right Arrows) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-[#0d98ba] hover:border-[#0d98ba] transition-all duration-300 shadow-lg outline-none"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-[#DC2626] hover:border-[#DC2626] transition-all duration-300 shadow-lg outline-none"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 outline-none shadow-sm ${
                  index === currentIndex 
                    ? 'bg-white scale-125 w-6' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;