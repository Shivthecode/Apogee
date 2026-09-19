// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Agar user logged in nahi hai, toh login (/) par bhej do
   return <Navigate to="/auth" replace />;
  }

  // Agar logged in hai, toh page access karne do
  return children;
};

export default ProtectedRoute;