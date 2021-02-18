import styled from "styled-components";
import { Link } from "react-router-dom";

export const RightNavContainer = styled.div`
  display: flex;
`;

export const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: white;

  @media (max-width: 800px) {
    flex-flow: column nowrap;
    background-color: #303132;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding-top: 3.5rem;
    align-items: center;
    z-index: 1;
    transition: transform 0.3s ease-in-out;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 0px 80px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 0px;
  }
`;

export const HomePageLink = styled(Link)`
  display: none;
  @media screen and (max-width: 800px) {
    display: unset;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
`;
