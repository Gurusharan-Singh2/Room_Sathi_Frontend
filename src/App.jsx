import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./Provider/AppWrapper";



const App = () => {
  
  return (
    <div className="w-full h-screen grid place-items-center bg-cyan-400 relative">
      <BrowserRouter>

        <AppWrapper />
      </BrowserRouter>
    </div>
  );
};

export default App;
