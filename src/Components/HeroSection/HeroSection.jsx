import React, { useState } from "react";
import AddPlaceB from "../AddPlaceBottom/AddPlaceB";
import MainSection from "../MainSection/MainSection";
import AddPlace from "../Modals/AddPlace/AddPlace";
import { MyHeroSection } from "./HeroStyle";

const HeroSection = () => {

  return (
    <MyHeroSection className="">
      <MainSection />
      <AddPlaceB />
    </MyHeroSection>
  );
};

export default HeroSection;
