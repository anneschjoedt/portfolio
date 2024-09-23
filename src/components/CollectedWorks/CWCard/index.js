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
        href="https://spectacular-kulfi-ec6a84.netlify.app/"
        target="_blank"
        arial-label="Kolding Designskole"
      >
        {hover ? (
          <ButtonLink href="https://spectacular-kulfi-ec6a84.netlify.app/"
          target="_blank"
          arial-label="Kolding Designskole">
            <ServiceTextWrap>
              <ServicesH2>Kolding Designskole</ServicesH2>
              <ServicesP>Webdesign & webdevelopment</ServicesP>
            </ServiceTextWrap>
          </ButtonLink>
        ) : null}
      </ServicesCard>
    </ServicesContainer>
  );
};

export default CW;

