import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import BookDetails from "./components/BookDetails"; 
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import BlogDetails from "./components/BlogDetails";
import BlogList from "./components/BlogList";
import EditBlog from "./components/EditBlog";
import AddBlog from "./components/AddBlog";
import Profile from "./components/Profile";
import CheckoutSummary from "./components/CheckoutSummary";
import ThankYouPage from "./components/ThankYouPage";
import Cart from "./components/Cart";
import PrivateRoute from "./components/privateRoute";// New PrivateRoute component

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <div className="dark:bg-gray-800 dark:text-white h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route
          path="/course"
          element={<PrivateRoute authUser={authUser}><Courses /></PrivateRoute>}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book/:id" element={<BookDetails />} />
        
        <Route
          path="/cart"
          element={<PrivateRoute authUser={authUser}><Cart /></PrivateRoute>}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        
        <Route
          path="/add-blog"
          element={<PrivateRoute authUser={authUser}><AddBlog /></PrivateRoute>}
        />
        <Route
          path="/edit-blog/:id"
          element={<PrivateRoute authUser={authUser}><EditBlog /></PrivateRoute>}
        />
        <Route 
          path="/profile"
          element={<PrivateRoute authUser={authUser}><Profile /></PrivateRoute>}
        />
        <Route path="/checkout-summary" element={<CheckoutSummary />} />
        <Route path="/thank-you" element={<ThankYouPage authUser={authUser} />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
