import React from 'react'
import icon1 from "../image/video-camera 1.png"
import icon2 from "../image/proficiency 1@2x.png"
import icon3 from "../image/notification 1.png"
import icon4 from "../image/online-education 1.png"
import girl1 from "../image/Group 265.png"
import girl2 from "../image/Rectangle 49.png"

// كل feature عندها staggerClass خاصة بدل marginLeft hardcoded
const features = [
  {
    id: 1,
    img: icon1,
    text: "A detailed explanation consistent with the curriculum",
    staggerClass: "lg:ml-8",
  },
  {
    id: 2,
    img: icon2,
    text: "Close monitoring of student performance",
    staggerClass: "lg:-ml-16",
  },
  {
    id: 3,
    img: icon3,
    text: "Send instant notifications to follow events",
    staggerClass: "lg:ml-14",
  },
  {
    id: 4,
    img: icon4,
    text: "Direct and continuous communication with students",
    staggerClass: "lg:-ml-16",
  },
]

export default function Features() {
  return (
    <section className="w-full bg-[#38B7930D] px-4 sm:px-10 lg:px-28 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center lg:items-start justify-center">

      {/* Left Side - Images */}
      <div className="relative w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] lg:w-[320px] lg:h-[440px] mx-0 sm:mx-10 lg:mx-28 flex-shrink-0 mb-10 lg:mb-0">

        <img
          src={girl2}
          alt="Student studying online"
          loading="lazy"
          className="absolute top-0 right-0 w-[180px] h-[280px] sm:w-[230px] sm:h-[350px] lg:w-[268px] lg:h-[415px] object-cover rounded-3xl z-20
          transition-transform duration-500 hover:scale-105"
        />

        <img
          src={girl1}
          alt="Student using the platform"
          loading="lazy"
          className="absolute -bottom-20 -left-20 sm:-bottom-28 sm:-left-28 lg:-bottom-32 lg:-left-32 w-[180px] h-[280px] sm:w-[230px] sm:h-[350px] lg:w-[268px] lg:h-[415px] object-cover rounded-3xl z-10
          transition-transform duration-500 hover:scale-105"
        />

      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col justify-center mt-6 lg:mt-14 lg:-mx-20">

        <h2 className="text-[22px] sm:text-[30px] lg:text-[38px] font-semibold text-gray-900 leading-snug mb-4 max-w-xl text-center lg:text-start">
          Let's explore the key features of our platform.
        </h2>

        <p className="text-[#767676] text-[12px] sm:text-[14px] leading-5 text-justify mb-8 max-w-lg px-2 sm:px-0">
          The platform offers simplified lessons and clear explanations for all high school
          subjects, along with interactive tests that help students continuously assess their
          progress. It also allows students to track their learning, organize their study time,
          and access content anytime, anywhere, helping them excel and prepare confidently for exams.
        </p>

        <div className="flex flex-col gap-3 items-center lg:items-start">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`
                bg-white rounded-2xl px-10 sm:px-7 py-3 sm:py-4
                flex items-center gap-3 mb-5 w-full max-w-xs sm:max-w-md
                shadow-[0_4px_20px_rgba(0,0,0,0.08)]
                transition-all duration-300 cursor-pointer
                hover:scale-105 hover:bg-teal-50 hover:border hover:border-teal-200
                ${feature.staggerClass}
              `}
            >
              <img
                src={feature.img}
                alt={feature.text}
                loading="lazy"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
              />
              <p className="text-gray-700 text-xs sm:text-sm font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}