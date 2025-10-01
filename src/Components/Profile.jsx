import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../Store/authStore";
import { fetchProfile } from "../../utils/apis";


function ProfileDropdown() {
  const navigate = useNavigate();
  const { id, logout, name } = useAuthStore();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: profile, isLoading, isError } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => fetchProfile(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  const handleLogout = () => {
    logout();
    localStorage.removeItem("auth-storage"); 
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full  cursor-pointer overflow-hidden  shadow-md transition-transform hover:scale-105"
        title={profile?.name || "User"}
      >
        {profile?.signedUrl ? (
          <img
            src={profile.signedUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-lg">
            {profile?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}
      </div>

      {open && (
        <div className="absolute p-4 right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-fade-in">
          <div className="p-4 flex flex-col items-center border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              {profile?.username || "User"}
            </h2>

            <p className="text-sm text-gray-500">{profile?.email || "No email"}</p>
          </div>
          
            <a href="http://localhost:5173/info-form">add info</a>
     
      {/* {profile?.location || "no location"} */}
     {/* <b>Location</b> :bhaisamau crossing bkt lucknow
      </p>

      <div><b>contact info</b></div>
      <p> e-mail:vikas@123</p>
       <p>phone:854507890</p>
        <div><b>smoking status</b> :None</div> */}
       

          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors text-gray-700 font-medium flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5"
              />
            </svg>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
