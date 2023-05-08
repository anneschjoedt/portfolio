import React, { useState } from "react";
import jobspire from "../../images/jobspire/jobspire-prototype.png";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElements";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServiceTextWrap,
  ServiceCardWrap,
  handleMouseOver,
} from "./ServicesElements";

const Services = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ServicesContainer id="services">
      <ServicesCard
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        to="/jobspire"
        onClick={goToTop}
      >
        {hover ? (
          <Button to="/jobspire" onClick={goToTop}>
            <ServiceTextWrap>
              <ServicesH2>Jobspire</ServicesH2>
              <ServicesP>UX & UI design</ServicesP>
            </ServiceTextWrap>
          </Button>
        ) : null}
      </ServicesCard>
    </ServicesContainer>
  );
};

export default Services;
