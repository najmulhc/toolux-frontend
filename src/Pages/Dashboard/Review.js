import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import Heading from "../../Components/Heading";
import auth from "../../firebase.init";

const Review = () => {
  const [review, setreview] = useState("");
  const [rating, setRating] = useState(1);
  const [user] = useAuthState(auth);
  const handleReview = (e) => {
    e.preventDefault();
    const finalReview = {
      provider: user.displayName,
      review, 
      rating
    }
    fetch("https://hilly-view.herokuapp.com/review", {
      method: "POST", 
      headers: {
        "content-type": "application/json",
        
      }, 
      body: JSON.stringify(finalReview)
    }).then(res => res.json())
      .then(final => {
        if (final.acknowledged) { 
        toast("review added!")
      }
    })
   }
  return (
    <>
      <Heading>Add a review</Heading>
      <div>
        <form className="bg-secondary bg-opacity-30 w-[350px] mx-auto p-4 rounded-md shadow-md" onSubmit={handleReview}>
          <div className="w-full flex mx-auto ">
            <h2 className="font-semibold text-gray-800  ">Give a Rating:   </h2>  <div className="rating inline-block ml-4">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={()=>{setRating(1)}}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={()=>{setRating(2)}}
          
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={()=>{setRating(3)}}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={()=>{setRating(4)}}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              onClick={()=>{setRating(5)}}
            />
          </div> 
          </div>
         <br/>
          <textarea
            placeholder="Enter your review"
            className="border-2 border-secondary rounded-md p-4 m-0 w-full "
            onBlur={(e) => setreview(e.target.value)}
          />
          <button type="submit" className="btn btn-accent w-full mt-8">Rate!</button>
        </form>
      </div>
    </>
  );
};
export default Review;
