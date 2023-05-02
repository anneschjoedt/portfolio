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
      {/* <HeroBg>
        <img style={{ width: 600 }} src={Heroimage} alt="illustration" />
      </HeroBg> */}
      <HeroContent>
        <HeroH1>DIGITAL DESIGNER</HeroH1>
        <HeroP>
          I COLLABORATE WITH A VARIETY OF BRANDS, COMPANIES AND AGENCIES TO
          CREATE TAILOR-MADE SOLUTIONS
        </HeroP>
        <HeroBtnWrapper>
          {/* <Button
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            LinkedIn {hover ? <ArrowForward /> : <ArrowRight />}
          </Button> */}
          <CVLink
            onMouseEnter={onHover2}
            onMouseLeave={onHover2}
            href="//www.linkedin.com/in/anneschjoedt/"
            target="_blank"
            arial-label="LinkedIn"
            primary="true"
            dark="true"
          >
            {" "}
            LinkedIn {hover2 ? <ArrowForward /> : <ArrowRight />}
          </CVLink>
          <CVLink
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            href="https://www.canva.com/design/DAFhAx_xiaY/view"
            target="_blank"
            arial-label="CV"
          >
            {" "}
            View my CV {hover ? <ArrowRight /> : <ArrowForward />}
          </CVLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
