import React from "react";

const UserSingleOrder = ({ order }) => {
  const { _id } = order;
  return (
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
          <button type="button" className="btn btn-sm btn-success">
            Pay
          </button>
          <button type="button" className="ml-2 btn btn-sm btn-error">
            Cancel Order
          </button>
        </td>
      ) : (
        <td className="px-4 py-2 border-b-2 text-gray-600 font-semibold border-secondary-focus">
          <button className="btn btn-sm btn-primary" type="button">
            Paid
          </button>
        </td>
      )}
    </tr>
  );
};

export default UserSingleOrder;
