import React from "react";
import { animateScroll as scroll } from "react-scroll";
import img from "../../../images/annoanno/annoanno-desktop.png";
import img2 from "../../../images/annoanno/annoanno-mobiles.png";
import img3 from "../../../images/annoanno/page.png";

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
  ProjectLink,
  NextProjectLink,
  LinkWrap,
} from "./InfoElements";

const AnnoAnnoElement = ({
  lightBg,
  projectTitle,
  deliverable1,
  deliverable2,
  deliverable3,
  darkText,
  year,
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
                <Img src={img} alt={"website and mobile view"} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow>
            <Column1>
              <ImgWrap>
                <Img src={img2} alt={"mobile view"} />
              </ImgWrap>
            </Column1>
          </InfoRow>
          <InfoRow>
            <Column2>
              <ImgWrap>
                <Img src={img3} alt={"website view"} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default AnnoAnnoElement;
