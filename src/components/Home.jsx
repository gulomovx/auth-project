import React, { useEffect, useState } from 'react';
import { fetchProducts, fetchUsers } from '../api';

const Home = () => {
  const [products, setProducts] = useState([]);
 
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);
   
  return (
    <div className='container mt-8 '>
      <h1 className='text-center text-[40px] font-extrabold tracking-widest'>All Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img className='' src={product.thumbnail} alt={product.title} />
            <div className="bg-white ">

            <h2 className='font-medium text-[18px]'>{product.title}</h2>
            <p>${product.price}</p>
            </div>

          </div>
        ))} 
      </div>
    </div>
  );
};

export default Home;
