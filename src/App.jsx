import React, { useState, useEffect } from 'react';
import './App.css'
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Route, Routes, Link, useLocation, useSearchParams, Navigate } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Auth from './components/Auth';
import Home from './components/Home';
import Login from './components/Login';
import RouterLayout from './components/RouterLayout';
 const ProtectedComponent=({children, isLogged, setShowModal})=>{
     if(isLogged){
       return <Navigate to={'/'}/>
     }else{
      return children
     }
 }
  
function App() {
  const [isLogged, setIsLogged]=useState(false)
  const [showModal, setShowModal] = useState(true); 
  // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
 
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout isLogged={isLogged} />,
      children: [
        {
          index: true,
          element:<Auth setIsLoggedIn={setIsLogged} ShowModal={showModal}/>
        },
        {
          path: '/users',
          element:<Users/>
        },
        {
          path: '/todos',
          element:<Todos/>
        },
        {
          path: '/posts',
          element:<Posts/>
        },
        {
          path:'/products',
          element:<Home/>
        }
        
      ]
    }
  ])
  
  return (

    <div className='overflow-hidden'>
         <RouterProvider router={router}/>


    
    </div>

  );
}

export default App;
