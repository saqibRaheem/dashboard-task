import React from 'react'
import icon from '../assest/medico.png';
import flag from '../assest/flag.png';
import { FiBell, FiMoreVertical, FiMenu } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import pro from '../assest/profile.png';




function Navbar({ isOpen, toggleSidebar }) {
  return (
    <div className={`h-16 w-full flex justify-between shadow-md sticky top-0 z-10 bg-white`}>
      <div className="flex gap-4 justify-center items-center">
        <div className={`h-16 bg-[#6673FC] flex justify-between items-center px-4  transition-all duration-300  ${isOpen ? 'w-60' : 'w-16'} `}>
          <div className="flex items-center gap-2">
            <img src={icon} alt="icon" className="w-10 h-9" />
            {isOpen && <h1 className="font-poppins text-2xl text-white">Medical</h1>}
          </div>
        </div>

        <button onClick={toggleSidebar} className="hidden sm:flex">
          <FiMenu size={28} />
        </button>

        <input type="text" placeholder='search...' className='font-poppins w-52 h-10 p-4 bg-[#F4F4F4] rounded-md' />
      </div>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <div className="flex justify-center items-center">
          <img src={flag} alt="" className='w-4 h-3' />
          <p className='font-poppins'>English</p>
        </div>
        <div className="hidden md:flex relative">
          <FiBell size={28} />
          <span className='w-4 h-4 rounded-full bg-[#FF7400] text-white absolute top-[-4px] right-0 flex items-center justify-center'>
            6
          </span>
        </div>

        <div className="hidden md:flex relative">
          <FaRegEnvelope size={28} />
          <span className='w-4 h-4 rounded-full bg-[#6677EF] text-white absolute top-[-4px] right-[-6px] flex items-center justify-center'>
            2
          </span>
        </div>

        <div className="hidden md:flex  justify-center items-center">
          <img src={pro} alt="" className='size-7 rounded-full' />
          <p className='font-poppins text-sm font-semibold'> Kiran</p>
        </div>
        <FiMoreVertical size={28} />
      </div>
    </div>
  );
}

export default Navbar
