import React from 'react'

const Loader = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-white'>
      <img src='/images/Load.gif' alt='' className=' h-96 w-96'/>
    </div>
  )
}

export default Loader
