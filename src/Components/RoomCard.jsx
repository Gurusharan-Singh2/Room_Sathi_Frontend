import React from 'react'
import { Icons } from '../../utils/icon'


const RoomCard = ({data,isHover}) => {
  return (
    <div  className='  inline-block border bg-gray-100 text-black h-auto   w-[18rem]  rounded-2xl border-none hover:border-none hover:shadow-lg transition duration-300'>
                  <img className='rounded-t-2xl' src={data.image} alt="room picture" />
    
          <div className='flex flex-col gap-2 p-2'>
              <h2 className='text-xl font-bold pt-6'>{data.title}</h2>
            <p className="text-sm">{data.description}</p>

            <div className='w-full flex justify-between border-b border-gray-300 my-2'>
                <div>
                    <h2 className='text-basic'><span className='text-xl font-extrabold text-blue-500 '>₹{data.price}</span>/month</h2>
                </div>
                <div>
                    {data.status}
                </div>
            </div>
            <div className=' flex gap-6 '>
                {data.services.map((a)=>{
                    const l=Icons.find((i)=>i.title===a)
                    return <div className='flex gap-1'>
                      
                        {<l.icon className='text-blue-500 text-sm' size={18} />}
                        <p className='text-xs text-gray-5'>  {l.title}</p>

                    </div>
                })}
            </div>
            <button className={` bg-blue-300/92 rounded-full py-2 px-4  text-base font-semibold  text-blue-600 `}>View Details</button>
    
          </div>
          </div>
  )
}

export default RoomCard

