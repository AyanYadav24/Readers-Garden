import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import Order from './OrdersPage'; 
import Navbar from './Navbar';

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const fetchUserProfile = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get(`${window.location.origin}/user/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUserData(response.data);
        } catch (err) {
            console.error("Error fetching user profile:", err);
            setError('No user data found');
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    if (error) return <div className="text-red-500 text-center">{error}</div>;
    if (!userData) return <div className="text-center">Loading...</div>;

    return (
        <>
        <Navbar />
        <div className="flex">
            <Sidebar /> {/* Include the Sidebar */}
            <div className="ml-64 p-6 w-full min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                
                {/* Profile Info Section */}
                <div className="space-y-6 mb-8">
                    <div className="flex items-center space-x-4">
                        <img
                            src={userData.profilePicture || 'https://via.placeholder.com/150'}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg">Full Name: <span className="font-semibold">{userData.fullname}</span></p>
                            <p className="text-lg">Email: <span className="font-semibold">{userData.email}</span></p>
                            <p className="text-lg">Phone: <span className="font-semibold">{userData.phone || 'Not provided'}</span></p>
                            <p className="text-lg">Address: <span className="font-semibold">{userData.address || 'Not provided'}</span></p>
                        </div>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="space-y-6 mb-8">
                    <h2 className="text-xl font-semibold">About Me</h2>
                    <p className="text-lg">{userData.about || 'No additional information available.'}</p>

                    <h2 className="text-xl font-semibold">Recent Activity</h2>
                    <ul className="space-y-2">
                        <li className="text-lg">You ordered <span className="font-semibold">Book Title</span> on <span className="font-semibold">September 20, 2024</span>.</li>
                        <li className="text-lg">You commented on <span className="font-semibold">Order #1245</span> regarding delivery time.</li>
                    </ul>
                </div>

                {/* Order Section */}
                <div className="bg-white text-black p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
                    <Order /> {/* Include the Order component */}
                </div>
            </div>
        </div>
        </>
    );
};

export default Profile;
