import React, { useState } from "react";

import axios from "axios";
import {
  FooterContainer,
  Copyright,
  CopyrightContainer,
  SocialNetworkTitle,
  SocialNetworkContainer,
  SocialNetworkLinkContainer,
  ContactDetailsContainer,
  NeedAssistanceTitle,
  PhoneNumber,
  EmailTitle,
  SocialNetworLogo,
  ImgIcon,
  Input,
  BeOurFriendContainer,
  BeOurFriendTitle,
  SubscribeButton,
  Form,
} from "./footer.styles";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios({
      url: "https://shopping-online-server.herokuapp.com/subscribe",
      method: "post",
      data: {
        email: email,
      },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Thank you for your subscription! We will keep you up to date.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Something wrong.");
      }
    });
  };

  const resetForm = () => {
    setEmail("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <FooterContainer>
      <SocialNetworkContainer>
        <SocialNetworkTitle>STAY CONNECTED</SocialNetworkTitle>
        <SocialNetworkLinkContainer>
          <SocialNetworLogo
            href="https://www.facebook.com/renan.slivka"
            style={{ marginRight: "5px" }}
          >
            <ImgIcon
              alt="Facebook clean"
              src="https://static.wixstatic.com/media/4f857b2e8a316c4e1ed16717a3d4ec8c.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/4f857b2e8a316c4e1ed16717a3d4ec8c.webp"
            />
          </SocialNetworLogo>
          <SocialNetworLogo href="https://www.instagram.com/renanslivka/">
            <ImgIcon
              alt="Instegram clean"
              src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_18,h_18,al_c,q_85,usm_0.66_1.00_0.01/81af6121f84c41a5b4391d7d37fce12a.webp"
            />
          </SocialNetworLogo>
          <SocialNetworLogo href="https://www.linkedin.com/in/renan-slivka-572120194/">
            <ImgIcon
              alt="Linkdein clean"
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png"
              style={{ width: "18px", height: "18px", marginLeft: "7px" }}
            />
          </SocialNetworLogo>
        </SocialNetworkLinkContainer>
      </SocialNetworkContainer>
      <BeOurFriendContainer>
        <BeOurFriendTitle>BE OUR FRIEND</BeOurFriendTitle>
        <Form onSubmit={handleSubmit} method="POST">
          <Input
            type="email"
            maxLength="250"
            placeholder="Enter Enter your email here"
            value={email}
            onChange={handleChange}
            required
            name="email"
          />
          <SubscribeButton>Subscribe Now</SubscribeButton>
        </Form>
      </BeOurFriendContainer>
      <div>
        <ContactDetailsContainer>
          <NeedAssistanceTitle>NEED ASSISTANCE?</NeedAssistanceTitle>
          <PhoneNumber>123-456-7890</PhoneNumber>
          <EmailTitle>renanslivka@gmail.com</EmailTitle>
        </ContactDetailsContainer>
      </div>
      <CopyrightContainer>
        <Copyright>© 2020 by Renan Slivka</Copyright>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
