import React, { useState } from "react";
import img from "../../images/annoanno/logo-annoanno.svg";
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
          <Img src={img} />
        </ImgWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
