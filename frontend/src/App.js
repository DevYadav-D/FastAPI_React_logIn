import React from "react";
import AppRouter from "./AppRoutes";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <li><Link to="/login">Login</Link></li>
      <main>
        <AppRouter />
      </main>

    </>
  );
};

export default App;