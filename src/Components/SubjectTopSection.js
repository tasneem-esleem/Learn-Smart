import React from "react";
import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function SubjectTopSection({
  subjectName,
  grade,
  onBack,
  activeTab,
  setActiveTab,})

 {
  const navigat =useNavigate();
  return (
    <div className="w-full mb-8">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-teal-600 hover:text-teal-800 font-semibold mb-3 text-sm transition"
        >
          <HiArrowLeft className="w-5 h-5 stroke-2" onClick={()=>navigat(-1)}/>
          <div className="pl-7 mt-4">
            <h2 className="text-xl font-bold text-gray-800 text-start">
              {subjectName}
            </h2>
            <p className="text-xs text-gray-400 font-normal mt-0.5">{grade}</p>
          </div>
        </button>
      </div>

      <div className="bg-[#F9FAFB] rounded-xl flex border border-gray-100 overflow-hidden h-14 shadow-lg">
        {["lessons", "assignments", "quizzes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 h-full text-base font-semibold transition-all duration-300 capitalize ${
              activeTab === tab
                ? "bg-[#2CB797] text-white shadow-sm rounded-md"
                : "text-gray-700 hover:text-black hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
