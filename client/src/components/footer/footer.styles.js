import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: #303132;
  position: absolute;
  min-height: 23vh;
  margin-top: auto;
  padding: 20px calc((100% - 950px) * 0.5) 5px calc((100% - 950px) * 0.5);
  @media screen and (max-width: 800px) {
    height: auto;
    width: 100%;
    flex-direction: column;
  }
`;

export const SocialNetworkContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const SocialNetworkTitle = styled.div`
  color: #d3d3d3;
  @media screen and (max-width: 800px) {
  }
`;

export const SocialNetworkLinkContainer = styled.div`
  color: #d3d3d3;
  margin: 10px;
  @media screen and (max-width: 800px) {
  }
`;

export const SocialNetworLogo = styled.a`
  color: #d3d3d3;
`;

export const ImgIcon = styled.img.attrs((props) => ({
  src: props.src,
}))``;

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const NeedAssistanceTitle = styled.span`
  display: flex;
  justify-content: center;
  color: #d3d3d3;
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const PhoneNumber = styled.span`
  color: white;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const EmailTitle = styled.span`
  line-height: 2em;
  color: white;
  letter-spacing: 0.1em;
  display: flex;
  justify-content: flex-end;
  color: "white";
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const BeOurFriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px calc((100% - 600px) * 0.5) 20px calc((100% - 600px) * 0.5);
  @media screen and (max-width: 800px) {
    left: 350px;
    padding: 0px 0px 20px 0px;
  }
`;

export const BeOurFriendTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #d3d3d3;
  padding-bottom: 20px;
  @media screen and (max-width: 800px) {
    left: 350px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border-radius: 0;
  font: normal normal normal 13px/1.4em raleway, sans-serif;
  border-width: 2px;
  background-color: rgba(83, 81, 81, 1);
  box-sizing: border-box !important;
  color: #ffffff;
  border-style: solid;
  border-color: rgba(83, 81, 81, 1);
  padding: 3px;
  min-width: 270px;
  margin-bottom: 10px;
  justify-content: center;
  align-self: center;
  text-overflow: ellipsis;
  &::placeholder {
    color: #ffffff;
  }
`;

export const SubscribeButton = styled.button`
  font: normal normal normal 13px/1.4em raleway, sans-serif;
  transition: color 0.4s ease 0s;
  color: #303132;
  display: inline-block;
  margin: calc(-1 * 2px) 2px 0;
  position: relative;
  align-self: center;
  white-space: nowrap;
  width: 270px;
  cursor: pointer;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Copyright = styled.span`
  color: #d3d3d3;
  text-align: center;
  letter-spacing: 0.1em;
`;
