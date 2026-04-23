import { Route, Routes, useNavigate } from "react-router-dom";
import useAuthStore from "../Store/authStore";
import { useEffect } from "react";
// import ProfileDropdown from "../Components/ProfileDropdown";
import Login_Signup from "../pages/Login-Signup";
import HomePage from "../pages/Home";
import { Navbar, } from "../Components/Navbar";
import FindRoom from "../pages/FindRoom";
import PostRoom from "../pages/PostRoom";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Showroom from "../pages/Showroom";
import Addinfo from "../Components/Addinfo";
import { RoommateList } from "../pages/RoommateList";
import { PostRoommate } from "../pages/Postroommate";

const AppWrapper = () => {
  const { login, isLoggedIn,id } = useAuthStore();
  const navigate = useNavigate();

  

useEffect(() => {
    const storedUser = localStorage.getItem("auth-storage");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.state?.user && parsed.state?.token) {
          login({ ...parsed.state.user, token: parsed.state.token });
        }
      } catch (err) {
        console.error("Failed to parse stored user:", err);
      }
    }

    if (!isLoggedIn()) {
      navigate("/login-signup", { replace: true });
    }
  }, [login, isLoggedIn, navigate]);

 
  
  return (<>
          
            <Navbar/>
 <Routes>
      
      <Route path="/" element={<HomePage/>} />
      <Route path="/login-signup" element={<Login_Signup />} />
     
      <Route path="/post-room" element={<PostRoom/>} />
      <Route path="/roommates" element={<RoommateList/>} />
      <Route path="/post-roommates" element={<PostRoommate/>} />
      <Route path="/about" element={< About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/find-room" element={<Showroom/>} />
      <Route path="/find-rooms" element={<FindRoom/>} />
      <Route path="/info-form" element={<Addinfo/>} />

    </Routes>
  </>
   
  );
};

export default AppWrapper;