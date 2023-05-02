import React, { useState } from "react";
import jobspire from "../../images/jobspire/jobspire-illustration.png";

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
} from "./ServicesElements";

const Services = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <ServicesContainer id="services">
      <ServicesWrapper>
        <ServiceCardWrap
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <ServicesCard
            style={{
              backgroundImage: `url(${jobspire})`,
            }}
          />
          {isHovering && (
            <div>
              <ServicesH2>Jobspire</ServicesH2>
              <ServicesP>
                Concept development • wireframing • prototyping
              </ServicesP>
            </div>
          )}
        </ServiceCardWrap>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
