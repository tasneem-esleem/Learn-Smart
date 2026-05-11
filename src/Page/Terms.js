import React from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link , useNavigate} from 'react-router-dom'
import illustration  from "../image/undraw_terms_sx63 (1) 1.png"
export default function Terms() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center -my-12 font-sans">
   <div className="bg-white w-full px-28 shadow-sm  text-start p-10 md:p-20 relative">
        
       
    <button className="mb-12 p-2 hover:bg-gray-100 rounded-full transition-all"
    onClick={()=> navigate(-1)}
     >
          <HiOutlineArrowLeft size={28} className="text-gray-900" />
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="flex-1 order-2 lg:order-1">
            <h1 className="text-xl md:text-6xl font-semibold text-black mb-10 leading-tight tracking-tight">
              TERMS AND <br /> CONDITIONS
            </h1>
            
            <h3 className="text-xl font-bold text-black mb-6">
              Please read these terms carefully before using the platform
            </h3>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-2xl">
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

            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <Link to="/register">
              <button className="px-14 py-2 bg-[#F1F1F1] text-black font-bold rounded-full hover:bg-gray-200 transition-colors min-w-[200px] text-lg">
                No, Thanks
              </button>
              </Link>
              <Link to="/login">
               <button className="px-14 py-2 bg-[#38B793] text-white font-bold rounded-full hover:bg-[#36a583] transition-colors min-w-[200px] text-lg shadow-md shadow-[#42b89344]">
                Accept
              </button>
              </Link>
             
            </div>
          </div>

          
          <div className="flex-1 order-1 lg:order-2 flex justify-center w-full">
            <img 
              src={illustration} 
              alt="Terms and conditions illustration" 
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
          
        </div>
      </div>
    </div>
  
  )
}
