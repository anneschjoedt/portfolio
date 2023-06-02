import React from "react";
import img from "../../images/jobspire/jobspire.svg";
import {
  HeroContainer,
  ImgWrap,
  Img,
  HeroContent,
} from "./JobspireHeroElements";

const JobspireHeroSection = () => {
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

export default JobspireHeroSection;
