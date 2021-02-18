import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  background-color: #303132;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    padding: 12px 0px 0px 0px;
  }
  @media screen and (max-width: 800px) {
    height: 55px;
    flex-flow: row-reverse;
    display: flex;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
  @media screen and (max-width: 800px) {
    padding: 0;
    width: 50px;
    display: none;
  }
`;
