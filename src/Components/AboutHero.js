import React from 'react'
import Students from "../image/Rectangle-99.png"
export default function AboutHero() {
  return (
  <section 
  className="relative min-h-[450px] md:min-h-[450px] w-full flex items-center justify-center overflow-hidden font-sans bg-no-repeat bg-cover mt-[80px]"
  style={{ backgroundImage: `url(${Students})` , backgroundPosition: "top"  }}
>
  <div className="absolute inset-0 bg-black/60 z-10"></div>

  <div className="relative z-20 text-center text-white px-6 md:px-12 max-w-5xl mx-auto">
    <h1 className="text-3xl md:text-6xl font-semibold mb-6 tracking-tight">
      About Us
    </h1>
    <p className="text-base md:text-xl font-medium max-w-xl mx-auto leading-relaxed opacity-90">
      Learn Smart is an online platform designed to support students with courses, assignments, and interactive learning tools.
    </p>
  </div>
</section>

  );
  
}
