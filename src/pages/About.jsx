import React, { useState } from 'react'
import { Users, Home, Shield, Heart } from "lucide-react";
import Footer from "../Components/footer";
import { Search,ShieldCheck, Sparkles, Lock } from "lucide-react";

const About = () => {
   const [isHover,setIsHover]=useState(false);

  return (
    
    <div className="h-auto mt-10  bg-gray-50 w-screen text-gray-800">
     
      <section className="text-center pt-15 bg-gray-50 text-Font-dark">
  <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className=" max-w-2xl  mx-auto  text-xl text-gray-600">
          We make finding rooms and roommates simple, safe, and stress-free.
    </p>

             

             <p className='text-xl text-gray-600 flex justify-center '>Your trusted companion in finding the perfect living arrangement</p>
  <div className='flex items-center h-80 mx-20 justify-between '> 

   <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[26rem] p-6 inline-block border bg-Font-white text-black h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-300/80 hover:text-red-500 hover:scale-105 hover:shadow-lg transition duration-300'>
    <ShieldCheck className="w-10 h-10   text-green-600 mx-auto mb-2" />
     <h3 className='text-2xl font-medium p-2 '>Verified Rooms</h3> 
     <p className={` ${isHover?'text-black':'text-black'} `}>All rooms and roommates are verified for your safety and peace of mind</p>
    </div>

   <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[26rem] p-6 inline-block border bg-Font-white text-black h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-300/80 hover:text-red-500 hover:scale-105 hover:shadow-lg transition duration-300'>

 <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
  <h3 className='text-2xl font-medium p-2 '>Smart Matching</h3> 
  <p className={`text-black`}>Our algorithm finds compatible roommates based on your preferences</p>
</div>

   <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[26rem] p-6 inline-block border bg-Font-white text-black h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-300/80 hover:text-red-500 hover:scale-105 hover:shadow-lg transition duration-300'>
   <Lock className="w-10 h-10 text-blue-600 mx-auto mb-2" />
  <h3 className='text-2xl font-medium p-2 '>Secure Platform</h3> 
  <p className={`text-black`}>Your data is protected with industry-standard security measures</p>
</div>

  </div>



<div className='h-90 px-4 justify-between '>
     <h2 className='text-4xl text-center font-semibold font-serif pb-3'>How It Works</h2>
     <p className='text-xl text-gray-600 text-center space-x-8 '>Find your ideal living situation in three simple steps</p>

     <div className='flex h-55 w-full justify-center pt-10   gap-6 py-2 ' >
     
<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='  inline-block border bg-gray-50 text-black h-auto  text-center w-[26rem] p-6 rounded-2xl hover:border-none hover:bg-orange-300/80 hover:text-red-500 hover:scale-105 hover:shadow-lg transition duration-300'>
       <button className={` ${isHover?'bg-purple-600 rounded-full py-2 px-4 ':'bg-orange-300 '} rounded-full py-2 px-4 `}>1</button>
        <h2 className='text-2xl font-bold '>Create Profile</h2>
        <p className={`'text-black''} `}>Sign up and tell us about yourself and what you're looking for</p>
      </div>

<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='  inline-block border bg-gray-50 text-black h-auto  text-center w-[26rem] p-6 rounded-2xl hover:border-none hover:bg-orange-300/80 hover:text-red-500 hover:scale-105 hover:shadow-lg transition duration-300'>
       <button className={` ${isHover?'bg-purple-600 rounded-full py-2 px-4 ':'bg-orange-300 '} rounded-full py-2 px-4 `}>2

       </button>
        <h2 className='text-2xl font-bold'>Browse & Match</h2>
        <p className={` 'text-black' `}>Explore listings and connect with compatible roommates</p>
      </div>

<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='  inline-block border bg-gray-50 text-black h-auto  text-center w-[26rem] p-6 rounded-2xl hover:border-none  hover:bg-orange-300/80 hover:text-red-500 hover:scale-105 hover:shadow-lg transition duration-300'>
       <button className={` ${isHover?'bg-purple-600 rounded-full py-2 px-4 ':'bg-orange-300 '} rounded-full py-2 px-4 `}>3</button>
      <h2 className='text-2xl font-bold'>Move In</h2>
      <p className={` 'text-black' `}>Schedule visits and finalize your perfect living arrangement</p>
      </div>

       </div>  </div>

      </section>

    
      <section className="py-16 px-8 text-center bg-gray-50 ">
        <h2 className="text-4xl font-semibold font-serif mb-6 text-Font-dark">
          Our Mission
        </h2>
    <p className="max-w-3xl mx-auto text-xl text-gray-600">
          Our goal is to connect people with their ideal living spaces and
        compatible roommates through verified listings and smart matching
          technology. We believe that finding a place to call home should be
       easy, transparent, and secure.
        </p>
          </section>

    
      <section className="flex flex-wrap justify-center gap-8 px-8 py-16  bg-gray-50">
        <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[20rem] p-6 bg-purple-600 text-white h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-104 hover:shadow-lg transition duration-300'>
            <Users className="w-10 h-10 text-white mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold mb-2">Community Driven</h3>
      <p className={`text-xl ${isHover?'text-black':'text-white'} `} >
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

      
      <section className="py-16 text-center bg-gray-50">
     <h2 className="text-3xl font-bold mb-4 text-Font-dark">Join Us</h2>
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-8">
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
