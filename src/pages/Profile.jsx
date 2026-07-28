import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../Store/authStore";
import { fetchProfile } from "../../utils/apis";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const id = user?.id;

  const {
    data: profile,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profile", id],
    queryFn: () => fetchProfile(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen mt-20 flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="min-h-screen mt-20 flex items-center justify-center">
        <p className="text-gray-500">Unable to load profile.</p>
      </div>
    );
  }

  const rows = [
    { label: "Full Name", value: profile.name },
    { label: "Phone", value: profile.phone },
    { label: "Gender", value: profile.gender },
    {
      label: "Birthday",
      value: profile.birthday
        ? new Date(profile.birthday).toLocaleDateString()
        : null,
    },
    { label: "Location", value: profile.loc },
  ];

  return (
    <div className="min-h-screen mt-20 w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 pb-6 border-b">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-500 shadow">
            {profile.image ? (
              <img src={profile.image} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
                {profile.username?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">{profile.username}</h1>
          <p className="text-gray-500">{profile.email}</p>
        </div>

        {/* Bio */}
        {profile.bio && (
          <p className="text-center text-gray-600 italic py-4">"{profile.bio}"</p>
        )}

        {/* Details */}
        <div className="grid sm:grid-cols-2 gap-4 py-4">
          {rows.map(({ label, value }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
              <p className="text-gray-800 font-medium">{value || "Not added"}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/info-form")}
          className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          ⚙️ Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
