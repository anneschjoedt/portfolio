import React from "react";
import img from "../../../images/aben/desktop-top2.png";
import img2 from "../../../images/aben/page.png";
import { animateScroll as scroll } from "react-scroll";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
  NextProjectLink,
  LinkWrap,
} from "./AbenElements";

const AbenElement = ({
  lightBg,
  imgStart,
  projectTitle,
  deliverable1,
  deliverable2,
  deliverable3,
  darkText,
  year,
  alt,
}) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <InfoContainer lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow>
            <Column2>
              <TextWrapper>
                <TopLine>Project</TopLine>
                <Subtitle darkText={darkText}>{projectTitle}</Subtitle>
                <br></br>
                <TopLine>Deliverables</TopLine>
                <Subtitle darkText={darkText}>{deliverable1}</Subtitle>
                <Subtitle darkText={darkText}>{deliverable2}</Subtitle>
                <Subtitle darkText={darkText}>{deliverable3}</Subtitle>
                <br></br>
                <TopLine>Year</TopLine>
                <Subtitle darkText={darkText}>{year}</Subtitle>
                <br></br>
              </TextWrapper>
            </Column2>
            <Column1>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={img2} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AbenElement;
