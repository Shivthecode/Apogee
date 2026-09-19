import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import All Components
import Navbar from './components/Navbar';
import About from './components/About';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Auth from './components/login/Auth';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';

// Pages
import Hero from './pages/Hero';
import Features from './pages/Features';
import Institute from './pages/Institute';
import Library from './pages/Library';
import Contactpage from './pages/Contactpage';

// Context & Protection
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Main Landing Page Flow
const LandingPage = () => (
  <>
    <Hero />
    <Features />
    <About />
    <Facilities />
    <Admissions />
    <Gallery />
    <Contact />
  </>
);

// Helper component to hide Navbar/Footer on specific routes like Dashboard & Auth
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/dashboard' || location.pathname === '/auth';

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {!hideHeaderFooter && <Navbar />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/institute" element={<Institute />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contactpage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}