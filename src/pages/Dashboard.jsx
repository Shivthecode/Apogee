// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Dashboard = () => {
  const navigate = useNavigate();
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle state

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/auth');
    } catch (error) {
      console.error("Logout Error: ", error);
      alert("Logout failed. Please try again.");
    }
  };

  const handleAddNotice = async (e) => {
    e.preventDefault();
    if (!noticeTitle.trim() || !noticeContent.trim()) return;
    
    setLoading(true);
    try {
      await addDoc(collection(db, 'announcements'), {
        title: noticeTitle,
        content: noticeContent,
        createdAt: serverTimestamp(),
      });
      
      alert("Notice successfully added to the website!");
      setNoticeTitle('');
      setNoticeContent('');
    } catch (error) {
      console.error("Error adding notice: ", error);
      alert("Failed to add notice.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden relative">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        ></div>
      )}

      {/* Sidebar (Responsive Slide-over for Mobile, Fixed for Desktop) */}
      <aside className={`absolute md:relative inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white flex flex-col shadow-xl transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <div>
            <span className="text-2xl font-extrabold text-[#F5A623] tracking-tight">APOGEE</span>
            <p className="text-xs text-gray-400 mt-1 font-medium tracking-wider uppercase">Admin Control</p>
          </div>
          {/* Close button for mobile sidebar */}
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="md:hidden text-gray-400 hover:text-white text-xl font-bold focus:outline-none"
          >
            ✕
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <a href="#dashboard" className="flex items-center px-4 py-3 bg-[#F5A623] text-gray-900 rounded-lg font-bold transition-colors shadow-sm">
            <span className="mr-3 text-lg">⚙️</span> Manage Website
          </a>
          <a href="#students" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-[#F5A623] rounded-lg font-medium transition-colors">
            <span className="mr-3 text-lg">👥</span> View Students
          </a>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg font-bold transition-colors shadow-md"
          >
            Logout Admin
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center space-x-4">
            {/* Hamburger button to open sidebar on mobile */}
            <button 
              onClick={() => setSidebarOpen(true)} 
              className="md:hidden text-gray-700 hover:text-[#0d98ba] focus:outline-none p-2 rounded-lg bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-500 text-xs sm:text-sm font-medium hidden sm:block">Manage your website content from here.</p>
            </div>
          </div>
          
          <div className="bg-red-100 text-red-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm border border-red-200">
            Admin Active
          </div>
        </header>

        {/* Dashboard Content Container */}
        <div className="p-4 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Add Notice Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📢</span> Post New Announcement
              </h2>
              <form onSubmit={handleAddNotice} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notice Title</label>
                  <input 
                    type="text" 
                    value={noticeTitle}
                    onChange={(e) => setNoticeTitle(e.target.value)}
                    placeholder="e.g. New Batch Starting Soon!"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] focus:border-[#F5A623] outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notice Details</label>
                  <textarea 
                    value={noticeContent}
                    onChange={(e) => setNoticeContent(e.target.value)}
                    placeholder="Write the full details here..."
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F5A623] focus:border-[#F5A623] outline-none transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#0d98ba] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 shadow-sm"
                >
                  {loading ? 'Publishing...' : 'Publish to Website'}
                </button>
              </form>
            </div>

            {/* Placeholders for future admin tools */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="font-bold text-blue-900 mb-2">Website Stats (Coming Soon)</h3>
                <p className="text-blue-700 text-sm">Here you will be able to see how many people visited your site and contacted you.</p>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;