import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  RemoveButtonContainer,
} from "./cart-item.styles";
import {
  clearItemFromCart,
  /*  addItem,
  removeItem */
} from "./../../redux/cart/cart.action";

import { connect } from "react-redux";

const CartItem = ({
  item: { imageUrl, price, name, quantity },
  clearItem,
  item,
}) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
    <RemoveButtonContainer onClick={() => clearItem(item)}>
      &#10005;
      {/* &#10005 is utf-8 Dingbats */}
    </RemoveButtonContainer>
  </CartItemContainer>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  /*   addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)) */
});

export default connect(null, mapDispatchToProps)(React.memo(CartItem));
