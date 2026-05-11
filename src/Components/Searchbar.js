import React , {useState} from 'react'
import { FiSearch, FiMic } from 'react-icons/fi';
import Searchfilters from './Searchfilters';
export default function Searchbar() {
  const [query, setQuery] = useState('');
  return (
   <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 font-sans antialiased text-gray-800">
      <div className="text-center w-full max-w-2xl px-4 mb-20"> 
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-7 
                     text-[#38B793] ">
         Learn <span className="text-[#195141]">Smart</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
          Use the search bar to find courses, books, or teachers easily.
          <br />
          Type what you need and explore the results quickly.
        </p>
      </div>
      <div className="w-full max-w-[840px] px-4">
        <div className="flex items-center w-full h-[64px] border border-gray-100 rounded-full bg-white shadow-sm overflow-hidden px-5">
          
          <FiSearch className="w-6 h-6 text-[#38B793] mr-4" />
          <input 
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            type="text" 
            placeholder="Start typing to search"
            className="flex-grow text-lg bg-transparent placeholder:text-gray-400 focus:outline-none"
          />
          
          <FiMic className="w-6 h-6 text-[#38B793] ml-4 cursor-pointer hover:text-teal-700" />
        </div>
      </div>
    <Searchfilters/>
    </div>
  )
}
