import React from "react";
import { motion } from "framer-motion";
import omar from "../image/fal.png";
import sarah from "../image/mai.png";
import ahmed from "../image/Ellipse 119-2.png";
import reem from "../image/sara.png";
import youssef from "../image/Ellipse 119.png";
import layan from "../image/Ellipse 119-1.png";

const students = [
  {
    id: 1,
    name: "Omar Sami",
    year: "Second year of secondary school",
    stars: 3,
    img: omar,
    review: '"The educational content is very useful and covers the most important lessons in a simplified way."',
  },
  {
    id: 2,
    name: "Sarah Muhammad",
    year: "First year of secondary school",
    stars: 5,
    img: sarah,
    review: '"The lessons are well-organized and easy to understand, and I now review my lessons quickly before exams."',
  },
  {
    id: 3,
    name: "Ahmed Ali",
    year: "Second year of secondary school",
    stars: 4,
    img: ahmed,
    review: '"The platform helped me a lot in understanding mathematics, and the explanation was simple and clear."',
  },
  {
    id: 4,
    name: "Reem Hassan",
    year: "First year of secondary school",
    stars: 5,
    img: reem,
    review: '"The lessons are well-organized and easy to understand, and I now review my lessons quickly before exams."',
  },
  {
    id: 5,
    name: "Youssef Mahmoud",
    year: "Third year of secondary school",
    stars: 3,
    img: youssef,
    review: '"The lessons are well-organized and easy to understand, and I now review my lessons quickly before exams."',
  },
  {
    id: 6,
    name: "Layan Ahmed",
    year: "Third year of secondary school",
    stars: 5,
    img: layan,
    review: '"The lessons are well-organized and easy to understand, and I now review my lessons quickly before exams."',
  },
];

const Stars = ({ count }) => {
  return (
    <div className="flex items-center gap-0.5 justify-center mt-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-base sm:text-lg ${star <= count ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const getCardVariants = (index) => {
    const mod = index % 3;
    if (mod === 0) return { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0 } };
    if (mod === 1) return { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0 } };
    return { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0 } };
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
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 md:py-20 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-12 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
          What Our Student Say
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm leading-5 text-center max-w-full sm:max-w-md px-4 sm:px-0">
          Experiences and opinions of high school students who used the platform
          and benefited from the educational lessons.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-6 md:gap-x-8 lg:gap-x-10 justify-items-center"
      >
        {students.map((student, index) => (
          <motion.div
            key={student.id}
            variants={getCardVariants(index)}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8, border: "1px solid #99f6e4", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            className="bg-white rounded-2xl px-5 sm:px-6 pt-14 pb-6 flex flex-col items-center text-center relative w-full max-w-[340px] cursor-pointer group transition-all duration-300"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >
            <img
              src={student.img}
              alt={student.name}
              loading="lazy"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover absolute -top-7 left-1/2 -translate-x-1/2 transition-transform duration-[1500ms] group-hover:rotate-[360deg]"
            />

            <p className="text-gray-900 font-bold text-sm sm:text-base mt-2">
              {student.name}
            </p>

            <p className="text-gray-400 text-[10px] sm:text-xs mb-1">{student.year}</p>

            <Stars count={student.stars} />

            <p className="text-gray-500 text-xs leading-relaxed text-center mt-3 px-1 flex-1">
              {student.review}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}