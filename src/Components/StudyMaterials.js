import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { subjects } from "../Data/data";

const MaterialCard = ({
  name,
  img,
  desc,
  bgColor,
  cardClass = "",
  onCardClick,
  index,
}) => {
  const getDirectionVariants = (idx) => {
    const mod = idx % 4;
    if (mod === 0) return { hidden: { opacity: 0, x: -70 }, show: { opacity: 1, x: 0 } };
    if (mod === 1) return { hidden: { opacity: 0, y: -70 }, show: { opacity: 1, y: 0 } };
    if (mod === 2) return { hidden: { opacity: 0, x: 70 }, show: { opacity: 1, x: 0 } };
    return { hidden: { opacity: 0, y: 70 }, show: { opacity: 1, y: 0 } };
  };

  return (
    <motion.div
      layout
      variants={getDirectionVariants(index)}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      onClick={onCardClick}
      className={`group relative border border-gray-200 rounded-2xl px-5 py-6 flex flex-col items-center text-center shadow-xl hover:border-teal-400 transition-all duration-300 cursor-pointer overflow-hidden w-full max-w-[320px] min-h-[280px] sm:min-h-[360px] bg-white ${cardClass}`}
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 z-20 bg-white/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
        <div className="mb-3 bg-teal-500 p-3 rounded-full text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <button className="bg-teal-600 text-white text-xs font-bold py-2 px-6 rounded-full shadow-md hover:bg-teal-700 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          View Lessons
        </button>
      </div>

      <h2 className="text-black text-lg font-semibold mb-4">
        {name}
      </h2>

      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center mb-5 p-4 flex-shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <img src={img} alt={name} loading="lazy" className="w-full h-full object-contain" />
      </div>

      <p className="text-[#767676] text-xs sm:text-sm leading-relaxed text-center px-1">
        {desc}
      </p>
    </motion.div>
  );
};

export default function StudyMaterials({
  title = "Study Materials",
  subtitle = "First year of secondary school",
  gridClass = "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  cardClass = "",
  data = null,
  searchQuery = "",
}) {
  const navigate = useNavigate();
  const baseData = data || (subjects?.length > 0 ? subjects.slice(0, 8) : []);

  const filteredData = baseData.filter((subject) => {
    if (!subject || !subject.name) return false;
    return subject.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm">{subtitle}</p>
      </motion.div>

      <AnimatePresence mode="popLayout">
        {filteredData.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12 text-gray-500 text-sm"
          >
            No materials found matching "{searchQuery}"
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={`grid grid-cols-1 ${gridClass} gap-6 md:gap-8 justify-items-center items-start`}
          >
            {filteredData.map((subject, index) => (
              <MaterialCard
                key={subject.id}
                index={index}
                name={subject.name}
                img={subject.img}
                desc={subject.desc}
                bgColor={subject.bgColor}
                cardClass={cardClass}
                onCardClick={() => navigate(`/subject/${subject.bookId}/${subject.name}`)}

              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}