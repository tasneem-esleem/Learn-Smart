import React from 'react'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'

export default function StudyYear() {
  return (
    <div className='mt-20'>
      
         <StudyMaterials 
                  title="First year of secondary school" 
                  subtitle=""
                  data={subjects.slice(0, 8)|| []} 
                  gridClass="lg:grid-cols-2"
                  cardClass="max-w-[525px] min-h-[44px]" 
                />
    </div>
  )
}
        