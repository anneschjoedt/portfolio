import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  CVLink,
  SocialIconLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={goToTop}>
            About
          </SidebarLink>
          <CVLink
            href="https://www.canva.com/design/DAFhAx_xiaY/view"
            target="_blank"
            arial-label="CV"
          >
            {" "}
            CV
          </CVLink>
          <SocialIconLink
            href="//www.linkedin.com/in/anneschjoedt/"
            target="_blank"
            arial-label="LinkedIn"
          >
            LinkedIn
          </SocialIconLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact" onClick={goToTop}>
            Contact
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
