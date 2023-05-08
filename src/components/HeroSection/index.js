import React, { useState } from "react";
import Heroimage from "../../images/hero-image.png";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  CVLink,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>DIGITAL DESIGNER</HeroH1>
        <HeroP>
          I COLLABORATE WITH A VARIETY OF BRANDS, COMPANIES AND AGENCIES TO
          CREATE TAILOR-MADE SOLUTIONS
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
