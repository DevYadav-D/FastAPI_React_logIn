import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import { useAuth } from "./hooks/auth/useAuth";

const AppRouter = () => {
  const { user } = useAuth();                                 // Get the authenticated user from context
  return (
    <Routes>
      <Route 
          path="/login" 
          element={user ? <div>Welcome, {user.username}!</div> : <Login />} 
      />
    </Routes>
  );
};

export default AppRouter;