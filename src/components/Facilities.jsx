import React from 'react';

const Facilities = () => {
  const rules = [
    {
      icon: '🤫',
      title: 'Maintain Silence',
      desc: 'Keep the study environment peaceful.',
      theme: 'blue'
    },
    {
      icon: '📱',
      title: 'Respect Study Time',
      desc: 'Avoid disturbing other members.',
      theme: 'red'
    },
    {
      icon: '🧹',
      title: 'Keep It Clean',
      desc: 'Help maintain a clean space.',
      theme: 'blue'
    },
    {
      icon: '⏰',
      title: 'Follow Timings',
      desc: '6 AM–10 PM.',
      theme: 'red'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 relative overflow-hidden" id="facilities">
      
      {/* Faded Background Watermark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[90px] md:text-[140px] font-black text-gray-200/40 opacity-60 pointer-events-none select-none z-0">
        RULES
      </div>

      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-[#0d98ba]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-4 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Facilities & Library Rules
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#0d98ba] to-[#DC2626] mx-auto rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl font-bold text-[#0d98ba] uppercase tracking-wider bg-[#0d98ba]/10 inline-block px-6 py-2 rounded-full border border-[#0d98ba]/20 shadow-sm">
            Study With Discipline
          </p>
        </div>

        {/* Rules Grid (Compact 2x2 on Desktop) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-[1.5rem] shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden
                ${rule.theme === 'blue' 
                  ? 'hover:shadow-[#0d98ba]/20 hover:border-[#0d98ba]/40' 
                  : 'hover:shadow-[#DC2626]/20 hover:border-[#DC2626]/40'
                }
              `}
            >
              {/* Corner Accent Graphic */}
              <div 
                className={`absolute top-0 right-0 w-24 h-24 rounded-bl-[100%] -z-0 group-hover:scale-110 transition-transform duration-500 
                  ${rule.theme === 'blue' ? 'bg-sky-50' : 'bg-red-50'}
                `}
              ></div>
              
              {/* Icon Box */}
              <div 
                className={`relative z-10 w-14 h-14 text-white flex items-center justify-center rounded-xl mb-6 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300
                  ${rule.theme === 'blue' 
                    ? 'bg-gradient-to-br from-[#0d98ba] to-[#3db2ce]' 
                    : 'bg-gradient-to-br from-[#DC2626] to-[#ef4444]'
                  }
                `}
              >
                <span className="text-2xl drop-shadow-sm">{rule.icon}</span>
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {rule.title}
              </h3>
              <p className="relative z-10 text-gray-600 leading-relaxed font-medium text-sm">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;