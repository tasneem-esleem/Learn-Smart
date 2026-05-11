import React from "react";
import mission from "../image/Rectangle 121.png";
import vision from "../image/Rectangle 212.png";

const CONTENT_DATA = [
  {
    id: "mission",
    title: "Our Mission",
    icon: "🎯",
    image: mission,
    text: "Our mission is to provide a high-quality and accessible learning experience for all students through the use of modern technology. We aim to create a supportive and interactive environment where students can easily access educational content, complete their assignments, and communicate effectively with their teachers.",
    text2: "We are committed to helping students develop their skills, improve their academic performance, and achieve their educational goals. By combining innovation with education, we strive to make learning more engaging, flexible, and effective for everyone.",
    isReversed: false,
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: "👁️",
    image: vision,
    text: "Our vision is to become a leading digital educational platform that transforms traditional learning into a modern, flexible, and interactive experience. We aim to support students from different backgrounds by providing easy access to high-quality educational resources anytime and anywhere.",
    text2: "We strive to build a future where technology plays a key role in education, making learning more engaging, personalized, and effective. Through continuous development and innovation, we hope to empower students, teachers, and institutions to achieve better outcomes and reach their full potential in the digital age.",
    isReversed: true,
  },
];

const MissionVision = () => {
  return (
    <section className="py-12 md:py-24 px-6 md:px-16 lg:px-28 max-w-7xl ">
  {CONTENT_DATA.map((item) => (
    <div
      key={item.id}
      className={`flex flex-col ${
        item.isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-12 lg:gap-20 mb-20 last:mb-0`}
    >
      
      <div className="w-full lg:flex-1 max-w-md lg:max-w-none mx-auto">
        <img 
          src={item.image} 
          alt={item.title} 
          loading="lazy"
          
        />
      </div>

      <div className="w-full lg:flex-1 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
            {item.title}
          </h2>
          <span className="text-3xl">{item.icon}</span>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-500 leading-relaxed text-lg md:text-xl text-justify lg:text-left">
            {item.text}
          </p>
          <p className="text-gray-500 leading-relaxed text-lg md:text-xl text-justify lg:text-left">
            {item.text2}
          </p>
        </div>
      </div>

    </div>
  ))}
</section>
  );
};

export default MissionVision;
