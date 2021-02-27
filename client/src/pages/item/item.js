import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import { selectItem } from "../../redux/shop/shop.selectors";
import {
  ItemContainer,
  AddToCartButton,
  ItemImage,
  DetailsContainer,
  NameContainer,
  PriceContainer,
  ButtonsContainer,
  CheckoutButton,
  AddToContainer,
  AddToCartFavorite,
  InfoContainer,
} from "./item.styles";

export const ItemPage = ({ item, addItem, history }) => {
  return (
    <ItemContainer>
      <ItemImage imageUrl={item.imageUrl} />
      <InfoContainer>
        <NameContainer>{item.name}</NameContainer>
        <PriceContainer>{item.price}$</PriceContainer>
      </InfoContainer>
      <DetailsContainer>
        <ButtonsContainer>
          <AddToContainer>
            <AddToCartButton onClick={() => addItem(item)} inverted>
              Add to cart
            </AddToCartButton>
            <AddToCartFavorite onClick={() => {}} inverted>
              &#10084;
            </AddToCartFavorite>
          </AddToContainer>

          <CheckoutButton onClick={() => history.push("/checkout")} inverted>
            Buy it now
          </CheckoutButton>
        </ButtonsContainer>
      </DetailsContainer>
    </ItemContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(
    ownProps.match.params.collectionId,
    ownProps.match.params.itemId
  )(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
