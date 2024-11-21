import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  // Fetch orders when the component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${window.location.origin}/api/orders`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Assuming the user is authenticated via a token
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderDetails = (orderId) => {
    // Redirect to the order details page
    Navigate.push(`/order-details/${orderId}`);
  };

  if (loading) return <div>Loading your orders...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h2>Order ID: {order._id}</h2>
              <p>Payment Method: {order.paymentMethod}</p>
              <p>Total Amount: ${order.totalAmount}</p>
              <button onClick={() => handleOrderDetails(order._id)}>View Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
