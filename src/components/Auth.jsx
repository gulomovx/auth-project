import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/'); // Redirect to the home page
      } else {
        setError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-4">
          <label className="block text-sm">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mt-2 border rounded-lg"
            placeholder="Enter your username"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-2 border rounded-lg"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Auth;
