import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, createBrowserRouter, RouterProvider, Route, Routes, Link, useLocation, useSearchParams, Navigate } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Todos from './components/Todos';
import Auth from './components/Auth';
import Home from './components/Home';
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
  
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouterLayout isLoggedIn={isLogged} />,
      children: [
        {
          index: true,
          element:<Home/>,
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
          path:'/auth',
          element:<Auth setIsLoggedIn={setIsLogged} ShowModal={showModal}/>
        }
        
      ]
    }
  ])
  
  return (

    <div className='overflow-hidden'>
         <RouterProvider router={router}/>

{/* <Router>
      <div className="App">
        <nav className="p-4 bg-blue-400 text-white">
          <Link to="/products" className="mr-4">Products</Link>
          <Link to="/users" className="mr-4">Users</Link>
          <Link to="/posts" className="mr-4">Posts</Link>
          <Link to="/todos" className="mr-4">Todos</Link>
          <Link to="/auth" className="mr-4">Auth</Link>
        </nav>

        <Routes>
          <Route path="/auth" element={<Auth isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />

          <Route path="/products" element={<ProtectedComponent><Products /></ProtectedComponent> } />
        </Routes>
      </div>
    </Router> */}
    
    </div>

  );
}

export default App;
