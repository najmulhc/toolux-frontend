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
    <section className="container mx-auto">
      <Heading>Our recent customer reviews</Heading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <HomeReview review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
