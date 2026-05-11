import React from 'react'
import welecome from "../image/elearning 1.png"
export default function AboutWelcome() {
  return (
<section className="py-16 md:py-28 px-6 md:px-28 font-sans">
  <div className="max-w-4xl mx-auto md:mx-0 text-start">
    
    <div className="flex items-center justify-start gap-3 mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
        Welcome to Learn Smart
      </h2>
      <img 
        src={welecome} 
        loading="lazy"
        alt="welcome" 
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />
    </div>

    <div className="text-gray-500 leading-relaxed md:leading-[1.8] text-sm md:text-lg  text-justify md:text-start">
      <p>
        Welcome to Learn Smart, a modern and innovative educational platform designed to transform the way students learn and interact with knowledge.
      </p>
      
      <p>
        Our platform provides a complete digital learning environment where students can easily access courses, complete assignments, take exams, and communicate with their teachers from anywhere.
      </p>

      <p>
        At Learn Smart, we believe that education should be simple, engaging, and accessible to everyone. Therefore, we use modern technology to deliver an interactive learning experience that helps students develop their skills and confidently achieve their academic goals.
      </p>

      <p>
        Whether you are a student looking to improve your performance, a teacher aiming to share knowledge, or a parent who wants to monitor their children's progress, Learn Smart is the right place for you.
      </p>
    </div>

  </div>
</section>
  );
};

