import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const RoommateList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
const navigate =useNavigate();
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3005/api/roommates", {
        params: {
          query: search,
          city,
          gender,
          minPrice,
          maxPrice,
        },
      });
      console.log(res);
      
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
  
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">🏠 Find Your Perfect Roommate</h1>

      {/* 🔍 SEARCH + FILTER */}
      <div className="bg-white p-4 rounded-2xl shadow-md flex flex-wrap gap-3 mb-6 justify-center">
        <input
          placeholder="🔍 Search rooms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <input
          placeholder="📍 City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded-lg"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
        </select>

        <input
          placeholder="💰 Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded-lg w-24"
        />

        <input
          placeholder="💰 Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded-lg w-24"
        />

        <button
          onClick={fetchPosts}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Search
        </button>

        <button
          onClick={()=>navigate("/post-roommates")}
          className="bg-blue-400 hover:bg-blue-800 text-white px-5 ml-6 py-2 rounded-lg transition"
        >
        Post yourself
        </button>
      </div>

      {/* 🏠 POSTS */}
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No roommates found 😔</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.description}</p>

                <div className="text-sm text-gray-500 space-y-1">
                  <p>📍 {post.city}</p>
                  <p>💰 ₹{post.rent}</p>
                  <p>👥 {post.gender}</p>
                </div>
              </div>

              {/* 📲 WhatsApp */}
              <a
                href={`https://wa.me/${post.contact}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  
  );
};
