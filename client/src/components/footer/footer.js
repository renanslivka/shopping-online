import React from "react";

import {
  FooterContainer,
  Copyright,
  CopyrightContainer,
  SocialNetworkTitle,
  SocialNetworkContainer,
  NeedAssistanceTitle,
  PhoneNumber,
  EmailTitle,
} from "./footer.styles";

const Footer = () => (
  <FooterContainer>
    <SocialNetworkTitle>STAY CONNECTED</SocialNetworkTitle>
    <SocialNetworkContainer>
      <a
        href="https://www.facebook.com/renan.slivka"
        style={{ marginRight: "5px" }}
      >
        <img
          alt="Facebook clean"
          src="https://static.wixstatic.com/media/4f857b2e8a316c4e1ed16717a3d4ec8c.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/4f857b2e8a316c4e1ed16717a3d4ec8c.webp"
        />
      </a>
      <a href="https://www.instagram.com/renanslivka/">
        <img
          alt="Instegram clean"
          src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"
        />
      </a>
      <a href="https://www.linkedin.com/in/renan-slivka-572120194/">
        <img
          alt="Linkdein clean"
          src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png"
          style={{ width: "18px", height: "18px", marginLeft: "7px" }}
        />
      </a>
    </SocialNetworkContainer>
    <NeedAssistanceTitle>NEED ASSISTANCE?</NeedAssistanceTitle>
    <PhoneNumber>012-345-6789</PhoneNumber>
    <EmailTitle>Renanslivka@gmail.com</EmailTitle>
    <CopyrightContainer>
      <Copyright>© 2020 by Renan Slivka</Copyright>
    </CopyrightContainer>
  </FooterContainer>
);

export default Footer;
