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
    <div className='container overflow-hidden'>
      <h1>Todos</h1>
      <ul>
         {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.todo}
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Todos;
