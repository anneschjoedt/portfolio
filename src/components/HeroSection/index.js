import React, { useState } from "react";
import Heroimage from "../../images/Heroimage.png";
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
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const onHover2 = () => {
    setHover2(!hover2);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <img src={Heroimage} alt="portræt af Tine" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tine Schjødt</HeroH1>
        <HeroP>Specialist i digitale kampagner</HeroP>
        <HeroBtnWrapper>
          <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Kontakt mig {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button to="contact" onMouseEnter={onHover2} onMouseLeave={onHover2}>
            Download CV {hover2 ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
