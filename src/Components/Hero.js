import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

import studentImg from "../image/lovely-teenage-girl-with-curly-hair-posing-yellow-tshirt-min 1.png";
import BsCalendar from "../image/Group 6.png";
import person from "../image/Ellipse (1).png";
import BarChar from "../image/Group 9.png";
import { useNavigate } from "react-router-dom";

export default function Hero({
  variant = "default",
  title = "Continuing Education in Every Circumstance",
  description = "Learn Smart provides a flexible and interactive online learning environment that allows students to access lessons, submit assignments, and take tests anytime, anywhere — ensuring continuous education even in difficult times.",
  buttonText = "Start now",
  onButtonClick,
  onSearch,
}) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-28 pt-24 sm:pt-20 pb-12 sm:pb-16 md:pb-20 lg:pb-28 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:max-w-lg flex flex-col items-center lg:items-start self-center text-center lg:text-left px-2 sm:px-0 md:mt-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-5">
          {title}
        </h1>

        <p className="text-black text-base sm:text-[18px] font-light text-center lg:text-justify mb-8 sm:mb-10">
          {description}
        </p>

        {/* Search Variant */}
        {variant === "search" ? (
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full bg-white border border-gray-200 rounded-full overflow-hidden shadow p-1.5 items-center"
          >
            <input
              type="text"
              value={search}
              onChange={handleInputChange}
              placeholder="Search for your study materials"
              className="flex-1 min-w-0 px-4 py-3 text-sm outline-none text-gray-700 bg-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#38B793] hover:bg-teal-600 transition text-white px-6 py-2.5 text-sm font-medium flex items-center gap-2 rounded-full shrink-0"
            >
              <span className="hidden sm:inline">Search</span>
              <FiSearch size={18} />
            </motion.button>
          </form>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="bg-[#38B793] hover:bg-teal-600 transition text-white px-12 sm:px-16 py-2 rounded-full font-medium text-lg shadow-md"
            onClick={() => {
              if (onButtonClick) onButtonClick(); 
              navigate("/login"); 
            }}
          >
            {buttonText}
          </motion.button>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full sm:w-[450px] md:w-[500px] lg:w-[530px] h-[350px] sm:h-[400px] md:h-[450px] lg:h-[480px] mt-8 lg:mt-0"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          src={studentImg}
          alt="student"
          loading="lazy"
          className="absolute bottom-0 right-4 sm:right-8 lg:right-16 -top-4 sm:-top-6 lg:-top-8 w-[240px] sm:w-[280px] md:w-[300px] lg:w-[339px] h-auto sm:h-[480px] md:h-[520px] lg:h-[556px] object-contain z-10"
        />

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-2 sm:left-6 md:left-10 lg:left-14 bg-white px-3 sm:px-4 md:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 z-20 rounded-r-2xl shadow-lg cursor-pointer"
        >
          <div className="bg-[#38B793] p-1.5 sm:p-2 rounded-xl">
            <img
              src={BsCalendar}
              alt="calendar"
              loading="lazy"
              className="w-5 sm:w-6 md:w-7"
            />
          </div>
          <div>
            <p className="text-[#595959] font-bold text-base sm:text-lg">
              250k
            </p>
            <p className="text-[#595959] text-[10px] sm:text-xs">
              Assisted Student
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2 sm:top-3 md:top-4 right-0 rounded-2xl z-20"
        >
          <img
            src={BarChar}
            alt="chart"
            loading="lazy"
            className="w-12 sm:w-auto"
          />
        </motion.div>

        {variant === "default" && (
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-0 bg-white/70 backdrop-blur-md rounded-r-2xl shadow-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 z-10 w-52 sm:w-56 md:w-60 lg:w-64 cursor-pointer"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="relative">
                <img
                  src={person}
                  alt="person"
                  loading="lazy"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <p className="text-[#595959] font-semibold text-xs sm:text-sm">
                  User Experience Class
                </p>
                <p className="text-[#595959] text-[10px] sm:text-xs">
                  Today at 12.00 PM
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#38B793] hover:bg-teal-600 transition text-white text-xs sm:text-sm py-1.5 sm:py-2 rounded-full font-medium"
            >
              Join Now
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
