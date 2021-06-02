import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IeCShSAN2UIjfHbMsDx17Hd6aiHSDLLqrSkXcTppvtaWTqia5QpoEcmTmdh98ZYSJZ98Z1PujxByeRzyn9GMKPR00KqJZ8oDp";

  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment!"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Pro-Commerce"
      shippingAddress
      billingAddress
      image="https://i.ibb.co/6H75n30/shopping-online.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
