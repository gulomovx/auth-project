// src/components/RouterLayout.js
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function RouterLayout({ isLoggedIn }) {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default RouterLayout;
