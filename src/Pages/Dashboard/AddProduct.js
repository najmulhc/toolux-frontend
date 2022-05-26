import React from "react";
import { useForm } from "react-hook-form";
import Heading from "../../Components/Heading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    } = useForm(); 
    const onSubmit = (data) => {
        const { name, description, img, price, stock, minOrder } = data;
        const tprice = parseInt(price, 10);
        const tstock = parseInt(stock, 10);
        const tminOrder = parseInt(minOrder, 10);
        // creating final product object
        const product = {
            name, 
            description,
            img,
            price: tprice,
            stock: tstock, 
            minOrder: tminOrder
        }
        fetch("https://hilly-view.herokuapp.com/product", {
            method: "POST", 
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(product)
        }).then(res => res.json())
        .then(final => {
             
        })
    };
     
  return (
    <main className="flex h-full bg-red-400 items-center justify-center">
      <form
        action=""
        className="p-8 shadow-md bg-white rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading>Add a product</Heading>
        <label htmlFor="name">
          <h2 className="text-secondary font-medium text-left mb-2">
            Product Name
          </h2>
          <input
            className="w-96 border-b-2 border-secondary px-4 py-2  "
            name="name"
            placeholder="Add product name here"
            {...register("name", { required: true })}
          />
        </label>
        <label htmlFor="img">
          <h2 className="text-secondary font-medium text-left mb-2 mt-6">
            Product Image
          </h2>
          <input
            className="w-96 border-b-2 border-secondary px-4 py-2  "
            name="img"
            placeholder="Place product imge link here"
            {...register("img", { required: true })}
          />
        </label>
        <label htmlFor="description">
          <h2 className="text-secondary font-medium text-left mb-2 mt-6">
            Short Description
          </h2>
          <input
            className="w-96 border-b-2 border-secondary px-4 py-2  "
            name="description"
            placeholder="Write a short description here "
            {...register("description", { required: true })}
          />
        </label>
        <label htmlFor="price">
          <h2 className="text-secondary font-medium text-left mb-2 mt-6">
            Price(in US$)
          </h2>
          <input
            className="w-96 border-b-2 border-secondary px-4 py-2  "
            name="price"
            type="number"
            placeholder="Price of the product"
            {...register("price", { required: true })}
          />
        </label>
        <label htmlFor="stock">
          <h2 className="text-secondary font-medium text-left mb-2 mt-6">
            Stock
          </h2>
          <input
            className="w-96 border-b-2 border-secondary px-4 py-2  "
            name="stock"
            type="number"
            placeholder="Total products in stock"
            {...register("stock", { required: true })}
          />
        </label>
        <label htmlFor="minOrder">
          <h2 className="text-secondary font-medium text-left mb-2 mt-6">
            Minimum order quantity
          </h2>
          <input
            className="w-96 border-b-2 border-secondary px-4 py-2  "
            name="minOrder"
            type="number"
            placeholder="Least amount of products to be ordered"
            {...register("minOrder", { required: true })}
          />
              </label>
              <br />
              <button type="submit" className="btn btn-primary w-full mt-4">Add item</button>
      </form>
    </main>
  );
};

export default AddProduct;
