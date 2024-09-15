import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Header = () => {
    let Links =[
        {name:"Users",link:"/users"},
        {name:"Posts",link:"/posts"},
        {name:"Todos",link:"/todos"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md  w-full fixed top-0 z-10  left-0'>
           <div className='md:flex items-center container justify-between bg-white py-4 md:px-10 px-7'>
            {/* logo section */}
            <Link to={'/products'} className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <span>Shop.co</span>
            </Link>
            {/* Menu icon */}
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>
            {/* link items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={link.link}>{link.name}</Link>
                    </li>))
                }
            </ul>
           </div>
        </div>
    );
};

export default Header;