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
      <h1>Users</h1>
      <ul>
         {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Users;
