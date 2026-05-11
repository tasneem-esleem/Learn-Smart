import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { AiFillStar, AiOutlineArrowLeft } from 'react-icons/ai';
import {teachers} from "../Data/TeachersSection"
export default function TeacherProfile() {

  const { id } = useParams(); 
  const navigate = useNavigate();

  const teacher = teachers.find((t) => t.id === parseInt(id));
  if (!teacher) {
    return <div className="text-center py-20 text-xl font-bold">Teacher not found!</div>;
  }
  return (
    <div className="min-h-screen bg-white py-12 px-4 flex justify-center">
      <div className="bg-white w-full max-w-7xl rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.08)] p-8 md:p-12 relative border border-gray-100">
        
        <button 
          onClick={() => navigate(-1)} 
          className="mb-10  text-gray-500 absolute left-14  hover:text-gray-800 transition-colors"
        >
          <AiOutlineArrowLeft size={24} />
        </button>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10 mt-5">
          <div className="w-[180px] h-[180px] overflow-hidden rounded-[30px] shadow-sm flex-shrink-0 ">
            <img 
              src={teacher.img} 
              alt={teacher.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left flex flex-col justify-center h-[180px]">
            <h2 className="text-[#1a1a1a] text-2xl md:text-3xl font-bold mb-2">
              {teacher.name}
            </h2>
            <p className="text-gray-500 text-lg mb-1">{teacher.phone || "+972 000 0000"}</p>
            <p className="text-gray-400 text-lg mb-3">{teacher.email || "email@example.com"}</p>
            
            {/* النجوم */}
            <div className="flex gap-1 justify-center md:justify-start">
              {[...Array(5)].map((_, i) => (
                <AiFillStar 
                  key={i} 
                  className={`text-xl ${i < teacher.rating ? 'text-[#FFD700]' : 'text-gray-200'}`} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* النص الطويل (الوصف) */}
        <div className="space-y-6 text-[#4a4a4a] text-base md:text-[17px] leading-[1.8] text-justify">
          <p>{teacher.longDescPart1}</p>
          <p>{teacher.longDescPart2}</p>
          <p>{teacher.longDescPart3}</p>
          <p>{teacher.longDescPart4}</p>
        </div>
      </div>
    </div>
  )
}
