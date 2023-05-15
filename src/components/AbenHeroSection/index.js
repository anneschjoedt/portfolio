import React, { useState } from "react";
import img from "../../images/aben/days-logo.webp";
import img2 from "../../images/aben/o-logo.webp";
import { HeroContainer, ImgWrap, Img, HeroContent } from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <ImgWrap>
          <Img src={img2} style={{ height: "220px", Maxwidth: "180px" }} />
          <Img src={img} style={{ height: "200px", Maxwidth: "400px" }} />
        </ImgWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
