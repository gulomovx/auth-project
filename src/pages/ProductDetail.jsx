import { useState, useEffect } from 'react';
import { fetchProductById } from '../api'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
      const { id } = useParams(); 
      const [product, setProduct] = useState(null);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const getProduct = async () => {
              try {
                const data = await fetchProductById(id); 
                console.log('Fetched Product Data:', data)
                setProduct(data); 
              } catch (error) {
                console.error('Error fetching product:', error);
              } finally {
                setLoading(false); 
              }
            };
        
            getProduct();
          }, [id]);

  return (
      <div className="max-w-4xl container h-screen  md:text-start mx-auto md:mt-32 mt-20 ">
      <div className=' '>
        <h1 className="md:text-5xl text-3xl font-bold mb-4">{product?.title}</h1>
        <p className="text-gray-600 text-lg">{product?.category}</p>
      </div>
    </div>
  )
}

export default ProductDetail
