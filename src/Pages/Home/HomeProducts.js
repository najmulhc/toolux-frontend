import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Heading from "../../Components/Heading";
import SingleProduct from "./SingleProduct";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, data, isError } = useQuery("products", () =>
    axios(` https://hilly-view.herokuapp.com/product`)
  );
  useEffect(() => {
    if (data) {
      setProducts(data.data);
    }
  }, [data]);
  if (isLoading) {
    console.log("Loading");
  }
  if (isError) {
    console.log(isError);
  }
  return (
    <section className="container mx-auto">
      <Heading>Products</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {
          products.map(product => <SingleProduct product={product} key={product._id}/>)
      }
     </div>
    </section>
  );
};

export default HomeProducts;
