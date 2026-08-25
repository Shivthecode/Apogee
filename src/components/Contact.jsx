import React from 'react';

const Contact = () => {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <div className="h-1 w-16 bg-[#F5A623] mb-8 rounded"></div>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Have questions about admissions, courses, or library access? Drop us a message.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-[#F5A623] mr-4 shrink-0">
                📍
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Library Address</h4>
                <p className="text-gray-600">Utraula Road, Mankapur - Gonda Rd, <br /> Near Pulse Hospital <br /> Near Shree Dutt Memorial Public School, Gayatri Nagar, <br />Uttar Pradesh 271302</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#DC2626] mr-4 shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Phone</h4>
                <p className="text-gray-600">+91 77059 86528</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none" placeholder="Kuldeep Sahu" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none" placeholder="kuldeep@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-[#DC2626] text-white py-3 rounded-lg font-bold hover:bg-[#B91C1C] transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;