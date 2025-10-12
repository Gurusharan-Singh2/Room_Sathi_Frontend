import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <div className="bg-gray-900 w-full text-gray-300 py-10  mt-10">
    
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        
        <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-white mb-2">
            Room<span className="text-fuchsia-500">Sathi</span>
     </h2>
          <p className="text-sm text-gray-400">
            Find your perfect room and roommate with trust & ease.
          </p>
        </div>

       
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-fuchsia-500 transition">Home</a>
         <a href="#" className="hover:text-fuchsia-500 transition">About</a>
          <a href="#" className="hover:text-fuchsia-500 transition">Contact</a>
  <a href="#" className="hover:text-fuchsia-500 transition">Privacy</a>
        </div>

     
        <div className="flex gap-4">
     <a href="#" className="hover:text-fuchsia-500 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-fuchsia-500 transition">
     <Instagram className="w-5 h-5" />
        </a>
          <a href="#" className="hover:text-fuchsia-500 transition">
 <Twitter className="w-5 h-5" />
          </a>
         </div>
      </div>

  
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Room&Mate. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
