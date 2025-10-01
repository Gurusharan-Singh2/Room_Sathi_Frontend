import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../public/b.png'
import ProfileDropdown from './Profile'
import { Home, BedDouble, PlusCircle, Users, Info, Phone } from "lucide-react";
import useAuthStore from '../Store/authStore';

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
      url: "/find-roommates",
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
    <nav className="bg-white dark:bg-gray-900 fixed w-full h-[88px] z-20 top-0 start-0 border-b px-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen px-4 flex flex-wrap items-center justify-between -mt-2 mx-auto ">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} className="w-28" alt="Room Sathi Logo"/>
        </Link>

        {/* Profile + Mobile Menu Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
         {isLoggedIn() ? <ProfileDropdown />:<button className='bg-pink-500'>Login/Sognup</button>}
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-sm transition-colors ${
                      isActive
                        ? "text-blue-700 font-semibold dark:text-blue-400"
                        : "text-gray-900 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400"
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
