import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Navbar from './Navbar';

function ThankYouPage({ authUser }) {
  const { state } = useLocation();
  const { order } = state;

  // Assuming you have the user data from authUser
  const userName = authUser ? authUser.fullname : 'Guest'; // Default to 'Guest' if no user
  const userEmail = authUser ? authUser.email : 'N/A'; // Default to 'N/A' if no user

  const printReceipt = () => {
    const doc = new jsPDF();

    // Add User Name and Email
    doc.setFontSize(18);
    doc.text(`Order Receipt for ${userName}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Email: ${userEmail}`, 20, 30);

    // Create a table for User Information and Order Details
    const tableData = [
      ['User Name', userName],
      ['Email', userEmail],
      ['Order ID', order._id],
      ['Total Amount', `$${order.totalAmount.toFixed(2)}`],
      ['Payment Method', order.paymentMethod],
    ];

    doc.autoTable({
      head: [['Field', 'Details']],
      body: tableData,
      startY: 40, // Adjust the starting Y position for the table
      margin: { horizontal: 10 },
      theme: 'grid',
    });

    // Add a table of items
    const items = order.items.map(item => [
      item.title,
      item.quantity,
      `$${item.price.toFixed(2)}`,
      `$${(item.price * item.quantity).toFixed(2)}`
    ]);

    doc.autoTable({
      head: [['Item', 'Quantity', 'Price', 'Total']],
      body: items,
      startY: doc.lastAutoTable.finalY + 10, // Position below the previous table
      margin: { horizontal: 10 },
      theme: 'grid',
    });

    // Save or print the PDF
    doc.save('receipt.pdf');
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-800 min-h-screen flex flex-col items-center justify-center py-8 px-4">
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg w-full max-w-4xl p-8 space-y-6">
          <h2 className="text-4xl font-semibold text-center text-indigo-600 dark:text-indigo-400">
            Thank You for Your Order!
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300">
            Your order has been successfully placed. Below are your order details.
          </p>

          <div className="order-details p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
            <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-200">Order Summary</h3>
            <p className="text-gray-700 dark:text-gray-300"><strong>Order ID:</strong> {order._id}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
            <p className="text-gray-700 dark:text-gray-300"><strong>Payment Method:</strong> {order.paymentMethod}</p>
          </div>

          <div className="order-items mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md">
            <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">Items</h4>
            <ul className="space-y-2">
              {order.items.map(item => (
                <li key={item._id} className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>${item.price.toFixed(2)} each</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={printReceipt}
              className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Print Receipt
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYouPage;
