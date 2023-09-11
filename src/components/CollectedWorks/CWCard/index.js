import React, { useState } from "react";
import { ButtonLink } from "../../ButtonElements";

import {
  ServicesContainer,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServiceTextWrap,
} from "./CWElements";

const CW = () => {
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
        href="//www.collectedwork.dk/"
        target="_blank"
        arial-label="Kolding Designskole - Collected Works"
      >
        {hover ? (
          <ButtonLink href="//www.collectedwork.dk/"
          target="_blank"
          arial-label="Kolding Designskole - Collected Works">
            <ServiceTextWrap>
              <ServicesH2>Kolding Designskole - Collected Works</ServicesH2>
              <ServicesP>Webdevelopment</ServicesP>
            </ServiceTextWrap>
          </ButtonLink>
        ) : null}
      </ServicesCard>
    </ServicesContainer>
  );
};

export default CW;

