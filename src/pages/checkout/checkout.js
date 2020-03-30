import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantiy</span>
      </div>
      <div className="header-block">
        <span>price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 Exp: 01/21 - CVV 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
