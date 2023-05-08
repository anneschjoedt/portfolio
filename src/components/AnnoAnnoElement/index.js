import React from "react";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  ProjectLink,
  NextProjectLink,
  LinkWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  imgStart,
  projectTitle,
  deliverable1,
  deliverable2,
  deliverable3,
  darkText,
  year,
  alt,
  img,
  img2,
  img3,
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
            <Column1>
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
                <ProjectLink
                  href="//www.annoanno.dk"
                  target="_blank"
                  arial-label="Visit Website"
                >
                  Visit Website
                </ProjectLink>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <Img src={img2} />
              </ImgWrap>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={img3} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <LinkWrap>
            <NextProjectLink
              to="/jobspire"
              onClick={goToTop}
              arial-label="Previous project"
            >
              Previous project
            </NextProjectLink>
            <NextProjectLink onClick={scrollToTop} arial-label="Next project">
              Scroll to top
            </NextProjectLink>
            <NextProjectLink
              to="/aben"
              onClick={goToTop}
              arial-label="Next project"
            >
              Next project
            </NextProjectLink>
          </LinkWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;