import React, { useState } from 'react';
import {  Link} from 'react-router-dom';
import Products from './Products';
// import Users from './components/Users';
// import Posts from './components/Posts';
// import Todos from '. /components/Todos';
// import Auth from './components/Auth';
const Navbar = (isLoggedIn) => {
  return (
    <div className='sticky top-0 z-50 py-3   overflow-hidden'>

      <div className="container  mx-auto relative   overflow-hidden py-4 lg:text-sm">
      <div className="flex justify-between items-center">
         <div className="flex items-center flex-shrink-0">
            <Link to={'/products'} className="text-xl tracking-tight text-[35px] text-slate-800 font-bold">Shop.Co</Link>
          </div>
          {/* links */}
          <div className="hidden text-[16px] font-medi lg:flex ml-14 space-x-12">
          <Link to="/users" className="mr-4 fontsem">Users</Link>
          <Link to="/posts" className="mr-4">Posts</Link>
          {/* <Link to="/todos" className="mr-4">Todos</Link> */}
        </div> 
        {/*  buttons */}
        <div className="hidden lg:flex justify-center space-x-12 items-center">
         <Link className='border rounded-md px-8 py-2 ' to="/">Profile</Link>


            
          </div>
      </div>

      </div>
            
         
      
      </div>
  )
}

export default Navbar
