import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from 'react';
import Heading from '../../Components/Heading';
import auth from '../../firebase.init';
import UserSingleOrder from "./UserSingleOrder";
import DeleteOrder from "./DeleteOrder";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth)
  const [selected, setSelected] = useState({});
  useEffect(() => {
    const link = `https://hilly-view.herokuapp.com/orders?user=${user?.email}`;
    fetch(link).then(res=> res.json()).then(final => setOrders(final))
  }, [user])
  
  const deleteOrder = (id) => {
    const links = `https://hilly-view.herokuapp.com/order/${id}`
    fetch(links, {
      method: "DELETE", 
      headers: {
        "content-type" : "application/json"
      }
    }).then(res => res.json())
      .then(data => {
        console.log(data)
        const linkd = `https://hilly-view.herokuapp.com/orders?user=${user?.email}`;
    fetch(linkd).then(res=> res.json()).then(final => setOrders(final))
    } )
  }
  return (
    <div className="h-full overflow-y-scroll md:w-full ">
      <Heading>My Orders</Heading>
      <table className="mx-auto rounded-xl shadow-md w-96 md:w-auto overflow-x-scroll  bg-white">
        <thead className="text-white bg-secondary rounded-md">
          <tr>
          <td className="px-4 py-2">Date of order</td> 
          <td className="px-4 py-2">Product</td>
          <td className="px-4 py-2">Quantity</td>
          <td className="px-4 py-2">Total Cost</td>  
          <td className="px-4 py-2">Actions</td>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => <UserSingleOrder order={order} key={order._id} setSelected={setSelected}/> )}
        </tbody>  
      </table>
      <DeleteOrder order={selected} deleteOrder={ deleteOrder}/>
      </div>
  )}
export default MyOrders