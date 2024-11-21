// src/components/OrderOverview.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import axios from 'axios';

const OrderOverview = () => {
  const { state } = useCart();
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleCheckout = async () => {
    // Prepare order data
    const orderData = {
      items: state.items,
      totalPrice: state.finalAmount // Assuming this is the amount to be charged
    };

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${window.location.origin}/user/orders`, orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Redirect to payment portal
      history.push('/payment', { orderId: response.data._id });
    } catch (err) {
      console.error('Error placing order:', err);
      setMessage('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-16 p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Order Overview</h2>

      {state.items.length === 0 ? (
        <p className="text-lg text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white rounded-md shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Items Ordered:</h4>
          {state.items.map((item) => (
            <div key={item._id} className="mb-2">
              <h3 className="font-medium text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
          ))}
          <h3 className="text-xl font-bold text-gray-800 mt-4">
            Total Amount: ${state.finalAmount.toFixed(2)}
          </h3>

          {/* Terms and Conditions Checkbox */}
          <div className="mt-6">
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="mr-2"
              />
              I accept the <a href="/terms" className="text-blue-600 underline">terms and conditions</a>
            </label>
          </div>

          {/* Checkout Button */}
          <div className="text-right mt-4">
            <button 
              onClick={handleCheckout}
              disabled={!isChecked} // Disable if not checked
              className={`px-6 py-2 rounded-md transition duration-150 ease-in-out ${
                isChecked ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Confirm Order and Pay
            </button>
          </div>

          {/* Message Section */}
          {message && <p className="text-center text-red-600 mt-4">{message}</p>}
        </div>
      )}
    </div>
  );
};

export default OrderOverview;
