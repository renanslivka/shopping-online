import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px auto;
  min-height: calc(100vh - 79px - 215.5px);
  @media screen and (max-width: 800px) {
    width: 80%;
    min-height: calc(100vh - 55px - 310px);
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUpLinkContaniner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SignUpLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
`;
