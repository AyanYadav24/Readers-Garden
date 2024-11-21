import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function CheckoutSummary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { address, paymentMethod, cartItems } = state;

  const handleConfirmOrder = () => {
    // Hardcoded order data
    const order = {
      _id: '123456',
      totalAmount: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
      paymentMethod,
      items: cartItems,
    };
    if (paymentMethod === 'Online') {
      window.location.href = 'https://checkout.stripe.dev/preview';
    } else {
      // Otherwise, navigate to the Thank You page
      navigate('/thank-you', { state: { order } });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-16 p-4 min-h-screen px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout Summary</h2>

        {/* Shipping Address Section */}
        <div className="bg-white text-gray-700 shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Shipping Address</h4>
          <p>{address.name}</p>
          <p>{address.street}</p>
          <p>{address.city}</p>
          <p>{address.zip}</p>
        </div>

        {/* Order Items Section */}
        <div className="bg-white text-gray-700 shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Order Items</h4>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between border-b border-gray-300 py-2">
              <span>{item.title}</span>
              <span>{item.quantity} x ${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        {/* Payment Method */}
        <div className="bg-white text-gray-700 shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Payment Method</h4>
          <p>{paymentMethod === 'COD' ? 'Cash on Delivery' : 'Online Payment'}</p>
        </div>

        {/* Confirm Order Button */}
        <div className="text-right">
          <button
            onClick={handleConfirmOrder}
            className="bg-blue-600 text-white px-6 py-2 rounded-md transition duration-150 ease-in-out hover:bg-blue-700"
          >
            Confirm Order
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CheckoutSummary;
