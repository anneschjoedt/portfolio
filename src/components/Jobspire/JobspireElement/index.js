import React from "react";
import { animateScroll as scroll } from "react-scroll";
import img from "../../../images/jobspire/jobspire-desk.png";
import img2 from "../../../images/jobspire/mobile-img.png";
import img3 from "../../../images/jobspire/jobspire-desk3.png";
import img4 from "../../../images/jobspire/jobspire-mobile.png";

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
} from "./InfoElements";

const JobspireElement = ({
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
                <Subtitle darkText={darkText}>{deliverable2}</Subtitle>
                <Subtitle darkText={darkText}>{deliverable3}</Subtitle>
                <br></br>
                <TopLine>Year</TopLine>
                <Subtitle darkText={darkText}>{year}</Subtitle>
                <br></br>
                <ProjectLink
                  href="//www.jobspire.dk/"
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
                <Img src={img2} alt={alt} />
              </ImgWrap>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={img3} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <Column>
            <Img src={img4} alt={alt} />
          </Column>
          <LinkWrap>
            <NextProjectLink
              to="/sleepers"
              onClick={goToTop}
              arial-label="Previous project"
            >
              Sleepers
            </NextProjectLink>
            <NextProjectLink onClick={scrollToTop} arial-label="Next project">
              Scroll to top
            </NextProjectLink>
            <NextProjectLink
              to="/annoanno"
              onClick={goToTop}
              arial-label="Next project"
            >
              AnnoAnno
            </NextProjectLink>
          </LinkWrap>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default JobspireElement;
