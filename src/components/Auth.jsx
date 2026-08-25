import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation hook import kiya

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Initialize kiya

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan backend API call aayega. Abhi ke liye seedha dashboard par bhej rahe hain:
    navigate('/dashboard');
  };

  return (
    <div className="py-20 px-6 bg-gray-50 flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <div className="h-1 w-16 bg-[#F5A623] mx-auto rounded mb-4"></div>
          <p className="text-gray-500 text-sm">
            {isLogin 
              ? 'Enter your mobile number and password to access your portal.' 
              : 'Join Apogee to access courses and library resources.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          {!isLogin && (
            <div className="transition-all duration-300 ease-in-out">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none transition-all" placeholder="e.g. John Doe" />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input type="tel" required pattern="[0-9]{10}" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none transition-all" placeholder="10-digit mobile number" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#F5A623] focus:border-transparent outline-none transition-all" placeholder="••••••••" />
          </div>

          <button type="submit" className="w-full bg-[#DC2626] text-white py-3 mt-4 rounded-lg font-bold text-lg shadow-md hover:bg-[#B91C1C] hover:shadow-lg transition-all duration-300">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-[#F5A623] font-bold hover:underline focus:outline-none transition-colors">
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Auth;