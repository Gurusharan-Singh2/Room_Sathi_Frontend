import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./Provider/AppWrapper";



const App = () => {
  
  return (
    <div className="max-w-screen box-border h-screen grid place-items-center bg-neutral-300 relative">
      <BrowserRouter>

        <AppWrapper />
      </BrowserRouter>
    </div>
  );
};

export default App;
