import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import DeleteModal from "./DeleteModal";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({});
  const [time, setTime] = useState(10);
  useEffect(() => {
    fetch("https://hilly-view.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [time]);
  return (
    <div>
      <Heading>Manage Products ({products.length})</Heading>
      <table className="rounded-md shadow-md mx-auto">
        <thead>
          <tr>
      
            <th className="px-8 bg-secondary text-white font-medium">No.</th>
            <th className="px-8 bg-secondary text-white font-medium">Name</th>
            <th className="px-8 bg-secondary text-white font-medium">Img</th>
            <th className="px-8 bg-secondary text-white font-medium">Price</th>
            <th className="px-8 bg-secondary text-white font-medium">
              Quantity
            </th>
            <th className="px-8 bg-secondary text-white font-medium">
              Minimum Order
            </th>
            <th className="px-8 bg-secondary text-white font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2 text-left px-4 border-b border-secondary ">
                {products.indexOf(product) + 1}
              </td>
              <td className="py-2 text-left px-4 border-b border-secondary ">
                {product.name}
              </td>
              <td className="py-2 text-left px-4 border-b border-secondary ">
                <img src={product.img} className="w-12 h-12 " alt="" />
              </td>
              <td className="py-2 text-left px-4 border-b border-secondary ">
                {product.price}
              </td>
              <td className="py-2 text-left px-4 border-b border-secondary ">
                {product.stock}
              </td>
              <td className="py-2 text-left px-4 border-b border-secondary ">
                {product.minOrder}
              </td>
              
              <td className="py-2 text-left px-4 border-b border-secondary ">
              <label htmlFor="my-modal-3"  className="btn btn-small btn-error modal-button" onClick={()=> setSelected(product)}> delete</label>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal product={selected} setTime={setTime} /> 
    </div>
  );
};

export default ManageProducts;
