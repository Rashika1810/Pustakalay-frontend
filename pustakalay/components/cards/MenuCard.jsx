import React from 'react'
import { PiStudentBold } from "react-icons/pi";
import { TbBooks } from "react-icons/tb";
import { TbBooksOff } from "react-icons/tb";
import { BiBookAdd } from "react-icons/bi";
import { MdEventAvailable } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
const MenuCard = () => {
  return (
    <div className='flex flex-col gap-14'>
      <div className='flex justify-center gap-8'>
        
        <Link href="/StudentRegister" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <PiStudentBold size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Student</div>
          <div className='font-semibold text-xl'>Registration</div>
            </div>
        </Link>
       
        <Link  href="/AdminLogin" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <CgProfile size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Student</div>
          <div className='font-semibold text-xl invisible'>Details</div>
            </div>
        </Link>
        
        <Link href="/AdminLogin" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <BiBookAdd size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Add</div>
          <div className='font-semibold text-xl'>Books</div>
            </div>
        </Link>
        <Link href="/AdminLogin" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <MdEventAvailable size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Check</div>
          <div className='font-semibold text-xl'>Availability/Location </div>
            </div>
        </Link>
        
      </div>
      <div className='flex justify-center gap-8'>
        <Link  href="/AdminLogin" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <BiLocationPlus size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Update</div>
          <div className='font-semibold text-xl'>Position of Books</div>
        </div>
            </Link>
            <Link href="/AdminLogin" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <TbBooks size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Return</div>
          <div className='font-semibold text-xl'>Books</div>
            </div>
        </Link>
        
        <Link href="/AdminLogin" className='flex flex-col cursor-pointer border-2 gap-4 bg-amber-600 hover:bg-amber-500 hover:text-white text-amber-50 p-4 justify-center items-center shadow-xl w-56 h-56 rounded-lg'>
          <div>
            <TbBooksOff size={100}/>
            </div>
            <div className='flex flex-col items-center'>

          <div className='font-semibold text-xl'>Delete</div>
          <div className='font-semibold text-xl'>Books</div>
            </div>
        </Link>
        
        
      </div>
    </div>
  )
}

export default MenuCard
