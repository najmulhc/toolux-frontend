import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import UseToken from "../Hooks/useUsers";

const Google = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const googleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }
  const navigate = useNavigate();
  if (user?.user) {
    UseToken(user.user);
    navigate('/')
  }
  return (
    <div className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
      <img
        className=" h-5 cursor-pointer"
        src="https://i.imgur.com/arC60SB.png"
        alt=""
      />
      <button type="submit" onClick={googleSignIn}>
        Or sign-in with google
      </button>
    </div>
  );
};
export default Google;
