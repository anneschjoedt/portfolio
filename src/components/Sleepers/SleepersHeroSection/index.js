import React from "react";
import img from "../../../images/sleepers/sleepers-logo.svg";
import {
  HeroContainer,
  ImgWrap,
  Img,
  HeroContent,
} from "./JobspireHeroElements";

const SleepersHeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <ImgWrap>
          <Img src={img} />
        </ImgWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default SleepersHeroSection;
