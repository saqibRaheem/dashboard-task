import React, { useState } from 'react';
import pro from '../assest/profile.png';
import { FiAirplay, FiChevronRight } from "react-icons/fi";

function SideBar({ isOpen }) {

    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <div className={`h-screen bg-white transition-all duration-300 ${isOpen ? 'w-60' : 'w-16'}`}>
            {/* Toggle button for mobile */}

            {/* Profile Section */}
            <div className="w-full h-36 mt-5 flex flex-col justify-center items-center">
                <img src={pro} alt="profile" className="w-12 h-12" />
                {/* Text will only show when sidebar is open */}
                {isOpen && (
                    <>
                        <h1 className="font-poppins text-sm font-semibold">Dr. Kiran Patel</h1>
                        <p className="font-poppins text-xs">Administrator</p>
                    </>
                )}
            </div>

            {/* Navigation Menu */}
            <div className="w-full">
                <ul className="mt-5">
                    {['Dashboard', 'Reports', 'Settings', 'Logout'].map((item, index) => (
                        <li
                            key={index}
                            className={`h-14 cursor-pointer px-4 flex justify-between items-center transition-all duration-300 
              ${activeItem === index ? 'bg-[#F4F6F9]' : 'hover:bg-[#F4F6F9]'}`}
                            onClick={() => handleItemClick(index)}
                        >
                            <div className="flex gap-2">
                                <FiAirplay className="mt-1" />
                                {isOpen && <span>{item}</span>}
                            </div>
                            {/* Rotate icon if the item is active */}
                            <FiChevronRight
                                className={`transition-transform duration-300 ${activeItem === index ? 'rotate-90' : ''}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
