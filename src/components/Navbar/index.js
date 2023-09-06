import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
  SocialIconLink,
  CVLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const Navbar = ({ toggle }) => {
  // const [scrollNav, setScrollNav] = useState(false);

  // const changeNav = () => {
  //   if (window.scrollY >= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", changeNav);
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const goToTop = () => {
    window.scrollTo(0, 0);
  };

  const goToProjects = () => {
    scroll.scrollTo(734);
  };

  const goToAbout = () => {
    scroll.scrollTo(3470);
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
              <NavLink onClick={goToAbout} to="/">
                About
              </NavLink>
            </NavItem>
            <NavBtn>
              <NavBtnLink onClick={goToTop} to="/contact">
                Contact
              </NavBtnLink>
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
