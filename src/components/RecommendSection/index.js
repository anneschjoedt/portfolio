import React from "react";

import {
  RecommendContainer,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from "./RecommendElements";

const RecommendSection = ({
  lightBg,
  id,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
}) => {
  return (
    <>
      <RecommendContainer lightBg={lightBg} id={id}>
        <TextWrapper>
          <TopLine>{topLine}</TopLine>
          <Heading lightText={lightText}>{headLine}</Heading>
          <Subtitle darkText={darkText}>{description}</Subtitle>
        </TextWrapper>
      </RecommendContainer>
    </>
  );
};

export default RecommendSection;
