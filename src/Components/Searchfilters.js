import React , {useState} from 'react'
const filters = ['Recent searches', 'Materials', 'Teachers', 'Books'];
export default function Searchfilters() {
      const [activeFilter, setActiveFilter] = useState('Recent searches');

  return (
       <div className="flex flex-wrap gap-8 justify-center my-10">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-10 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-[0_0_20px_0_rgba(0,0,0,0.15)]
            ${activeFilter === filter
              ? 'bg-[#38B793] text-white border-[#38B793]'
              : 'bg-white text-[#38B793] border-[#38B793] hover:bg-teal-50'
            }`}
        >
          {filter}
        </button>
      ))}
    </div>

  )
}
