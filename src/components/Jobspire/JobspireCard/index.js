import React, { useState } from "react";
import { Button } from "../../ButtonElements";

import {
  ServicesContainer,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServiceTextWrap,
} from "./JobspireElements";

const Jobspire = () => {
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

export default Jobspire;
