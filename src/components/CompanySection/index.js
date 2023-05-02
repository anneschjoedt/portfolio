import React from "react";

import Icon1 from "../../images/logo/AnnoAnno.png";
import Icon2 from "../../images/logo/aaben-logo.png";
import Icon3 from "../../images/logo/pensiondanmark-logo-png.png";
import Icon4 from "../../images/logo/jobspire.svg";
import Icon5 from "../../images/logo/folketinget.png";

import {
  CompanyContainer,
  CompanyH1,
  CompanyWrapper,
  CompanyIcon,
} from "./CompanyElements";

const CompanySection = () => {
  return (
    <CompanyContainer>
      <CompanyH1>I worked with</CompanyH1>
      <CompanyWrapper>
        <CompanyIcon src={Icon1} />
        <CompanyIcon src={Icon4} />
        <CompanyIcon src={Icon2} />
      </CompanyWrapper>
      <CompanyWrapper>
        <CompanyIcon src={Icon3} />
        <CompanyIcon src={Icon5} />
      </CompanyWrapper>
    </CompanyContainer>
  );
};

export default CompanySection;
