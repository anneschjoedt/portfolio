import React from "react";
import Icon3 from "../../images/aben/logo-grey.svg";
import Icon2 from "../../images/annoanno/logo-white.svg";
import annoanno from "../../images/annoanno/annoanno.png";
import jobspire from "../../images/jobspire/jobspire-illustration.png";
import background from "../../images/aben/desktop-top.png";
import mathscamp from "../../images/mathscamp/desktop-mc.png";

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
  return (
    <ServicesContainer id="services">
      <ServicesH1>Work</ServicesH1>
      <ServicesWrapper>
        <ServiceCardWrap>
          <ServicesCard
            style={{
              backgroundImage: `url(${jobspire})`,
            }}
          />
          <ServicesH2>Jobspire</ServicesH2>
          <ServicesP>Concept development • wireframing • prototyping</ServicesP>
        </ServiceCardWrap>
        <ServiceCardWrap>
          <ServicesCard
            style={{
              backgroundColor: "#F09491",
            }}
          >
            <ServicesIcon src={Icon2} />
          </ServicesCard>

          <ServicesH2>AnnóAnno</ServicesH2>
          <ServicesP>Concept development • wireframing • prototyping</ServicesP>
        </ServiceCardWrap>
        <ServiceCardWrap>
          <ServicesCard
            style={{
              backgroundImage: `url(${mathscamp})`,
            }}
          />
          <ServicesH2>Maths Camps</ServicesH2>
          <ServicesP>
            Desk research • usertest • UI design • React development
          </ServicesP>
        </ServiceCardWrap>
        <ServiceCardWrap>
          <ServicesCard
            style={{
              backgroundImage: `url(${background})`,
            }}
          />
          <ServicesH2>Åben</ServicesH2>
          <ServicesP>Frontend development</ServicesP>
        </ServiceCardWrap>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
