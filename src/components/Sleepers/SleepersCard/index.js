import React, { useState } from "react";
import { Button } from "../../ButtonElements";
import img from "../../../images/sleepers/projectimg.svg";

import {
  ServicesContainer,
  ServicesCard,
  ServicesH2,
  ServicesP,
  ServiceTextWrap,
} from "./SleepersElements";

const ProjectThumbnail = ({ toLink, headLine, description, bgColor }) => {
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
        to={toLink}
        onClick={goToTop}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        {hover ? (
          <Button to={toLink} onClick={goToTop}>
            <ServiceTextWrap>
              <ServicesH2>{headLine}</ServicesH2>
              <ServicesP>{description}</ServicesP>
            </ServiceTextWrap>
          </Button>
        ) : null}
      </ServicesCard>
    </ServicesContainer>
  );
};

export default ProjectThumbnail;
