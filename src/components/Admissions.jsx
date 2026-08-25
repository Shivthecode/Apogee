import React from 'react';

const Admissions = () => {
  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden" id="admissions">
      
      {/* Faded Background Watermark */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[80px] md:text-[140px] font-black text-gray-50 opacity-80 pointer-events-none select-none z-0">
        MEMBERSHIP
      </div>

      {/* Subtle Ambient Glows */}
      <div className="absolute top-10 left-0 w-[400px] h-[400px] bg-[#0d98ba]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-[#DC2626]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Membership & Seats
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-[#0d98ba] to-[#DC2626] mx-auto rounded-full"></div>
        </div>

        {/* Grid for Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Membership (Red Theme) */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-[#DC2626]/10 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#DC2626]/20 hover:border-[#DC2626]/30 transition-all duration-500 group relative overflow-hidden text-center flex flex-col justify-between">
            {/* Corner Accent Graphic */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100%] -z-0 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DC2626] to-[#ef4444] text-white flex items-center justify-center rounded-2xl mx-auto mb-6 shadow-md group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💳</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3 tracking-tight">Monthly Fee</h3>
              <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                Contact us for the current membership fee and available plans tailored for your study needs.
              </p>
            </div>
            
            <button className="relative z-10 w-full bg-white border-2 border-[#DC2626] text-[#DC2626] px-6 py-3.5 rounded-xl font-bold text-lg hover:bg-[#DC2626] hover:text-white transition-colors duration-300 shadow-sm flex items-center justify-center gap-2 outline-none">
              <span>📞</span> Call for Fee Details
            </button>
          </div>

          {/* Card 2: Seat Availability (Blue Theme) */}
          <div className="bg-white p-10 rounded-[2rem] shadow-xl shadow-[#0d98ba]/10 border border-gray-100 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0d98ba]/20 hover:border-[#0d98ba]/30 transition-all duration-500 group relative overflow-hidden text-center flex flex-col justify-between">
            {/* Corner Accent Graphic */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-sky-50 rounded-br-[100%] -z-0 group-hover:scale-110 transition-transform duration-500"></div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <h4 className="text-[5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0d98ba] to-[#3db2ce] leading-none drop-shadow-sm">
                  32
                </h4>
                <p className="text-lg font-extrabold text-gray-900 uppercase tracking-widest mt-1">Total Seats</p>
              </div>
              <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                For current vacant-seat status and quick admission queries, message us directly.
              </p>
            </div>
            
            {/* WhatsApp Green is usually #25D366, but keeping it Blue to match your premium theme */}
            <button className="relative z-10 w-full bg-gradient-to-r from-[#0d98ba] to-[#3db2ce] text-white px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#0d98ba]/30 transition-all duration-300 flex items-center justify-center gap-2 outline-none">
              <span>💬</span> Check on WhatsApp
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Admissions;