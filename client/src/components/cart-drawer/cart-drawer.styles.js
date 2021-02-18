import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  color: white;
  flex-flow: column nowrap;
  position: fixed;
  transform: ${({ hidden }) => (hidden ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 350px;
  margin: 0;
  padding-top: 3.5rem;
  align-items: center;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 800px) {
    transform: ${({ hidden }) =>
      hidden ? "translateX(0)" : "translateX(-100%)"};
    left: 0;
    width: 100%;
  }
`;

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  background-color: white;
  top: 0px;
  left: 0px;
  z-index: 5;
  color: black;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CartHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #303132;
`;

export const CartHeader = styled.div`
  display: block;
`;

export const CloseCartBtn = styled.div`
  color: white;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  padding: 0;
  position: absolute;
  top: 35px;
  left: 40px;
  cursor: pointer;
  font-size: 18px;
  width: 18px;
  height: 30px;
  margin-start: 10px;
  transform: scaleX(-1);
  @media screen and (max-width: 800px) {
    transform: scaleX(1);
  }
`;

export const CartTitle = styled.h1`
  color: white;
  text-align: center;
  align-items: center;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 34px 34px 70px 34px;
`;

export const CartFooter = styled.div`
  border-top: 1px solid lightgrey;
  width: 350px;
  bottom: 0px;
  position: fixed;
  background-color: white;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const CartTotalContainer = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const CartDropdownButton = styled(CustomButton)`
  background-color: #303132;
  width: 340px;
  margin: 5px;
  @media screen and (max-width: 800px) {
    width: 97%;
  }
`;
