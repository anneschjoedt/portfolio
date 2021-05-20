import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkItems,
  SocialLogo,
  SocialIcons,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Schjødt Social</FooterLinkTitle>
              <FooterLink to="/kontakt">Send email</FooterLink>
              <FooterLink href="">LinkedIn</FooterLink>
              <FooterLink href="">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Schjødt Social
            </SocialLogo>
            <WebsiteRights>
              <FooterLink href="//anneschjoedt.github.io/">
                website by Anne Schjødt
              </FooterLink>{" "}
              © {new Date().getFullYear()} Schjødt Social{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink to="/kontakt" target="_blank" arial-label="Email">
                <FaEnvelope />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com/in/tineschjoedt/"
                target="_blank"
                arial-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//twitter.com/tineschjoedt?lang=da"
                target="_blank"
                arial-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
