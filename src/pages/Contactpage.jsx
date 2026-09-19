import React, { useState } from 'react';

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // 4 seconds baad success message hata dein
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-gray-50 py-16 sm:py-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#0d98ba] font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            We’d Love To Hear From <span className="text-[#F5A623]">You</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Have questions about admissions, courses, or our library? Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information Cards */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-6">
              <div className="w-14 h-14 bg-[#0d98ba]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Our Location</h3>
                <p className="text-gray-600 leading-relaxed">
                  Apogee Institute Headquarters,<br />
                  Ghansoli, Navi Mumbai, Maharashtra - 400701
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-6">
              <div className="w-14 h-14 bg-[#F5A623]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">📞</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Phone Number</h3>
                <p className="text-gray-600">
                  +91 (987) 654-3210<br />
                  +91 (123) 456-7890
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex items-start space-x-6">
              <div className="w-14 h-14 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✉️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Email Address</h3>
                <p className="text-gray-600">
                  support@apogeeinstitute.com<br />
                  admissions@apogee.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            {submitted && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl font-medium text-center">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d98ba] focus:border-[#0d98ba] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d98ba] focus:border-[#0d98ba] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Admission Inquiry"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d98ba] focus:border-[#0d98ba] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d98ba] focus:border-[#0d98ba] outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#0d98ba] hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-lg transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contactpage;