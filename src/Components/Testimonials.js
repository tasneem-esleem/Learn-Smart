import React from "react";
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
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 py-12 sm:py-16 md:py-20 lg:py-20">
      
      {/* Header */}
      <div className="flex flex-col items-center mb-10 sm:mb-12 lg:mb-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
          What Our Student Say
        </h2>
        <p className="text-gray-400 text-xs leading-5 text-center max-w-full sm:max-w-md px-4 sm:px-0">
          Experiences and opinions of high school students who used the platform
          and benefited from the educational lessons.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-items-center">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-2xl px-4 sm:px-6 lg:px-8 pt-16 pb-6 sm:pb-8 flex flex-col items-center text-center relative w-full sm:w-[280px] md:w-[300px] h-auto sm:h-[230px] min-h-[240px]
            cursor-pointer group transition-all duration-300 
            hover:shadow-xl hover:-translate-y-2 hover:border hover:border-teal-200"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >

            
            {/* Avatar */}
            <img
              src={student.img}
              alt={student.name}
              loading="lazy"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover absolute -top-6 sm:-top-7 left-1/2 -translate-x-1/2
              transition-transform duration-[1500ms] group-hover:rotate-[360deg]"
            />

            {/* Name */}
            <p className="text-gray-900 font-bold text-sm sm:text-base -mt-3">
              {student.name}
            </p>

            {/* Year */}
            <p className="text-gray-400 text-[10px] sm:text-xs mb-1">{student.year}</p>

            {/* Stars */}
            <Stars count={student.stars} />

            {/* Review */}
            <p className="text-gray-400 text-[10px] sm:text-xs leading-5 text-center mt-2 sm:mt-1 px-2">
              {student.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}