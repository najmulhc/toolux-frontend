import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Google from "../../Components/Google";
import Heading from "../../Components/Heading";
import auth from "../../firebase.init";
import UseToken from "../../Hooks/useUsers";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const onSubmit = (data) => {
    const { email, password, displayName } = data;
    setFormData(data);
    createUserWithEmailAndPassword(email, password);
  };
  const updateName = async ({ displayName }) => {
    await updateProfile({ displayName });
  };
  let token = "";

  useEffect(() => {
    if (user) {
      if (!user.user.displayName) {
        UseToken(user.user);
        console.log("no name found");
        console.log(user.user);
        updateName(formData.displayName);
        navigate("/");
      } else {
        console.log("user name updated");
      }
    }
  }, [user]);

  return (
    <div>
      <div className="min-h-screen bg-no-repeat bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex min-h-screen items-center justify-center">
            <div className="bg-primary bg-opacity-30 w-[350px]  p-8 rounded-md">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Heading>Register</Heading>
                  </div>
                  <div className="my-3">
                    <label
                      className="block text-md mb-2 text-left font-medium text-neutral"
                      htmlFor="displayName"
                    >
                      Name
                    </label>
                    <input
                      className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="text"
                      name="displayName"
                      placeholder="yourName"
                      {...register("displayName")}
                    />
                  </div>
                  <div className="my-3">
                    <label
                      className="block text-md mb-2 text-left font-medium text-neutral"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="email"
                      name="password"
                      placeholder="email"
                      {...register("email")}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      className="block text-md mb-2  text-left font-medium text-neutral"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                      type="password"
                      name="password"
                      placeholder="password"
                      {...register("password")}
                    />
                  </div>
                  <div className="flex justify-end">
                    <span className="text-sm text-neutral  mt-2 hover:underline cursor-pointer">
                      Forgot password?
                    </span>
                  </div>
                  <div className="">
                    <button
                      className="mt-4 mb-3 w-full btn btn-primary hover:btn-secondary py-2 rounded-md transition duration-100"
                      type="submit"
                    >
                      Login now
                    </button>
                  </div>
                </form>
                {/* google sign in  */}
                <Google />
                <p className="mt-8">
                  {" "}
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="cursor-pointer text-sm text-secondary"
                  >
                    {" "}
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent hidden md:block">
            <h1>this is somethisbg </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
