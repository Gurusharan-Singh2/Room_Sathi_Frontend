import { Route, Routes, useNavigate } from "react-router-dom";
import useAuthStore from "../Store/authStore";
import { useEffect } from "react";
import ProfileDropdown from "../Components/Profile";
import Login_Signup from "../pages/Login-Signup";
import HomePage from "../pages/Home";

const AppWrapper = () => {
  const { login, isLoggedIn,id } = useAuthStore();
  const navigate = useNavigate();

  console.log(id);
  

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
            {isLoggedIn() && <ProfileDropdown />} 
 <Routes>
      
      <Route path="/" element={<HomePage/>} />
      <Route path="/login-signup" element={<Login_Signup />} />
    </Routes>
  </>
   
  );
};

export default AppWrapper;