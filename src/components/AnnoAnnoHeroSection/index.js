import React from "react";
import img from "../../images/annoanno/logo-annoanno.svg";
import {
  HeroContainer,
  ImgWrap,
  Img,
  HeroContent,
} from "./AnnoAnnoHeroElements";

const AnnoAnnoHeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <ImgWrap>
          <Img src={img} style={{ height: "350px", Maxwidth: "680px" }} />
        </ImgWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default AnnoAnnoHeroSection;
