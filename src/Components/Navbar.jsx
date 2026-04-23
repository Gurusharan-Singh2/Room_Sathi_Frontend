import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/log.png';

import { Home, BedDouble, PlusCircle, Users, Info, Phone } from "lucide-react";
import useAuthStore from '../Store/authStore';
import ProfileDropdown from './ProfileDropdown';

export const Navbar = () => {
   const navItems = [
    {
      name: "Home",
      url: "/",
      icon: <Home className="w-5 h-5" />,
    },
    {
      name: "Find Room",
      url: "/find-room",
      icon: <BedDouble className="w-5 h-5" />,
    },
    {
      name: "Post Room",
      url: "/post-room",
      icon: <PlusCircle className="w-5 h-5" />,
    },
    {
      name: "Find Roommates",
      url: "/roommates",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "About",
      url: "/about",
      icon: <Info className="w-5 h-5" />,
    },
    {
      name: "Contact",
      url: "/contact",
      icon: <Phone className="w-5 h-5" />,
    },
  ];

    const { isLoggedIn} = useAuthStore();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">

    {/* 🔷 Logo */}
    <Link to="/" className="flex items-center">
     <img
  src={Logo}
  className="h-15 md:h-16 w-auto object-contain"
  alt="Room Sathi Logo"
/>
    </Link>

    {/* 🔷 Nav Links */}
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.url}
          className={({ isActive }) =>
            `text-sm font-medium transition duration-200 ${
              isActive
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
            }`
          }
        >
          <div className="flex items-center gap-1">
            {item.icon}
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>

    {/* 🔷 Right Section */}
    <div className="flex items-center gap-3">

      {/* Login / Profile */}
      {isLoggedIn() ? (
        <ProfileDropdown />
      ) : (
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
          Login
        </button>
      )}

      {/* Mobile Menu */}
      <button className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition">
        <svg
          className="w-5 h-5 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
</nav>
  )
}
