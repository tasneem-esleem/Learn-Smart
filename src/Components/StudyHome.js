import React from 'react'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'
import {Link} from 'react-router-dom'

export default function StudyHome() {
  return (
    <div>
     <StudyMaterials 
  title="Study Materials" 
  subtitle="First year of secondary school"
  data={subjects.slice(0, 8)} 
  gridClass="lg:grid-cols-4"
/>
 <div className="flex justify-center items-center mt-10">
          <Link to="/moreMaterials">
          <button className="bg-[#43ba96] hover:bg-[#39a383] text-white font-medium py-2.5 px-10 rounded-full transition-colors duration-300 shadow-md ">
            More materials
          </button>
          </Link>
        </div>
    </div>
  )
}
