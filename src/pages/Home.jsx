import React, { useState } from 'react'
import Addinfo from '../Components/Addinfo'
import Footer from '../Components/footer';
import { Search,ShieldCheck, Sparkles, Lock } from "lucide-react";

import room from '../assets/roompic.png';
import RoomCard from '../Components/RoomCard';


const HomePage = () => {
  const [isHover,setIsHover]=useState(false);

  const Rooms=[
    {
      image:room,
      title:"Private Room near me",
      description:"Explore listings and connect with compatible roommates",
      price:500,
      status:"Private",
      services:[
        "Wifi",
        "Gym"
      ]
    },
    {
      image:room,
      title:"Private Room near me",
      description:"Explore listings and connect with compatible roommates",
       price:500,
      status:"Private",
      services:[
        "Wifi",
        "Gym"
      ]
    },
    {
      image:room,
      title:"Private Room near me",
      description:"Explore listings and connect with compatible roommates",
       price:500,
      status:"Private",
      services:[
        "Wifi",
        "Gym"
      ]
    },
    
  ]
  return (
    <div className='bg-gray-50 h-auto w-full  flex justify-center items-center' > 
       <div className='flex flex-col bg-gray-50 h-auto gap w-full text-Font-dark'>
    
    <div className='flex pb-30'>
    <div className='h-auto flex-wrap  flex-1/2  pt-50 gap-10  '>
        <h2 className='text-5xl md:text-5xl font-bold font-sans text-gray-900 text-center pb-3'>Find Your Perfect  <span className="text-purple-600">Room</span> &  <span className="text-purple-600">Roommate</span></h2>
         <p className='text-base text-gray-600  text-center pb-10 p-2'>Find and book your perfect room with ease. Start your search nowto
discover affordable and convenient student housing near your
campus.</p>
      
           
          <div className="flex flex-col w-full h-auto gap-2   p-4">
  <div className=" gap-2 p-2">  
    <div className=' w-full  p-2   '>
    <input type="text" className=' rounded-2xl text-center mx-2 w-full  pr-4 h-10 border-b-blue-100  bg-gray-100 ' placeholder='Enter your area'/>
    </div>

    <div className='w-full text-center  '>
    <select className="bg-gray-100 rounded-2xl p-2 mx-4" name="budget" id="budget">
      <option selected>Enter your budget</option>
      <option value="1k">1k</option>
      <option value="2k">2k</option>
      <option value="3k">3k</option>
      <option value="4k">4k</option>
    </select>

    <select className="bg-gray-100 rounded-2xl flex-1 p-2 mx-4" name="Room type">
      <option selected>Room type</option>
      <option value="Private">Private</option>
      <option value="Sharing">Sharing</option>
    </select>
    </div>
  </div>

  <button className="flex items-center justify-center gap-1 mx-12 py-2 bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 hover:shadow-lg transition duration-200 rounded-2xl">
    <Search className="w-4 h-4  " /> Search
  </button>
</div>


    </div>
     <div className='flex-1/2 pt-30 pr-6 '>
       <img className='rounded-2xl' src={room} alt="room picture" />
    </div>
    </div>

<div className='h-80 px-4 '> 
      <div className=' w-full h-50  rounded-2xl  '>
       <h2 className='text-5xl text-center py-3'>Ready to Find Your Perfect Match?</h2>
       <p className='text-base text-gray-600  text-center '>Join thousands of happy roommates who found their ideal living situation</p>
       <div className='text-center  w-full py-10'>
      <button  className='w-[15rem] text-center text-amber-50 bg-blue-500 hover:bg-blue-600 rounded-2xl px-3 py-2 hover:scale-105 hover:shadow-lg transition duration-200'>Post Room</button>
      <button className='w-[15rem] text-center  bg-gray-300 hover:bg-blue-600 text-black rounded-2xl px-3 py-2 ml-2 hover:scale-105 hover:shadow-lg transition duration-200 '>Browse Listing</button>
     </div>
      </div>
      </div>


 
       <div className='flex h-auto w-full justify-center pt-10   gap-6 py-2 ' >
     
{
  Rooms.map((r)=> <RoomCard data={r} isHover={isHover}/>)

}

 </div>
  


<Footer/>
        </div>
    </div>
  )
}

export default HomePage