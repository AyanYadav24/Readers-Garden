import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Contact() {
  useEffect(() => {
    // Dynamically apply the theme class based on system preference
    const theme = localStorage.getItem("theme") || "light"; 
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col items-center py-10">
        <div className="w-full max-w-6xl px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-900 text-white py-10 px-4 text-center rounded-lg mb-8">
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Left Column */}
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-2xl font-semibold">Let’s Start a Conversation</h2>
              <div>
                <h3 className="text-lg font-semibold">Ask how we can help you:</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Request a personalized demo of our platform.</li>
                  <li>Learn from our industry research and insights.</li>
                  <li>Explore job opportunities and company culture.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Points of Contact</h3>
                <p>BookStore Inc.</p>
                <p>123 Knowledge Ave, Learning City, 456789</p>
                <p>Phone: +1 (234) 567-8901</p>
                <p>Email: info@bookstore.com</p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:w-1/2 bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">Please note: all fields are required.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-teal-600 focus:border-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-teal-600 focus:border-teal-600"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-teal-600 focus:border-teal-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Company Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-teal-600 focus:border-teal-600"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium">Job Title</label>
                    <input
                      type="text"
                      id="jobTitle"
                      className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-teal-600 focus:border-teal-600"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium">Country</label>
                    <input
                      type="text"
                      id="country"
                      className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-teal-600 focus:border-teal-600"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-300 dark:bg-gray-600 h-64 rounded-lg shadow-lg flex items-center justify-center">
            <p className="text-xl text-gray-700 dark:text-gray-300">Map Placeholder</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
