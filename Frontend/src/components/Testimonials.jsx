import React from "react";
import testimonialImage from "../../public/signature.jpg";

function Testimonials() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-10 px-6 py-16 md:py-24 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-teal-600 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Hear directly from our satisfied customers about their experience with Readers Graden!
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonialImage}
                alt="Customer 1"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Aman Singh</h3>
                <p className="text-gray-500">Frequent Shopper</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Readers Graden has changed my reading experience! Their variety of books is incredible, and the
              shopping process is always smooth. I highly recommend Readers Graden for book lovers."
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonialImage}
                alt="Customer 2"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Rahul Sai</h3>
                <p className="text-gray-500">Book Enthusiast</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "I love the ease of finding exactly what I'm looking for on Readers Graden. The fast delivery
              and excellent customer service have made me a loyal customer!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonialImage}
                alt="Customer 3"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Nihal Sharma</h3>
                <p className="text-gray-500">First-Time Shopper</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "As a first-time shopper, I was really impressed by how simple and easy Readers Graden made
              everything. I found great books at great prices, and I’ll definitely be back for more!"
            </p>
          </div>

          {/* Testimonial 4 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonialImage}
                alt="Customer 4"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Ketan Patel</h3>
                <p className="text-gray-500">Avid Reader</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Readers Graden offers an outstanding selection of books. Their personalized recommendations
              helped me find my new favorite authors. I can’t recommend them enough!"
            </p>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonialImage}

                alt="Customer 5"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Reshma Singh</h3>
                <p className="text-gray-500">Book Collector</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Readers Graden is my go-to for all things books. Their platform is user-friendly, and I’m
              always excited to see what new books they have available. Great service, great books!"
            </p>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={testimonialImage}
                alt="Customer 6"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-teal-600">Aisha Yadav</h3>
                <p className="text-gray-500">Occasional Reader</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Readers Graden has an excellent selection and customer service. I’ve found everything from
              classic novels to contemporary gems, all with fast delivery and reasonable prices."
            </p>
          </div>
        </div>

      
      </div>
    </>
  );
}

export default Testimonials;
