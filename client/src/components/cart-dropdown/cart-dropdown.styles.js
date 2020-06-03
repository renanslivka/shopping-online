import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const CartDropdownContainer = styled.div`
  position: fixed;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid black;
  background-color: white;
  top: 0px;
  right: 0px;
  z-index: 5;
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
  padding: 34px;
`;

export const CartFooter = styled.div`
  width: 100%;
  border-top: 1px solid lightgrey;
  bottom: 0px;
  position: fixed;
`;

export const CartTotalContainer = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  padding-left: 270px;
`;

export const CartDropdownButton = styled(CustomButton)`
  background-color: #303132;
  width: 340px;
  margin: 5px;
`;
