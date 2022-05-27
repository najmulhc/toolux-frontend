import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading";
import auth from "../../firebase.init";

const Purchase = () => {
  const [item, setItem] = useState({});
  const [user] = useAuthState(auth)
  const { productId } = useParams();
  const [orderAmount, setorderAmount] = useState(0);
  const { data, isLoading, isError } = useQuery("singleProduct", () =>
    axios(` https://hilly-view.herokuapp.com/product/${productId}`)
  );
  const [orderValid, setOrderValid] = useState(true);
  const { img, name, stock, minOrder, description, price } = item;
  const placeOrder = () => {
    if (orderAmount === 0) {
      toast.error("need to select how many products you want to order")
    } else {
      let quantity = parseInt(orderAmount);
      const date = new Date();
      const orderDate =`${ date.getDate()}/${date.getMonth().toString()}/${date.getFullYear()}`;
      const order = {
        customer: user.email,
        productId,
        product: item.name,
        quantity, 
        cost: orderAmount*item.price, 
        state: "unpaid",
      orderDate
      }
      fetch("https://hilly-view.herokuapp.com/order", {
        method: "POST", 
        headers: {
          "content-type": "application/json",
          "authentication": `Bearer ${localStorage.getItem("accessKey")}`
        },
        body:JSON.stringify(order)
      }).then(res => res.json())
        .then(final => {
        console.log(final)
      })
    }
  }
  useEffect(() => {
    if (data) {
      setItem(data.data);
    }
  }, [data]);
  useEffect(() => {
    if (orderAmount > stock || orderAmount < minOrder) {
      setOrderValid(false);
    } else {
      setOrderValid(true);
    }
  }, [orderAmount]);
  if (isLoading) {
    return <Heading>Data is Loading</Heading>;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <img src={img} alt="" />
        <div className="text-left p-8 ">
          <h1 className="text-4xl font-medium text-secondary  mb-4 ">{name}</h1>
          <p className="text-md text-gray-800 my-4 font-semibold">
            {description}
          </p>
          <h2 className="text-5xl font-mono font-medium text-accent ">
            ${price}
          </h2>
          <h3 className="font-semibold text-2xl my-4 text-zinc-800 ">
            Available Stock: {stock}
          </h3>
          <h3 className="font-semibold text-2xl my-4 text-zinc-800 ">
            Minimum amount to order: {minOrder}
          </h3>
          <label htmlFor="orderAmount">
            <h2 className="text-xl font-medium ">Enter order amount: </h2>
            <input
              type="number"
              className="w-full p-2 border-b-2 border-accent mt-2  "
              placeholder="Enter how many Items you want to buy"
              onChange={(e) => setorderAmount(e.target.value)}
            />
          </label>
          {orderValid ? (
            <button
              type="button"
              className="btn btn-primary w-full my-4 "
              onClick={placeOrder}
            >
              Place order
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary w-full my-4 "
              disabled
            >
              Place order
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default Purchase;
