import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from 'axios';
const CartContext = createContext();
import toast, { Toaster } from 'react-hot-toast';

// Load initial cart state from local storage if available
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalItems: JSON.parse(localStorage.getItem("cartItems"))?.length || 0,
  totalPrice: 0
};

// Cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(item => item._id === action.payload._id);
      
      if (existingItemIndex >= 0) {
        // If the item already exists, increment its quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1; // Increment the quantity of the existing item
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1 // Increment totalItems count
        };
      }

      // If it's a new item, add it to the cart
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalItems: state.totalItems + 1
      };

    case "REMOVE_FROM_CART":
      const itemToRemove = state.items.find(item => item._id === action.payload.id);
      const updatedItemsAfterRemoval = state.items.filter(item => item._id !== action.payload.id);
      
      return {
        ...state,
        items: updatedItemsAfterRemoval,
        totalItems: state.totalItems - (itemToRemove ? itemToRemove.quantity : 1) // Adjust totalItems accordingly
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map(item =>
          item._id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        totalItems: state.totalItems + 1 // Increment totalItems count
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map(item =>
          item._id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalItems: state.totalItems - (state.items.find(item => item._id === action.payload.id)?.quantity > 1 ? 1 : 0) // Decrement totalItems if quantity is greater than 1
      };

    case "UPDATE_TOTAL_PRICE":
      const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return { ...state, totalPrice };

      case "APPLY_COUPON":
        let discount = 0;
        let finalAmount = state.totalPrice;
      
        // Match the discount logic based on your backend coupon codes
        if (action.payload === "WELCOME15") {
          discount = state.totalPrice * 0.15;
        } else if (action.payload === "DISCOUNT10") {
          discount = state.totalPrice * 0.10;
        }
      
        finalAmount = state.totalPrice - discount;
      
        return {
          ...state,
          discount,
          finalAmount
        };
      
  }
};

// CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.items));
    dispatch({ type: "UPDATE_TOTAL_PRICE" });
  }, [state.items]);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success(`${item.name} added to cart`);
  };

  const removeFromCart = (id) => {
    const item = state.items.find(item => item._id === id);
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
    toast.error(`${item?.name || 'Item'} removed from cart`);
  };
    const incrementQuantity = (id) => dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
  const decrementQuantity = (id) => dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
  

const applyCoupon = async (code, purchaseAmount) => {
  try {
    const response = await axios.post('/api/coupons/apply', { code, purchaseAmount });
    const { discount, finalAmount } = response.data;
    dispatch({ type: 'APPLY_COUPON', payload: { discount, finalAmount } });
  } catch (error) {
    console.error("Coupon application failed:", error);
    alert(error.response?.data.message || "Failed to apply coupon");
  }
};

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, incrementQuantity, decrementQuantity, applyCoupon }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the CartContext
export const useCart = () => useContext(CartContext);
