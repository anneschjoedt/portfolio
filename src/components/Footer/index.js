import React from "react";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinksWrapper,
  FooterLink,
  FooterLinkItems,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Schjødt Social</FooterLinkTitle>
              <FooterLink to="/kontakt">Send email</FooterLink>
              <FooterLink ahref="">LinkedIn</FooterLink>
              <FooterLink ahref="">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
