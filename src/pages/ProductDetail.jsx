import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);


  return (
    <div className='container h-screen flex flex-col justify-center items-center   mt-4 iphone:mt-[-40px] ultra:mt-[-40px] galaxy:mt-12 md:mt-[-350px] lg:mt-8  '>
      <div className="flex flex-col w-full md:flex-row gap-12 items-center  border rounded-md  bg-slate-50 p-4 mt-12 md:mt-0">
      <img className='bg-slate-200 rounded-xl w-full' src={product?.thumbnail} alt={product?.title} />
      {/* product info */}
       <div className="">
       <p className='text-slate-800 md:text-3xl text-[20px] mt-[-25px] font-semibold'>{product?.title}</p>
       <p className='text-slate-800 md:text-md text-sm font-medium'>{product?.description}</p>
       <p className='text-slate-600 text-md font-semibold'>{product?.brand}</p>
       <p className='text-xl font-medium mt-4 text-slate-700'>Price: {product?.price}$</p>
       <p className='text-xl flex items-center font-medium mt-4 text-slate-700'>
            {product?.rating}
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="yellow"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
  className="h-5 w-5"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 17.75l-6.172 3.246 1.178-6.868L2 9.36l6.886-1.002L12 2.75l3.114 5.607L22 9.36l-4.006 4.768 1.178 6.868z"
  />
</svg>


       </p>
       <p className='text-sm italic font-medium mt-4 text-slate-700'>{product?.returnPolicy}</p>
       </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;
