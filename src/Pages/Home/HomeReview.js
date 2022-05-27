import React from "react";

const HomeReview = ({ review }) => (
  <div className="p-8 bg-white rounded-md shadow-md mb-8">
    <div className="flex justify-start items-end">
      <h1 className="text-4xl font-semibold text-left text-slate-800">{review.provider}</h1>
      <h2 className="text-2xl font-bold text-orange-500 ml-2">{review.rating}/5</h2>
    </div>
    <p className="text-left font-medium text-slate-900 text-xl my-4">{review.review}</p>
  </div>
);

export default HomeReview;
