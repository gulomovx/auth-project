import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Route, Routes, Link, useLocation, useSearchParams, Navigate } from 'react-router-dom';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import Auth from './components/Auth';
import Home from './pages/Home';
import RouterLayout from './components/RouterLayout';
import PostDetail from './pages/PostDetail';
import ProductDetail from './pages/ProductDetail';
const ProtectedComponent = ({ children, isLogged, setShowModal }) => {
  if (isLogged) {
    return <Navigate to={'/'} />
  } else {
    return children
  }
}

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [showModal, setShowModal] = useState(true);



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout isLogged={isLogged} />,
      children: [
        {
          index: true,
          element: <Auth setIsLoggedIn={setIsLogged} ShowModal={showModal} />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/todos',
          element: <Todos />
        },
        {
          path: '/posts',
          element: <Posts />
        },
        {
          path: '/products',
          element: <Home />
        },
        {
          path: '/todos',
          element: <Todos />
        },
        
        {
          path: '/posts/:id',
          element: <PostDetail />
        },
        {
          path:'/products/:id',
          element:<ProductDetail />
        }

      ]
    }
  ])

  return (

    <div className='overflow-hidden'>
      <RouterProvider router={router} />



    </div>

  );
}

export default App;
