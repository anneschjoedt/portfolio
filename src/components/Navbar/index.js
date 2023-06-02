import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLink,
  NavBtn,
  NavBtnLink,
  SocialIconLink,
  CVLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const goToProjects = () => {
    scroll.scrollTo(734);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Anne Schjødt
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink onClick={goToProjects} to="/">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={goToTop} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <CVLink
                href="https://www.canva.com/design/DAFhAx_xiaY/view"
                target="_blank"
                arial-label="CV"
              >
                {" "}
                CV
              </CVLink>
            </NavItem>
            <NavBtn>
              <NavBtnLink to="/contact">Contact</NavBtnLink>
            </NavBtn>
            <SocialIconLink
              href="//www.linkedin.com/in/anneschjoedt/"
              target="_blank"
              arial-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialIconLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
