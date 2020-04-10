import React from "react";
import { connect } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  WarningContainer,
  TotalContainer
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <div>
        <span>Product</span>
      </div>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantiy</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <WarningContainer>
      *please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 Exp: 01/21 - CVV 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
