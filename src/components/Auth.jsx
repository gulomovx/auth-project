import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../api';

const Auth = (isLoggedI) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(true); // Controls modal visibility
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Fetch users from API
      const users = await fetchUsers();

      // Check if the credentials match any user
      const user = users.find(
        (user) => user.firstName === username && user.password === password
      );

      if (user) {
        setIsLoggedIn(true);
        setError('');
        setShowModal(false); // Close the modal on successful login
        navigate('/products'); // Redirect to products page
      } else {
        setError('Username or password is incorrect');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="w-full">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 md:w-1/3 w-10/12">
            <h2 className="text-2xl mb-4">Login</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-200 rounded w-full p-2 mb-2"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 rounded w-full p-2"
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              onClick={handleLogin}
              className="bg-blue-500 text-white w-full p-2 rounded"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {!showModal && isLoggedIn && (
        <h2 className="text-center">Welcome, {username}!</h2>
      )}
    </div>
  );
};

export default Auth;
