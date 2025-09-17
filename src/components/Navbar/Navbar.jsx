import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-extrabold text-xl tracking-wide">
          Room-Sathi
        </Link>
        <div className="flex gap-6">
          <Link to="/search-room" className="hover:underline">
            Search
          </Link>
          <Link to="/post-room" className="hover:underline">
            Post
          </Link>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
