import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './components/Products';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Auth from './components/Auth';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="p-4 bg-blue-400 text-white">
          <Link to="/" className="mr-4">Products</Link>
          <Link to="/users" className="mr-4">Users</Link>
          <Link to="/posts" className="mr-4">Posts</Link>
          <Link to="/todos" className="mr-4">Todos</Link>
          <Link to="/auth" className="mr-4">Auth</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
