import React from 'react'
import { subjects } from '../Data/data' 
const MaterialCard = ({ name, img, desc, bgColor , cardClass="" }) => (
  <div className={`first-line:border border-gray-200 rounded-2xl px-4 sm:px-6 lg:px-8 w-full max-w-[302px] h-auto min-h-[369px] py-4 sm:py-5 lg:py-6 flex flex-col items-center text-center shadow-xl hover:border-teal-400 hover:scale-105 hover:bg-teal-50 transition-all duration-300 cursor-pointer pb-10 ${cardClass}`}>
    <h2 className="text-black text-lg sm:text-[20px] font-semibold mb-3 sm:mb-4">{name}</h2>
    
    <div 
      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 p-4"
      style={{ backgroundColor: bgColor }}
    >
      <img src={img} alt={name} loading="lazy" className="w-full h-full object-contain" />
    </div>

    <p className="text-[#767676] text-[12px] sm:text-[13px] lg:text-[14px] leading-5 text-center px-1">{desc}</p>
  </div>
);

export default function StudyMaterials({ 
  title = "Study Materials", 
  subtitle = "First year of secondary school", 
  gridClass = "lg:grid-cols-3",
  cardClass="",
  data = subjects.slice(0,6)
}) {
  const isHomeLayout = gridClass === "lg:grid-cols-4";

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 lg:py-16">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        {isHomeLayout ? (
          <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="px-4 text-gray-400 text-xs sm:text-sm whitespace-nowrap">
              {subtitle}
            </span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>
        ) : (
          <p className="text-gray-400 text-xs sm:text-sm px-4 sm:px-0">{subtitle}</p>
        )}
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridClass} gap-6 sm:gap-8 lg:gap-10 justify-items-center`}>
        {data.map((subject) => (
          <MaterialCard 
            key={subject.id} 
            name={subject.name} 
            img={subject.img} 
            desc={subject.desc} 
            bgColor={subject.bgColor}
            cardClass={cardClass}
          />
        ))}
        
      </div>
     
    </section>
  )
}