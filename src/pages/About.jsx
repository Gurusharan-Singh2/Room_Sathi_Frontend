import React, { useState } from 'react'
import { Users, Home, Shield, Heart } from "lucide-react";
import Footer from "../Components/footer";

const About = () => {
   const [isHover,setIsHover]=useState(false);
  return (
    <div className="h-auto mt-10  bg-Secondary w-screen text-gray-800">
     
      <section className="text-center pt-15 bg-Secondary text-Font-dark">
  <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className=" max-w-2xl  mx-auto text-lg text-gray-600">
          We make finding rooms and roommates simple, safe, and stress-free.
    </p>
      </section>

    
      <section className="py-16 px-8 text-center  ">
        <h2 className="text-4xl font-bold mb-6 text-Font-dark">
          Our Mission
        </h2>
    <p className="max-w-3xl mx-auto text-lg text-gray-600">
          Our goal is to connect people with their ideal living spaces and
        compatible roommates through verified listings and smart matching
          technology. We believe that finding a place to call home should be
       easy, transparent, and secure.
        </p>
          </section>

    
      <section className="flex flex-wrap justify-center gap-8 px-8 py-16  bg-Secondary">
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[20rem] p-6 bg-purple-600 text-white h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-104 hover:shadow-lg transition duration-300'>
            <Users className="w-10 h-10 text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Community Driven</h3>
      <p className={` ${isHover?'text-black':'text-white'} `} >
            We bring together a trusted community of renters, owners, and
         roommates who share your lifestyle and goals.
          </p>
        </div>

        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[20rem] p-6 bg-purple-600 text-white h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-104 hover:shadow-lg transition duration-300'>
  <Home className="w-10 h-10 text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Verified Listings</h3>
  <p className={` ${isHover?'text-black':'text-white'} `}>
            Every listing goes through our verification process to ensure
      authenticity and safety.
          </p>
        </div>

        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[20rem] p-6 bg-purple-600 text-white h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-104 hover:shadow-lg transition duration-300'>
          <Shield className="w-10 h-10 text-white mb-4 mx-auto" />
     <h3 className="text-2xl font-semibold mb-2">Safe Platform</h3>
          <p className={` ${isHover?'text-black':'text-white'} `}>
       Your privacy and data are protected with industry-standard
            encryption and secure transactions.
          </p>
        </div>

        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[20rem] p-6 bg-purple-600 text-white h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-104 hover:shadow-lg transition duration-300'>
       <Heart className="w-10 h-10 text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Built with Love</h3>
          <p className={` ${isHover?'text-black':'text-white'} `}>
            We’re passionate about helping people find not just a room, but a
        comfortable home and meaningful connections.
          </p>
        </div>
      </section>

      
      <section className="py-16 text-center bg-Secondary">
     <h2 className="text-3xl font-bold mb-4 text-Font-dark">Join Us</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Whether you’re searching for a cozy room or a friendly roommate, we’re
          here to make the process seamless and enjoyable.
        </p>
     <button className='text-xl text-center  bg-orange-500 hover:text-white rounded-2xl px-3 py-2 ml-2 hover:scale-105 hover:shadow-lg transition duration-200 '>
          Get Started
        </button>
      </section>
      <Footer/>
    </div>
  );
};

export default About;
