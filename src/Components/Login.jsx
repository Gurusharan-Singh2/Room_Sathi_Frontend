import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

function Login() {
    const [islogin,setlogin]=useState(false)

     useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, [navigate]);

    const [username,setusername]=useState("");
    const[password,setpassword]=useState("");
    const [email,setemail]=useState("");

    async function login(){ 
        let item={username,email,password}
        let result= await fetch("https://room-sathi-backend.onrender.com/api/user/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        });
        result= await result.json();
localStorage.setItem('user-info' ,JSON.stringify(result));
navigate("/add") 
}

  return (
    <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'> 
    <div className='flex justify-center mb-4 '>
        <h2  className='text-3xl font-semibold' > {islogin ? "Login" :"SignUP"}</h2> </div>

    <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>
        <button onClick={()=>setlogin(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${islogin ? "text-white":"text-black"} `}>Login </button>
        <button onClick={()=>setlogin(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!islogin ? "text-black":"text-black"} `}>Signup </button>
    <div className='absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200'></div>
    </div>

     <form onSubmit={(e)=>{e.preventDefault(); login()}} className='space-y-4'>
            {!islogin && (
                // signup field name
               <div className='' >
            <input onChange={(e)=>{setusername(e.target.value);
                 console.log(setusername)}} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:gray:400' name='username'  placeholder='Enter Username' type="text" />
            </div>
            )}
            {/* shared field */}
            <div className=''> 
            <input name='email' onChange={(e)=>{setemail(e.target.value)}} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:gray:400' placeholder='Enter email' type="text" />
            </div>

            <div> 
            <input name='password' onChange={(e)=>setpassword(e.target.value)} className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:gray:400'  placeholder='Enter password' type="password" />
            </div>

             
             <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 text-white text-lg rounded-full hover:opacity-90 transition' >{islogin ? "Login":"Signup"} </button> 
             {islogin && (
                <div className='text-right'>
                    <p className='text-cyan-600 hover:underline '>Forget password</p>
                </div>
             )}
             <p className='text-center text-gray-600'>
                {islogin ? "You don't have an account ":"Already have an account"} 
                <a className='text-cyan-600 hover:underline ' href="#" onClick={(login)=>setlogin(!islogin)}>{islogin ? "SignUp now":" Login"}</a>
             </p>
        </form>
     </div>
  )
}
export default Login
