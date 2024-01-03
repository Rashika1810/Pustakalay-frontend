'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Navbar = () => {

  const { push } = useRouter();
  const handleLogout=()=>{
    localStorage.removeItem('user');
    push('/AdminLogin');
  }
  return (
    <div className='h-10 w-auto'>

    <nav className=" bg-amber-700 p-3 flex justify-between items-center shadow-2xl">
    <Link href="/" className="flex items-center ">
      <img src="/images/logo.png" alt="Logo" className="h-10 w-10 rounded-2xl" />
    </Link>
    <div className="flex items-center">
      <button className="border font-bold text-amber-50 border-amber-50 px-3 py-1 rounded-2xl cursor-pointer hover:bg-amber-600 hover:text-amber-50 mr-2">
        Change Password
      </button>
      <button onClick={handleLogout} className="border font-bold text-amber-50 border-amber-50 px-3 py-1 rounded-2xl cursor-pointer hover:bg-amber-600 hover:text-amber-50">
        Logout
      </button>
    </div>
  </nav>

    </div>
  )
}

export default Navbar




