import React from 'react'

const Navbar = () => {
  return (
    <div>

    <nav className=" bg-amber-700 p-3 flex justify-between items-center shadow-2xl">
    <div className="flex items-center ">
      <img src="/images/logo.png" alt="Logo" className="h-10 w-10 rounded-2xl" />
      {/* <span className="text-amber-50 ml-2 text-xl font-medium">PUSTAKALAY</span> */}
    </div>
    <div className="flex items-center">
      <button className="border font-bold text-amber-50 border-amber-50 px-3 py-1 rounded-2xl cursor-pointer hover:bg-amber-50 hover:text-amber-700 mr-2">
        Change Password
      </button>
      <button className="border font-bold text-amber-50 border-amber-50 px-3 py-1 rounded-2xl cursor-pointer hover:bg-amber-50 hover:text-amber-700">
        Logout
      </button>
    </div>
  </nav>

    </div>
  )
}

export default Navbar




