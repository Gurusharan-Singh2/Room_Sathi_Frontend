import React, { useState } from 'react'
import Addinfo from '../Components/Addinfo'
import Footer from '../Components/footer';
import { Search,ShieldCheck, Sparkles, Lock } from "lucide-react";


const HomePage = () => {
  const [isHover,setIsHover]=useState(false);
  return (
    <div className='bg-Secondary h-auto w-full  flex justify-center items-center' > 
       <div className='flex flex-col h-auto gap w-full text-Font-dark'>
    
    <div className='h-120 inline-block   pt-50 gap-10  '>
        <h2 className='text-7xl font-bold text-center pb-3'>Find Your Perfect  <span className="text-purple-600">Room</span> &  <span className="text-purple-600">Roommate</span></h2>
         <p className='text-xl text-center from-neutral-500 pb-10'>Connect with compatible roommates and discover comfortable living spaces in your area</p>
           
           <div className="flex justify-center h-30 pt-8 w-[50vw] item-center gap-1  mx-auto rounded-2xl  border-gray-500">
           <input className='border  border-gray-500 w-80 text-center h-15 rounded-2xl bg-emerald-50   'placeholder= ' Enter your city or area' type="text" />
                     <input className='border  border-gray-500 w-80 text-center h-15 rounded-2xl  bg-emerald-50   'placeholder= ' Enter your city or area' type="text" />
           <input className='border  border-gray-500 w-80 text-center h-15 rounded-2xl  bg-emerald-50   'placeholder= ' Enter your city or area' type="text" />

           <button className=" text-center border flex-row px-3 py-0 h-[3.5rem]  flex pt-4 hover:text-amber-50 bg-fuchsia-500 hover:scale-105 hover:shadow-lg transition duration-200 rounded-2xl">
           <Search className="w-10 h-5  " /> Search &nbsp;
             </button>
          </div>
    </div>

              
               <h1 className='text-6xl  font-bold flex justify-center pt-8 pb-3'>Why choose RoomSathi?</h1>
             <p className='text-xl  flex justify-center '>Your trusted companion in finding the perfect living arrangement</p>
  <div className='flex items-center h-80  mx-4  justify-between '> 

   <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[26rem] p-6 inline-block border bg-purple-600 text-white h-auto  text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300'>
    <ShieldCheck className="w-10 h-10   text-green-600 mx-auto mb-2" />
     <h3 className='text-2xl font-medium p-2 '>Verified Rooms</h3> 
     <p className={` ${isHover?'text-black':'text-white'} `}>All rooms and roommates are verified for your safety and peace of mind</p>
    </div>

<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[26rem] p-6 inline-block border bg-purple-600 text-white h-auto  text-center rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300'>

 <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
  <h3 className='text-2xl font-medium p-2 '>Smart Matching</h3> 
  <p className={` ${isHover?'text-black':'text-white'} `}>Our algorithm finds compatible roommates based on your preferences</p>
</div>

<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className=' w-[26rem] p-6 inline-block border bg-purple-600 text-white h-auto  text-center rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300'>
   <Lock className="w-10 h-10 text-blue-600 mx-auto mb-2" />
  <h3 className='text-2xl font-medium p-2 '>Secure Platform</h3> 
  <p className={` ${isHover?'text-black':'text-white'} `}>Your data is protected with industry-standard security measures</p>
</div>

  </div>



<div className='h-90 px-4 justify-between '>
     <h2 className='text-6xl text-center font-bold'>How It Works</h2>
     <p className='text-gray-700 text-center space-x-8 '>Find your ideal living situation in three simple steps</p>

     <div className='flex h-55 w-full justify-center    gap-6 py-2 ' >
     
<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='  inline-block border bg-purple-600 text-white h-auto w-[26rem] p-6 text-center  rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300'>
       <button className={` ${isHover?'bg-purple-600 rounded-full py-2 px-4 ':'bg-orange-500 '} rounded-full py-2 px-4 `}>1</button>
        <h2 className='text-2xl font-bold '>Create Profile</h2>
        <p className={` ${isHover?'text-black':'text-white'} `}>Sign up and tell us about yourself and what you're looking for</p>
      </div>

<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='  inline-block border bg-purple-600 text-white h-auto  text-center w-[26rem] p-6 rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300'>
       <button className={` ${isHover?'bg-purple-600 rounded-full py-2 px-4 ':'bg-orange-500 '} rounded-full py-2 px-4 `}>2

       </button>
        <h2 className='text-2xl font-bold'>Browse & Match</h2>
        <p className={` ${isHover?'text-black':'text-white'} `}>Explore listings and connect with compatible roommates</p>
      </div>

<div onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className='  inline-block border bg-purple-600 text-white h-auto  text-center w-[26rem] p-6 rounded-2xl hover:border-none hover:bg-orange-500/80 hover:text-black hover:scale-105 hover:shadow-lg transition duration-300'>
       <button className={` ${isHover?'bg-purple-600 rounded-full py-2 px-4 ':'bg-orange-500 '} rounded-full py-2 px-4 `}>3</button>
      <h2 className='text-2xl font-bold'>Move In</h2>
      <p className={` ${isHover?'text-black':'text-white'} `}>Schedule visits and finalize your perfect living arrangement</p>
      </div>

       </div>  
  </div>


<div className='h-80 px-4 '> 
      <div className=' w-full h-50  rounded-2xl  '>
       <h2 className='text-5xl text-center py-3'>Ready to Find Your Perfect Match?</h2>
       <p className='text-xl text-center '>Join thousands of happy roommates who found their ideal living situation</p>
       <div className='text-center py-5'>
      <button  className='text-xl text-center hover:text-amber-50 bg-purple-600 rounded-2xl px-3 py-2 hover:scale-105 hover:shadow-lg transition duration-200'>Get Started free</button>
      <button className='text-xl text-center  bg-orange-500 hover:text-white rounded-2xl px-3 py-2 ml-2 hover:scale-105 hover:shadow-lg transition duration-200 '>Browse Listing</button>
     </div>
      </div>
    </div>
<Footer/>
        </div>
    </div>
  )
}

export default HomePage