import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByid } from '../api'; 

const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPostsByid(id); 
        console.log('Fetched Post Data:', data)
        setPost(data); 
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false); 
      }
    };

    getPost();
  }, [id]);

  

  

  return (
    <div className="max-w-4xl container h-screen  md:text-start mx-auto md:mt-32 mt-20 ">
      <div className=' '>
        <h1 className="md:text-5xl text-3xl font-bold mb-4">{post?.title}</h1>
        <p className="text-gray-600 text-lg">{post?.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
