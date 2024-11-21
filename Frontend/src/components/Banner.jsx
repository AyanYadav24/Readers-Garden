import React from "react";
import banner from "../../public/Banner.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto md:px-20 px-6 py-16 md:py-24 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="flex flex-col md:flex-row my-10 gap-8">
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="space-y-8">
              <h1 className="text-2xl md:text-5xl font-bold">
                Hello, <span className="text-teal-600">Readers Garden</span> welcomes you here to learn something{" "}
                <span className="text-teal-600">new every day!</span>
              </h1>
              <p className="text-sm md:text-xl">
                  Welcome to Readers Garden, the ultimate paradise for book lovers! Here at Readers Garden, we believe that every book has the power to transport you to new worlds, 
                  ignite your imagination, and enrich your life. Whether you're an avid reader or just beginning your literary journey, our diverse collection of books 
                  is curated to offer something special for everyone. Dive into our treasure trove of knowledge, discover captivating stories, and explore genres that 
                  will inspire and delight you.
              </p>
              <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-teal-600"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Email"
                />
              </label>
            </div>
            <button className="btn mt-6 bg-teal-600 hover:bg-teal-600 text-white rounded-md py-2 px-4">
              Get Started
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <img
              src={banner}
              className="w-full h-[500px] object-cover rounded-md shadow-lg"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
