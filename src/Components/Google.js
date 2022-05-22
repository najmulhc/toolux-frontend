import React from "react";

const Google = () => (
  <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
    <img
      className=" h-5 cursor-pointer"
      src="https://i.imgur.com/arC60SB.png"
      alt=""
    />
    <button type="submit">Or sign-in with google</button>
  </div>
);

export default Google;
