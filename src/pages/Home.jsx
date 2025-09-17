import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-50 to-green-50 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Room-Sathi</span> 🏠
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
          Find your perfect <span className="font-semibold">room</span> or{" "}
          <span className="font-semibold">roommate</span> easily.  
          Post your space or search thousands of verified listings.
        </p>
        <div className="flex gap-4">
          <Link
            to="/search-room"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
          >
            🔍 Search Room
          </Link>
          <Link
            to="/post-room"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg transition"
          >
            📝 Post a Room
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Why Choose Room-Sathi?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-lg shadow hover:shadow-md transition bg-blue-50">
            <h3 className="text-xl font-semibold mb-2">✨ Easy Search</h3>
            <p className="text-gray-600">
              Quickly find rooms and roommates that match your preferences.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-md transition bg-green-50">
            <h3 className="text-xl font-semibold mb-2">🏡 Verified Listings</h3>
            <p className="text-gray-600">
              Browse safe and verified spaces for peace of mind.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-md transition bg-yellow-50">
            <h3 className="text-xl font-semibold mb-2">🤝 Connect Easily</h3>
            <p className="text-gray-600">
              Chat and connect with potential roommates hassle-free.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
