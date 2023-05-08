import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  SocialLogo,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIconLink,
  ContactLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Anne Schjødt
            </SocialLogo>
            <WebsiteRights>Available for freelance projects</WebsiteRights>
            <SocialIcons>
              <ContactLink to="/contact" arial-label="Email">
                <FaEnvelope />
              </ContactLink>
              <SocialIconLink
                href="//www.linkedin.com/in/anneschjoedt/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
