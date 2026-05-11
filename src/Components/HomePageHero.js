import React, { useState } from 'react';
import Hero from '../Components/Hero'

export default function HomePageHero() {

  return (
  <div>
   <Hero
  variant="search"
  title={ <>Learn flexibly ..... <br/> anytime, anywhere</>}
  description={ <>Learn flexibly anytime, anywhere with the Learn <br/> Smart platform.</>}
/>
  </div>
  

  );
}
