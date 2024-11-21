import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course"; // Assuming Course contains the product cards
import Footer from "../components/Footer";
import Cart from "../components/Cart"; // Import the Cart component
import { useCart } from "../context/CartContext"; // Import the useCart hook
import ProductCard from "../components/ProductCard";

function Courses() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const { state } = useCart(); // Access cart state

  return (
    <>
      <Navbar />
      <button onClick={() => setCartOpen(true)}>Open Cart ({state.items.length})</button>
      {isCartOpen && <Cart onClose={() => setCartOpen(false)} />} {/* Manage cart visibility */}
      
      
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="min-h-screen">
        <Course searchQuery={searchQuery} /> {/* Pass the search query to Course */}
      </div>
      
      <Footer />
    </>
  );
}

export default Courses;
