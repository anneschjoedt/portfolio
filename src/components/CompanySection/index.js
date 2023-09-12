import React from "react";

import Icon1 from "../../images/logo/AnnoAnno.png";
import Icon2 from "../../images/logo/aaben-logo.png";
import Icon3 from "../../images/logo/pensiondanmark-logo-png.png";
import Icon4 from "../../images/logo/jobspire.svg";
import Icon5 from "../../images/logo/folketinget.png";
import Icon6 from "../../images/aben/days-logo.webp";
import Icon7 from "../../images/aben/o-logo.webp";
import Icon8 from "../../images/sleepers/sleepers-logo.svg";
import Icon9 from "../../images/logo/logo-dk.jpeg";

import {
  CompanyContainer,
  CompanyH1,
  CompanyWrapper,
  CompanyIcon,
  IconDiv,
} from "./CompanyElements";

const CompanySection = () => {
  return (
    <CompanyContainer>
      <CompanyH1>I worked with</CompanyH1>
      <CompanyWrapper>
        <CompanyIcon src={Icon1} />
        <CompanyIcon src={Icon4} />
        <IconDiv src={Icon7} />
        <IconDiv src={Icon6} />
        <CompanyIcon src={Icon2} />
        <CompanyIcon src={Icon3} />
        <CompanyIcon src={Icon5} />
        <CompanyIcon src={Icon8} />
        <CompanyIcon src={Icon9} />
      </CompanyWrapper>
    </CompanyContainer>
  );
};

export default CompanySection;
