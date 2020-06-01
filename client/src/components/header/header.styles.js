import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 60px;
  background-color: #535151;
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
  @media screen and (max-width: 800px) {
    padding: 0;
    width: 50px;
  }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 0px 0px 80px;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  .slide-enter {
    transform: translate(100%);
  }

  .slide-enter-active {
    transform: translate(0%);
    transition: transform 300ms ease-in-out;
  }

  .slide-leave {
    transform: translate(-100%);
  }

  .slide-leave-active {
    transform: translate(0%);
    transition: transform 300ms ease-in-out;
  }
`;
