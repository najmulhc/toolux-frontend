import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Heading';
import auth from '../../firebase.init';
import UserSingleOrder from "./UserSingleOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth)
  
  useEffect(() => {
    const link = `https://hilly-view.herokuapp.com/orders?user=${user?.email}`;
    fetch(link).then(res=> res.json()).then(final => setOrders(final))
  },[user])
  return (
    <div className="h-full overflow-y-scroll md:w-full ">
      <Heading>My Orders {orders.length} </Heading>
      <table className="mx-auto rounded-xl shadow-md w-96 md:w-auto overflow-x-scroll  bg-white">
        <thead className="text-white bg-secondary rounded-md">
          <th className="px-4 py-2">Date of order</th> 
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Total Cost</th>  
          <th className="px-4 py-2">Actions</th>
        </thead>
        <tbody>
          {orders.map(order => <UserSingleOrder order={order} key={order._id}/> )}
        </tbody>  
      </table>
      </div>
  )}
export default MyOrders