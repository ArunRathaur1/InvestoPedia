import React from 'react';
import Cookies from 'js-cookie';
import { useState,useEffect } from 'react';
export default function Dashboard() {
  const [userData, setUserData] = useState(null);  // To store the fetched user data
  const [loading, setLoading] = useState(true);  // To show loading state
  const [error, setError] = useState('');  // To store any error message

  useEffect(() => {
    const fetchUserData = async () => {
      const authToken = Cookies.get('authToken');
      if (!authToken) {
        setError('Authentication token not found. Please login.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/auth/fetchuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken,  // Send token in the header
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUserData(data);  // Set the fetched user data
        } else {
          setError('Failed to fetch user data. Please try again.');
        }
      } catch (error) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);  // Stop loading state
      }
    };

    fetchUserData();
  }, []);  // Run only once when the component mounts

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
    <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-xl space-y-6">
      <h2 className="text-3xl font-bold text-center text-blue-500">Dashboard</h2>

      {/* User Info Cards */}
      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Name</h3>
            <p className="text-gray-300">{userData.name}</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Email</h3>
            <p className="text-gray-300">{userData.email}</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Mobile</h3>
            <p className="text-gray-300">{userData.mobile}</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Comments</h3>
            <p className="text-gray-300">{userData.Comments.length}</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Likes</h3>
            <p className="text-gray-300">{userData.likes.length}</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Dislikes</h3>
            <p className="text-gray-300">{userData.dislikes}</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300">
            <h3 className="text-xl font-semibold text-blue-400">Shares</h3>
            <p className="text-gray-300">{userData.shares}</p>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}
