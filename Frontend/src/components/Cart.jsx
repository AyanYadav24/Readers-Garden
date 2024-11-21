import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { state, removeFromCart, incrementQuantity, decrementQuantity, applyCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [address, setAddress] = useState({ name: '', street: '', city: '', zip: '' });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('COD'); // Default to COD
  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    if (!couponCode) {
      alert('Please enter a coupon code before applying.');
      return;
    }
    applyCoupon(couponCode);
    setCouponCode('');
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!address.name || !address.street || !address.city || !address.zip) {
      alert('Please fill out all address fields before proceeding to checkout.');
      return;
    }
    if (!agreeTerms) {
      alert('You must agree to the terms and conditions before proceeding.');
      return;
    }
    // Navigate to the checkout summary page
    navigate('/checkout-summary', { state: { address, paymentMethod, cartItems: state.items } });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-16 p-4 min-h-screen px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Shopping Cart</h2>

        {/* Address Section */}
        <div className="bg-white rounded-md shadow-md p-6 mb-6">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Shipping Address</h4>
          <input type="text" name="name" placeholder="Full Name" value={address.name} onChange={handleAddressChange} className="border border-gray-300 px-4 py-2 mb-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleAddressChange} className="border border-gray-300 px-4 py-2 mb-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="text" name="city" placeholder="City" value={address.city} onChange={handleAddressChange} className="border border-gray-300 px-4 py-2 mb-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600" />
          <input type="text" name="zip" placeholder="ZIP Code" value={address.zip} onChange={handleAddressChange} className="border border-gray-300 px-4 py-2 mb-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>

        {/* Cart Items Section */}
        <div className="bg-white shadow-md p-6 mb-6">
          {state.items.length === 0 ? (
            <p className="text-lg text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <div>
              {state.items.map((item) => (
                <div key={item._id} className="flex items-center justify-between border border-gray-200 bg-white rounded-md shadow-md p-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-gray-300 text-black px-2 py-1 rounded-md mx-1 transition duration-150 ease-in-out hover:bg-gray-400" onClick={() => decrementQuantity(item._id)}>-</button>
                    <span className="text-lg font-semibold text-black">{item.quantity}</span>
                    <button className="bg-gray-300 text-black px-2 py-1 rounded-md mx-1 transition duration-150 ease-in-out hover:bg-gray-400" onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md ml-4 transition duration-150 ease-in-out hover:bg-red-700" onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary and Coupon Section */}
        <div className="bg-gray-100 p-6 rounded-md shadow-lg">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Order Summary</h4>
          <div className="text-right mb-4">
            <h3 className="text-xl font-bold text-gray-800">Total: ${state.totalPrice.toFixed(2)}</h3>
            {state.discount > 0 && (
              <>
                <p className="text-sm text-green-600">Discount Applied: ${state.discount.toFixed(2)}</p>
                <h3 className="text-xl font-bold text-gray-800">Final Amount: ${state.finalAmount.toFixed(2)}</h3>
              </>
            )}
          </div>

          {/* Apply Coupon Section */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Apply Coupon</h4>
            <div className="flex">
              <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Enter coupon code" className="border border-gray-300 rounded-md px-4 py-2 mr-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button onClick={handleApplyCoupon} className="bg-green-600 text-white px-4 py-2 rounded-md transition duration-150 ease-in-out hover:bg-green-700">Apply</button>
            </div>
          </div>

          {/* Terms and Conditions Section */}
          <div className="flex items-center mb-4">
            <input type="checkbox" checked={agreeTerms} onChange={() => setAgreeTerms(!agreeTerms)} className="mr-2" />
            <label className="text-sm text-gray-600">
              I agree to the <a href="/terms" className="text-blue-600 hover:underline">terms and conditions</a>
            </label>
          </div>

          {/* Payment Method Section */}
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Payment Method</h4>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option value="COD">Cash on Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          {/* Checkout Button */}
          <div className="text-right">
            <button
              onClick={handleCheckout}
              className={`bg-blue-600 text-white px-6 py-2 rounded-md transition duration-150 ease-in-out hover:bg-blue-700 ${!agreeTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!agreeTerms}
            >
              Checkout
            </button>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}

export default Cart;
