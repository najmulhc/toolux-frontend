import React from "react";
import { Link } from "react-router-dom";
import DeleteOrder from "./DeleteOrder";

const UserSingleOrder = ({ order, setSelected}) => {
  const { _id } = order;
  const link = `/dashboard/payment/${order._id}`
  return (
    <>
    <tr className="w-12 overflow-x-scroll">
      <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
        {order.orderDate}
      </td>
      <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
        {order.product}
      </td>
      <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
        {order.quantity}
      </td>
    
      <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
        ${order.cost}
      </td>
      {order.state === "unpaid" ? (
        <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
          <Link to={link} className="btn btn-sm btn-success">
            Pay
          </Link>
          <label type="button" className="ml-2 btn btn-sm btn-error" htmlFor="my-modal-3" onClick={() => setSelected(order)}>
            Cancel Order
          </label>
        </td>
      ) : (
        <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
          <button className="btn btn-sm btn-success" type="button">
            {order.state}
          </button>
        </td>
      )}
    </tr>
     
      </>
  );
};

export default UserSingleOrder;
