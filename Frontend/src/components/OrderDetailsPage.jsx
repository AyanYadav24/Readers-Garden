import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // For retrieving route params

const OrderDetailsPage = () => {
  const { orderId } = useParams(); // Get the orderId from the route
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch order details when the component mounts
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`${window.location.origin}/api/orders/${orderId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }

        const data = await response.json();
        setOrder(data.order);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <div>Loading order details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="order-details-page">
      <h1>Order Details</h1>

      <h2>Order ID: {order._id}</h2>
      <p>Customer Name: {order.customerName}</p>
      <p>Payment Method: {order.paymentMethod}</p>
      <p>Total Amount: ${order.totalAmount}</p>

      <h3>Ordered Items:</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>
            {item.title} (x{item.quantity}) - ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsPage;
