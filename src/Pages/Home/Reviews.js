import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import HomeReview from "./HomeReview";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://hilly-view.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="bg-secondary">
      <div className="container mx-auto py-8">
      <h1 className="text-4xl text-white font-bold mb-16 ">Our recent customer reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <HomeReview review={review} />
        ))}
      </div>
     </div>
    </section>
  );
};

export default Reviews;
