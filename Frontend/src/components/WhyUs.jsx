import React from "react";
import whyUsBanner from "../../public/WhyUsBanner.jpg"; // Replace with your actual image

function WhyUs() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-10 px-6 py-16 md:py-24 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-teal-600 mb-4">
            Why Choose <span className="text-teal-600">Readers Garden?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Discover what makes us different and why Readers Garden is the ultimate destination for book lovers!
          </p>
        </div>

        {/* Content and Image */}
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Section: Points */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
                What Sets Us Apart?
              </h2>
              <ul className="space-y-4 text-lg md:text-xl text-gray-600 dark:text-gray-200">
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9a3 3 0 011.5 5.5V18h7v-3.5A3 3 0 0115 9h1a5 5 0 100-10H3a5 5 0 100 10h1z"
                    />
                  </svg>
                  <p>
                    <strong>Wide Selection of Books:</strong> From timeless classics to the latest bestsellers, our library has something for everyone.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a2 2 0 00-2 2v12a2 2 0 004 0V4a2 2 0 00-2-2z"
                    />
                  </svg>
                  <p>
                    <strong>Seamless Shopping Experience:</strong> Enjoy easy navigation and a streamlined checkout process.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9a3 3 0 011.5 5.5V18h7v-3.5A3 3 0 0115 9h1a5 5 0 100-10H3a5 5 0 100 10h1z"
                    />
                  </svg>
                  <p>
                    <strong>Fast and Reliable Delivery:</strong> Enjoy quick and reliable shipping services for a hassle-free experience.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a2 2 0 00-2 2v12a2 2 0 004 0V4a2 2 0 00-2-2z"
                    />
                  </svg>
                  <p>
                    <strong>Expert Recommendations:</strong> Our book experts recommend titles based on your preferences.
                  </p>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6 text-teal-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a2 2 0 00-2 2v12a2 2 0 004 0V4a2 2 0 00-2-2z"
                    />
                  </svg>
                  <p>
                    <strong>24/7 Customer Support:</strong> Our team is available round the clock to assist with any queries.
                  </p>
                </li>
              </ul>
            </div>
         
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={whyUsBanner}
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              alt="Why Us Banner"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
