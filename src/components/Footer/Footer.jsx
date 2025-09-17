import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-white">Room-Sathi</span>. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Made with ❤️ for students & individuals finding the right space.
        </p>
      </div>
    </footer>
  );
}
