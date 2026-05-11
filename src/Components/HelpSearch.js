import React ,{useState} from 'react'
import { FiSearch } from 'react-icons/fi';

export default function SearchSection() {
    const [search, setSearch] = useState('');
  return (
<div className="w-full flex flex-col items-center justify-center px-0 md:px-10">
  
  <div className="text-center mb-8 w-full max-w-5xl">
    <h2 className="text-xl md:text-3xl font-semibold text-[#38B793] mb-2">
      How can we help you?
    </h2>
    <p className="text-xs md:text-sm text-[#767676] mb-10">
      Find advice and answers from our support team fast or get in touch
    </p>

    <div className="flex flex-row w-full bg-white border border-gray-200 rounded-full overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-1.5 md:p-2 items-center">
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for answer..."
        className="flex-1 min-w-0 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base outline-none text-gray-700 bg-transparent"
      />
      
      <button className="bg-[#38B793] hover:bg-teal-600 text-white px-4 md:px-8 py-2.5 md:py-3.5 text-sm md:text-[15px] font-medium flex items-center justify-center gap-2 transition rounded-full shrink-0">
        <span className="hidden sm:inline">Search</span> 
        <FiSearch size={18} />
      </button>

    </div>
  </div>
  
</div>

  )
}
