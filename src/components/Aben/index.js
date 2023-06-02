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
      <ServicesCard
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        to="/aben"
        onClick={goToTop}
      >
        {hover ? (
          <Button to="/aben" onClick={goToTop}>
            <ServiceTextWrap>
              <ServicesH2>O Days</ServicesH2>
              <ServicesP>Webdevelopment</ServicesP>
            </ServiceTextWrap>
          </Button>
        ) : null}
      </ServicesCard>
    </ServicesContainer>
  );
};

export default Services;
