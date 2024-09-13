import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className='container mt-20 overflow-hidden'>
      <h1 className='text-center text-[50px] text-slate-700 font-extrabold'>Users</h1>
      <ul>
         {users.map(user => (
          // <li className='p-2 bg-amer-500 mb-2 border-b flex justify-between'  key={user.id}>
          //   <p className='font-semibold text-[20px]'>
          //   {user.firstName} {user.lastName} 

          //   </p>
          //   <p className=''>
          //   {user.phone}  

          //   </p>
          //    {user.email}

          // </li>
          <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" src={user.image} alt="Neil image"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                         {user.firstName} {user.lastName} 

                        </p>
                        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.email}
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {user.phone}
                    </div>
                </div>
            </li>
        ))} 
      </ul>
    </div>
  );
};

export default Users;
