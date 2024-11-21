import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For dynamic routes
import axios from 'axios'; // To fetch book details from the API
import Navbar from './Navbar'; 
import Footer from './Footer'; 

function BookDetails() {
  const { id } = useParams(); // Get book id from the URL
  const [book, setBook] = useState(null); // Initialize book state as null
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchBook = async (bookId) => {
      try {
        const res = await axios.get(`${window.location.origin}/book/${bookId}`);       
        setBook(res.data); // Assuming the response contains the book data
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Failed to fetch book details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) { // Ensure id is defined before fetching
      fetchBook(id); // Pass the id to the fetchBook function
    }
  }, [id]); // Re-fetch when the id changes

  if (loading) {
    return <p className="text-center">Loading book details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!book) {
    return <p className="text-center">No book found!</p>; // Fallback if no book is found
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img 
                src={book.image} 
                alt={book.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Book Details Section */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4">{book.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{book.title}</p>
                <p className="text-gray-600 dark:text-gray-400 text-md mb-2">
                  <span className="font-semibold">Category:</span> {book.category}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-md">
                  <span className="font-semibold">Price:</span> ₹{book.price}
                </p>
              </div>
              <div className="mt-8 flex space-x-4">
                <a
                  href="https://checkout.stripe.dev/preview" // Stripe Checkout preview link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 duration-200 transition-colors ease-in-out"
                >
                 pay now
                </a>
                <a
                  href={`https://methodist.edu.in/web/uploads/files/toc-klp-mishra.pdf`} // Assuming there is a "Read Now" page
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-200 transition-colors ease-in-out"
                >
                  Read Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default BookDetails;
