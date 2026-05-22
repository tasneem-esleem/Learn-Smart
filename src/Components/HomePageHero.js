import React, { useState } from 'react';
import Hero from '../Components/Hero'; 
import StudyMaterials from '../Components/StudyMaterials'; 

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Hero
        variant="search"
        title={<>Learn flexibly ..... <br/> anytime, anywhere</>}
        description={<>Learn flexibly anytime, anywhere with the Learn <br/> Smart platform.</>}
        onSearch={handleSearch} 
      />

      <StudyMaterials 
        searchQuery={searchQuery} 
      />
    </div>
  );
}