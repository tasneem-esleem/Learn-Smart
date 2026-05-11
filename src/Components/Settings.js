import React from 'react'
import { FiLock, FiTrash2 } from 'react-icons/fi';
import { CgProfile } from "react-icons/cg";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { LiaToolsSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import Profilesidebar from './Profilesidebar';
import { useNavigate } from 'react-router-dom';

const settingsOptions = [
  { id: 1, name: 'Manage Profile',    icon: <CgProfile />,                color: 'text-gray-700', path: '/profile' },
  { id: 2, name: 'Privacy & Security',icon: <FiLock />,                   color: 'text-gray-700', path: '/privacy-security' },
  { id: 3, name: 'Help & Support',    icon: <LiaToolsSolid />,            color: 'text-gray-700', path: '/help-security' },
  { id: 4, name: 'Terms of Use',      icon: <HiOutlineClipboardDocument />,color: 'text-gray-700', path: '/terms-of-use' },
  { id: 5, name: 'Send Feedback',     icon: <FaRegEdit />,                color: 'text-gray-700', path: '/send-feedback' },
  { id: 6, name: 'Delete Account',    icon: <FiTrash2 />,                 color: 'text-red-500' },
];

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-row-reverse items-stretch overflow-x-hidden" dir="rtl">

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 md:p-8 lg:px-24 " dir="ltr">

        <h1 className="text-2xl font-bold text-gray-800 mb-10 pt-10 text-start px-5">
          Settings
        </h1>

        <div className="flex flex-col gap-4 w-full max-w-md">
          {settingsOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => option.path && navigate(option.path)}
              className="flex items-center gap-4 bg-white rounded-full px-6 py-4 hover:shadow-md transition-all duration-300 w-full group shadow-[0_0_50px_0_rgba(0,0,0,0.05)]"
            >
              <span className={`text-xl ${option.color} group-hover:scale-110 transition-transform`}>
                {option.icon}
              </span>
              <span className={`text-[15px] font-semibold ${option.color}`}>
                {option.name}
              </span>
            </button>
          ))}
        </div>

      </main>

      {/* Sidebar */}
      <aside className="bg-white border-l border-gray-100 min-h-screen sticky top-0 shadow-sm z-10 w-fit lg:w-72 flex-shrink-0 transition-all duration-300">
        <div className="pt-24 px-2 lg:px-4" dir="ltr">
          <Profilesidebar />
        </div>
      </aside>

    </div>
  );
}