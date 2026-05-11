import React from 'react'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'
export default function SecondScientific() {
  return (
    <div className='mt-20'>
             <StudyMaterials 
                title="Second year of secondary school (Scientific)" 
                subtitle=""
                data={subjects.slice(12, 16)} 
                gridClass="lg:grid-cols-2"
                cardClass="max-w-[525px] min-h-[44px]" />
    </div>
  )
}
