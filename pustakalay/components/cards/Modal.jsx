import React from 'react'
import { ImCross } from "react-icons/im";

const Modal = ({visible,onclose}) => {

  const handleOnClose=(e)=>{
    if(e.target.id==='container')
    onclose();

    if(e.target.id==='cross')
    onclose();
  }

  if(!visible) return null;
  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-gray-400 bg-opacity-50 flex justify-center items-center'>
      <div className="bg-gray-300 border-gray-800 border-2">
      <div id='cross' onClick={handleOnClose} className='cursor-pointer ml-80 font-semibold'>
        X
      </div>
        <div className='flex justify-center flex-col gap-4 p-6'>
        <div>
            <label htmlFor="book_no">ISBN : </label>
            <input type="text" id='book_no' className='focus:outline-none' />
          </div>
          <div className='bg-amber-600 text-white rounded flex justify-center mx-auto'>
            <button onClick={onclose} className='w-32 py-1'>Issue</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Modal
