import React, { useEffect, useState } from "react";

const OrderDashboard = ({ order }) => {
  const { productId } = order;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://hilly-view.herokuapp.com/product/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <tr className="w-12 overflow-x-scroll">
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order._id}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order.customer}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order.product}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order.quantity}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order.cost}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {product.stock}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order.state === "unpaid" ? (
          <span className="btn btn-sm btn-danger btn-disabled mx-auto">
            {order.state}
          </span>
        ) : (
          <span className="btn btn-sm btn-success  mx-auto">{order.state}</span>
        )}
      </td>
      <td className="px-4 py-2 border-b-2 border-secondary-focus">
        {order.state === "paid" ? (
          <button type="button" className="btn btn-primary btn-sm mx-auto">
            Deliver
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-sm mx-auto"
            disabled
          >
            Deliver
          </button>
        )}
        <button type="button" className="ml-2 btn btn-sm btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderDashboard;
