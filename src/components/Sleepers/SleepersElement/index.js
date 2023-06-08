import React from "react";
import { animateScroll as scroll } from "react-scroll";
import img from "../../../images/sleepers/sleepers-desktop.png";
import img3 from "../../../images/sleepers/sleepers-desktop3.png";
import video from "../../../images/sleepers/sleepers-video.mp4";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
  ProjectLink,
  NextProjectLink,
  LinkWrap,
  VideoWrap,
} from "./InfoElements";

const SleepersElement = ({
  lightBg,
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
            <Column1>
              <TextWrapper>
                <TopLine>Project</TopLine>
                <Subtitle darkText={darkText}>{projectTitle}</Subtitle>
                <br></br>
                <TopLine>Deliverables</TopLine>
                <Subtitle darkText={darkText}>{deliverable1}</Subtitle>
                <br></br>
                <TopLine>Year</TopLine>
                <Subtitle darkText={darkText}>{year}</Subtitle>
                <br></br>
                <ProjectLink
                  href="https://www.shop-sleepers.com/"
                  target="_blank"
                  arial-label="Visit Website"
                >
                  Visit Website
                </ProjectLink>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <Img src={img3} alt={alt} />
              </ImgWrap>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <video width="100%" autoPlay loop muted>
                <source src={video} type="video/mp4" />
              </video>
            </Column2>
          </InfoRow>
          <LinkWrap>
            <NextProjectLink
              to="/aben"
              onClick={goToTop}
              arial-label="Previous project"
            >
              Previous project
            </NextProjectLink>
            <NextProjectLink onClick={scrollToTop} arial-label="Next project">
              Scroll to top
            </NextProjectLink>
            <NextProjectLink
              to="/annoanno"
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

export default SleepersElement;
