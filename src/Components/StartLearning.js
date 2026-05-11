import React from 'react'

export default function StartLearning() {
  return (
   <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 sm:py-10 flex justify-center items-center mb-8 sm:mb-10">

  <div className="bg-[#38B79333] rounded-3xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16 flex flex-col items-center text-center w-full sm:w-11/12 md:w-10/12 lg:w-9/12">

    {/* Title */}
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-5">
      Ready To Start Learning ?
    </h2>

    {/* Description */}
    <p className="text-gray-400 text-xs sm:text-sm leading-5 sm:leading-6 text-center max-w-full sm:max-w-xl px-2 sm:px-4 mb-6 sm:mb-8">
      Join our educational platform and begin an enjoyable learning journey in high school subjects.
      The platform offers simplified lessons, interactive exercises, and quizzes to help you better
      understand the material and improve your academic performance. Register now and start
      learning anytime, anywhere.
    </p>

    {/* Button */}
    <button className="bg-teal-500 hover:bg-teal-600 transition text-white font-medium px-8 sm:px-12 md:px-20 lg:px-32 py-2 rounded-full text-base sm:text-[18px] md:text-[20px]">
      Start now
    </button>

  </div>

</section>
  )
}
