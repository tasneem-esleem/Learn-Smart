import React from 'react'
import profile from '../image/profile 1.png'
import Materials from '../image/material 1.png'
import Books from '../image/books 1.png'
const topics = [
    {
      title: "My Account",
      description: "A profile is a page containing information about the user.",
      image:profile, 
      borderColor: "border-cyan-400",
      bgColor: "bg-cyan-50",
      shadowColor: "shadow-cyan-200"
    },
    {
      title: "Study Materials",
      description: "Study materials are the lessons that the student studies.",
      image: Materials, 
      borderColor: "border-pink-400",
      bgColor: "bg-pink-50",
      shadowColor: "shadow-pink-200"
    },
    {
      title: "My Books",
      description: "Books are sources that contain information and stories for learning and reading.",
      image: Books, 
      borderColor: "border-green-400",
      bgColor: "bg-green-50",
      shadowColor: "shadow-green-200"
    }
  ];
export default function BrowseTopics() {
  return (
  <section className="py-20 bg-white overflow-hidden"> {/* إيقاف السكرول الأفقي هنا */}
      
      <h2 className="text-[#38B793] text-2xl md:text-3xl font-bold text-center mb-24 px-4">
        Browse The Topics
      </h2>

      {/* الحاوية: px-4 تضمن وجود مساحة على أطراف الموبايل */}
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-28 gap-x-10 w-full max-w-6xl mx-auto px-5">
        
        {topics.map((topic, index) => (
          <div key={index} className="relative group w-full flex justify-center">
            
            {/* الأيقونة العلوية */}
            <div
              className={`absolute -top-12 left-1/2 -translate-x-1/2 z-20 w-24 h-24 rounded-full border-[3px] bg-white ${topic.borderColor} flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 rounded-full ${topic.bgColor} flex items-center justify-center p-3`}>
                <img src={topic.image} alt={topic.title} loading="lazy" className="w-full h-full object-contain" />
              </div>
            </div>

           
            <div className="bg-white rounded-[40px] pt-16 pb-10 px-8 w-full max-w-[380px] min-h-[220px] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-gray-50 transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] group-hover:-translate-y-1">
              
              <h3 className="text-gray-900 text-xl font-bold mb-4 tracking-tight">
                {topic.title}
              </h3>
              
              <p className="text-[#888888] text-[15px] leading-[1.7] font-normal">
                {topic.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>


  )
}
