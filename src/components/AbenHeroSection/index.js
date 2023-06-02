import React, { useState } from "react";
import img from "../../images/aben/days-logo.webp";
import img2 from "../../images/aben/o-logo.webp";
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  ImgWrap,
  Img,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Logo,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <ImgWrap>
          <Img src={img2} />
          <Img src={img} />
        </ImgWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
