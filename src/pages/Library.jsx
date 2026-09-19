import React from 'react';

const Library = () => {
  // Dummy data for trending books
  const featuredBooks = [
    { id: 1, title: "Data Structures & Algorithms", author: "Thomas H. Cormen", category: "Computer Science", color: "from-blue-500 to-blue-700" },
    { id: 2, title: "Modern Physics", author: "Arthur Beiser", category: "Physics", color: "from-purple-500 to-purple-700" },
    { id: 3, title: "Advanced Web Development", author: "Colt Steele", category: "Engineering", color: "from-[#F5A623] to-orange-600" },
    { id: 4, title: "Organic Chemistry", author: "Morrison & Boyd", category: "Chemistry", color: "from-emerald-500 to-emerald-700" }
  ];

  return (
    <div className="bg-white py-16 sm:py-24 font-sans relative overflow-hidden min-h-screen">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#0d98ba]/5 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-[#F5A623]/5 rounded-tr-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#0d98ba] font-bold tracking-widest uppercase text-sm mb-3">Knowledge Hub</h2>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Apogee Central <span className="text-[#F5A623]">Library</span>
          </h1>
          <div className="mt-4 w-24 h-1 bg-[#0d98ba] mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            A quiet sanctuary for focused study, equipped with thousands of physical books, digital resources, and high-speed research computers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Vast Collection</h3>
            <p className="text-gray-600">Over 50,000+ books, journals, and research papers across all academic disciplines.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Digital E-Library</h3>
            <p className="text-gray-600">24/7 access to our premium digital catalog. Read anywhere, anytime using your Student Portal.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
              <span className="text-3xl">🤫</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quiet Study Zones</h3>
            <p className="text-gray-600">Fully air-conditioned, soundproof reading rooms with high-speed Wi-Fi and charging ports.</p>
          </div>
        </div>

        {/* Featured Books Section */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 shadow-inner">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Trending Resources</h2>
              <p className="text-gray-500 mt-2">Most issued books this month</p>
            </div>
            <button className="hidden sm:block text-[#0d98ba] font-bold hover:text-blue-800 transition-colors">
              View Full Catalog &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer border border-gray-100">
                {/* Book Cover Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${book.color} flex items-center justify-center p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <h3 className="text-white text-center font-bold text-lg leading-tight z-10 drop-shadow-md">
                    {book.title}
                  </h3>
                </div>
                {/* Book Details */}
                <div className="p-5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{book.category}</span>
                  <h4 className="text-gray-900 font-bold mt-1 mb-1 truncate">{book.title}</h4>
                  <p className="text-gray-500 text-sm">By {book.author}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 sm:hidden text-[#0d98ba] font-bold hover:text-blue-800 transition-colors">
            View Full Catalog &rarr;
          </button>
        </div>

        {/* Notification Banner */}
        <div className="mt-16 bg-[#0d98ba] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between shadow-xl">
          <div className="mb-4 sm:mb-0">
            <h3 className="text-xl font-bold text-white">Need a specific book?</h3>
            <p className="text-blue-100 mt-1">Students can request new books directly through their dashboard.</p>
          </div>
          <div className="px-6 py-3 bg-white text-[#0d98ba] font-bold rounded-lg shadow-sm">
            Student Access Only
          </div>
        </div>

      </div>
    </div>
  );
};

export default Library;