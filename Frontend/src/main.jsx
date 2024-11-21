import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // react.strictmode ko hatana pada kyuki wo 2 times render karta hai
  <BrowserRouter> 
    <AuthProvider> 
    <CartProvider>
  
      <div className="dark:bg-slate-900 dark:text-white ">
        <App />
      </div>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>
);
