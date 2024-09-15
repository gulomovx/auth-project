import  { useEffect, useState } from 'react';
import { fetchTodos } from '../api';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    getTodos();
  }, []);

  return (
    <div className='container mt-20  overflow-hidden'>
      <h1 className='text-center md:text-[50px] text-[30px] text-slate-700 font-extrabold'>Todos</h1>
      <ul>
         {todos.map(todo => (
          <div className='p-2 flex items-center space-x-4 rounded-md border mt-2' key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <p>

              {todo.todo}
            </p>
          </div>
        ))} 
      </ul>
    </div>
  );
};

export default Todos;
