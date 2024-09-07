import React, { useState } from 'react';
import pro from '../assest/profile.png';
import { FiAirplay, FiChevronRight,FiMail,FiCalendar,FiBook,FiSmile,FiFilePlus,FiDollarSign,FiGift,FiCopy } from "react-icons/fi";
import { GoPeople,GoPerson } from "react-icons/go";
import { SiOnlyoffice } from "react-icons/si";


import { sideBarList } from '../data/data';
function SideBar({ isOpen }) {


    const getIcon = (iconName) => {
        switch (iconName) {
          case 'FiAirplay':
            return <FiAirplay className="mt-1" />;
          case 'FiMail':
            return <FiMail className="mt-1" />;
          case 'FiCalendar':
            return <FiCalendar className="mt-1" />;
          case 'FiBook':
            return <FiBook className="mt-1" />;
          case 'GoPeople':
            return <GoPeople className="mt-1" />;
          case 'GoPerson':
            return <GoPerson className="mt-1" />;
          case 'FiSmile':
            return <FiSmile className="mt-1" />;
          case 'FiFilePlus':
            return <FiFilePlus className="mt-1" />;
          case 'FiDollarSign':
            return <FiDollarSign className="mt-1" />;
          case 'FiGift':
            return <FiGift className="mt-1" />;
          case 'FiCopy':
            return <FiCopy className="mt-1" />;
          case 'SiOnlyoffice':
            return <SiOnlyoffice className="mt-1" />;
          default:
            return null; // In case the icon is not found
        }
      };
      

    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <div className={`h-screen bg-white transition-all duration-300  ${isOpen ? 'w-60' : 'w-16'}`}>
            {/* Toggle button for mobile */}
       {/* <div className="fixed left-0"> */}
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
                    {sideBarList.map((item, index) => {
                    
                  
                                  
                 return   (
                       
                        <li
                            key={index}
                            className={`h-14 cursor-pointer px-4 flex justify-between items-center transition-all duration-300 
              ${activeItem === index ? 'bg-[#F4F6F9]' : 'hover:bg-[#F4F6F9]'}`}
                            onClick={() => handleItemClick(index)}
                        >
                            <div className="flex gap-2 ">
                            {getIcon(item.icon)}
                                {isOpen && <span>{item.name}</span>}
                            </div>
                            {/* Rotate icon if the item is active */}
                            <div className="flex gap-4 justify-center items-center">
                                {
                                item.num ?
                                 <p className={`bg-[${item.color}] hidden sm:flex text-white text-sm font-poppins w-8 h-5 rounded-full flex items-center justify-center`}>{item.num}</p> :
                                 ""
                                }
                                {
                                    item.name === 'Calendar' || item.name === 'Widget' ? 
                                     "" :

                            <FiChevronRight
                                className={`mt-1 ml-2 md:mt-0 md:ml-0 transition-transform duration-300 ${activeItem === index ? 'rotate-90' : ''}`}
                            />
                                }
                            </div>
                        </li>
                    )
                }
                    )}
                </ul>
            </div>

      {/* </div> */}
        </div>
    );
}

export default SideBar;
