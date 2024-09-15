import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RouterLayout({ isLoggedIn }) {
  return (
    <div className='flex flex-col justify-between  h-full'>
      <Header/>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RouterLayout;
