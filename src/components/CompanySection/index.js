import React from "react";

import Icon1 from "../../images/kubb.png";
import Icon2 from "../../images/advice.png";
import Icon3 from "../../images/conaxess.png";
import Icon4 from "../../images/danskjfb.png";

import {
  CompanyContainer,
  CompanyH1,
  CompanyWrapper,
  CompanyIcon,
} from "./CompanyElements";

const CompanySection = () => {
  return (
    <CompanyContainer>
      <CompanyH1>Mine samarbejdspartnere</CompanyH1>
      <CompanyWrapper>
        <CompanyIcon src={Icon1} />
        <CompanyIcon src={Icon2} />
        <CompanyIcon src={Icon3} />
        <CompanyIcon src={Icon4} />
      </CompanyWrapper>
    </CompanyContainer>
  );
};

export default CompanySection;
