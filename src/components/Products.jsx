import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {products.map(product => (
          <div key={product.id} className="border p-4">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
