'use client'
import React, { useState } from 'react'
import Modal from './cards/Modal'

const Details = () => {

    const [showModal,setShowModal]=useState(false);

    const handleOnClose=()=>{
        setShowModal(!showModal);
    }

  return (
    
        <div className='bg-gray-200 h-[32rem] w-[72rem] p-3 mx-auto'>
            <div className='grid grid-cols-2'>

                {/* left section */}
                <div className='flex flex-col gap-6 p-8'>
                    {/* personal details */}
                    <div className='flex gap-6'>
                        {/* image */}
                        <div className='w-40 h-40'>
                            <img src="/images/avtaar.jpg" alt="" />
                        </div>
                        {/* details */}
                        <div className='flex gap-4 items-center'>
                            <div className='flex flex-col gap-2 font-semibold'>
                                <div>Name  </div>
                                <div>Email</div>
                                <div>Gender</div>
                                <div>Phone No.</div>
                                <div>DOB.</div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div><span>: </span>Rashika</div>
                                <div><span>: </span>rashika@gmail.com</div>
                                <div><span>: </span>Female</div>
                                <div><span>: </span>9876567890</div>
                                <div><span>: </span>18/10/2002</div>
                            </div>
                        </div>
                    </div>
                    {/* academic details */}
                    <div className='flex flex-col gap-4'>
                        <div className='font-bold text-xl'>Academic Details</div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 font-semibold'>
                                <div>Registration No.</div>
                                <div>Batch</div>
                                <div>Branch</div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div><span>: </span>21030480033</div>
                                <div><span>: </span>2021</div>
                                <div><span>: </span>Information Technology</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right section */}
                <div className='flex flex-col gap-2'>

                    <div className='flex justify-between p-1'>
                        <div className='text-xl'>Books</div>
                        <div className='flex'>
                            <button onClick={()=>setShowModal(true)} className=' cursor-pointer px-8 rounded-md bg-amber-600 text-amber-50'>Issue Book</button>
                       </div>
                    </div>

                    <Modal onclose={handleOnClose} visible={showModal}/>

                    <div className='  border-2 border-gray-500 bg-white p-2'>
                        {/* issued books */}
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold p-1'>Issued Books</div>
                            <div className='bg-gray-300 flex flex-col gap-3 p-3'>
                                <div className='grid grid-cols-3 font-semibold gap-20'>
                                    <div>Title</div>
                                    <div>Issue Date</div>
                                </div>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div>Gulivers Travel</div>
                                    <div>22/12/2023</div>
                                    <div>
                                        <button className=' cursor-pointer px-6 rounded-md bg-amber-600 text-amber-50'>Return</button>
                                     </div>
                                </div>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div>Gulivers Travel</div>
                                    <div>22/12/2023</div>
                                    <div>
                                        <button className=' cursor-pointer px-6 rounded-md bg-amber-600 text-amber-50'>Return</button>
                                  </div>
                                </div>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div>Gulivers Travel</div>
                                    <div>22/12/2023</div>
                                    <div>
                                        <button className=' cursor-pointer px-6 rounded-md bg-amber-600 text-amber-50'>Return</button>
                                      </div>
                                </div>
                            </div>
                        </div>

                        {/* previous booked */}
                        <div className='flex flex-col gap-2'>
                            <div className='font-semibold p-1'>Previous Issues </div>
                            <div className='bg-gray-300 flex flex-col gap-3 p-3'>
                                <div className='grid grid-cols-3 font-semibold gap-20'>
                                    <div>Title</div>
                                    <div>Issue Date</div>
                                    <div>Return Date</div>
                                </div>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div>Gulivers Travel</div>
                                    <div>22/12/2023</div>
                                    <div>28/12/2023</div>
                                </div>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div>Gulivers Travel</div>
                                    <div>22/12/2023</div>
                                    <div>28/12/2023</div>
                                </div>
                                <div className='grid grid-cols-3 gap-20'>
                                    <div>Gulivers Travel</div>
                                    <div>22/12/2023</div>
                                    <div>28/12/2023</div>
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
  )
}

export default Details
