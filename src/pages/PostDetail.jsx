import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByid } from '../api'; // Assuming you have this API function

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPostsByid(id); // Fetch the post by its ID
        console.log('Fetched Post Data:', data); // Log the response
        setPost(data); // Set the post data
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getPost();
  }, [id]);

  

  

  return (
    <div className="max-w-4xl container  md:text-start mx-auto md:mt-32 mt-20 ">
      <div className=' '>
        <h1 className="md:text-5xl text-3xl font-bold mb-4">{post?.title}</h1>
        <p className="text-gray-600 text-lg">{post?.body}</p>
      </div>
    </div>
  );
};

export default PostDetail;
