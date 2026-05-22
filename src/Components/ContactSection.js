import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ContactSection() {
   const navigate = useNavigate();
  return (
    
<section className="py-16 md:py-24 bg-white font-sans px-4">
  <div className="container mx-auto text-center">
    <h2 className="text-[#38B793] text-xl sm:text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
      Didnt find any answer to your question ?
    </h2>

    <p className="text-[#767676] text-xs sm:text-sm md:text-base font-light mb-8 md:mb-10 max-w-xs sm:max-w-none mx-auto">
      Get in touch with us for details additional service
    </p>

    <button 
      className="bg-[#38B793] hover:bg-[#36967c] text-white font-bold py-3 md:py-2 px-10 md:px-20 rounded-full text-lg md:text-xl shadow-sm transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
      onClick={() => navigate('/contact')}
    >
      Contact Us
    </button>

  </div>
</section>
  )
}
