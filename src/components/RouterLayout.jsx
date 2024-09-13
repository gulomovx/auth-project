// src/components/RouterLayout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

function RouterLayout({ isLoggedIn }) {
  return (
    <div>
      <Header/>
      {/* <Navbar isLoggedIn={isLoggedIn} /> */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default RouterLayout;
