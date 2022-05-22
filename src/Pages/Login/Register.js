import React from "react";
import { useForm } from "react-hook-form";
import Google from "../../Components/Google";
import Heading from "../../Components/Heading";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="min-h-screen bg-no-repeat bg-cover bg-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex min-h-screen items-center justify-center">
            <div className="bg-primary bg-opacity-30 w-[350px]  p-8 rounded-md">
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Heading>Login</Heading>
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
                  Dont have an account?{" "}
                  <span className="cursor-pointer text-sm text-blue-600">
                    {" "}
                    Join free today
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-accent">
            <h1>this is somethisbg </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
