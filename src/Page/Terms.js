import React from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom'
import illustration from "../image/undraw_terms_sx63 (1) 1.png"

export default function Terms() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 font-sans overflow-x-hidden">
      <div className="bg-white w-full max-w-full lg:max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-24 py-10 md:py-16 shadow-sm rounded-3xl text-start relative">
        
        {/* Back Button */}
        <button 
          className="mb-8 p-2 hover:bg-gray-100 rounded-full transition-all flex items-center justify-center"
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <HiOutlineArrowLeft size={24} className="text-gray-900" />
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Content Section */}
          <div className="flex-1 order-2 lg:order-1 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black mb-6 md:mb-8 leading-tight tracking-tight">
              TERMS AND <br className="hidden sm:inline" /> CONDITIONS
            </h1>
            
            <h3 className="text-lg md:text-xl font-bold text-black mb-4 md:mb-6 leading-snug">
              Please read these terms carefully before using the platform
            </h3>

            <div className="space-y-4 md:space-y-6 text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Welcome to Learn Smart. By accessing and using this platform, you agree to comply with the following terms and conditions. These terms are designed to ensure a safe, respectful, and effective learning environment for all users.
              </p>
              
              <p>
                Users are expected to use the platform for educational purposes only. Any misuse of the platform, including inappropriate behavior, sharing harmful content, or violating the rights of others, is strictly prohibited. Respect between students, teachers, and all users is essential.
              </p>

              <p>
                All content available on this platform, including courses, materials, and resources, is protected by intellectual property rights. Users are not allowed to copy, distribute, or reuse any content without proper permission.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-12 w-full sm:w-auto">
              <Link to="/register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-3 bg-[#F1F1F1] text-black font-bold rounded-full hover:bg-gray-200 transition-colors min-w-[180px] text-base md:text-lg">
                  No, Thanks
                </button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-12 py-3 bg-[#38B793] text-white font-bold rounded-full hover:bg-[#36a583] transition-colors min-w-[180px] text-base md:text-lg shadow-md shadow-[#42b89344]">
                  Accept
                </button>
              </Link>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[480px]">
            <img 
              src={illustration} 
              alt="Terms and conditions illustration" 
              className="w-full h-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}