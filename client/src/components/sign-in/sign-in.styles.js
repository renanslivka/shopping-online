import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 180px auto;
  @media screen and (max-width: 800px) {
    margin: 110px auto;
    width: 80%;
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
