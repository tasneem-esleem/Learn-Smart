import React from "react";
import Hero from '../Components/Hero';
import StartLearning from '../Components/StartLearning';
import StudyMaterials from '../Components/StudyMaterials';
import Testimonials from '../Components/Testimonials';
import Achievements from '../Components/Achievements';
import Features from '../Components/Features';
export default function Desktop() {
  return (
    <div>
      <Hero />
      <StudyMaterials />
      <Features />
      <Achievements />
      <Testimonials />
      <StartLearning />
    </div>
  );
}
