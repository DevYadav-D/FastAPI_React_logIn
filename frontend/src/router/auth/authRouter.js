import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../../pages/auth/LoginPage";
import Protected from "../../components/auth/Protected";
// import Dashboard from "../../pages/Dashboard"; // Example protected page

const AuthRouter = () => (
  <Routes>
    <Route path="/auth/login" element={<LoginPage />} />
    <Route
    //   path="/dashboard"
      element={
        <Protected>
          {/* <Dashboard /> */}
        </Protected>
      }
    />
  </Routes>
);

export default AuthRouter;