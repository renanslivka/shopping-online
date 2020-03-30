import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishablekey = "pk_test_gT3FbMxkzpsHq3ssZKigvm7v00q2gXFa1O";

  const onTOken = token => {
    console.log(token);
    alert("Payment Success");
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="Shopping Online"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onTOken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
