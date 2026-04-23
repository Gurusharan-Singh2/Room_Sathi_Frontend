import React, { useState, useEffect } from "react";
import axios from "axios";

export const PostRoommate = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    city: "",
    rent: "",
    contact: "",
    gender: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      console.log(form)

    try {
      await axios.post("http://localhost:3005/api/roommates", form);
      alert("Post Created Successfully");
    } catch (err) {
      console.log(err);
    }

  };
     
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Post for Roommate</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input name="title" placeholder="Title" onChange={handleChange} className="border p-2" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2" />
        <input name="city" placeholder="City" onChange={handleChange} className="border p-2" />
        <input name="rent" placeholder="Rent" onChange={handleChange} className="border p-2" />
        <input name="contact" placeholder="WhatsApp Number" onChange={handleChange} className="border p-2" />

        <select name="gender" onChange={handleChange} className="border p-2">
          <option value="">Select Preference</option>
          <option value="boys">Only Boys</option>
          <option value="girls">Only Girls</option>
        </select>

        <button className="bg-blue-500 text-white p-2 rounded">Post</button>
      </form>
    </div>
  );
};

