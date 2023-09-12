import React from "react";
import { animateScroll as scroll } from "react-scroll";
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

  const goToProjects = () => {
    scroll.scrollTo(470);
  };

  const goToAbout = () => {
    scroll.scrollTo(2600);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={goToProjects}>
            Work
          </SidebarLink>
          <SidebarLink to="/" onClick={goToAbout}>
            About
          </SidebarLink>
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
