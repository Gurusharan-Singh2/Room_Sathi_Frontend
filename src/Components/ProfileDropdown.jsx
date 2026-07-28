import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../Store/authStore";
import { fetchProfile } from "../../utils/apis";

function ProfileDropdown() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const id = user?.id;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data: profile } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => fetchProfile(id),
    enabled: !!id,
  });

  const handleLogout = () => {
    logout();
    localStorage.removeItem("auth-storage");
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">

      {/* 🔵 Avatar */}
      <div
        onClick={() => setOpen(!open)}
        className="w-11 h-11 rounded-full cursor-pointer overflow-hidden 
        ring-2 ring-blue-500 shadow hover:scale-110 transition duration-200"
      >
        {profile?.image ? (
          <img src={profile.image} alt="avatar" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold">
            {profile?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}
      </div>

      {/* 🔽 Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-fade-in">

          {/* 👤 Profile Header */}
          <div className="p-5 text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <div className="w-16 h-16 mx-auto rounded-full overflow-hidden mb-3 ring-2 ring-white">
              {profile?.image ? (
                <img src={profile.image} alt="profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-white text-blue-600 flex items-center justify-center text-xl font-bold">
                  {profile?.username?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>

            <h2 className="text-lg font-semibold">{profile?.username || "User"}</h2>
            <p className="text-sm opacity-90">{profile?.email || "No email"}</p>
          </div>

          {/* 📊 Extra Info */}
          <div className="px-5 py-3 text-sm text-gray-600 space-y-1">
            <p>📍 Location: {profile?.loc || "Not added"}</p>
            <p>📞 Phone: {profile?.phone || "Not added"}</p>
            <p>👤 Gender: {profile?.gender || "Not specified"}</p>
          </div>

          {/* 📌 Actions */}
          <div className="flex flex-col p-2 border-t">

            <button
              onClick={() => navigate("/info-form")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
            >
              ✏️ Add Info
            </button>

            <button
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
            >
              👤 View Profile
            </button>

            <button
              onClick={() => navigate("/info-form")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition text-gray-700"
            >
              ⚙️ Edit Profile
            </button>

            <hr className="my-2" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 transition text-red-500 font-medium"
            >
              🚪 Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
