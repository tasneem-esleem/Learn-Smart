import React from 'react'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'
export default function SecondLiterary() {
  return (
  <div className='mt-20'>
              
     <StudyMaterials 
        title="Second year of secondary school (Literary)" 
        subtitle=""
        data={subjects.slice(8, 12)} 
        gridClass="lg:grid-cols-2"
        cardClass="max-w-[525px] min-h-[44px]" />
     </div>
  
  )
}
