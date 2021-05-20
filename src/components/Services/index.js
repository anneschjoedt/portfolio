import React from "react";
import Icon1 from "../../images/svg-2.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";
import Icon4 from "../../images/svg-5.svg";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Mine ydelser</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Strategi og planlægning</ServicesH2>
          <ServicesP>
            Strategi, planlægning, udvikling af kampagner og indhold til sociale
            medier
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Indholdsproduktion</ServicesH2>
          <ServicesP>
            Tekstforfatning og projektledelse af grafisk indhold
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Annoncekampagner</ServicesH2>
          <ServicesP>
            Opsætning, optimering og rapportering af annoncekampagner på
            Facebook, Instagram, LinkedIn og Twitter
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Web-redigering</ServicesH2>
          <ServicesP>
            Opdatering af hjemmeside inkl. tekst og light billedredigering til
            web
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
