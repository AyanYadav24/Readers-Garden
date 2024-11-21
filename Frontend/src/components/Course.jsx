import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom"; // For routing
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

function Course() {
  // State for storing books data
  const [book, setBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${window.location.origin}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook(); 
  }, []);

  const filteredBooks = book.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            We're delighted to have you{" "}
            <span className="text-teal-600">Here!</span>
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300">
            Welcome! Here, you can explore our collection of books that offer a wealth of knowledge 
            and inspiration. Dive into various genres, learn from different perspectives, and discover
            new ideas. We invite you to take your time browsing and finding the perfect reads that 
            resonate with you. Happy reading!
          </p>
        </div>

        {/* Search and Back Button Container */}
        <div className="mt-6 flex items-center justify-center space-x-2">
          <Link to="/">
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300">
              Back
            </button>
          </Link>
          <div className="relative">
            <input
              type="text"
              className="border text-black rounded-md px-10 py-2"
              placeholder="Search for books..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBooks.map((item) => (
            <Cards key={item._id} item={item} /> 
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
