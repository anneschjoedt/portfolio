import React, { useState } from "react";
import img1 from "../../images/jobspire/jobspire-desk2.png";
import img2 from "../../images/sleepers/projectimg.png";
import img3 from "../../images/annoanno/annoanno-desktop.png";
import img4 from "../../images/aben/desktop-top2.png";
import {
  ProjectContainer,
  ImgWrap,
  Img,
  ProjectContent,
  Header,
  Container,
  Description,
  Subtext
} from "./ProjectsElements";

const ProjectsFooter = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Container>
    <Header>Recent Projects</Header>
    <ProjectContainer>
      <ProjectContent  onMouseEnter={onHover}
        onMouseLeave={onLeave}>
      <Header/>
        <ImgWrap to="/sleepers" onClick={goToTop}>
          <Img src={img2} />
        </ImgWrap>
        <Description>Sleepers</Description>
        <Subtext>Fashion</Subtext>
      </ProjectContent>
      <ProjectContent  
       onMouseEnter={onHover}
        onMouseLeave={onLeave}>
        <ImgWrap to="/jobspire" onClick={goToTop}>
          <Img src={img1} />
        </ImgWrap>
        <Description>Jobspire</Description>
        <Subtext>Jobseeking platform</Subtext>
      </ProjectContent>
      <ProjectContent  onMouseEnter={onHover}
        onMouseLeave={onLeave}>
      <Header/>
        <ImgWrap to="/annoanno" onClick={goToTop}>
          <Img src={img3} />
        </ImgWrap>
        <Description>AnnoAnno</Description>
        <Subtext>Fashion</Subtext>
      </ProjectContent>
      <ProjectContent  onMouseEnter={onHover}
        onMouseLeave={onLeave}>
      <Header/>
        <ImgWrap to="/aben" onClick={goToTop}>
          <Img src={img4} />
        </ImgWrap>
        <Description>O days</Description>
        <Subtext>Festival</Subtext>
      </ProjectContent>
    </ProjectContainer>
    </Container>
  );
};

export default ProjectsFooter;