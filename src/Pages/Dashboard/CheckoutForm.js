import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const navigate = useNavigate()
    const elements = useElements();
    const [cardError, setcardError] = useState("");
    const [clientSecret, setClientSecret] = useState(""); 
    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://hilly-view.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cost : order.cost}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [order]);
    const handleSubmit = async (event) => {
        event.preventDefault();
  
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
      const {error , paymentMethod} = await stripe.createPaymentMethod({
        type: 'card', card
      });
        if (error) {
            setcardError(error.message)
        }
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card,
                billing_details: {
                  name: 'Jenny Rosen',
                },
              },
            },
        );
        if (confirmError) {
            setcardError(confirmError.message)
        } else {
            setcardError("")
            console.log(paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                fetch(`https://hilly-view.herokuapp.com/order/${order._id}`, {
                    method: "PUT", 
                    headers: {
                        "content-type" : "application/json"
                    }, 
                    body: JSON.stringify({
                        state: "paid",
                        transID: "5674te3"
                    })
                }).then(res => res.json()).then(data => {
                    toast.success("payment successfull");
                    navigate("/")
                })
            }
        }
    };
  
    return (
      <form onSubmit={handleSubmit}>
            <CardElement />
            <p className="text-red-600">{ cardError}</p>
        <button type="submit" className="btn btn-success" disabled={!stripe || !elements}>
          Pay
            </button>
            
      </form>
    );
};
export default CheckoutForm;