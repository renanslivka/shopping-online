import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { clearCart } from "./../../redux/cart/cart.action";
import { connect } from "react-redux";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_gT3FbMxkzpsHq3ssZKigvm7v00q2gXFa1O";

  const onToken = (token) => {
    axios({
      url: "https://shopping-online-server.herokuapp.com/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
        clearCart();
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="Shopping Online"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
