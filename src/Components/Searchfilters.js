import React, { useState } from 'react';
import StudyMaterials from './StudyMaterials'; 
import Books from './Books';                
import TeachersHome from './TeachersHome';   

const filters = ['Recent searches', 'Materials', 'Teachers', 'Books'];

export default function Searchfilters({ searchQuery = "" }) {
  const [activeFilter, setActiveFilter] = useState('Recent searches');

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center my-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 sm:px-10 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-md border
              ${activeFilter === filter
                ? 'bg-[#38B793] text-white border-[#38B793] scale-105 shadow-[0_4px_14px_rgba(56,183,147,0.3)]'
                : 'bg-white text-[#38B793] border-gray-100 hover:bg-teal-50'
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

     
      <div className="mt-4 transition-all duration-300">
        
        {activeFilter === 'Recent searches' && (
          <div className="text-center py-12 text-gray-400 text-sm bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
            {searchQuery ? (
              <p>Press Enter to save "<span className="text-[#38B793] font-semibold">{searchQuery}</span>" to recent searches.</p>
            ) : (
              <p>Your recent searches will appear here.</p>
            )}
          </div>
        )}

        {activeFilter === 'Materials' && (
          <StudyMaterials searchQuery={searchQuery} />
        )}

        {activeFilter === 'Teachers' && (
         
          <TeachersHome searchQuery={searchQuery} />
        )}

        {activeFilter === 'Books' && (
          <Books searchQuery={searchQuery} moreBooks={true} />
        )}

      </div>
    </div>
  );
}