import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import OrderDashboard from "./OrderDashboard";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState({});
  const [lol, setlol] = useState(0)
  useEffect(() => {
    fetch("https://hilly-view.herokuapp.com/order", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authentication: `bearer ${localStorage.getItem("accessKey")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, [lol]);
  return (
    <main className="container mx-auto">
      <Heading>Manage orders </Heading>
      <table className="mx-auto rounded-xl shadow-md overflow-x-scroll w-full h-full bg-white">
        <thead className="text-white bg-secondary rounded-md">
          <th className="px-4 py-2">Order Id</th>
          <th className="px-4 py-2">Custormer</th>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Total Revenue</th> 
          <th className="px-4 py-2">Available Stock</th>
          <th className="px-4 py-2">Payment</th>
          <th className="px-4 py-2">Actions</th>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderDashboard order={order} lol={ setlol}/>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageOrders;
