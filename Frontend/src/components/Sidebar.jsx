// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-gray-100 p-4 shadow-lg fixed">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
                <li>
                    <Link to="/orders" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        ORDERS
                    </Link>
                </li>
                <li>
                    <Link to="/orders-returns" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Orders & Returns
                    </Link>
                </li>
                <li>
                    <Link to="/credits" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        CREDITS
                    </Link>
                </li>
                <li>
                    <Link to="/coupons" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Coupons
                    </Link>
                </li>
                <li>
                    <Link to="/myntra-credit" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Myntra Credit
                    </Link>
                </li>
                <li>
                    <Link to="/myncash" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        MynCash
                    </Link>
                </li>
                <li>
                    <Link to="/account" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        ACCOUNT
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/saved-cards" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Saved Cards
                    </Link>
                </li>
                <li>
                    <Link to="/saved-upi" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Saved UPI
                    </Link>
                </li>
                <li>
                    <Link to="/saved-wallets" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Saved Wallets/BNPL
                    </Link>
                </li>
                <li>
                    <Link to="/addresses" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Addresses
                    </Link>
                </li>
                <li>
                    <Link to="/myntra-insider" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Myntra Insider
                    </Link>
                </li>
                <li>
                    <Link to="/delete-account" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Delete Account
                    </Link>
                </li>
                <li>
                    <Link to="/terms-of-use" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        LEGAL
                    </Link>
                </li>
                <li>
                    <Link to="/privacy-policy" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">
                        Privacy Policy
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
