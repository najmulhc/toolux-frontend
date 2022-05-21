import React from "react";

const Banner = () => (
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-secondary">
          Fixing with tools!
        </h1>
        <p className="mb-8 text-accent text-md">
        A tool is an object that can extend an individual ability to modify features of the surrounding environment. Although many animals use simple tools, only human beings, whose use of stone tools dates back hundreds of millennia, have been observed using tools to make other tools. Early tools, made of such materials as stone marked inflection point in the use of tools
        </p>
        <div className="flex justify-center md:justify-start">
         
          <button
            className="btn btn-secondary"
            type="button"
          >
            Get started
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  </section>
);

export default Banner;
