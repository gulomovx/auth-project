import React, { useEffect, useState } from 'react';
import { fetchProducts, } from '../api';
import { Link } from 'react-router-dom';

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
    <div className='container mt-24 relative '>
      <h1 className='text-center text-[40px] font-extrabold tracking-widest'>All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {products.map(product => (
         <Link
         to={`/products/${product.id}`}
         key={product.id}
         className="relative mt-4  flex w-full mx-auto max-w-md flex-col rounded-lg border border-gray-100 bg-white shadow-md"
       >
         <img
           className="h-[300px] md:h-full md:w-full"
           src={product.thumbnail}
           alt="product image"
         />
         <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
           39% OFF
         </span>
         <div className="mt-4 px-5 pb-5">
           <h5 className="text-md font-medium tracking-tight text-slate-900">
             {product.title.slice(0, 25)}...
           </h5>
           <div className="mt-2 flex items-center justify-between">
             <p>
               <span className="text-2xl font-bold text-slate-900">
                 {product.price}
               </span>
               <span className="text-sm text-slate-900 line-through">$699</span>
             </p>
             <div className="flex items-center">
               
             </div>
           </div>
         </div>
       </Link>
       

        ))}
      </div>
    </div>
  );
};

export default Home;
