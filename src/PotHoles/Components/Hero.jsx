import React from "react";
import HeroMap from "./HeroMap";

const Hero = ({ coordinates }) => {
  return (
    <>
      <HeroMap data={coordinates} />
    </>
  );
};

export default Hero;
