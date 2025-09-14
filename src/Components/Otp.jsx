import React from 'react'

function Otp() {
  return (
    <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
         <input name='password' onChange={(e)=>setpassword(e.target.value)} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:gray:400'  placeholder='Enter otp' type="password" />
             <button  className={`w-1/2 text-lg font-medium bg-red-600 rounded-2xl mt-4 transition-all z-10 "text-black"} `}> Verify</button>
    </div>
  )
}

export default Otp