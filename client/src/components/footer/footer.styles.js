import styled from "styled-components";

export const FooterContainer = styled.div`
  position: static;
  display: grid;
  width: 100%;
  min-height: auto;
  grid-template-columns: 100%;
  background-color: #303132;
  @media screen and (max-width: 800px) {
    height: auto;
    width: 100%;
  }
`;

export const SocialNetworkTitle = styled.div`
  position: relative;
  margin: 29px 0px 20px calc((100% - 980px) * 0.5);
  left: 49px;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  align-self: start;
  color: #d3d3d3;
  @media screen and (max-width: 800px) {
    margin: 28px 0px 20px 0px;
  }
`;

export const SocialNetworkContainer = styled.div`
  position: relative;
  margin: 60px 0px 20px calc((100% - 950px) * 0.5);
  left: 46px;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  align-self: start;
  color: #d3d3d3;
  @media screen and (max-width: 800px) {
    margin: 60px 0px 20px 15px;
  }
`;

export const SocialNetworLogo = styled.div`
  position: relative;
  margin: 29px 0px 20px calc((100% - 980px) * 0.5);
  left: 49px;
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  align-self: start;
  color: #d3d3d3;
`;

export const NeedAssistanceTitle = styled.span`
  position: relative;
  margin: 28px 0px 10px calc((100% - 600px) * 0.5);
  left: 740px;
  grid-area: 1 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
  color: #d3d3d3;
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const PhoneNumber = styled.span`
  text-align: center;
  line-height: 3em;
  color: white;
  letter-spacing: 0.1em;
  position: relative;
  margin: 50px 0px 10px calc((100% - 605px) * 0.5);
  left: 747px;
  grid-area: 1 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
  color: "white";
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const EmailTitle = styled.span`
  text-align: center;
  line-height: 2em;
  color: white;
  letter-spacing: 0.1em;
  position: relative;
  margin: 80px 0px 10px calc((100% - 670px) * 0.5);
  left: 747px;
  grid-area: 1 / 1 / 4 / 2;
  justify-self: start;
  align-self: start;
  color: "white";
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

export const Copyright = styled.span`
  color: #d3d3d3;
  text-align: center;
  letter-spacing: 0.1em;
`;
