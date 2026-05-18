import React from 'react'
import { motion } from 'framer-motion'
import student from '../image/graduating-student 1.png'
import lesson from '../image/stack-of-books 1.png'
import video from '../image/watch-movie 1.png'
import award from '../image/ribbon 1.png'

const stats = [
  { id: 1, icon: student, number: "+5000", label: "Students" },
  { id: 2, icon: lesson, number: "+120", label: "Lesson" },
  { id: 3, icon: video, number: "+800", label: "Tutorial video" },
  { id: 4, icon: award, number: "96%", label: "Student satisfaction" },
]

export default function Achievements() {
  const getCardVariants = (index) => {
    return index % 2 === 0
      ? { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0 } }
      : { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0 } };
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-10 sm:mb-12 lg:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[35px] font-semibold text-gray-900 mb-3 sm:mb-4">
          Our platform's achievements
        </h2>
        <p className="text-[#767676] text-xs leading-5 text-center sm:text-justify max-w-full sm:max-w-md px-4 sm:px-0">
          The statistics section displays important figures about the platform, such as the 
          number of students, the number of lessons, the number of educational videos, and 
          the user satisfaction rate, which helps to demonstrate the success of the platform 
          and the students' confidence in it.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            variants={getCardVariants(index)}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl px-6 sm:px-8 py-8 sm:py-10 flex flex-col items-center text-center w-full max-w-[250px] sm:max-w-none cursor-pointer group transition-all duration-300 hover:bg-teal-50 hover:border hover:border-teal-200"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >
            <img
              src={stat.icon}
              alt={stat.label}
              loading="lazy"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4 sm:mb-6 transition-transform duration-300 group-hover:rotate-12"
            />
            <p className="text-gray-900 text-2xl sm:text-3xl font-semibold mb-1 sm:mb-2">
              {stat.number}
            </p>
            <p className="text-black font-semibold text-xs sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}