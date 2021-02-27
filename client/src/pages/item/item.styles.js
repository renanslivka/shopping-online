import styled from "styled-components";

export const ItemContainer = styled.div`
  min-height: calc(100vh - 79px - 215.5px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
export const ItemImage = styled.div`
  width: 100%;
  min-height: 450px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const InfoContainer = styled.div`
  flex-direction: column;
  margin: 25px;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
`;

export const NameContainer = styled.span`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 355px;
  @media screen and (max-width: 800px) {
    width: 290px;
  }
`;

export const AddToContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddToCartButton = styled.button`
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  color: #303132;
  flex: 1;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const AddToCartFavorite = styled.button`
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  color: #303132;
  margin-left: 8px;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CheckoutButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 15px;
  background-color: #303132;
  color: white;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
