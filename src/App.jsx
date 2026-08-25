import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import All Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';

// Main Landing Page Flow
const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <About />
    <Facilities />
    <Admissions />
    <Gallery/>
    <Contact />
  </>
);

// Helper component to hide Navbar/Footer on specific routes like Dashboard
const Layout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {!isDashboard && <Navbar />}
      
      {children}
      
      {!isDashboard && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}