import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
const RouterLayout = (isLogged) => {
  return (
    <div>
      <Navbar isLoggedIn={isLogged}/>
      <main className=''>
            <Outlet/>
      </main>
    </div>
  )
}

export default RouterLayout
