'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';



const page = () => {
	const { push } = useRouter();
	
	const [email,setEmail]=useState("");
	const[password,setPassword]=useState("");
	
	const handleLogin=async()=>{
		try {
			const resp=await axios.post('https://pustakalay-backend.vercel.app/librarian/login',{
			email,password
		})

		console.log(resp);
		if(resp.status==200)
		{
			console.log('login successful');
			localStorage.setItem('user',JSON.stringify(resp.data.data));
			push('/');

		}
		
		else
		console.log('error');
			
		} catch (error) {
			console.log("error",error);
		}
		
	}

	useEffect(()=>{
		if(localStorage.getItem('user'))
		{
			push('/');
		}
	},[])
  return (
    <div className='mt-3'>
       <h1 className="bg-gradient-to-r from-amber-200 to-amber-600 font-semibold text-transparent text-5xl text-center bg-clip-text">Welcome to Pustakalay</h1>
<div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold text-amber-500">Login Here</h1>
				</div>
				<div className="divide-y divide-amber-200">
					<div className="py-8 text-base leading-6 space-y-4 text-amber-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-amber-300 text-amber-700 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label htmlFor="email" className="absolute left-0 -top-3.5 text-amber-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-amber-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-amber-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-amber-300 text-amber-700 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label htmlFor="password" className="absolute left-0 -top-3.5 text-amber-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-amber-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-amber-600 peer-focus:text-sm">Password</label>
						</div>
						<div className="relative">
							<button onClick={handleLogin} className="bg-amber-500 text-white rounded-md px-2 py-1">Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
    </div>
  )
}

export default page
