import React from 'react';

const Institute = () => {
  return (
    // id="institute" lagaya hai taaki Navbar se click karne par page yahan scroll ho jaye
    <div id="institute" className="bg-white py-16 sm:py-24 font-sans relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 -skew-y-3 transform origin-top-left -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-[#0d98ba] font-bold tracking-widest uppercase text-sm mb-3">About Our Institute</h2>
          <p className="text-3xl leading-tight font-extrabold text-gray-900 sm:text-5xl">
            Welcome to <span className="text-[#F5A623]">APOGEE</span>
          </p>
          <div className="mt-4 w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Empowering students to achieve their highest potential through quality education, modern facilities, and expert guidance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Image Side */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-[#0d98ba] opacity-10 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            {/* Aap yahan apni original image ka link daal sakte hain */}
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Apogee Institute Students" 
              className="object-cover w-full h-[400px] lg:h-[500px] transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <p className="text-white font-bold text-2xl mb-1">Building Futures</p>
              <p className="text-gray-300 font-medium">Excellence in Education</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎯</span> Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Apogee, we believe that education is the most powerful weapon which you can use to change the world. Our mission is to provide accessible, high-quality, and industry-relevant education to build the leaders of tomorrow.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">⭐</span> Why Choose Us?
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#0d98ba]/10 flex items-center justify-center border border-[#0d98ba]/30">
                    <span className="text-[#0d98ba] text-lg font-bold">✓</span>
                  </div>
                  <p className="ml-4 text-gray-700 font-medium pt-1">Expert Faculty with decades of real-world experience.</p>
                </li>
                <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#F5A623]/10 flex items-center justify-center border border-[#F5A623]/30">
                    <span className="text-[#F5A623] text-lg font-bold">✓</span>
                  </div>
                  <p className="ml-4 text-gray-700 font-medium pt-1">State-of-the-art Library and modern Digital Classrooms.</p>
                </li>
                <li className="flex items-start bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#DC2626]/10 flex items-center justify-center border border-[#DC2626]/30">
                    <span className="text-[#DC2626] text-lg font-bold">✓</span>
                  </div>
                  <p className="ml-4 text-gray-700 font-medium pt-1">100% Placement assistance and dedicated career guidance.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-[#0d98ba] to-blue-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative shapes for background */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 relative z-10 divide-x-0 sm:divide-x divide-white/20">
            <div className="flex flex-col items-center justify-center text-center px-4">
              <dt className="order-2 mt-3 text-lg font-medium text-blue-100 uppercase tracking-wide">Students</dt>
              <dd className="order-1 text-5xl font-extrabold text-white drop-shadow-md">2000+</dd>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <dt className="order-2 mt-3 text-lg font-medium text-blue-100 uppercase tracking-wide">Expert Staff</dt>
              <dd className="order-1 text-5xl font-extrabold text-[#F5A623] drop-shadow-md">50+</dd>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <dt className="order-2 mt-3 text-lg font-medium text-blue-100 uppercase tracking-wide">Success Rate</dt>
              <dd className="order-1 text-5xl font-extrabold text-white drop-shadow-md">98%</dd>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-4">
              <dt className="order-2 mt-3 text-lg font-medium text-blue-100 uppercase tracking-wide">Awards</dt>
              <dd className="order-1 text-5xl font-extrabold text-[#F5A623] drop-shadow-md">25+</dd>
            </div>
          </dl>
        </div>

      </div>
    </div>
  );
};

export default Institute;