import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading";

const Purchase = () => {
   const [item, setItem] = useState({});
   const { productId } = useParams();
  const { data, isLoading, isError } = useQuery("singleProduct", () =>
    axios(`http://localhost:5000/product/${productId}`)
  );
  useEffect(() => {
    if (data) {
        setItem(data.data);
       }
  }, [data])
  if (isLoading) {
    return <Heading>Data is Loading</Heading>;
  }
  if (isError) {
    console.log(isError);
  } 
 
    return (
      <div> {item.name}</div>
  )
};

export default Purchase;
