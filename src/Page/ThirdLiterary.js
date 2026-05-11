import React from 'react'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'
export default function ThirdLiterary() {
  return (
     <div className='mt-20'>
                <StudyMaterials 
                   title="Third year of secondary school (Literary)" 
                   subtitle=""
                   data={subjects.slice(16, 20)} 
                   gridClass="lg:grid-cols-2"
                   cardClass="max-w-[525px] min-h-[44px]" />
       </div>
  )
}
