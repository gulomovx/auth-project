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
    <div className='container overflow-hidden'>
      <h1 className='text-center text-[50px] text-slate-700 font-extrabold'>Users</h1>
      <ul>
         {users.map(user => (
          <li className='p-2 bg-amer-500 mb-2 border-b flex justify-between'  key={user.id}>
            <p className='font-semibold text-[20px]'>
            {user.firstName} {user.lastName} 

            </p>
            <p className=''>
            {user.phone}  

            </p>
             {user.email}

          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Users;
