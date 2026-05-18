import React from 'react';
import { Link } from "react-router-dom";
import Rana from "../image/Rectangle 85.png";
import Kareem from "../image/Rectangle 82.png";
import Nour from "../image/Rectangle 79.png";
import Youssef from "../image/Rectangle 77.png";
import Mustafa from "../image/Rectangle 97.png";
import Ali from "../image/Rectangle 94.png";
import Lina from "../image/Rectangle 91.png";
import Hoda from "../image/Rectangle 88.png";
import { AiFillStar } from 'react-icons/ai';

export default function TeachersHome({ 
  searchQuery = "", 
  limit = null      
}) {
  const teachers = [
    {
      id: 1,
      name: "Rana Youssef",
      subject: "Mathematics Teacher",
      rating: 3,
      desc: "An experienced Mathematics teacher with four years of teaching experience.",
      img: Rana
    },
    {
      id: 2,
      name: "Kareem Adel",
      subject: "Physics Teacher",
      rating: 5,
      desc: "An experienced Physics teacher with nine years of teaching experience.",
      img: Kareem
    },
    {
      id: 3,
      name: "Nour Hassan",
      subject: "Chemistry Teacher",
      rating: 4,
      desc: "An experienced Chemistry teacher with five years of teaching experience.",
      img: Nour
    },
    {
      id: 4,
      name: "Youssef Al-Kilani",
      subject: "Biology Teacher",
      rating: 5,
      desc: "An experienced Biology teacher with ten years of teaching experience.",
      img: Youssef
    },
    {
      id: 5,
      name: "Mustafa Saleh",
      subject: "English Teacher",
      rating: 3,
      desc: "An experienced English teacher with four years of teaching experience.",
      img: Mustafa
    },
    {
      id: 6,
      name: "Ali Mahmoud",
      subject: "Arabic Teacher",
      rating: 5,
      desc: "An experienced Arabic teacher with nine years of teaching experience.",
      img: Ali
    },
    {
      id: 7,
      name: "Lina Muhammad",
      subject: "History Teacher",
      rating: 4,
      desc: "An experienced History teacher with five years of teaching experience.",
      img: Lina
    },
    {
      id: 8,
      name: "Hoda Mahmoud",
      subject: "Geography Teacher",
      rating: 5,
      desc: "An experienced Geography teacher with three years of teaching experience.",
      img: Hoda
    }
  ];

  const filteredTeachers = teachers.filter((teacher) => {
    if (!teacher) return false;
    if (!searchQuery.trim()) return true; 
    return (
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      teacher.subject.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
  });

  const finalTeachers = limit ? filteredTeachers.slice(0, limit) : filteredTeachers;

  return (
    <section className="w-full py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-white">
      
      {!searchQuery && (
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight">
            The platform's most famous teachers
          </h2>
        </div>
      )}

      {finalTeachers.length === 0 ? (
        <div className="text-center py-12 text-gray-500 text-sm">
          No teachers found matching "{searchQuery}"
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 md:gap-x-8 justify-items-center items-stretch">
          {finalTeachers.map((teacher) => (
            <div 
              key={teacher.id} 
              className="bg-white border border-gray-100 rounded-[40px] p-6 sm:p-7 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 w-full max-w-[310px] sm:max-w-full lg:max-w-[290px] h-full group"
            >
              <div className="w-[120px] h-[120px] mb-5 overflow-hidden rounded-2xl shadow-sm flex-shrink-0">
                <img 
                  src={teacher.img} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-[#002347] text-[18px] sm:text-[20px] font-bold mb-1 line-clamp-1">{teacher.name}</h3>
              <p className="text-gray-500 text-[13px] font-medium mb-3 ">{teacher.subject}</p>

              <div className="flex gap-0.5 mb-4 flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <AiFillStar 
                    key={i} 
                    className={`text-[18px] ${i < teacher.rating ? 'text-[#FFD700]' : 'text-gray-200'}`} 
                  />
                ))}
              </div>

              <p className="text-[#767676] text-[14px] leading-[1.6] mb-6 line-clamp-3 flex-grow">
                {teacher.desc}
              </p>
              
              <div className="w-full mt-auto flex-shrink-0">
                <Link to={`/teacher/${teacher.id}`} className="block w-full">
                  <button className="w-full sm:w-auto bg-[#43ba96] hover:bg-[#39a383] text-white text-[15px] font-semibold py-2.5 px-9 rounded-full transition-all duration-300 shadow-sm active:scale-95">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}