import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../api';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(true); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedUser = localStorage.getItem('isLoggedIn');
    const savedUsername = localStorage.getItem('username');
    
    if (savedUser && savedUsername) {
      setIsLoggedIn(true);
      setShowModal(false);
      setUsername(savedUsername);
      navigate('/products'); 
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const users = await fetchUsers();
      const user = users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setIsLoggedIn(true);
        setError('');
        setShowModal(false);
        
        // Save login data to localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', username);
        
        navigate('/products');
      } else {
        setError('Username or password is incorrect');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/login'); // Redirect to login page after logout
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
        <div className="text-center">
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded mt-4">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
