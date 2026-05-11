import React from "react";
import AboutHero from "../Components/AboutHero";
import AboutWelcome from "../Components/AboutWelcome";
import MissionVision from "../Components/MissionVision";
import WhatWeOffer from "../Components/WhatWeOffer";
import WhyChooseUs from "../Components/WhyChooseUs";

export default function About () {
  return (
    <div>
      <AboutHero />
      <AboutWelcome />
      <MissionVision/>
      <WhatWeOffer/>
      <WhyChooseUs/>
    </div>
  );
}
