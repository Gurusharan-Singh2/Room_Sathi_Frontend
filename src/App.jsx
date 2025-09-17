

import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRoutes />
      
      <Footer />
    </div>
  );
}

