import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Session clear logic yahan aayega
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col shadow-xl z-20">
        <div className="p-6 border-b border-gray-800">
          <span className="text-2xl font-extrabold text-[#F5A623] tracking-tight">APOGEE</span>
          <p className="text-xs text-gray-400 mt-1 font-medium tracking-wider uppercase">Student Hub</p>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a href="#dashboard" className="flex items-center px-4 py-3 bg-[#F5A623] text-gray-900 rounded-lg font-bold transition-colors shadow-sm">
            <span className="mr-3 text-lg">📊</span> Dashboard
          </a>
          <a href="#courses" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-[#F5A623] rounded-lg font-medium transition-colors">
            <span className="mr-3 text-lg">🎓</span> My Courses
          </a>
          {/* Add more links as needed */}
        </nav>

        <div className="p-4 border-t border-gray-800">
          {/* Logout Button with functionality */}
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg font-bold transition-colors shadow-md"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area remains the same as before */}
      <main className="flex-1 overflow-y-auto p-8 relative">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Welcome back, Student!</h1>
            <p className="text-gray-500 mt-1 font-medium">Here is what's happening with your academics today.</p>
          </div>
        </header>
        {/* Your stats and tables from the previous Dashboard code go here */}
      </main>

    </div>
  );
};

export default Dashboard;