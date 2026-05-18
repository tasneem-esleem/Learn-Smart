import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { GrLogout } from "react-icons/gr";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { FiSettings } from 'react-icons/fi';
import {useAuth} from "../Context/AuthContext"
import { UserContext } from '../Context/UserContext';

const menuItems = [
  { name: 'Profile',    path: '/profile',     icon: <CgProfile /> },
  { name: 'Assignment', path: '/assignment',   icon: <IoBookOutline /> },
  { name: 'Quizzes',    path: '/quizzes',    icon: <HiOutlineClipboardDocument /> },
  { name: 'Messages',   path: '/messages',    icon: <TiMessages /> },
  { name: 'Settings',   path: '/settings',    icon: <FiSettings /> },
];

export default function Profilesidebar() {
  const {user}=useContext(UserContext);
  const navigate = useNavigate();
  const {logout} = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    logout();
    navigate('/', { replace: true })
  }

  return (
    <div className="w-fit lg:w-full flex flex-col gap-3 transition-all duration-300">
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center justify-center lg:justify-start gap-0 lg:gap-4 px-3 lg:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_50px_0_rgba(0,0,0,0.05)] border 
            ${isActive
              ? 'text-[#38B793] bg-[#F1FAF8] border-[#38B793]/10 ' 
              : 'text-gray-500 bg-white border-transparent hover:border-gray-100 hover:shadow-md'
            }`
          }
        >
          <span className="text-xl flex-shrink-0">{item.icon}</span>
          
          <span className="hidden lg:block whitespace-nowrap">
            {item.name}
          </span>
        </NavLink>
      ))}

      <button
        className="flex items-center justify-center lg:justify-start gap-0 lg:gap-4 px-3 lg:px-6 py-3 rounded-full text-sm font-medium text-gray-500 bg-white shadow-sm border border-transparent hover:border-red-100 hover:text-red-500 hover:shadow-md transition-all duration-300 w-full mt-2"
        onClick={handleLogout}
      >
        <span className="text-xl flex-shrink-0">
          <GrLogout />
        </span>
        
        <span className="hidden lg:block whitespace-nowrap">
          Log out
        </span>
      </button>
    </div>
  )
}
