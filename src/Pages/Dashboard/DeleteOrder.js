import React, { useEffect } from "react";
import { useQuery } from "react-query";

const DeleteOrder = ({ order , deleteOrder}) => {
  const { product } = order;
   

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal bg-error bg-opacity-25">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-error absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">Are you sure?</h3>
          <p className="py-4">
            You are going to delete the order for{" "}
            <span className="font-semibold">{order.product}</span>. Are you sure
            about this?
          </p>
          <button type="button" className="btn btn-error" onClick={deleteOrder}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteOrder;
