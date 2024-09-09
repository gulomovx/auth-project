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
    <div className='container'>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <div className=' text-center mx-auto mt-12 '>
          <h2 className='text-[30px] mb-4'>Login</h2>
          <input
          className='w-[200px]'
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
          className='w-[200px] mt-2'
          type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className='bg-blue-500 mt-2 text-white px-12 py-2' onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Auth;
