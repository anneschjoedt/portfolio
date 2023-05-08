import React, { useState } from "react";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";

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
      <ServicesWrapper>
        <ServiceCardWrap>
          <ServicesCard
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            to="/annoanno"
            onClick={goToTop}
          >
            {hover ? (
              <Button to="/annoanno" onClick={goToTop}>
                <ServiceTextWrap>
                  <ServicesH2>AnnóAnno</ServicesH2>
                  <ServicesP>Concept development • UX & UI design</ServicesP>
                </ServiceTextWrap>
              </Button>
            ) : null}
          </ServicesCard>
        </ServiceCardWrap>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
