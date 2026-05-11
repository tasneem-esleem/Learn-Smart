import React from 'react'
const features = [
    "Learn anytime, anywhere",
    "Easy communication with teachers",
    "Follow up on student progress",
    "Organize all materials in one place",
    "A large number of materials and courses"
  ];
export default function HelpSupport() {
  return (
    <section className="py-20 bg-white font-sans">
  <div className="container mx-auto px-4 max-w-3xl">
    <div className="text-center mb-12">
      <h2 className="text-[#38B793] text-2xl md:text-3xl font-bold mb-4">
        Features of the educational platform
      </h2>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
        Our platform provides flexible, interactive, and accessible learning for all students
      </p>
    </div>

    <div className="flex flex-col gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group flex items-center bg-white px-5 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 transition-all duration-300 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] hover:-translate-y-0.5"
        >
          <span className="w-1.5 h-1.5 bg-black rounded-full mr-4 flex-shrink-0"></span>
          <p className="text-gray-800 font-semibold text-sm md:text-lg tracking-tight">
            {feature}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
