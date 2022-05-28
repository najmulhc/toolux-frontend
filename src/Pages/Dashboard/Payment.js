import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L3kPXCvrp1O0hXlQUM2Z3tsM8TmQS1ADlziNkxuS4mmZjXpfBI6ApUuImw2fucyW785LhVLZE8CB9BETCL9schO00MXB2VeC2"
);
const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://hilly-view.herokuapp.com/order/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);

  return (
    <main className="container mx-auto ">
      <Heading>Payment</Heading>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body">
          <p>
            You are going to pay{" "}
            <span className="font-semibold">${order.cost}</span> for
            <span className="font-semibold"> {order.quantity}</span> amount of{" "}
            <span className="font-semibold">{order.product}</span>{" "}
          </p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mt-12 mx-auto">
        <div className="card-body">
          <Elements stripe={stripePromise}>
                      <CheckoutForm order={ order}/>
          </Elements>
        </div>
      </div>
    </main>
  );
};

export default Payment;
