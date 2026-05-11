import React from 'react'
import teacherIcon from "../image/teacher 1.png"
import contentIcon from "../image/interactive-multimedia 1.png"
import interfaceIcon from "../image/Group 26762.png"
import chatIcon from "../image/online-interview 1.png"
import locationIcon from "../image/anywhere 1.png"
import timeIcon from "../image/clock 1.png"
const WhyChoose = [
  {
    id: 1,
    title: "Professional and experienced teachers",
    icon: teacherIcon,
    borderColor: "border-blue-400", 
    backgroundColor :"#3086FF1A"
  },
  {
    id: 2,
    title: "High-quality educational content",
    icon: contentIcon,
    borderColor: "border-red-400",
    backgroundColor :"#FF04041A"
  },
  {
    id: 3,
    title: "Easy-to-use and user-friendly interface",
    icon: interfaceIcon,
    borderColor: "border-teal-400",
    backgroundColor :"#38B7931A"
  },
  {
    id: 4,
    title: "The possibility of direct communication with teachers",
    icon: chatIcon,
    borderColor: "border-cyan-400",
    backgroundColor :"#00FFFB1A"
  },
  {
    id: 5,
    title: "Access learning any where",
    icon: locationIcon,
    borderColor: "border-purple-400",
    backgroundColor :"#FF00FF1A"
  },
  {
    id: 6,
    title: "Access learning anytime",
    icon: timeIcon,
    borderColor: "border-yellow-400",
    backgroundColor :"#F2FF001A"
  },
];
export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white font-sans mb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black flex items-center justify-center gap-3">
            Why Choose Us? <span className="text-3xl">💡</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
          {WhyChoose.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
          
              <div className={`absolute -top-10 z-20 w-20 h-20 bg-white border-2 ${item.borderColor}  rounded-full flex items-center justify-center shadow-sm overflow-hidden p-3`}
              style={{backgroundColor:item.backgroundColor}}
              >
                <img 
                  src={item.icon} 
                  alt="" 
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-full bg-white h-[135px] pb-10 px-6 rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex items-center justify-center text-center transition-transform duration-300 hover:-translate-y-2">
                <p className="text-gray-900 font-bold text-[18px] md:text-xl leading-snug pt-10">
                  {item.title}
                </p>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
