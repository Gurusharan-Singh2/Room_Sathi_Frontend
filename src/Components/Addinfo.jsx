import React, { useState } from "react";
import axios from "axios";
import useAuthStore from "../Store/authStore";

function Addinfo() {
  const { id } = useAuthStore();

  const [form, setForm] = useState({
    name: "",
    bio: "",
    birthday: "",
    phone: "",
    loc: "",
    gender: "",
  });

  const [loading, setLoading] = useState(false);
  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const res = await axios.post("/api/user-info", {
        ...form,
        userId: id,
      });

      setSavedData(res.data);
      alert("✅ Profile Updated Successfully");
    } catch (err) {
      console.log(err);
      alert("❌ Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 mt-20">

      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
          👤 Complete Your Profile
        </h2>

        {/* FORM */}
        <div className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Birthday + Gender */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Birthday</label>
              <input
                name="birthday"
                value={form.birthday}
                onChange={handleChange}
                type="date"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium">Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="9876543210"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              rows="3"
              placeholder="Tell something about yourself..."
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-sm font-medium">Location</label>
            <input
              name="loc"
              value={form.loc}
              onChange={handleChange}
              type="text"
              placeholder="Noida, Delhi"
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleSave}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Information"}
          </button>
        </div>

        {/* PREVIEW */}
        {savedData && (
          <div className="mt-6 p-4 bg-gray-50 rounded-xl border">
            <h3 className="text-lg font-semibold mb-3">Preview</h3>

            <div className="space-y-1 text-sm">
              <p><b>Name:</b> {savedData.name}</p>
              <p><b>Birthday:</b> {savedData.birthday}</p>
              <p><b>Gender:</b> {savedData.gender}</p>
              <p><b>Phone:</b> {savedData.phone}</p>
              <p><b>Bio:</b> {savedData.bio}</p>
              <p><b>Location:</b> {savedData.loc}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Addinfo;