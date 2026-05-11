import React from 'react';
import books from "../image/stack-of-books 3.png";
import check from "../image/homework 1.png";
import quiz from "../image/exam-time 1.png";
import chat from "../image/communication 1.png";
import openBook from "../image/book (3) 1.png";

const OFFERS_DATA = [
  { id: 1, title: "Online training courses on various topics", icon: books },
  { id: 2, title: "Assignments and homework tracking", icon: check },
  { id: 3, title: "Online exams and quizzes", icon: quiz },
  { id: 4, title: "Communication with teachers", icon: chat },
  { id: 5, title: "Educational books and learning resources", icon: openBook },
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
    
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4 flex items-center justify-center gap-2">
            What We Offer <span className="text-3xl">🚀</span>
          </h2>
          <p className="text-gray-500 font-medium">
            At Learn Smart, we provide a variety of educational services, including:
          </p>
        </div>

     
        <div className="flex flex-col items-center gap-6 relative">
          {OFFERS_DATA.map((offer, index) => {
            
            const isEven = index % 2 === 1;
            const alignmentClass = isEven 
              ? "md:-translate-x-24" 
              : "md:translate-x-16";  

            return (
              <div 
                key={offer.id}
                className={`flex items-center gap-4 bg-white p-2 rounded-2xl 
                           shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-full max-w-[500px] 
                           transition-all duration-300 hover:scale-105 self-center ${alignmentClass}`}
              >
                <div className="w-14 h-14 flex items-center justify-center shrink-0">
                  <img src={offer.icon} alt="" loading="lazy" className="w-10 h-10 object-contain" />
                </div>
                <span className="text-black font-semibold text-sm md:text-base pr-4">
                  {offer.title}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;