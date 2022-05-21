import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../Components/Heading";

const WhyUs = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-6">
        <Heading>We assure you to</Heading>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-accent bg-opacity-5 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h2 className="text-secondary text-lg title-font font-medium">
                Fast delivery
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
              Delivery Hero is present in around 50 countries across four continents. We operate a wide range of local brands that are united behind our shared mission.
              </p>
              <Link
                to="/"
                className="mt-3 text-secondary inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-accent bg-opacity-5 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h2 className="text-secondary text-lg title-font font-medium">
                Satisfied customers
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
              To say that customer satisfaction is important is an understatement. In 2022, 81% of marketers view customer satisfaction as the main competition area in their industry.
              </p>
              <Link
                to="/"
                className="mt-3 text-secondary inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full bg-accent bg-opacity-5 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="6" cy="18" r="3" />
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
              </div>
              <h2 className="text-secondary text-lg title-font font-medium">
                Quality Tools 
              </h2>
            </div>
            <div className="flex-grow">
              <p className="leading-relaxed text-base">
              oduct quality refers to how well a product satisfies customer needs, serves its purpose and meets industry standards. When evaluating product quality.
              </p>
              <Link
                to="/"
                className="mt-3 text-secondary inline-flex items-center"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
