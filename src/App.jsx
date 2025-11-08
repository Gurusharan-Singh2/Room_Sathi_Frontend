import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppWrapper from "./Provider/AppWrapper";



const App = () => {
  
  return (
    <div className="max-w-screen box-border min-h-screen h-auto pb-5 grid place-items-center bg-gray-50 relative">
      <BrowserRouter>

        <AppWrapper />
      </BrowserRouter>
    </div>
  );
};

export default App;
