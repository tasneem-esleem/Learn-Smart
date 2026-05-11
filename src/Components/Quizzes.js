import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import close from "../image/Group 26815.png"
import Profilesidebar from './Profilesidebar';

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-white flex flex-row-reverse items-stretch overflow-x-hidden" dir="rtl">

      <main className="flex-1 flex flex-col pt-12 px-4 md:px-6 lg:px-32 items-end">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-10 text-left w-full max-w-4xl">
          Quizzes
        </h1>
          
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-20 shadow-[0_0_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center">
            
            <div className="mb-10 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
              <img src={close} alt="close" loading="lazy" className="w-full h-auto"/>
            </div>

            <h2 className="text-xl text-[#767676] mb-2 font-semibold">No Exams Available</h2>
            <p className="text-sm text-[#767676] max-w-xs leading-relaxed">
              You currently don't have any exams assigned.<br/> Please check again later.
            </p>

            <NavLink
              to="/home" 
              className="mt-12 px-10 md:px-14 py-3.5 rounded-full bg-[#38B793] text-white font-bold text-sm hover:bg-[#2fa382] transition-colors duration-300 shadow-lg"
            >
              Go Back Home
            </NavLink>
          </div>
        </div>
      </main>

      <aside className="bg-white border-l border-gray-100 min-h-screen h-screen sticky top-0 shadow-sm z-10 w-fit lg:w-72 flex-shrink-0 transition-all duration-300">
        <div className="pt-24 px-2 lg:px-4" dir="ltr">
          <Profilesidebar />
        </div>
      </aside>
      
    </div>
  )
}
