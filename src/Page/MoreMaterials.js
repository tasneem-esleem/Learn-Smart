import React from 'react'
import StudyHome from '../Components/StudyHome'
import StudyMaterials from '../Components/StudyMaterials'
import {subjects} from '../Data/data'
export default function MoreMaterials() {
  return (
    <div className='mt-20'>
         <StudyMaterials 
          title="Study Materials" 
          subtitle="First year of secondary school"
          data={subjects.slice(0, 8)} 
          gridClass="lg:grid-cols-4"
        />
        <div className='-mt-20'>
        <StudyMaterials 
          title=''
          subtitle="Second year of secondary school (Literary)"
          data={subjects.slice(8, 12)} 
          gridClass="lg:grid-cols-4"
        />
        </div>
        <div className='-mt-20' >
        <StudyMaterials 
           title=''
          subtitle="Second year of secondary school (Scientific)"
          data={subjects.slice(12,16)} 
          gridClass="lg:grid-cols-4"
        />
        </div>
        <div className='-mt-20'>
        <StudyMaterials
           title='' 
          subtitle="Third year of secondary school (Literary)"
          data={subjects.slice(16,20)} 
          gridClass="lg:grid-cols-4"
        />
        </div>
        <div className='-mt-20'>
         <StudyMaterials 
          title=''
          subtitle="Third year of secondary school (Scientific)"
          data={subjects.slice(20,24)} 
          gridClass="lg:grid-cols-4"
        />
        </div>
    </div>
  )
}
