import React from "react";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "./../../redux/cart/cart.action";
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
  CartTotalContainer,
  CartHeaderContainer,
  CartTitle,
  CloseCartBtn,
  CartFooter,
  CartHeader,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch, total }) => {
  return (
    <CartDropdownContainer>
      <CartHeaderContainer>
        <CartHeader>
          <CloseCartBtn onClick={() => dispatch(toggleCartHidden())}>
            &#10095;
          </CloseCartBtn>
          <CartTitle>Cart</CartTitle>
        </CartHeader>
      </CartHeaderContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartFooter>
        <CartTotalContainer>
          <span>TOTAL: ${total}</span>
        </CartTotalContainer>
        <CartDropdownButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </CartFooter>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
