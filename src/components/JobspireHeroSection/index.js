import React from "react";
import img from "../../images/jobspire/jobspire.svg";
import { HeroContainer, ImgWrap, Img, HeroContent } from "./HeroElements";

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
