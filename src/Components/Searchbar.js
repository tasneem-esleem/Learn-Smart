import React, { useState } from 'react';
import { FiSearch, FiMic } from 'react-icons/fi';
import Searchfilters from './Searchfilters';

export default function Searchbar() {
  const [query, setQuery] = useState('');

  const handleMicClick = () => {
    alert("Voice search coming soon!");
  };

  return (
    
    <div className="w-full min-h-screen bg-white flex flex-col items-center p-6 sm:p-8 py-16 md:py-24 font-sans antialiased text-gray-800">
      
      
      <div className="text-center w-full max-w-2xl px-4 mb-12"> 
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5 text-[#38B793]">
          Learn <span className="text-[#195141]">Smart</span>
        </h1>
        <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-xl mx-auto">
          Use the search bar to find courses, books, or teachers easily.
          <br />
          Type what you need and explore the results quickly.
        </p>
      </div>

      <div className="w-full max-w-[840px] px-4 mb-10">
        <div className="flex items-center w-full h-[60px] md:h-[64px] border border-gray-200 rounded-full bg-white shadow-sm overflow-hidden px-5 focus-within:border-[#38B793] focus-within:shadow-md transition-all duration-200">
          
          <FiSearch className="w-5 h-5 md:w-6 md:h-6 text-[#38B793] mr-3 md:mr-4 flex-shrink-0" />
          
          <input 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text" 
            placeholder="Start typing to search"
            className="flex-grow text-base md:text-lg bg-transparent placeholder:text-gray-400 focus:outline-none text-gray-700"
          />
          
          <FiMic 
            onClick={handleMicClick}
            className="w-5 h-5 md:w-6 md:h-6 text-[#38B793] ml-3 md:ml-4 cursor-pointer hover:text-teal-700 transition-colors flex-shrink-0" 
          />
        </div>
      </div>

     
      <div className="w-full">
        <Searchfilters searchQuery={query} />
      </div>

    </div>
  );
}