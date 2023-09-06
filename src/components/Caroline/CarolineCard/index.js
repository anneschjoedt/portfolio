import React, { useState } from "react";
import { ButtonLink } from "../../ButtonElements";

import {
  ServicesContainer,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServiceTextWrap,
} from "./CaroElements";

const Caro = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <ServicesContainer id="services">
      <ServicesCard
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        href="//www.aarhusmodermaerkeklinik.dk/"
        target="_blank"
        arial-label="Aarhus Modermaerkeklinik"
      >
        {hover ? (
          <ButtonLink href="//www.aarhusmodermaerkeklinik.dk/"
          target="_blank"
          arial-label="Aarhus Modermaerkeklinik">
            <ServiceTextWrap>
              <ServicesH2>Aarhus Modermærkeklinik</ServicesH2>
              <ServicesP>Webdevelopment</ServicesP>
            </ServiceTextWrap>
          </ButtonLink>
        ) : null}
      </ServicesCard>
    </ServicesContainer>
  );
};

export default Caro;

