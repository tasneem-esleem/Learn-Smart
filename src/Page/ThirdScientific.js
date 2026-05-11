import React from 'react'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'
export default function ThirdScientific() {
  return (
    <div className='mt-20'>
                    <StudyMaterials 
                       title="Third year of secondary school (Scientific)" 
                       subtitle=""
                       data={subjects.slice(20, 24)} 
                       gridClass="lg:grid-cols-2"
                       cardClass="max-w-[525px] min-h-[44px]" />
           </div>
  )
}
