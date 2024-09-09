import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 
  const navigate= useNavigate()


  const isAuthenticated = username === 'admin' && password === 'admin'

  const handleLogin = () => {
    
    if (isAuthenticated) {
      setIsLoggedIn(true);
      navigate('/products');

    } else {
      alert('username yoki password xato qaytadan urining');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
